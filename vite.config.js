import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Add this line to import the path module

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  plugins: [react()]
})