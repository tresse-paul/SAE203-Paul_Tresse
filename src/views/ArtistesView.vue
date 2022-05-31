<template>
  <HeroSec>Les artistes</HeroSec>
  <div class="xl:px-32">
    <div class="mb-32 flex flex-col gap-20">
      <p class="px-5 font-barlow text-gray-50 lg:text-xl">
        Apprenez-en plus sur les artistes invité pour l’édition 2022 d’<strong>Electronic Palace Festival</strong>. Accédez à leurs
        <strong>réseaux sociaux</strong> et à leur profil <strong>Spotify</strong> en seulement quelques clics.
      </p>
      <div class="flex flex-col gap-7 px-5">
        <div class="flex justify-start">
          <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
            House music<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
          </h2>
        </div>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
          <ArtisteCard alt="Portrait de l'artiste Peyruis" nom="Peyruis" image="/src/assets/Peyruis.webp" date="Dimanche 7 août 2022" />
          <ArtisteCard
            alt="Portrait de l'artiste Kryptogram"
            nom="Kryptogram"
            image="/src/assets/Kryptogram.jpeg"
            date="Dimanche 7 août 2022"
          />
          <ArtisteCard alt="Portrait de l'artiste Qrion" nom="Qrion" image="/src/assets/Qrion.jpeg" date="Dimanche 7 août 2022" />
          <ArtisteCard alt="Portrait de l'artiste Avira" nom="Avira" image="/src/assets/Avira.jpeg" date="Dimanche 7 août 2022" />
          <ArtisteCard
            alt="Portrait de l'artiste Speaker Honey"
            nom="Speaker Honey"
            image="/src/assets/Speaker_Honey.jpeg"
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
        <ArtisteCard
          alt="Portrait de l'artiste Paris blohm"
          nom="Paris blohm"
          image="/src/assets/Paris_Blohm.jpeg"
          date="Dimanche 7 août 2022"
        />
        <ArtisteCard alt="Portrait de l'artiste Tom Swoon" nom="Tom Swoon" image="/src/assets/Tom_Swoon.jpeg" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Madeon" nom="Madeon" image="/src/assets/Madeon.jpeg" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Jai wolf" nom="Jai wolf" image="/src/assets/Jai_Wolf.jpeg" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Alesso" nom="Alesso" image="/src/assets/Alesso.jpeg" date="Dimanche 7 août 2022" />
      </div>
    </div>
    <div class="mb-32 flex flex-col gap-7 px-5">
      <div class="flex justify-start">
        <h2 class="relative z-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
          Trance music<span class="absolute -left-0 bottom-1 -z-10 h-2.5 w-full bg-red-500"></span>
        </h2>
      </div>
      <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
        <ArtisteCard alt="Portrait de l'artiste Hypaton" nom="Hypaton" image="/src/assets/Hypaton.jpeg" date="Dimanche 7 août 2022" />
        <ArtisteCard
          alt="Portrait de l'artiste Steve Dekay"
          nom="Steve Dekay"
          image="/src/assets/Steve_Dekay.jpeg"
          date="Dimanche 7 août 2022"
        />
        <ArtisteCard alt="Portrait de l'artiste Rinaly" nom="Rinaly" image="/src/assets/Rinaly.jpeg" date="Dimanche 7 août 2022" />
        <ArtisteCard alt="Portrait de l'artiste Kaspar" nom="Kaspar" image="/src/assets/Kaspar.jpeg" date="Dimanche 7 août 2022" />
        <ArtisteCard
          alt="Portrait de l'artiste Sarah Landry"
          nom="Sarah Landry"
          image="/src/assets/Sarah_Landry.jpeg"
          date="Dimanche 7 août 2022"
        />
      </div>
    </div>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../components/HeroSec.vue";
import ArtisteCard from "../components/ArtisteCard.vue";
import Pieds from "../components/Pieds.vue";

export default {
  components: { HeroSec, ArtisteCard, Pieds },
};
</script>
