①组件安装 
npm i sass-loader node-sass    (lang="scss" scoped)
npm i vue-router@3


②vant2 UI安装、配置和引用
npm i vant@latest-v2 -S
npm i babel-plugin-import -D

module.exports = {
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
};

import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);