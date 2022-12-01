import path, { resolve } from "path";
import { defineConfig } from "vite";
const isGitHubPages = true;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

const PATH = path.join(__dirname, "/src/");

export default defineConfig({
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./",
    rollupOptions: {
      input: {
        main: resolve(PATH, "index.html"),
        nested: resolve(PATH, "nested/index.html")
      }
    }
  }
});
