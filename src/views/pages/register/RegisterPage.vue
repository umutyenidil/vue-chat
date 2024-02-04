<script setup>
import {computed, onMounted, onUpdated} from "vue";
import {useStore} from "vuex";
import RegisterForm from "./components/RegisterForm.vue";
import NavigationBarLayout from "@/views/layouts/NavigationBarLayout.vue";
import RegisterFormBox from "@/views/pages/register/components/RegisterFormBox.vue";

const store = useStore();


</script>

<template>
  <NavigationBarLayout>
    <div class="h-full flex justify-center items-center">
      <RegisterFormBox/>
    </div>
  </NavigationBarLayout>
</template>