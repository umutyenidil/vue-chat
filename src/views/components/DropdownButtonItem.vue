<script setup>
import {ref} from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const emits = defineEmits([
  'onPressed',
]);

const text = ref(props.text);
</script>

<template>
  <li @click="emits('onPressed')"
      class="hover:bg-slate-300 hover:text-slate-400 transition duration-150 px-4 py-2 cursor-pointer">
    {{ text }}
  </li>
</template>