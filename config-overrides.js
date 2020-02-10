const {
    override,
    disableEsLint,
    addLessLoader,
    fixBabelImports
} = require('customize-cra');

module.exports = override(
    fixBabelImports('antd-mobile', {
        libraryDirectory: 'es',
        libraryName: 'antd-mobile',
        style: true
    }),
    fixBabelImports('antd', {
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: true
    }),
    disableEsLint(),
    addLessLoader({
        javascriptEnabled: true
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@primary-color': '#000000',
            '@link-color': '#1DA57A',
            '@success-color': '#1DA57A',
            '@warning-color': '#1DA57A',
            '@error-color': '#1DA57A'
        }
    })
);