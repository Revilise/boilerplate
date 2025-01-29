module.exports = {
  parser: "postcss-scss",
  plugins: [
    "cssnano",
    "postcss-flexbugs-fixes",
    [
      "@csstools/postcss-global-data",
    ],
    "postcss-nested",
    "postcss-custom-media",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
          "nesting-rules": true,
          "custom-media-queries": true
        }
      }
    ]
  ]
}
