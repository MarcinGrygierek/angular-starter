module.exports = {
    '*.{ts,scss,html}': [
        (files) => `ng lint --fix --parallel --files=${files.join(',')}`,
    ],
};
