<script setup>
import NavigationBarLayout from "@/views/layouts/NavigationBarLayout.vue";
import LoginFormBox from "@/views/pages/login/components/LoginFormBox.vue";
import {onBeforeRouteLeave} from "vue-router";
import {useStore} from "vuex";
import {watch, watchEffect} from "vue";


const store = useStore();

watchEffect(async () => {
  await store.dispatch('loginPageModule/init');
})

</script>

<template>
  <NavigationBarLayout>
    <div class="h-full flex justify-center items-center">
      <LoginFormBox/>
    </div>
  </NavigationBarLayout>
</template>