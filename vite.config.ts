// @ts-nocheck

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
    include: [
      "src/components/**/*.test.tsx",
      "src/features/**/*.test.tsx",
      "src/App.test.tsx",
    ],
    coverage: {
      reporter: ["text", "lcov"],
      include: [
        "src/components/**/*.{ts,tsx}",
        "src/features/**/*.{ts,tsx}",
        "src/App.{ts,tsx}",
      ],
      exclude: [
        "**/*.test.tsx",
        "**/node_modules/**",
        "**/dist/**",
        "**/*.d.ts",
        "**/store/**",
        "**/utils/**",
        "**/api/**",
        "**/services/**",
      ],
    },
  },
});
