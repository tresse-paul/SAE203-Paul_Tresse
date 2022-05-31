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
    </div>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../components/HeroSec.vue";
import ArtisteCard from "../components/ArtisteCard.vue";
import Pieds from "../components/Pieds.vue";

export default {
  components: { HeroSec, ArtisteCard, Pieds },
};
</script>