module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    [
      "@csstools/postcss-global-data",
      {
        files: ["./src/components/document/style/mq.pcss"],
      },
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
