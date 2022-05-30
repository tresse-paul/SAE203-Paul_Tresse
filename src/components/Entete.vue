<template>
  <div class="flex h-16 w-full items-center justify-between bg-gray-1000 px-5 xl:hidden">
    <LogoMobile class="bg-gray-50" />
  </div>

  <div class="hidden h-32 w-full items-center bg-gray-1000 xl:flex">
    <LogoDefault class="fill-gray-50" />
    <ul>
      <nav class="flex gap-12">
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