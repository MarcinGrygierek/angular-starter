module.exports = {
  '*.{ts,scss,html}': [(files) => `eslint --fix ${files.join(' ')}`],
};
