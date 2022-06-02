<template>
  <nav class="flex h-16 w-screen items-center justify-between bg-gray-1000 px-5 xl:hidden">
    <RouterLink to="/"><LogoMobile class="fill-gray-50" /></RouterLink>
    <div @click="toggleNav" class="flex">
      <button type="button" class="text-gray-100 hover:text-gray-400 focus:text-gray-400 focus:outline-none">
        <NavBouton class="fill-gray-50" />
      </button>
    </div>
  </nav>
  <ul :class="showMenu ? 'flex' : 'hidden'" class="my-4 flex flex-col items-end gap-5 px-5 xl:hidden">
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
    <li>
      <RouterLink to="/compte" class="font-work-sans text-xl font-bold uppercase text-gray-50">Mon compte</RouterLink>
    </li>
  </ul>

  <nav class="hidden h-32 w-screen items-center justify-between bg-gray-1000 px-12 xl:flex">
    <RouterLink to="/"><LogoDefault class="fill-gray-50" /></RouterLink>
    <div class="flex gap-12">
      <RouterLink to="/programmation" class="font-work-sans text-xl font-bold uppercase text-gray-50 hover:text-red-500"
        >Programmation</RouterLink
      >
      <RouterLink to="/artistes" class="font-work-sans text-xl font-bold uppercase text-gray-50 hover:text-red-500"
        >Les artistes</RouterLink
      >
      <RouterLink to="/festival" class="font-work-sans text-xl font-bold uppercase text-gray-50 hover:text-red-500">Le festival</RouterLink>
      <RouterLink to="/contact" class="font-work-sans text-xl font-bold uppercase text-gray-50 hover:text-red-500">Contact</RouterLink>
      <RouterLink to="/compte" class="font-work-sans text-xl font-bold uppercase text-gray-50 hover:text-red-500">Mon compte</RouterLink>
    </div>
  </nav>
</template>

<script>
import LogoMobile from "./icons/LogoMobile.vue";
import LogoDefault from "./icons/LogoDefault.vue";
import NavBouton from "./icons/NavBouton.vue";
import bouton from "../components/bouton.vue";
import { ref } from "vue";

export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  components: { LogoMobile, LogoDefault, NavBouton, bouton },
};
</script>