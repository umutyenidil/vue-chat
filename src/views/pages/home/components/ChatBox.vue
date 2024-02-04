<script setup>

import ChatList from "@/views/pages/home/components/ChatList.vue";
import {ref} from "vue";

const dots = ref('');

const delay = ms => new Promise(res => setTimeout(res, ms));

async function updateDots() {
  dots.value = '';
  for (let i = 0; i < 3; i++) {
    await delay(250);
    dots.value = dots.value + '.';
  }
}

// setInterval ile repeatEveryThreeSeconds fonksiyonunu her 3000 milisaniyede (3 saniye) bir çağır
const intervalId = setInterval(updateDots, 1000);

</script>

<template>
  <div class="h-full w-full rounded-xl shadow-md shadow-green-500 overflow-y-auto no-scrollbar">
    <!--    <ChatList/>-->
    <div class="h-full flex flex-col justify-center items-center gap-y-3">
      <i class='text-3xl text-green-800 bx bx-loader bx-spin'></i>
      <p class="text-xl text-green-800">loading</p>
    </div>
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

