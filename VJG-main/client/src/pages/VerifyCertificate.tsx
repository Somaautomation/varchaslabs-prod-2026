import { useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Search,
  Loader2,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface VerifyResult {
  valid: boolean;
  message?: string;
  certificate?: {
    certificateId: string;
    issuedAt: string;
    status: string;
    expiresAt?: string | null;
  };
  intern?: {
    fullName: string;
    domain: string;
    projectName?: string | null;
    startDate: string;
    endDate: string;
    internshipId: string;
    college?: string | null;
  };
}

export default function VerifyCertificate() {
  const [match, params] = useRoute("/verify/:id");
  const [, navigate] = useLocation();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<VerifyResult | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (match && params?.id) {
      lookup(params.id);
    }
  }, [match, params?.id]);

  async function lookup(id: string) {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`/api/verify/${encodeURIComponent(id)}`);
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ valid: false, message: "Lookup failed" });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <ShieldCheck className="h-7 w-7 text-amber-500" />
          <h1 className="text-2xl font-semibold">Certificate Verification</h1>
        </div>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
          Verify the authenticity of any certificate issued by Varchas Labs Pvt
          Ltd.
        </p>

        <Card className="p-5 mb-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (query.trim()) navigate(`/verify/${query.trim()}`);
            }}
            className="flex gap-2"
          >
            <div className="relative flex-1">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
              <Input
                className="pl-8"
                placeholder="Enter Certificate ID (e.g. VLABS-2026-AB12CD)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button type="submit">Verify</Button>
          </form>
        </Card>

        {loading && (
          <Card className="p-10 text-center">
            <Loader2 className="h-6 w-6 animate-spin inline" />
            <p className="mt-2 text-sm text-slate-500">Verifying...</p>
          </Card>
        )}

        {result && !loading && <ResultCard result={result} />}
      </div>
    </div>
  );
}

function ResultCard({ result }: { result: VerifyResult }) {
  if (!result.valid) {
    return (
      <Card className="p-8 border-rose-200 bg-rose-50/50">
        <div className="flex items-center gap-3 mb-2">
          <XCircle className="h-7 w-7 text-rose-500" />
          <h2 className="text-xl font-semibold text-rose-700">
            Invalid Certificate
          </h2>
        </div>
        <p className="text-rose-700">
          {result.message || "This certificate could not be verified."}
        </p>
      </Card>
    );
  }

  const { certificate, intern } = result;
  return (
    <Card className="overflow-hidden">
      <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100 flex items-center gap-3">
        <CheckCircle2 className="h-7 w-7 text-emerald-600" />
        <div>
          <h2 className="text-lg font-semibold text-emerald-800">
            Valid Certificate
          </h2>
          <p className="text-sm text-emerald-700">
            This certificate has been verified as authentic.
          </p>
        </div>
      </div>
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Detail label="Candidate Name" value={intern?.fullName} />
        <Detail label="Internship Role" value={intern?.domain} />
        <Detail label="Internship ID" value={intern?.internshipId} mono />
        <Detail label="Certificate ID" value={certificate?.certificateId} mono />
        <Detail
          label="Duration"
          value={
            intern
              ? `${intern.startDate} → ${intern.endDate}`
              : undefined
          }
        />
        <Detail label="Project" value={intern?.projectName || "—"} />
        <Detail label="College" value={intern?.college || "—"} />
        <Detail
          label="Issued On"
          value={
            certificate?.issuedAt
              ? new Date(certificate.issuedAt).toLocaleDateString()
              : "—"
          }
        />
        <Detail label="Status" value={certificate?.status} />
      </div>
      <div className="px-6 py-4 bg-slate-50 text-xs text-slate-500 text-center border-t">
        Issued by Varchas Labs Pvt Ltd · www.varchaslabs.com
      </div>
    </Card>
  );
}

function Detail({
  label,
  value,
  mono,
}: {
  label: string;
  value?: string | null;
  mono?: boolean;
}) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-slate-500">
        {label}
      </div>
      <div
        className={`mt-1 text-sm font-medium ${mono ? "font-mono" : ""} text-slate-900 dark:text-slate-100`}
      >
        {value || "—"}
      </div>
    </div>
  );
}
