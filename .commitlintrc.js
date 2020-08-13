const Level = Object.freeze({
  ERROR: 2,
});

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  rules: {
    'body-max-line-length': [Level.ERROR, 'always', Infinity],
  },
};
