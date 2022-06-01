<template>
  <Carousel :items-to-scroll="1" :items-to-show="1">
    <template #slides>
      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" class="h-80 w-screen object-cover xl:h-600" />
      </Slide>
    </template>

    <template #addons>
      <Navigation
        class="mx-10 bg-gray-50 bg-opacity-50 active:h-10 active:w-10 active:bg-red-500 xl:hover:h-10 xl:hover:w-10 xl:hover:bg-red-500"
      />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent, registerRuntimeCompiler, toRefs } from "vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Basic",
  props: {
    images: Array,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup(props, { emit }) {
    const { images } = toRefs(props);

    const deleteImage = (index) => emit("delete-image", index);

    return { images, deleteImage };
  },
});
</script>
