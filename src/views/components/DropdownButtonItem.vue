<script setup>
import {ref} from "vue";

const emits = defineEmits([
  'onPressed',
]);

</script>

<template>
  <li @click="emits('onPressed')"
      class="hover:bg-slate-300 hover:text-slate-400 transition duration-150 px-4 py-2 cursor-pointer">
    <slot></slot>
  </li>
</template>