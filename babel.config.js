module.exports = {
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ],
  "plugins": [transformImportMetaEnv]
};

function transformImportMetaEnv() {
  return {
    visitor: {
      MetaProperty(path) {
        path.replaceWithSourceString("process");
      },
    },
  };
}
