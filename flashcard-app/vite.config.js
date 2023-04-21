import { defineConfig } from "vite";

export default defineConfig({
    test:{
        environment: 'jsdom'
    }
})

/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})*/
