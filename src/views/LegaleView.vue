<template>
  <HeroSec>Légale</HeroSec>
  <div class="mb-32 flex flex-col gap-7 px-5 xl:px-32">
    <div class="flex justify-start">
      <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">Mentions légales</h2>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-row flex-wrap">
        <p class="flex-none font-barlow font-bold text-gray-50 md:text-2xl">Raison sociale :</p>
        <p class="font-barlow text-gray-50 md:text-xl">Electronic Palace Festival</p>
      </div>
      <div class="flex flex-row flex-wrap">
        <p class="lex-nfone font-barlow text-xl font-bold text-gray-50 md:text-2xl">Adresse :</p>
        <p class="font-barlow text-gray-50 md:text-xl">4 Place Tharradin, Montbéliard 25200</p>
      </div>
      <div class="flex flex-row flex-wrap">
        <p class="flex-none font-barlow text-xl font-bold text-gray-50 md:text-2xl">Téléphone :</p>
        <p class="font-barlow text-gray-50 md:text-xl">03 88 88 88 88</p>
      </div>
      <div class="flex flex-row flex-wrap">
        <p class="flex-none font-barlow text-xl font-bold text-gray-50 md:text-2xl">Email :</p>
        <p class="font-barlow text-gray-50 md:text-xl">festival@epf.fr</p>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-row flex-wrap">
        <p class="flex-none font-barlow text-xl font-bold text-gray-50 md:text-2xl">Hébergeur :</p>
        <p class="font-barlow text-gray-50 md:text-xl">Infomaniak</p>
      </div>
      <div class="flex flex-row flex-wrap">
        <p class="flex-none font-barlow text-xl font-bold text-gray-50 md:text-2xl">Raison sociale de l’hébergeur :</p>
        <p class="font-barlow text-gray-50 md:text-xl">Infomaniak Network SA</p>
      </div>
      <div class="flex flex-row flex-wrap">
        <p class="lex-nfone font-barlow text-xl font-bold text-gray-50 md:text-2xl">Adresse de l’hébergeur :</p>
        <p class="font-barlow text-gray-50 md:text-xl">Rue Eugène Marziano 25, 1227 Les Acacias (GE), Les Acacias, Genève, Suisse</p>
      </div>
      <div class="flex flex-row flex-wrap">
        <p class="lex-nfone font-barlow text-xl font-bold text-gray-50 md:text-2xl">Numéro de Téléphone de l’hébergeur :</p>
        <p class="font-barlow text-gray-50 md:text-xl">+41 8 44 55 11 55</p>
      </div>
    </div>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../components/HeroSec.vue";
import Pieds from "../components/Pieds.vue";

export default {
  components: { HeroSec, Pieds },
};
</script>