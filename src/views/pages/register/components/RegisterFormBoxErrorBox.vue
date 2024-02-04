<script setup>
import {useStore} from "vuex";
import {computed, watch} from "vue";

const store = useStore();

const error = computed(() => {
  return store.getters["registerPageModule/error"];
});

</script>

<template>
  <div v-if="error"
       class="w-full rounded-md flex items-center gap-x-2 px-4 py-3 bg-red-500">
    <div>
      <i class='text-xl text-white bx bxs-error-circle'></i>
    </div>
    <div>
      <p class="text-white">{{ error }}</p>
    </div>
  </div>
  <!--  <div v-if="error"-->
  <!--      class="w-1/4 px-5 py-3 rounded-2xl bg-red-500 hover:bg-red-400 cursor-pointer transition duration-150">-->
  <!--    <p class="text-center text-white">{{ error }}</p>-->
  <!--  </div>-->
</template>

