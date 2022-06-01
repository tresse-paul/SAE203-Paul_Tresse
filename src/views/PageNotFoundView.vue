<template>
  <div class="flex h-screen flex-col items-center gap-20 bg-hero-bg-sec py-20 px-5 md:py-20 xl:px-32">
    <h1 class="text-center font-work-sans text-5xl font-bold text-gray-50 md:text-6xl">Désolé, cette page n'existe pas !</h1>
    <RouterLink to="/"><bouton principal>Accueil</bouton></RouterLink>
    <input type="search" class="w-full rounded-lg focus:outline-none focus:ring-red-500" placeholder="Ma recherche..." />
  </div>
  <Pieds />
</template>

<script>
import bouton from "../components/bouton.vue";
import Pieds from "../components/Pieds.vue";

export default {
  components: { bouton, Pieds },
};
</script>
