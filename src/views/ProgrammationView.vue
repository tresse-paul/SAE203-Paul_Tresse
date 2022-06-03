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
        src="../assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg"
        alt="Photo d'un dj sur des platines"
        class="h-72 w-screen object-cover md:h-96"
      />
      <p class="px-5 font-work-sans text-2xl font-bold text-gray-50">Vendredi 5 août 2022</p>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10 px-5">
        <ConcertCard nom="Peyruis" heure="21 H 00" />
        <ConcertCard nom="Kryptogram" heure="22 H 30" />
        <ConcertCard nom="Qrion" heure="00 H 00" />
        <ConcertCard nom="Avira" heure="01 H 30" />
        <ConcertCard nom="Speaker Honey" heure="03 H 00" />
      </div>
    </div>
    <div class="mb-32 flex flex-col gap-7">
      <div class="flex justify-start px-5">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
          EDM<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
        </h2>
      </div>
      <img
        src="../assets/danny-howe-bn-D2bCvpik-unsplash.jpg"
        alt="Photo d'un dj sur des platines"
        class="h-72 w-screen object-cover md:h-96"
      />
      <p class="px-5 font-work-sans text-2xl font-bold text-gray-50">Samedi 6 août 2022</p>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,2fr))] gap-10 px-5">
        <ConcertCard nom="Paris Blohm" heure="21 H 00" />
        <ConcertCard nom="Tom Swoon" heure="22 H 30" />
        <ConcertCard nom="Madeon" heure="00 H 00" />
        <ConcertCard nom="Jai Wolf" heure="01 H 30" />
        <ConcertCard nom="Alesso" heure="03 H 00" />
      </div>
    </div>
    <div class="mb-32 flex flex-col gap-7">
      <div class="flex justify-start px-5">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
          TRANCE MUSIC<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
        </h2>
      </div>
      <img
        src="../assets/antoine-j-A_0C42zmz1Q-unsplash.jpg"
        alt="Photo d'un dj sur des platines"
        class="h-72 w-screen object-cover md:h-96"
      />
      <p class="px-5 font-work-sans text-2xl font-bold text-gray-50">Dimanche 7 août 2022</p>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,2fr))] gap-10 px-5">
        <ConcertCard nom="Hypaton" heure="21 H 00" />
        <ConcertCard nom="Steve Dekay" heure="22 H 30" />
        <ConcertCard nom="Rinaly" heure="00 H 00" />
        <ConcertCard nom="Kaspar" heure="01 H 30" />
        <ConcertCard nom="Sarah Landry" heure="03 H 00" />
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
