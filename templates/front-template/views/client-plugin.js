// npm i -D vue vue-router sav-flux
// 全局的VUE组件需要在这里注册
// 其他需要用Vue的需要从这里引入
import VueRouter from 'vue-router'
import Vue from 'vue'
import {Flux, FluxVue} from 'sav-flux'

Vue.use(VueRouter)
Vue.use(FluxVue)

export {Vue}
export {VueRouter}
export {Flux}
export {FluxVue}
