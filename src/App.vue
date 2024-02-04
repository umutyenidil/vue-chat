<template>
  <router-view/>
</template>
<script setup>
import {computed} from "vue";
import {useStore} from 'vuex';
import NavigationBarLayout from "@/views/layouts/NavigationBarLayout.vue";

const store = useStore();

// const modalState = computed(() => {
//   return store.state.moduleModal;
// });

</script>