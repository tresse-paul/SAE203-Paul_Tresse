<template>
  <Header />
  <main>
    <h1 class="text-2xl">Electronic Palace Festival</h1>
    <bouton>Découvrir</bouton>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
import bouton from "../components/bouton.vue";

export default {
  components: { Header, bouton },
};
</script>