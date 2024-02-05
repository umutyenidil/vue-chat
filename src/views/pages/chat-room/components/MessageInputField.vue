<script setup>
import {ref} from "vue";
import {useStore} from "vuex";
import firebase from "firebase/compat/app";
import {firebaseFirestore} from "@/services/firebase/firebase-config";

// const store = useStore();

const emit = defineEmits(['onSubmitted'])

const message = ref(null);

const submitMessage = () => {
  emit('onSubmitted', message.value);
  message.value = '';
};

</script>

<template>
  <div class="w-full flex justify-center items-center gap-x-2">
    <input @keydown.enter.prevent="submitMessage"
           v-model="message"
           class="relative w-full px-5 py-3 rounded-full outline-none border border-2 border-gray-300 focus:border-blue-500 placeholder-gray-400 focus:placeholder-gray-200 transition ease-in-out duration-150"
           type="text"
           placeholder="Mesaj yazın..."/>
    <div
        @click="submitMessage"
        class="bg-blue-500 hover:bg-blue-700 p-3 rounded-full cursor-pointer transition duration-50">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           style="fill: rgba(255, 255, 255, 1);">
        <path
            d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path>
      </svg>
    </div>
  </div>
</template>
