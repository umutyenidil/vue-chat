<script setup>
import TopNavigationBarItem from "@/views/components/TopNavigationBarItem.vue";
import {useStore} from "vuex";
import {computed, ref} from "vue";
import DropdownButton from "@/views/components/DropdownButton.vue";
import DropdownButtonItem from "@/views/components/DropdownButtonItem.vue";

const store = useStore();

const user = computed(() => {
  console.log(store.state.moduleAuth.user);
  return store.state.moduleAuth.user;
});


</script>

<template>
  <nav class="px-[7.5rem] bg-slate-200 py-5 w-full flex justify-between items-center fixed top-0">
    <TopNavigationBarItem title="Vue Chat" to="/"/>
    <div v-if="!user" class="flex justify-between gap-x-5">
      <TopNavigationBarItem title="Register" to="/auth/register"/>
      <TopNavigationBarItem title="Login" to="/auth/login"/>
    </div>
    <div v-else>
      <DropdownButton :title="user.displayName">
        <DropdownButtonItem :text="user.email" @onPressed="console.log('test');"/>
        <DropdownButtonItem text="Logout" @onPressed="console.log('test');"/>
      </DropdownButton>
    </div>
  </nav>
</template>