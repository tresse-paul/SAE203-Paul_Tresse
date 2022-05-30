<template>
  <footer class="bg-red-500">
    <div class="flex flex-col gap-8 p-5 lg:flex-row">
      <RouterLink to="/" class="flex items-start">
        <LogoMobile class="fill-gray—1000" />
        <p class="font-work-sans text-5xl font-bold uppercase">epf</p>
      </RouterLink>
      <div class="relative flex gap-8 lg:left-1/4">
        <div class="flex flex-col gap-12">
          <div class="flex flex-col gap-3">
            <h4 class="font-barlow text-xl font-bold uppercase">Édition 2022</h4>
            <nav class="flex flex-col">
              <RouterLink class="font-barlow" to="/programmation">Programmation</RouterLink>
              <RouterLink class="font-barlow" to="/artistes">Artistes</RouterLink>
            </nav>
          </div>
          <div class="flex flex-col gap-3">
            <h4 class="font-barlow text-xl font-bold uppercase">À propos</h4>
            <nav class="flex flex-col">
              <RouterLink class="font-barlow" to="/festival">Le festival</RouterLink>
              <RouterLink class="font-barlow" to="/contact">Contact</RouterLink>
            </nav>
          </div>
        </div>
        <div class="absolute left-1/2 flex flex-col gap-3 lg:relative lg:right-1/2">
          <h4 class="font-barlow text-xl font-bold uppercase">Légale</h4>
          <nav>
            <RouterLink class="font-barlow" to="/mentions">Mentions légales</RouterLink>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-8 py-5">
      <span class="h-0.5 w-full bg-gray-1000"></span>
      <p class="flex justify-center font-barlow text-sm">© 2022 Electronic Palace Festival</p>
      <nav class="flex justify-center gap-10">
        <a href=""><Facebook /></a>
        <a href=""><Instagram /></a>
        <a href=""><Twitter /></a>
        <a href=""><Tiktok /></a>
        <a href=""><Youtube /></a>
      </nav>
    </div>
  </footer>
</template>

<script>
import LogoMobile from "./icons/LogoMobile.vue";
import Facebook from "./icons/Facebook.vue";
import Instagram from "./icons/Instagram.vue";
import Twitter from "./icons/Twitter.vue";
import Tiktok from "./icons/Tiktok.vue";
import Youtube from "./icons/Youtube.vue";

export default {
  components: { LogoMobile, Facebook, Instagram, Twitter, Tiktok, Youtube },
};
</script>