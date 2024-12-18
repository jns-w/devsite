module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      propList: ["*"],
      rootValue: 16,
      selectorBlackList: ["html"],
    },
    tailwindcss: {},
  },
}
