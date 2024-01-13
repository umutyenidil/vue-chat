<script setup>
import TopNavigationBarItem from "@/views/components/TopNavigationBarItem.vue";
import {useStore} from "vuex";
import {computed, ref} from "vue";
import DropdownButton from "@/views/components/DropdownButton.vue";
import DropdownButtonItem from "@/views/components/DropdownButtonItem.vue";
import {logout} from "@/services/firebase/auth/auth-service";
import router from "@/router";

const store = useStore();

const user = computed(() => {
  console.log(store.state.moduleAuth.user);
  return store.state.moduleAuth.user;
});

const onLogout = async () => {
  try {
    await logout();
    await store.dispatch('moduleAuth/removeCurrentUser');
    await router.push({name: 'welcome-page'});
  } catch (error) {
    console.log(error);
  }

}


</script>

<template>
  <nav class="px-[7.5rem] bg-slate-100 py-5 w-full flex justify-between items-center fixed top-0 shadow">
    <TopNavigationBarItem title="Vue Chat" to="/"/>
    <div v-if="!user" class="flex justify-between gap-x-5">
      <TopNavigationBarItem title="Register" to="/auth/register"/>
      <TopNavigationBarItem title="Login" to="/auth/login"/>
    </div>
    <div v-else>
      <DropdownButton :title="user.displayName">
        <DropdownButtonItem @onPressed="console.log('test');">{{ user.email }}</DropdownButtonItem>
        <DropdownButtonItem @onPressed="onLogout">
          <p class="inline-flex items-center gap-x-2">
            <i class='bx bx-log-out'></i>
            <span>Logout</span>
          </p>
        </DropdownButtonItem>
      </DropdownButton>
    </div>
  </nav>
</template>