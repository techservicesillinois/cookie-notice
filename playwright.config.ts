// @ts-check
import { defineConfig, devices } from '@playwright/test';
import baseConfig from './playwright.base.config';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig(baseConfig, {
    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
                channel: 'chromium',
            },
        },
    ]
});