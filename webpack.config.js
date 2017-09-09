module.exports = {
    entry: ["./src/app.ts"],
    output: {
        path: __dirname + "./dist",
        filename: "./bundle.js",
        publicPath: "dist/"
    },
    watch: true,
    resolve: {
        extensions: [".js", ".ts"]
    },
    devtool: "source-map",
    module: {
        loaders: [{
            test: /\.ts?$/,
            loader: "ts-loader"
        }]
    }
}