import './assets/main.css';
import { modalVisible, toggleModal } from '../hooks/useCreateModal';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.provide('modalState', {
  modalVisible,
  toggleModal
});
app.mount('#app');
