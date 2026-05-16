import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Download, ExternalLink, Mail, Package } from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { adminFetch, adminJson } from "@/lib/adminAuth";
import { useToast } from "@/hooks/use-toast";

interface Row {
  cert: {
    id: number;
    certificateId: string;
    issuedAt: string;
    status: string;
    emailSent: boolean;
  };
  intern: {
    id: number;
    fullName: string;
    email: string;
    domain: string;
    internshipId: string;
  } | null;
}

export default function AdminCertificates() {
  const { toast } = useToast();
  const [selected, setSelected] = useState<Set<number>>(new Set());
  const { data, isLoading, refetch } = useQuery<{
    rows: Row[];
    total: number;
  }>({
    queryKey: ["admin", "certificates"],
    queryFn: () => adminJson("/api/admin/certificates?pageSize=100"),
  });

  function toggle(internId: number) {
    const next = new Set(selected);
    if (next.has(internId)) next.delete(internId);
    else next.add(internId);
    setSelected(next);
  }

  async function downloadOne(internId: number, certId: string) {
    const res = await adminFetch(
      `/api/admin/certificates/generate/${internId}`,
      { method: "POST" },
    );
    if (!res.ok) {
      toast({ title: "Failed", variant: "destructive" });
      return;
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${certId}.pdf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function emailOne(internId: number) {
    try {
      await adminJson(`/api/admin/certificates/send/${internId}`, {
        method: "POST",
      });
      toast({ title: "Certificate emailed" });
      refetch();
    } catch (e: any) {
      toast({
        title: "Email failed",
        description: e.message,
        variant: "destructive",
      });
    }
  }

  async function downloadZip() {
    if (selected.size === 0) return;
    const res = await adminFetch("/api/admin/certificates/bulk-zip", {
      method: "POST",
      body: JSON.stringify({ internIds: Array.from(selected) }),
    });
    if (!res.ok) {
      toast({ title: "ZIP failed", variant: "destructive" });
      return;
    }
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificates.zip";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <AdminLayout title="Certificates">
      <Card className="p-4 mb-4 flex items-center justify-between">
        <div className="text-sm text-slate-500">
          {data?.total ?? 0} certificates · {selected.size} selected
        </div>
        <Button onClick={downloadZip} disabled={selected.size === 0}>
          <Package className="h-4 w-4 mr-2" /> Download Selected as ZIP
        </Button>
      </Card>

      <Card className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12"></TableHead>
              <TableHead>Certificate ID</TableHead>
              <TableHead>Intern</TableHead>
              <TableHead>Domain</TableHead>
              <TableHead>Issued</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-8">
                  Loading...
                </TableCell>
              </TableRow>
            )}
            {data?.rows.map((r) => (
              <TableRow key={r.cert.id}>
                <TableCell>
                  {r.intern && (
                    <input
                      type="checkbox"
                      checked={selected.has(r.intern.id)}
                      onChange={() => toggle(r.intern!.id)}
                    />
                  )}
                </TableCell>
                <TableCell className="font-mono text-xs">
                  {r.cert.certificateId}
                </TableCell>
                <TableCell>
                  <div className="font-medium">{r.intern?.fullName}</div>
                  <div className="text-xs text-slate-500">
                    {r.intern?.email}
                  </div>
                </TableCell>
                <TableCell>{r.intern?.domain}</TableCell>
                <TableCell className="text-sm">
                  {new Date(r.cert.issuedAt).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={r.cert.status === "valid" ? "default" : "secondary"}
                  >
                    {r.cert.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {r.cert.emailSent ? (
                    <Badge variant="default">Sent</Badge>
                  ) : (
                    <Badge variant="secondary">Pending</Badge>
                  )}
                </TableCell>
                <TableCell className="text-right space-x-1">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() =>
                      r.intern &&
                      downloadOne(r.intern.id, r.cert.certificateId)
                    }
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => r.intern && emailOne(r.intern.id)}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <a
                    href={`/verify/${r.cert.certificateId}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="sm" variant="ghost">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </AdminLayout>
  );
}
