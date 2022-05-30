<template>
  <div
    class="flex h-11 w-56 items-center justify-center rounded-md"
    :class="{ 'bg-red-500': principal, 'border-2 border-red-500 blur-none': !principal }"
  >
    <p class="text-2xl font-bold uppercase text-gray-50"><slot /></p>
  </div>
</template>

<script>
export default {
  props: {
    principal: {
      type: Boolean,
      default: false,
    },
  },
};
</script>