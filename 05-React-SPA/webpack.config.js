var join = require('path').join;

module.exports = {
    entry: './dist/index.js',
    output: {
        filename: 'bundle.js',
        path: join(process.cwd(), 'dist')
    }
}
