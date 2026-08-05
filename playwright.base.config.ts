// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
    testDir: './test-axe',
    testMatch: /.*\.test|spec\.([tj])s$/,
    reporter: 'html',
    webServer: {
        command: 'npm run dev',
        url: 'http://localhost:5173/samples/index.html',
        reuseExistingServer: !process.env.CI,
    },
    use: {
        baseURL: 'http://localhost:5173',
    },
});