module.exports = {
  '*.{ts,scss,html}': [(files) => `ng lint --fix --lint-file-patterns=${files.join(',')}`],
};
