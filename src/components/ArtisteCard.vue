<template>
  <figure class="relative group h-64 w-auto">
    <img :src="image" class="h-64 w-full rounded-lg object-cover" />
    <figcaption
      class="
        absolute
        bottom-0
        left-0
        flex
        h-full
        w-full
        items-end
        justify-between
        bg-shadow-card-bot
        p-4
        transition-opacity
        duration-300
        ease-out
        md:opacity-0 md:group-hover:opacity-100
      "
    >
      <div class="flex flex-col gap-1">
        <h3 class="font-work-sans text-2xl font-bold uppercase text-gray-50">{{ nom }}</h3>
        <p class="font-barlow text-xl text-gray-400">{{ date }}</p>
      </div>
      <div class="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 p-1.5">
        <Eye class="fill-red-500" />
      </div>
    </figcaption>
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