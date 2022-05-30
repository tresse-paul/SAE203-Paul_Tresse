<template>
  <main>
    <Hero />
    <div class="mb-32 flex flex-col gap-7 px-5">
      <h2 class="flex justify-center font-work-sans text-5xl font-bold uppercase text-gray-50">Les artistes</h2>
      <p class="font-barlow text-gray-50 lg:text-xl">
        Laissez-vous emporter par les artistes <strong>les plus prometteurs</strong> venus des quatre coins du globe.
      </p>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
        <ArtisteCard nom="Qrion" image="/src/assets/Qrion.jpeg" date="Vendredi 5 août 2022" />
        <ArtisteCard nom="Madeon" image="/src/assets/Madeon.jpeg" date="Samedi 6 août 2022" />
        <ArtisteCard nom="Sarah Landry" image="/src/assets/Sarah Landry.jpeg" date="Dimanche 7 août 2022" />
      </div>
      <div class="flex justify-center">
        <bouton principal>Voir plus</bouton>
      </div>
    </div>
  </main>
  <Pieds />
</template>

<script>
import Hero from "../components/Hero.vue";
import Pieds from "../components/Pieds.vue";
import ArtisteCard from "../components/ArtisteCard.vue";
import bouton from "../components/bouton.vue";

export default {
  components: { Hero, Pieds, ArtisteCard, bouton },
};
</script>