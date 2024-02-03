<script setup>

import {useRoute} from "vue-router";
import MessageInputField from "@/views/pages/chat-room/components/MessageInputField.vue";
import {nextTick, onMounted, onUpdated, ref} from "vue";
import {useStore} from "vuex";
import {firebaseAuth, firebaseFirestore} from "@/services/firebase/firebase-config";
import NavigationBarLayout from "@/views/layouts/NavigationBarLayout.vue";
import ChatBubbleLeft from "@/views/components/ChatBubbleLeft.vue";
import ChatBubbleRight from "@/views/components/ChatBubbleRight.vue";


const store = useStore();
const route = useRoute();

const messages = ref([]);
const messagesBox = ref(null);
const currentUserId = ref(null);

onMounted(async () => {
  const currentUser = store.getters["moduleAuth/currentUser"];
  currentUserId.value = currentUser.uid;

  const currentUserRef = firebaseFirestore.collection('users').doc(currentUser.uid);
  const otherUserRef = firebaseFirestore.collection('users').doc(route.params.id.toString());

  let chatRoom = await firebaseFirestore.collection('chatRooms').where('contributors', "in", [[currentUserRef, otherUserRef], [otherUserRef, currentUserRef]]).get();

  if (chatRoom.size !== 0) {
    chatRoom = chatRoom.docs[0].ref;
  } else {
    chatRoom = await firebaseFirestore.collection('chatRooms').add({
      contributors: [
        currentUserRef,
        otherUserRef,
      ],
      messages: [],
    });
  }

  await store.dispatch("moduleChatRoomPage/setChatRoom", {chatRoom});

  chatRoom.collection('messages').orderBy('createdAt').onSnapshot((snapshot) => {
    messages.value = snapshot.docs.map((doc) => {
      return doc.data();
    });
    scrollToBottom();

  });
  scrollToBottom();
});

onUpdated(async () => {
  scrollToBottom();
});

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesBox.value) {
      messagesBox.value.scrollTop = messagesBox.value.scrollHeight;
    }
  });
};

const onMessageSubmitted = (message) => {
  console.log('test');
}


</script>

<template>
  <NavigationBarLayout>
    <div class="flex flex-col h-full justify-between">
      <div class="overflow-y-scroll custom-scrollbar py-2 flex justify-center" ref="messagesBox">
        <div class="w-full sm:w-1/2 px-2 sm:px-0 flex flex-col gap-y-1">
          <template v-for="message in messages">
            <ChatBubbleRight v-if="message.senderId === currentUserId" :message="message.message"/>
            <ChatBubbleLeft v-else :message="message.message"/>
          </template>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <div class="my-3 mx-3 sm:mx-0 w-full sm:w-1/2">
          <MessageInputField @onSubmitted="onMessageSubmitted"/>
        </div>
      </div>
    </div>
  </NavigationBarLayout>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgb(226 232 240);
  //border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 12px 12px 12px rgb(72, 187, 120);
}

</style>