import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store';


import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})
createApp(App)
  .use(store)
  .use(vuetify)
  .mount('#app')
