<template>
  <header>
    <Entete />
  </header>
  <div>
    <header></header>

    <RouterView />
  </div>
</template>

<script>
import Entete from "./components/Entete.vue";
export default {
  components: { Entete },
};
</script>