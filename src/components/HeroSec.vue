<template>
  <div class="mb-10 flex flex-col gap-10">
    <div class="flex h-60 w-screen flex-col items-center justify-center gap-2 bg-hero-bg-sec bg-cover md:h-96">
      <h1 class="fill-transparent text-center font-work-sans text-4xl font-bold uppercase text-gray-50 outline md:text-6xl">
        <slot />
      </h1>
      <h1 class="font-work-sans text-4xl font-bold uppercase text-gray-50 md:text-6xl"><slot /></h1>
      <h1 class="font-work-sans text-4xl font-bold uppercase text-gray-50 outline md:text-6xl"><slot /></h1>
    </div>
    <div class="flex flex-col items-center">
      <span class="h-0.5 w-60 bg-red-500"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
  },
};
</script>