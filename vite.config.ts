import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from https://<user>.github.io/<repo>/
// so the base path must match the repository name exactly (with slashes).
// Update REPO_NAME below to match your GitHub repository name before deploying.
const REPO_NAME = "commit-and-pray";

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "build" ? `/${REPO_NAME}/` : "/",
  resolve: {
    alias: {
      // Mirrors the "@/*" path mapping in tsconfig.app.json — that file
      // only affects type-checking, so Vite needs its own alias too or
      // every "@/..." import will fail to resolve at build/dev time.
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    minify: "esbuild",
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          motion: ["framer-motion"],
          supabase: ["@supabase/supabase-js"],
        },
      },
    },
  },
}));
