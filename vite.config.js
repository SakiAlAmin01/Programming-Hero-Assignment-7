import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base:
    mode === "production"
      ? (process.env.VERCEL ? "/" : "/Programming-Hero-Assignment-7/")
      : "/",
}));