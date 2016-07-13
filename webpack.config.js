var webpack = require('webpack')
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index:['./src/index.js'],
    vendor:['react','react-dom']
  },
  output: {
    path: './dist/',
    filename: '[name].js',
    publicPath: '/dist'
  },
  module: {
    loaders: [{ 
      test: /\.css$|\.scss/, 
      loaders: ['style','css','sass']
    },{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react']
      }
    }]
  },
  resolve: {
    extensions: ['', '.css', '.scss', '.js', '.jsx'],
  },
  plugins:[
    new webpack.optimize.CommonsChunkPlugin("vendor","vendor.bundle.js",Infinity),
    // 需要手动添加 HotModuleReplacementPlugin , 命令行的方式会自动添加
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,           //热加载
    inline: true,        //
    progress: true,      //
    contentBase: './',   //服务器目录位置
    port: 3333           //端口号
  }
};