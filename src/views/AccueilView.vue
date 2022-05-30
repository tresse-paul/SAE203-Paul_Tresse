<template>
  <main>
    <Hero />
  </main>
  <Pieds />
</template>

<script>
import Hero from "../components/Hero.vue";
import Pieds from "../components/Pieds.vue";

export default {
  components: { Hero, Pieds },
};
</script>