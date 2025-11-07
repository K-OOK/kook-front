import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  server: {
    host: true, // '0.0.0.0'과 동일 → 같은 네트워크에서 접근 가능
    port: 5173, // 필요시 변경
    // open: true,     // 자동 오픈 원하면
  },
});
