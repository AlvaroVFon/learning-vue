import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import '@/assets/base.css'
import router from '@/routes/router'
import { messages } from '@/assets/i18n'

const app = createApp(App)
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
})

app.use(i18n)
app.use(router)
app.mount('#app')
