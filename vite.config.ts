import {defineConfig} from "vite"
import {resolve} from "path"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "black-wave",
      // the proper extensions will be added
      fileName: "black-wave",
    },
  },
})
