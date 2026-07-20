import { defineConfig } from 'vite'
import nunjucksPlugin from 'vite-plugin-nunjucks'
import nunjucks from 'nunjucks'
import { resolve } from 'path'

const templatesDir = resolve(__dirname, 'src/web')

const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader(templatesDir),
  { noCache: true }
)

export default defineConfig({
  root: 'src/web',
  publicDir: resolve(__dirname, 'src/web/public'),
  plugins: [
    nunjucksPlugin({
      templatesDir,
      nunjucksEnvironment: env
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main:   resolve(__dirname, 'src/web/index.html'),
        uic:    resolve(__dirname, 'src/web/uic.html'),
        uis:    resolve(__dirname, 'src/web/uis.html'),
        csp:    resolve(__dirname, 'src/web/csp.html'),
        gtag:   resolve(__dirname, 'src/web/gtag.html'),
        legacy: resolve(__dirname, 'src/web/legacy.html'),
      }
    }
  }
})