import { useQuery } from "@tanstack/react-query";
import {
  Users,
  Award,
  Clock,
  CheckCircle2,
  Activity,
} from "lucide-react";
import AdminLayout from "@/components/AdminLayout";
import { Card } from "@/components/ui/card";
import { adminJson } from "@/lib/adminAuth";

interface Stats {
  totalInterns: number;
  totalCertificates: number;
  pendingCertificates: number;
  completedInterns: number;
  inProgressInterns: number;
  recentActivity: Array<{
    id: number;
    action: string;
    entityType: string | null;
    entityId: string | null;
    createdAt: string;
  }>;
}

export default function AdminDashboard() {
  const { data, isLoading } = useQuery<Stats>({
    queryKey: ["admin", "stats"],
    queryFn: () => adminJson("/api/admin/dashboard/stats"),
  });

  const cards = [
    {
      label: "Total Interns",
      value: data?.totalInterns ?? 0,
      icon: Users,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Certificates Issued",
      value: data?.totalCertificates ?? 0,
      icon: Award,
      color: "from-amber-500 to-amber-600",
    },
    {
      label: "Pending Certificates",
      value: data?.pendingCertificates ?? 0,
      icon: Clock,
      color: "from-rose-500 to-rose-600",
    },
    {
      label: "Completed Internships",
      value: data?.completedInterns ?? 0,
      icon: CheckCircle2,
      color: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {cards.map((c) => (
          <Card key={c.label} className="p-5 relative overflow-hidden">
            <div
              className={`absolute -right-4 -top-4 h-20 w-20 rounded-full bg-gradient-to-br ${c.color} opacity-10`}
            />
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{c.label}</p>
                <p className="text-3xl font-semibold mt-1">
                  {isLoading ? "—" : c.value}
                </p>
              </div>
              <div
                className={`h-10 w-10 rounded-lg bg-gradient-to-br ${c.color} flex items-center justify-center text-white`}
              >
                <c.icon className="h-5 w-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <Activity className="h-4 w-4 text-slate-500" />
          <h2 className="font-medium">Recent Activity</h2>
        </div>
        <div className="divide-y">
          {(data?.recentActivity ?? []).length === 0 && (
            <p className="text-sm text-slate-500 py-4">No activity yet.</p>
          )}
          {data?.recentActivity?.map((a) => (
            <div
              key={a.id}
              className="py-2 flex items-center justify-between text-sm"
            >
              <div>
                <span className="font-medium">{a.action}</span>
                {a.entityType && (
                  <span className="text-slate-500">
                    {" "}
                    · {a.entityType}
                    {a.entityId ? ` #${a.entityId}` : ""}
                  </span>
                )}
              </div>
              <span className="text-xs text-slate-400">
                {new Date(a.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </AdminLayout>
  );
}
