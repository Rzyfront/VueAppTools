import './assets/main.css';
import {
  toggleBoardModal,
  modalBoardVisible,
  toggleTaskModal,
  modalTaskVisible
} from '../hooks/useCreateModal';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.provide('modalState', {
  toggleBoardModal,
  modalBoardVisible,
  toggleTaskModal,
  modalTaskVisible
});
app.mount('#app');
