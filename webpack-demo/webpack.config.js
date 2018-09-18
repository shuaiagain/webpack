const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'bulid'),
        filename: "bundle.js",
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                //使用哪个loader
                use: 'babel-loader',
                //不包括路径
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\.*)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                            limit: 10000,
                            // build/images/[图片名].[hash].[图片格式]
                            name: 'images/[name].[hash].[ext]'
                        }
                    }
                ]
            }, {
                // test: /\.css$/,
                // use: [
                //     'style-loader',
                //     {
                //         loader: 'css-loader',
                //         options: {
                //             module: true
                //         }
                //     }
                // ]
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            module: true
                        }
                    }]
                })
            }
        ]
    }, 
    plugins: [new ExtractTextPlugin("css/[name].[hash].css")]
}