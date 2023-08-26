import { ref } from 'vue';

const modalVisible = ref(false);

function toggleModal() {
  modalVisible.value = !modalVisible.value;
}

export { modalVisible, toggleModal };
