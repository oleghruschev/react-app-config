const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require ('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlPlugin = new HtmlWebPackPlugin ({
  template: './index.html'
});
const MiniCssPlugin = new MiniCssExtractPlugin({
	filename: './style.css',
});
const HotModulePlugin = new webpack.HotModuleReplacementPlugin();


module.exports = {
	
	entry: './src/index.js',

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
  },
  
  resolve: {
    alias: {
      images: path.resolve('./static/images'),
    }
  },
	//Настройки локального сервера
	devServer: {
    contentBase: './build',
    hot: true
  },

	module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
      	test: /\.scss$/,
      	use: [
      		MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // modules: true,
              // importLoaders: 1,
              // localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true
              // minimize: true
            }
          },
          {
						loader: 'sass-loader',
						options: { sourceMap: true },
					}
      	]
      },
      //загрузка изображений
			{
				test: /\.(png|gif|jpe?g)$/,
				loaders: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]',
						}
					},
					'img-loader',
				]
			},
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
  	HtmlPlugin,
  	MiniCssPlugin,
    HotModulePlugin,
  ],
}
