module.exports = {
  publicPath: process.env.NODE_ENV === "production" 
  ? "/https://github.com/sabadme/Filta-Assessment.git/" 
  : "/",
};

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: ['vuetify'],
  lintOnSave:false
})
