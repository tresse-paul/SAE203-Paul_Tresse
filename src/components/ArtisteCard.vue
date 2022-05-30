<template>
  <figure class="relative h-64 w-auto">
    <img :src="image" alt="Portrait de l'artiste Qrion" class="h-64 w-full rounded-lg bg-shadow-card object-cover" />
    <figcaption class="absolute bottom-4 left-4 flex h-auto items-end justify-between">
      <div class="flex flex-col gap-1">
        <h3 class="font-work-sans text-2xl font-bold uppercase text-gray-50">{{ nom }}</h3>
        <p class="font-barlow text-xl text-gray-400">{{ date }}</p>
      </div>
    </figcaption>
    <div class="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 p-1.5">
      <Eye />
    </div>
  </figure>
</template>

<script>
import Eye from "./icons/Eye.vue";

export default {
  props: {
    nom: String,
    image: String,
    date: String,
  },
  components: { Eye },
};
</script>