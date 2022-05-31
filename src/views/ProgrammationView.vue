<template>
  <HeroSec>Programmation</HeroSec>
  <div class="xl:px-32">
    <div class="mb-32 flex flex-col gap-7">
      <div class="flex justify-start px-5">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
          House music<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
        </h2>
      </div>
      <img
        src="../../public/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg"
        alt="Photo d'un dj sur des platines"
        class="h-72 w-screen object-cover md:h-96"
      />
      <p class="px-5 font-work-sans text-2xl font-bold text-gray-50">Vendredi 5 août 2022</p>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10 px-5">
        <ConcertCard nom="Peyruis" />
        <ConcertCard nom="Kryptogram" />
        <ConcertCard nom="Qrion" />
        <ConcertCard nom="Avira" />
        <ConcertCard nom="Speaker Honey" />
      </div>
    </div>
    <div class="mb-32 flex flex-col gap-7">
      <div class="flex justify-start px-5">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
          EDM<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
        </h2>
      </div>
      <img
        src="../../public/danny-howe-bn-D2bCvpik-unsplash.jpg"
        alt="Photo d'un dj sur des platines"
        class="h-72 w-screen object-cover md:h-96"
      />
      <p class="px-5 font-work-sans text-2xl font-bold text-gray-50">Samedi 6 août 2022</p>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,2fr))] gap-10 px-5">
        <ConcertCard nom="Paris Blohm" />
        <ConcertCard nom="Tom Swoon" />
        <ConcertCard nom="Madeon" />
        <ConcertCard nom="Jai Wolf" />
        <ConcertCard nom="Alesso" />
      </div>
    </div>
    <div class="mb-32 flex flex-col gap-7">
      <div class="flex justify-start px-5">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
          TRANCE MUSIC<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
        </h2>
      </div>
      <img
        src="../../public/antoine-j-A_0C42zmz1Q-unsplash.jpg"
        alt="Photo d'un dj sur des platines"
        class="h-72 w-screen object-cover md:h-96"
      />
      <p class="px-5 font-work-sans text-2xl font-bold text-gray-50">Dimanche 7 août 2022</p>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,2fr))] gap-10 px-5">
        <ConcertCard nom="Hypaton" />
        <ConcertCard nom="Steve Dekay" />
        <ConcertCard nom="Rinaly" />
        <ConcertCard nom="Kaspar" />
        <ConcertCard nom="Sarah Landry" />
      </div>
    </div>
  </div>
  <Pieds />
</template>

<script>
import ConcertCard from "../components/ConcertCard.vue";
import HeroSec from "../components/HeroSec.vue";
import Pieds from "../components/Pieds.vue";

export default {
  components: { ConcertCard, HeroSec, Pieds },
};
</script>
