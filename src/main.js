import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import { Icon, Popover, Popup, Button, Rate, Toast  } from 'vant';
import 'vant/lib/index.css'; 

app.use(Icon);
app.use(Popover);
app.use(Popup);
app.use(Button);
app.use(Rate);
app.use(Toast);


app.use(createPinia())
app.use(router)

app.mount('#app')
