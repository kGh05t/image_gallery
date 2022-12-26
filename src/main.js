import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {aliases,fa} from 'vuetify/iconsets/fa'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Particles from "vue3-particles";

const vuetify = createVuetify({
  components,
  directives,
  icons:{
    defaultSet:'fa',
    aliases,
    sets:{
      fa,
    }
  }
})

createApp(App).use(vuetify).use(Particles).mount('#app')