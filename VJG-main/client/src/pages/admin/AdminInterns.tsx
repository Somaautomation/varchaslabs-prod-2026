import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  FileDown,
  Upload,
  Mail,
  Award,
  Loader2,
} from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { adminFetch, adminJson } from "@/lib/adminAuth";

interface Intern {
  id: number;
  fullName: string;
  email: string;
  phone?: string | null;
  internshipId: string;
  domain: string;
  college?: string | null;
  projectName?: string | null;
  mentorName?: string | null;
  startDate: string;
  endDate: string;
  performanceRating?: string | null;
  completionStatus: string;
}

const emptyIntern: Partial<Intern> = {
  fullName: "",
  email: "",
  phone: "",
  internshipId: "",
  domain: "",
  college: "",
  projectName: "",
  mentorName: "",
  startDate: "",
  endDate: "",
  performanceRating: "",
  completionStatus: "in_progress",
};

export default function AdminInterns() {
  const qc = useQueryClient();
  const { toast } = useToast();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [editOpen, setEditOpen] = useState(false);
  const [editing, setEditing] = useState<Partial<Intern> | null>(null);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const { data, isLoading } = useQuery<{ rows: Intern[]; total: number }>({
    queryKey: ["admin", "interns", { search, page, status }],
    queryFn: () =>
      adminJson(
        `/api/admin/interns?search=${encodeURIComponent(search)}&page=${page}&pageSize=20&status=${status}`,
      ),
  });

  const saveMutation = useMutation({
    mutationFn: async (intern: Partial<Intern>) => {
      const isEdit = !!intern.id;
      const url = isEdit
        ? `/api/admin/interns/${intern.id}`
        : "/api/admin/interns";
      const { id, ...payload } = intern;
      return adminJson(url, {
        method: isEdit ? "PATCH" : "POST",
        body: JSON.stringify(payload),
      });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "interns"] });
      setEditOpen(false);
      setEditing(null);
      toast({ title: "Saved" });
    },
    onError: (err: any) => {
      toast({
        title: "Save failed",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) =>
      adminJson(`/api/admin/interns/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["admin", "interns"] });
      toast({ title: "Intern deleted" });
    },
  });

  async function generateCert(internId: number) {
    setActionLoading(`gen-${internId}`);
    try {
      const res = await adminFetch(
        `/api/admin/certificates/generate/${internId}`,
        { method: "POST" },
      );
      if (!res.ok) throw new Error(await res.text());
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `certificate-${internId}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      qc.invalidateQueries({ queryKey: ["admin", "stats"] });
      toast({ title: "Certificate generated" });
    } catch (e: any) {
      toast({
        title: "Failed",
        description: e.message,
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  }

  async function emailCert(internId: number) {
    setActionLoading(`mail-${internId}`);
    try {
      await adminJson(`/api/admin/certificates/send/${internId}`, {
        method: "POST",
      });
      toast({ title: "Certificate emailed" });
      qc.invalidateQueries({ queryKey: ["admin", "stats"] });
    } catch (e: any) {
      toast({
        title: "Email failed",
        description: e.message,
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  }

  async function exportCsv() {
    const res = await adminFetch("/api/admin/interns/export/csv");
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "interns.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function doBulkUpload() {
    if (!csvFile) return;
    const fd = new FormData();
    fd.append("file", csvFile);
    try {
      const data = await adminJson("/api/admin/interns/bulk-upload", {
        method: "POST",
        body: fd,
      });
      toast({
        title: "Bulk upload complete",
        description: `${data.created} created, ${data.errors?.length || 0} errors`,
      });
      setUploadOpen(false);
      setCsvFile(null);
      qc.invalidateQueries({ queryKey: ["admin", "interns"] });
    } catch (e: any) {
      toast({
        title: "Upload failed",
        description: e.message,
        variant: "destructive",
      });
    }
  }

  const totalPages = data ? Math.ceil(data.total / 20) : 1;

  return (
    <AdminLayout title="Interns">
      <Card className="p-4 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              className="pl-8"
              placeholder="Search name, email, ID, domain..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
            />
          </div>
          <select
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Statuses</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
            <option value="terminated">Terminated</option>
          </select>
          <Button variant="outline" onClick={exportCsv}>
            <FileDown className="h-4 w-4 mr-2" /> Export
          </Button>
          <Button variant="outline" onClick={() => setUploadOpen(true)}>
            <Upload className="h-4 w-4 mr-2" /> Bulk Upload
          </Button>
          <Button
            onClick={() => {
              setEditing({ ...emptyIntern });
              setEditOpen(true);
            }}
          >
            <Plus className="h-4 w-4 mr-2" /> Add Intern
          </Button>
        </div>
      </Card>

      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Internship ID</TableHead>
              <TableHead>Domain</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8">
                  <Loader2 className="h-5 w-5 animate-spin inline" />
                </TableCell>
              </TableRow>
            )}
            {!isLoading && data?.rows.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center py-8 text-slate-500"
                >
                  No interns yet.
                </TableCell>
              </TableRow>
            )}
            {data?.rows.map((it) => (
              <TableRow key={it.id}>
                <TableCell>
                  <div className="font-medium">{it.fullName}</div>
                  <div className="text-xs text-slate-500">{it.email}</div>
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {it.internshipId}
                </TableCell>
                <TableCell>{it.domain}</TableCell>
                <TableCell className="text-sm">
                  {it.startDate} → {it.endDate}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      it.completionStatus === "completed"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {it.completionStatus.replace("_", " ")}
                  </Badge>
                </TableCell>
                <TableCell className="text-right space-x-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    title="Generate certificate"
                    onClick={() => generateCert(it.id)}
                    disabled={actionLoading === `gen-${it.id}`}
                  >
                    {actionLoading === `gen-${it.id}` ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Award className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    title="Email certificate"
                    onClick={() => emailCert(it.id)}
                    disabled={actionLoading === `mail-${it.id}`}
                  >
                    {actionLoading === `mail-${it.id}` ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Mail className="h-4 w-4" />
                    )}
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      setEditing(it);
                      setEditOpen(true);
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => {
                      if (confirm(`Delete ${it.fullName}?`))
                        deleteMutation.mutate(it.id);
                    }}
                  >
                    <Trash2 className="h-4 w-4 text-rose-500" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="text-slate-500">
          {data?.total ?? 0} interns · Page {page} of {totalPages}
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Edit/Create modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editing?.id ? "Edit Intern" : "Add Intern"}
            </DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Field label="Full Name" required>
                <Input
                  value={editing.fullName || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, fullName: e.target.value })
                  }
                />
              </Field>
              <Field label="Email" required>
                <Input
                  type="email"
                  value={editing.email || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, email: e.target.value })
                  }
                />
              </Field>
              <Field label="Phone">
                <Input
                  value={editing.phone || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, phone: e.target.value })
                  }
                />
              </Field>
              <Field label="Internship ID" required>
                <Input
                  value={editing.internshipId || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, internshipId: e.target.value })
                  }
                />
              </Field>
              <Field label="Domain / Role" required>
                <Input
                  value={editing.domain || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, domain: e.target.value })
                  }
                />
              </Field>
              <Field label="College">
                <Input
                  value={editing.college || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, college: e.target.value })
                  }
                />
              </Field>
              <Field label="Project Name">
                <Input
                  value={editing.projectName || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, projectName: e.target.value })
                  }
                />
              </Field>
              <Field label="Mentor Name">
                <Input
                  value={editing.mentorName || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, mentorName: e.target.value })
                  }
                />
              </Field>
              <Field label="Start Date" required>
                <Input
                  type="date"
                  value={editing.startDate || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, startDate: e.target.value })
                  }
                />
              </Field>
              <Field label="End Date" required>
                <Input
                  type="date"
                  value={editing.endDate || ""}
                  onChange={(e) =>
                    setEditing({ ...editing, endDate: e.target.value })
                  }
                />
              </Field>
              <Field label="Performance Rating">
                <Input
                  value={editing.performanceRating || ""}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      performanceRating: e.target.value,
                    })
                  }
                  placeholder="A / Excellent / 9.5"
                />
              </Field>
              <Field label="Completion Status">
                <select
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm"
                  value={editing.completionStatus || "in_progress"}
                  onChange={(e) =>
                    setEditing({
                      ...editing,
                      completionStatus: e.target.value,
                    })
                  }
                >
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="terminated">Terminated</option>
                </select>
              </Field>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => editing && saveMutation.mutate(editing)}
              disabled={saveMutation.isPending}
            >
              {saveMutation.isPending && (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              )}
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Bulk upload modal */}
      <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bulk Upload Interns (CSV)</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-slate-500">
            CSV columns: fullName, email, phone, internshipId, domain, college,
            projectName, mentorName, startDate, endDate, performanceRating,
            completionStatus
          </p>
          <Input
            type="file"
            accept=".csv"
            onChange={(e) => setCsvFile(e.target.files?.[0] || null)}
          />
          <DialogFooter>
            <Button variant="outline" onClick={() => setUploadOpen(false)}>
              Cancel
            </Button>
            <Button onClick={doBulkUpload} disabled={!csvFile}>
              Upload
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs">
        {label}
        {required && <span className="text-rose-500"> *</span>}
      </Label>
      {children}
    </div>
  );
}
