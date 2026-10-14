import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HomePage from './HomePage.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HomePage),
    })
  },
}
