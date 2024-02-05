<script setup>

import ChatList from "@/views/pages/home/components/ChatList.vue";
import ChatBoxLoading from "@/views/pages/home/components/ChatBoxLoading.vue";
import {computed} from "vue";
import {useStore} from "vuex";
import ChatBoxEmpty from "@/views/pages/home/components/ChatBoxEmpty.vue";

const store = useStore();

const chats = computed(() => {
  return store.getters['homePageModule/chats'];
})

</script>

<template>
  <div class="h-full w-full rounded-xl shadow-md shadow-green-500 overflow-y-auto no-scrollbar">
    <ChatBoxLoading v-if="chats === null"/>
    <ChatBoxEmpty v-else-if="chats.length === 0"/>
    <ChatList v-else/>
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

