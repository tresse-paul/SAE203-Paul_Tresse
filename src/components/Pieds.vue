<template>
  <footer class="bg-red-500">
    <div class="flex flex-col gap-8 p-5">
      <div class="flex items-end">
        <LogoMobile />
        <p class="font-work-sans text-5xl font-bold uppercase">epf</p>
      </div>
      <div class="flex gap-8">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-5">
            <h4 class="font-barlow text-xl font-bold uppercase">Édition 2022</h4>
            <nav class="flex flex-col">
              <RouterLink class="font-barlow" to="/programmation">Programmation</RouterLink>
              <RouterLink class="font-barlow" to="/artistes">Artistes</RouterLink>
            </nav>
          </div>
          <div class="flex flex-col gap-5">
            <h4 class="font-barlow text-xl font-bold uppercase">À propos</h4>
            <nav class="flex flex-col">
              <RouterLink class="font-barlow" to="/festival">Le festival</RouterLink>
              <RouterLink class="font-barlow" to="/contact">Contact</RouterLink>
            </nav>
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <h4 class="font-barlow text-xl font-bold uppercase">Légale</h4>
          <nav>
            <RouterLink class="font-barlow" to="/mentions">Mentions légales</RouterLink>
          </nav>
        </div>
      </div>
    </div>
    <span class="absolute h-0.5 w-full bg-gray-1000"></span>
    <div class="flex flex-col gap-8 p-5">
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