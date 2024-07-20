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
    include: ["src/App.test.tsx", "src/components/**/*.test.tsx"],
    coverage: {
      reporter: ["text", "lcov"],
      include: ["src/App.tsx", "src/components/**/*.{ts,tsx}"],
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
