<script setup>

import ErrorBox from "@/views/components/ErrorBox.vue";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();

const error = computed(() => {
  return store.getters['loginPageModule/error'];
})

</script>

<template>
  <ErrorBox v-if="error"
            :errorText="error"/>
</template>