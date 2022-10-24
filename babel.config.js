module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@common": "./common",
            "@models": "./models",
            "@screens": "./screens",
            "@services": "./services",
            "@store": "./store",
          },
        },
      ],
    ],
  };
};
