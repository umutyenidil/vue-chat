<script setup>

import {useRoute} from "vue-router";
import MessageInputField from "@/views/pages/chat-room/components/MessageInputField.vue";
import {nextTick, onMounted, onUpdated, ref} from "vue";
import {useStore} from "vuex";
import {firebaseAuth, firebaseFirestore} from "@/services/firebase/firebase-config";
import NavigationBarLayout from "@/views/layouts/NavigationBarLayout.vue";


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

  });


});

onUpdated(async () => {

});

const onMessageSubmitted = (message) => {
  console.log('test');
}


</script>

<template>
  <NavigationBarLayout>
    <div class="flex flex-col h-full justify-between">
      <div class="overflow-y-scroll flex justify-center" ref="messagesBox">
        <div class="w-full sm:w-1/2 px-2 sm:px-0 flex flex-col">
          <template v-for="message in messages">
            <div v-if="message.senderId === currentUserId" class="bg-orange-500 w-min self-end">{{
                message.message
              }}
            </div>
            <div v-else class="bg-red-500 w-min">{{ message.message }}</div>
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

  <!--    <div id="relative chat-room-page" class="px-5" >-->
  <!--      <div class="relative w-full h-full flex justify-center items-end">-->
  <!--        <div class="relative w-full sm:w-1/2 h-full h-min-screen flex flex-col justify-end">-->
  <!--          <div class=" flex flex-col gap-y-5 mb-10" ref="messagesBox" >-->
  <!--            <template v-for="message in messages">-->
  <!--              <div v-if="message.senderId === currentUserId" class="bg-orange-500">{{ message.message }}</div>-->
  <!--              <div v-else class="bg-red-500">{{ message.message }}</div>-->
  <!--            </template>-->
  <!--          </div>-->
  <!--          <div class="sticky bottom-5 w-full">-->
  <!--            <MessageInputField/>-->
  <!--          </div>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </div>-->
</template>