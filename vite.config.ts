/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "/" suits a custom domain (you said you'll buy a URL). If you instead
// deploy to https://<user>.github.io/<repo>/ without a custom domain, set
// base to "/<repo>/".
export default defineConfig({
  plugins: [react()],
  base: "/",
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
