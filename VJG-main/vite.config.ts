import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  // If you had ssr/external settings for nodemailer, keep them here:
  ssr: {
    external: ["nodemailer"]
  },
  optimizeDeps: {
    exclude: ["nodemailer"]
  }
});
