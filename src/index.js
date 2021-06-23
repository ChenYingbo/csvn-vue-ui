import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'


const ComponentsLib = {
  HelloWorld
}

Object.keys(ComponentsLib).forEach(name => {
  Vue.component(name, ComponentsLib[name])
})

export default ComponentsLib
