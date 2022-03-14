module.exports = {
    base: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.1.180.74:7001/',
                changeOrigin: true,
                secure: true,
                pathRewrite: {
                  '^/api': ''
                },
                cookieDomainRewrite: 'localhost'
              },
        }
    }
}
