<template>
  <div
    class="flex h-auto w-auto items-center justify-center gap-4 rounded-md px-10 py-2"
    :class="{ 'bg-red-500': principal, 'border-2 border-red-500 blur-none': !principal }"
  >
    <p class="text-2xl font-bold uppercase text-gray-50"><slot /></p>
    <Chevron class="fill-gray-50" />
  </div>
</template>

<script>
import Chevron from "./icons/Chevron.vue";

export default {
  components: { Chevron },
  props: {
    principal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>