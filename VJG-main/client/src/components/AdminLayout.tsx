import { ReactNode, useEffect } from "react";
import { Link, useLocation, useRoute } from "wouter";
import {
  LayoutDashboard,
  Users,
  Award,
  LogOut,
  ShieldCheck,
} from "lucide-react";
import { auth } from "@/lib/adminAuth";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  title?: string;
}

export default function AdminLayout({ children, title }: Props) {
  const [, navigate] = useLocation();
  const user = auth.getUser();

  useEffect(() => {
    if (!auth.isAuthed()) navigate("/admin/login");
  }, [navigate]);

  const logout = () => {
    auth.clear();
    navigate("/admin/login");
  };

  const nav = [
    { to: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { to: "/admin/interns", label: "Interns", icon: Users },
    { to: "/admin/certificates", label: "Certificates", icon: Award },
  ];

  return (
    <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950">
      <aside className="w-64 shrink-0 bg-slate-900 text-slate-100 flex flex-col">
        <div className="px-5 py-5 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-amber-400" />
            <div>
              <div className="font-semibold leading-tight">Varchas Admin</div>
              <div className="text-xs text-slate-400">
                Internship Console
              </div>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {nav.map((item) => (
            <NavItem key={item.to} to={item.to} icon={item.icon}>
              {item.label}
            </NavItem>
          ))}
        </nav>
        <div className="px-3 py-3 border-t border-slate-800">
          <div className="px-2 py-2 text-xs text-slate-400 truncate">
            {user?.email}
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start text-slate-200 hover:bg-slate-800"
            onClick={logout}
          >
            <LogOut className="h-4 w-4 mr-2" /> Logout
          </Button>
        </div>
      </aside>
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-14 bg-white dark:bg-slate-900 border-b dark:border-slate-800 flex items-center px-6 justify-between">
          <h1 className="text-base font-semibold">{title || "Dashboard"}</h1>
          <div className="text-sm text-slate-500">
            {user?.name} · <span className="capitalize">{user?.role}</span>
          </div>
        </header>
        <div className="p-6 flex-1 overflow-auto">{children}</div>
      </main>
    </div>
  );
}

function NavItem({
  to,
  icon: Icon,
  children,
}: {
  to: string;
  icon: any;
  children: ReactNode;
}) {
  const [active] = useRoute(to);
  return (
    <Link
      href={to}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
        active
          ? "bg-amber-500/10 text-amber-300"
          : "text-slate-300 hover:bg-slate-800"
      }`}
    >
      <Icon className="h-4 w-4" />
      {children}
    </Link>
  );
}
