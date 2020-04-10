/**
 * @Description:
 * @author hongliang7
 * @date 2020-04-10 17:53
 */
const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '^/api',
        createProxyMiddleware({
            target: 'http://localhost',
            changeOrigin: true
        })
    )
}
