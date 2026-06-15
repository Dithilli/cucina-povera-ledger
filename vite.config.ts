/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from the custom apex domain https://cucina-povera.app (see
// public/CNAME), so assets are served from the root.
export default defineConfig({
  plugins: [react()],
  base: "/",
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  },
});
