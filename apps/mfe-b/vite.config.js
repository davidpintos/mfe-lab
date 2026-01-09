import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe_b",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteApp": "./src/RemoteApp.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: { target: "esnext" },
  preview: { port: 3002 },
  server: { port: 3002 },
});
