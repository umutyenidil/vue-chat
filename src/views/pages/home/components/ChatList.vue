<script setup>

import ChatCard from "@/views/pages/home/components/ChatCard.vue";
import {computed,} from "vue";
import {useStore} from "vuex";

const store = useStore();

const chats = computed(() => {
  return store.getters['homePageModule/chats'];
})

</script>

<template>
  <ul class="w-full p-2 flex flex-col gap-y-2">
    <template v-for="chat in chats">
      <ChatCard :chatDocRef="chat"/>
    </template>
  </ul>
</template>
