<template>
  <nav class="flex h-16 w-screen items-center justify-between bg-gray-1000 px-5 xl:hidden">
    <RouterLink to="/"><LogoMobile class="fill-gray-50" /></RouterLink>
    <div @click="toggleNav" class="flex">
      <button type="button" class="text-gray-100 hover:text-gray-400 focus:text-gray-400 focus:outline-none">
        <NavBouton class="fill-gray-50" />
      </button>
    </div>
  </nav>
  <ul :class="showMenu ? 'flex' : 'hidden'" class="xl:hiden my-4 flex flex-col items-end gap-5 px-5">
    <li>
      <RouterLink to="/programmation" class="font-work-sans text-xl font-bold uppercase text-gray-50">Programmation</RouterLink>
    </li>
    <li>
      <RouterLink to="/artistes" class="font-work-sans text-xl font-bold uppercase text-gray-50">Les artistes</RouterLink>
    </li>
    <li>
      <RouterLink to="/festival" class="font-work-sans text-xl font-bold uppercase text-gray-50">Le festival</RouterLink>
    </li>
    <li>
      <RouterLink to="/contact" class="font-work-sans text-xl font-bold uppercase text-gray-50">Contact</RouterLink>
    </li>
  </ul>

  <nav class="hidden h-32 w-screen items-center justify-between bg-gray-1000 px-12 xl:flex">
    <RouterLink to="/"><LogoDefault class="fill-gray-50" /></RouterLink>
    <div class="flex gap-12">
      <RouterLink to="/programmation" class="font-work-sans text-xl font-bold uppercase text-gray-50">Programmation</RouterLink>
      <RouterLink to="/artistes" class="font-work-sans text-xl font-bold uppercase text-gray-50">Les artistes</RouterLink>
      <RouterLink to="/festival" class="font-work-sans text-xl font-bold uppercase text-gray-50">Le festival</RouterLink>
      <RouterLink to="/contact" class="font-work-sans text-xl font-bold uppercase text-gray-50">Contact</RouterLink>
    </div>
  </nav>
</template>

<script>
import LogoMobile from "./icons/LogoMobile.vue";
import LogoDefault from "./icons/LogoDefault.vue";
import NavBouton from "./icons/NavBouton.vue";
import { ref } from "vue";

export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  components: { LogoMobile, LogoDefault, NavBouton },
};
</script>