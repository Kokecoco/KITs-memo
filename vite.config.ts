// AUTO-GENERATED FILE, DO NOT EDIT DIRECTLY
import react from "@vitejs/plugin-react";
import * as fs from "fs";
import * as path from "path";
import { defineConfig } from "vite";

import { fileURLToPath, URL } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// import eslintPlugin from "vite-plugin-eslint";
// https://vitejs.dev/config/
//
//

// vite.config.js
export default defineConfig((conf) => ({
  base: "", // リポジトリ名に合わせて設定
  plugins: [react()],
  optimizeDeps: {},
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: conf.command === "build" ||
        !fs.existsSync(path.resolve(__dirname, "../../packages/core/src"))
      ? {}
      : ({
        // Comment out the lines below to load a built version of blocknote
        // or, keep as is to load live from sources with live reload working
        "@blocknote/core": path.resolve(
          __dirname,
          "../../packages/core/src/",
        ),
        "@blocknote/react": path.resolve(
          __dirname,
          "../../packages/react/src/",
        ),
      } as any),
  },
}));
