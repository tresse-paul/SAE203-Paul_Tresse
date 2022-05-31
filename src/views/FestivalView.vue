<template>
  <HeroSec>Le festival</HeroSec>
  <div class="xl:px-32">
    <div class="mb-32 flex flex-col gap-20">
      <p class="px-5 font-barlow text-gray-50 lg:text-xl">
        C’est dans cette charmante ville de Province que se déroule l’<strong>Electronic Palace Festival</strong> et pour cette occasion,
        dansez, vibrez et laissez-vous transporter par des artistes venu du monde entier. Dans un cadre exceptionnel qu’est le
        <strong>Palais des Papes</strong>, découvrez ou redécouvrez ce magnifique monument plongé dans un décor électrique au sommet d’
        <strong>Avignon</strong>.
      </p>
      <img src="../assets/Avignon.jpeg" alt="Photo du pont d'Avignon et du Palais des Papes" class="h-72 w-screen object-cover md:h-96" />
      <p class="px-5 font-barlow text-gray-50 lg:text-xl">
        Du 5 au 7 août 2022, prenez part à une nouvelle expérience musicale chaque nuit. De la <strong>House music</strong> en passant à
        l’<strong>EDM</strong> jusqu’à la <strong>Trance music</strong>.
      </p>
      <img
        src="../assets/Festival_decor.jpg"
        alt="Photo du décor d'Electronic Palace Festivalr"
        class="h-72 w-screen object-cover md:h-96"
      />
    </div>
    <div class="mb-32 flex flex-col gap-7">
      <div class="flex justify-start px-5">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">Gallerie</h2>
      </div>
      <p class="px-5 font-barlow text-gray-50 lg:text-xl">Plongez-vous au cœur du festival avec nos dernières photos.</p>
      <CarouselFestival :images="images" @deleteImage="handelDeleteImage" />
    </div>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../components/HeroSec.vue";
import ArtisteCard from "../components/ArtisteCard.vue";
import Pieds from "../components/Pieds.vue";
import CarouselFestival from "../components/CarouselFestival.vue";
import { defineComponent, ref } from "vue";

export default {
  components: { HeroSec, ArtisteCard, Pieds, CarouselFestival },
  setup() {
    const _images = [
      { id: 1, url: "/src/assets/pont.jpg" },
      { id: 2, url: "/src/assets/freedommoment.jpg" },
      { id: 3, url: "/src/assets/Madeon_djset.jpg" },
      { id: 4, url: "/src/assets/Women_crowd.jpg" },
      { id: 5, url: "/src/assets/Roof.jpg" },
      { id: 6, url: "/src/assets/Dj.jpg" },
      { id: 7, url: "/src/assets/Crowd.jpg" },
      { id: 8, url: "/src/assets/corridor.jpg" },
      { id: 9, url: "/src/assets/Mousse.jpg" },
      { id: 10, url: "/src/assets/Man_crowd.jpg" },
    ];
    const images = ref(_images);
    const handelDeleteImage = (index, number) => images.value.splice(index, 1);

    return { handelDeleteImage, images };
  },
};
</script>