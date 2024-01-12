<script setup>
import {ref} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const title = ref(props.title);
const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

</script>

<template>
  <div class="relative">
    <button @click="toggleDropdown"
            class="hover:bg-slate-300 hover:text-slate-400 px-4 py-2 rounded-full transition transition-bg duration-100">
      {{ title }}
    </button>
    <ul class="absolute right-0 mt-2 bg-white rounded-md shadow-xl overflow-clip w-max"
        v-if="isDropdownVisible"
        @click="toggleDropdown">
      <slot></slot>
    </ul>
  </div>
</template>
