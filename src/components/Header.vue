<template>
  <div class="flex h-16 w-full items-center justify-between bg-gray-1000 px-5">
    <LogoMobile class="fill-gray-50" />
  </div>

  <div class="flex h-32 w-full bg-gray-1000">
    <LogoDefault class="fill-gray-50" />
    <ul>
      <nav class="flex items-center gap-12">
        <li class="font-work-sans text-2xl font-bold text-gray-50">PROGRAMMATION</li>
        <li class="font-work-sans text-2xl font-bold text-gray-50">ARTISTES</li>
        <li class="font-work-sans text-2xl font-bold text-gray-50">LE FESTIVAL</li>
        <li class="font-work-sans text-2xl font-bold text-gray-50">CONTACT</li>
      </nav>
    </ul>
  </div>
</template>

<script>
import LogoMobile from "./icons/LogoMobile.vue";
import LogoDefault from "./icons/LogoDefault.vue";

export default {
  components: { LogoMobile, LogoDefault },
};
</script>