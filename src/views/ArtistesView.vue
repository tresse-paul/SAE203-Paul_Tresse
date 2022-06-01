<template>
  <HeroSec>Les artistes</HeroSec>
  <div class="xl:px-32">
    <div class="mb-32 flex flex-col gap-20">
      <div class="flex justify-between gap-9 px-5">
        <p class="font-barlow text-gray-50 lg:text-xl">
          Apprenez-en plus sur les artistes invité pour l’édition 2022 d’<strong>Electronic Palace Festival</strong>. Accédez à leurs
          <strong>réseaux sociaux</strong> et à leur profil <strong>Spotify</strong> en seulement quelques clics.
        </p>
        <DropDownMenu class="scale-100" />
      </div>
      <div class="flex flex-col gap-7 px-5">
        <div class="flex justify-start">
          <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
            House music<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
          </h2>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
          <ArtisteCard alt="Portrait de l'artiste Peyruis" nom="Peyruis" :image="imagePeyruis" date="Dimanche 7 août 2022" />
          <ArtisteCard alt="Portrait de l'artiste Kryptogram" nom="Kryptogram" :image="imageKryptogram" date="Dimanche 7 août 2022" />
          <ArtisteCard alt="Portrait de l'artiste Qrion" nom="Qrion" :image="imageQrion" date="Dimanche 7 août 2022" />
          <ArtisteCard alt="Portrait de l'artiste Avira" nom="Avira" :image="imageAvira" date="Dimanche 7 août 2022" />
          <ArtisteCard
            alt="Portrait de l'artiste Speaker Honey"
            nom="Speaker Honey"
            :image="imageSpeaker_Honey"
            date="Dimanche 7 août 2022"
          />
        </div>
      </div>
    </div>
    <div class="mb-32 flex flex-col gap-7 px-5">
      <div class="flex justify-start">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
          EDM<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
        </h2>
      </div>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
        <ArtisteCard alt="Portrait de l'artiste Paris blohm" nom="Paris blohm" :image="imageParis_Blohm" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Tom Swoon" nom="Tom Swoon" :image="imageTom_Swoon" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Madeon" nom="Madeon" :image="imageMadeon" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Jai wolf" nom="Jai wolf" :image="imageJai_Wolf" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Alesso" nom="Alesso" :image="imageAlesso" date="Dimanche 7 août 2022" />
      </div>
    </div>
    <div class="mb-32 flex flex-col gap-7 px-5">
      <div class="flex justify-start">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
          Trance music<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
        </h2>
      </div>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
        <ArtisteCard alt="Portrait de l'artiste Hypaton" nom="Hypaton" :image="imageHypaton" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Steve Dekay" nom="Steve Dekay" :image="imageSteve_Dekay" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Rinaly" nom="Rinaly" :image="imageRinaly" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Kaspar" nom="Kaspar" :image="imageKaspar" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Sarah Landry" nom="Sarah Landry" :image="imageSarah_Landry" date="Dimanche 7 août 2022" />
      </div>
    </div>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../components/HeroSec.vue";
import ArtisteCard from "../components/ArtisteCard.vue";
import Pieds from "../components/Pieds.vue";
import DropDownMenu from "../components/DropDownMenu.vue";
import imagePeyruis from "../assets/Peyruis.webp?url";
import imageKryptogram from "../assets/Kryptogram.jpeg?url";
import imageQrion from "../assets/Qrion.jpeg?url";
import imageAvira from "../assets/Avira.jpeg?url";
import imageSpeaker_Honey from "../assets/Speaker_Honey.jpeg?url";
import imageParis_Blohm from "../assets/Paris_Blohm.jpeg?url";
import imageTom_Swoon from "../assets/Tom_Swoon.jpeg?url";
import imageMadeon from "../assets/Madeon.jpeg?url";
import imageJai_Wolf from "../assets/Jai_Wolf.jpeg?url";
import imageAlesso from "../assets/Alesso.jpeg?url";
import imageHypaton from "../assets/Hypaton.jpeg?url";
import imageSteve_Dekay from "../assets/Steve_Dekay.jpeg?url";
import imageRinaly from "../assets/Rinaly.jpeg?url";
import imageKaspar from "../assets/Kaspar.jpeg?url";
import imageSarah_Landry from "../assets/Sarah_Landry.jpeg?url";

export default {
  data: function () {
    return {
      imagePeyruis,
      imageKryptogram,
      imageQrion,
      imageAvira,
      imageSpeaker_Honey,
      imageParis_Blohm,
      imageTom_Swoon,
      imageMadeon,
      imageJai_Wolf,
      imageAlesso,
      imageHypaton,
      imageSteve_Dekay,
      imageRinaly,
      imageKaspar,
      imageSarah_Landry,
    };
  },
  components: { HeroSec, ArtisteCard, Pieds, DropDownMenu },
};
</script>
