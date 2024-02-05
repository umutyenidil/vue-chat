<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import routeNames from "@/router/route-names";

const router = useRouter();
const store = useStore();

const props = defineProps({
  chatDocRef: {
    type: Object,
    required: true,
  },
});

const currentUserId = computed(() => {
  return store.getters['authModule/currentUser'].uid;
})

const lastMessage = reactive({
  message: null,
  senderId: null,
  senderDisplayName: null,
  createdAt: null,
});

onMounted(async () => {
  const messagesColRef = props.chatDocRef.ref.collection('messages');
  const messagesColQuery = await messagesColRef.orderBy('createdAt', 'desc').limit(1).get();
  const lastMessageDocRef = messagesColQuery.docs[0];
  // lastMessage.value = lastMessageDocRef.data();
  // console.log(lastMessage.value['message']);
  lastMessage.message = lastMessageDocRef.data()['message'];
  lastMessage.senderId = lastMessageDocRef.data()['senderId'];
  lastMessage.senderDisplayName = lastMessageDocRef.data()['senderId'].toString().slice(0, 3);
  lastMessage.createdAt = lastMessageDocRef.data()['createdAt'].toDate();
});

const goChat = () => {
  const chatContributorIds = props.chatDocRef.data()['contributors'].map((contributorDocRef) => {
    return contributorDocRef.id
  });

  const currentUserIdIndex = chatContributorIds.indexOf(currentUserId.value);
  const otherUserId = currentUserIdIndex === 0 ? chatContributorIds[1] : chatContributorIds[0];

  //
  router.push({name: routeNames.chatRoomPage, params: {id: otherUserId}});
}

</script>

<template>
  <li @click="goChat"
      class="w-full py-2 px-3 rounded-lg bg-slate-100 cursor-pointer hover:bg-green-100 transition duration-150">
    <div class="w-full flex items-center gap-x-3">
      <div>
        <div class="rounded-full p-3 bg-white text-center">
          <p>{{ lastMessage.senderDisplayName }}</p>
        </div>
      </div>
      <div class="flex-1 overflow-hidden ">
        <div class="flex flex-col gap-y-1">
          <p class="text-lg text-ellipsis truncate">{{ lastMessage.message ?? '' }}</p>
          <p class="text-xs">{{ lastMessage.createdAt }}</p>
        </div>
      </div>
      <button>
        <div class="hover:bg-slate-200 rounded-full p-2 transition duration-150">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
               style="fill: rgb(34 197 94);">
            <path
                d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </div>
      </button>
    </div>
  </li>

</template>