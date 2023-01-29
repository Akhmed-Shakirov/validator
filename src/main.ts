import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createI18n } from 'vue-i18n'

let locale = localStorage.myLocale || "ru"

const i18n = createI18n({
    legacy: false,
    // locale: language == 'en' || language == 'ru' || language == 'kz' ? language : 'en',
    locale: locale,
    fallbackWarn: false,
    missingWarn: false,
    messages: {
        en: {
            car: 'car',
            apple: 'apple'
        },
        ru: {
            car: 'машина',
            apple: 'яблоко'
        }
    }
})
const app = createApp(App)

app.use(i18n)
app.mount('#app')
