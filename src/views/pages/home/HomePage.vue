<script setup>

import NavigationBarLayout from "@/views/layouts/NavigationBarLayout.vue";
import ChatBox from "@/views/pages/home/components/ChatBox.vue";
import {onMounted, ref} from "vue";
import {useStore} from "vuex";
import getAllChats from "@/services/firebase/firestore/get-all-chats";
import sleep from "@/utils/async/sleep";
import {useRouter} from "vue-router";
import routeNames from "@/router/route-names";

const store = useStore();
const router = useRouter();

onMounted(async () => {
  const user = store.getters['authModule/currentUser'];

  const chats = await getAllChats(user.uid);

  await sleep(1250);

  await store.dispatch("homePageModule/setChats", {chats});
});

const otherUserIdRef = ref('');

const startChat = async () => {
  await router.push({name: routeNames.chatRoomPage, params: {id: otherUserIdRef.value}});
}

</script>

<template>
  <NavigationBarLayout>
    <div class="h-full flex justify-center items-center">
      <div class="w-3/4 sm:w-2/3 md:w-3/5 lg:w-1/3 h-full py-10">
        <input type="text"
               v-model="otherUserIdRef"
               class="bg-red-500"/>
        <button type="button"
                @click="startChat"
                class="bg-blue-500">
          send message
        </button>
        <ChatBox/>
      </div>
    </div>
  </NavigationBarLayout>
</template>


