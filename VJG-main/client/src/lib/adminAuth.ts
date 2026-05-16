const TOKEN_KEY = "vlabs_admin_token";
const ADMIN_KEY = "vlabs_admin_user";

export interface AdminUser {
  id: number;
  email: string;
  name: string;
  role: string;
}

export const auth = {
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
  getUser(): AdminUser | null {
    const raw = localStorage.getItem(ADMIN_KEY);
    return raw ? (JSON.parse(raw) as AdminUser) : null;
  },
  setSession(token: string, admin: AdminUser) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
  },
  clear() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(ADMIN_KEY);
  },
  isAuthed() {
    return !!localStorage.getItem(TOKEN_KEY);
  },
};

export async function adminFetch(
  url: string,
  init: RequestInit = {},
): Promise<Response> {
  const token = auth.getToken();
  const headers: Record<string, string> = {
    ...(init.headers as Record<string, string> | undefined),
  };
  if (token) headers.Authorization = `Bearer ${token}`;
  if (init.body && !(init.body instanceof FormData) && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(url, { ...init, headers });
  if (res.status === 401) {
    auth.clear();
    if (!location.pathname.startsWith("/admin/login")) {
      location.href = "/admin/login";
    }
  }
  return res;
}

export async function adminJson<T = any>(
  url: string,
  init: RequestInit = {},
): Promise<T> {
  const res = await adminFetch(url, init);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}
