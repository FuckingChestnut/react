module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 5 versions'],
        }),
        require('cssnano')({
            discardComments: {
                removeAll: true,
            },
            discardUnused: false,
        }),
        require('postcss-sprites')({
            basePath: './',
            stylesheetPath: './',
            spritePath: './dist/',
            retina: true,
            spritesmith: {
                padding: 5
            }
        })
    ],
};
