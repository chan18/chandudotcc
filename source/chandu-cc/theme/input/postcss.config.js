module.exports = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('../../Tailwindcss/tailwind.config.js'),
        require('postcss-nested'),
        require('autoprefixer'),
    ]
}
