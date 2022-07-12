import Vue from 'vue'
import App from './App.vue'
// 引入公共样式
import './assets/reset.css'


// 引入插件
import VueRouter from 'vue-router';
import router from './router';
Vue.use(VueRouter)

import { Tab, Tabs, Tabbar, TabbarItem, Search, Sticky, Swipe, SwipeItem, Lazyload, Collapse, CollapseItem, NoticeBar, Grid, GridItem, Loading, Icon, Form, Field, Button } from 'vant';
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Sticky);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(NoticeBar);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Loading);
Vue.use(Icon);
Vue.use(Form);
Vue.use(Field);
Vue.use(Button);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
