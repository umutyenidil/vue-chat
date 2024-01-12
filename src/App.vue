<template>
<!--  <div v-show="modalState.isVisible" class="absolute bg-black opacity-60 w-full h-full">-->

<!--  </div>-->
  <TopNavigationBar/>
  <router-view/>
</template>
<script setup>
import {computed} from "vue";
import {useStore} from 'vuex';
import TopNavigationBar from "@/views/components/TopNavigationBar.vue";

const store = useStore();

const modalState = computed(() => {
  return store.state.moduleModal;
});

</script>