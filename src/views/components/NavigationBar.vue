<script setup>
import TopNavigationBarItem from "@/views/components/NavigationBarItem.vue";
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

const isVisibleMobileMenu = ref(false);
const toggleMobileMenuVisibility = () => {
  isVisibleMobileMenu.value = !isVisibleMobileMenu.value;
};

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
  <header class="z-[1000]">
    <nav class="px-[2rem] sm:px-[7.5rem] bg-slate-100 py-5 w-full flex justify-between items-center shadow h-min">
      <TopNavigationBarItem title="Vue Chat" to="/"/>
      <button @click="toggleMobileMenuVisibility"
              class="block sm:hidden hover:bg-slate-200 transition duration-50 p-2 rounded-full text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
             style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;">
          <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
        </svg>
      </button>
      <div class="hidden sm:block">
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
      </div>
    </nav>
    <Transition name="slide-up">
      <div @click="toggleMobileMenuVisibility"
           v-if="isVisibleMobileMenu"
           class="block sm:hidden absolute z-[999] w-full h-min bg-slate-100 px-[2rem] py-5">
        <div class="flex flex-col gap-y-2">
          <div v-if="!user" class="flex flex-col gap-y-3">
            <TopNavigationBarItem title="Register" to="/auth/register"/>
            <TopNavigationBarItem title="Login" to="/auth/login"/>
          </div>
          <div v-else class="flex flex-col gap-y-3">
            <p>{{ user.displayName }}</p>
            <p @click="onLogout"
               class="inline-flex items-center gap-x-2">
              <i class='bx bx-log-out'></i>
              <span>Logout</span>
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.15s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(0px);
}
</style>