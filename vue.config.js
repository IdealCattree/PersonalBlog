module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:9527",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
