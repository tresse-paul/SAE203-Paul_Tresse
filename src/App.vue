<template>
  <div class="bg-gray-1000">
    <header>
      <Entete />
    </header>

    <RouterView />
  </div>
</template>

<script>
import Entete from "./components/Entete.vue";
export default {
  components: { Entete },
};
</script>