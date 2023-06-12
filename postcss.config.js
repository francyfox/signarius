module.exports = {
  plugins: {
    "postcss-import": {},
    "tailwindcss/nesting": "postcss-nesting",
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
    "postcss-for": {},
    "postcss-preset-env": {
      features: { "nesting-rules": false },
    },
  },
};
