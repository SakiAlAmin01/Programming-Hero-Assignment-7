import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    base:
      command === "build"
        ? "/Programming-Hero-Assignment-7/"
        : "/", // dev এ normal, build এ GitHub path
  };
});