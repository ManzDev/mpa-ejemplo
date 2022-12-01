import path, { resolve } from "path";
import { defineConfig } from "vite";
const isGitHubPages = true;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    rollupOptions: {
      main: resolve(__dirname, "index.html"),
      nested: resolve(__dirname, "nested/index.html")
    }
  }
});
