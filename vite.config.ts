import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pokemon-teams-react/",
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
  },
  preview: {
    port: 3001,
    strictPort: true,
  },
  //@ts-ignore
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["src/setupTest.ts"],
  },
});
