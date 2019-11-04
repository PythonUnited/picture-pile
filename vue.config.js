process.env.VUE_APP_VERSION = require('./package.json').version;

module.exports = {
    css: {
        requireModuleExtension: true,
        sourceMap: true,
        extract: true
    },

    devServer: {
        disableHostCheck: true,
    },

};
