const data = require('./src/assets/json/home.json');
const home = data.home; 
module.exports = {
    devServer: {
        before(app) {
            app.get('/api/home', function (req, res) {
                // errno 状态码,真实开发中可以根据状态码
                // 判断用户当前是否有权限获取数据,或者是是否请求成功,或者是没有数据返回错误原因
                res.json({data: home, errno: 0});
            })},
        proxy: {
            '/api': {
                target: 'http://www.bentudou.com/', //设置你调用的接口域名和端口号 http://www.bentudou.com/Navigation/findNavigation.htm
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
        }
    }
}