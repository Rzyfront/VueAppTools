import { ref } from 'vue';

const modalBoardVisible = ref(false);
const modalTaskVisible = ref(false);

function toggleBoardModal() {
  modalBoardVisible.value = !modalBoardVisible.value;
}

function toggleTaskModal() {
  modalTaskVisible.value = !modalTaskVisible.value;
}

export {
  toggleBoardModal,
  modalBoardVisible,
  toggleTaskModal,
  modalTaskVisible
};
