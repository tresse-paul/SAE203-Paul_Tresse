<template>
  <main>
    <Hero />
    <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10 p-4">
      <ArtisteCard nom="Qrion" image="/src/assets/Qrion.jpeg" date="Vendredi 5 août 2022" />
      <ArtisteCard nom="Madeon" image="/src/assets/Madeon.jpeg" date="Samedi 6 août 2022" />
      <ArtisteCard nom="Sarah Landry" image="/src/assets/Sarah Landry.jpeg" date="Dimanche 7 août 2022" />
    </div>
  </main>
  <Pieds />
</template>

<script>
import Hero from "../components/Hero.vue";
import Pieds from "../components/Pieds.vue";
import ArtisteCard from "../components/ArtisteCard.vue";

export default {
  components: { Hero, Pieds, ArtisteCard },
};
</script>