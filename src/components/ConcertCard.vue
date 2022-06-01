<template>
  <div class="flex h-12 items-center justify-between rounded-full bg-gray-50 px-3.5 hover:-translate-y-1">
    <span class="h-3.5 w-3.5 rounded-full bg-red-500"></span>
    <p class="font-barlow text-xl text-gray-1000">{{ nom }}</p>
    <Chevron class="fill-red-500" />
  </div>
</template>

<script>
import Chevron from "./icons/Chevron.vue";

export default {
  components: { Chevron },
  props: {
    nom: String,
  },
};
</script>
