import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/

export default defineConfig({
  // base: "/Projects/Phone_Tracker",
  plugins: [react()],
  server: {
    proxy: {
      "/phone-tracker": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
