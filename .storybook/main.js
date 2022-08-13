module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    "@storybook/addon-essentials",
    "storybook-addon-next-router",
  ],
  core: {
    builder: 'webpack5'
  },
  "framework": "@storybook/react"
}
