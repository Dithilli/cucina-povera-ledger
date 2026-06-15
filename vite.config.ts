/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Deployed to https://dithilli.github.io/cucina-povera-ledger/ (GitHub Pages
// project page), so base must be the repo path. If you later add a custom
// domain (Settings → Pages + public/CNAME), change this back to "/".
export default defineConfig({
  plugins: [react()],
  base: "/cucina-povera-ledger/",
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
