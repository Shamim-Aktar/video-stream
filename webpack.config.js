module.exports={

    entry:'./src/js/index.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        rules:[
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
           { test: /\.css$/, loader: "style-loader!css-loader" 
        
           },
           { test: /\.(png||jpe?g|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
           {  test: /\.(png|jpg|gif)$/, loader:'loader:file-loader',options: {
            name: '[path][name].[ext]',
            context: ''
          } }
        ]
     },
     devtool:"cheap-module-source-map",
     devServer: {
        https:true,
         host:'0.0.0.0',
         port: 8000,
         headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
            "crossDomain":true,
            "crossOrigin":true,
          },
         stats: 'minimal',
        
         
     historyApiFallback: true
       },

   
}


