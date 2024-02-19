import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    webpackFinal: async (config) => {
        if (config.resolve) {
            config.resolve.alias = {
                ...config.resolve.alias,
                '@': path.resolve(__dirname, '../src'),
            }
        }
        return config
    },
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/preset-create-react-app',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
        '@storybook-addon-react-router-v6',
    ],
    framework: '@storybook/react-webpack5',
    docs: {
        autodocs: 'tag',
    },
    staticDirs: ['../public'],
}
export default config
