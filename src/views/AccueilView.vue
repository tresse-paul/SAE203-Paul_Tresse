<template>
  <main>
    <Hero />
    <div class="xl:px-32">
      <div class="mb-32 flex flex-col gap-7">
        <h2 class="flex justify-center px-5 text-center font-work-sans text-3xl font-bold uppercase text-gray-50 md:text-5xl">
          La programmation
        </h2>
        <p class="px-5 text-center font-barlow text-gray-50 lg:text-xl">
          <strong>3 soirées, 3 ambiances</strong> électroniques. Vibrez au cœur d’Avignon avec les étoiles montantes des scènes House, EDM
          et Trance Music.
        </p>
        <CarouselHome :images="images" @deleteImage="handelDeleteImage" />
        <div class="flex justify-center px-5">
          <RouterLink to="/programmation"><bouton principal>Découvrir</bouton></RouterLink>
        </div>
      </div>
      <div class="mb-32 flex flex-col gap-7 px-5">
        <h2 class="flex justify-center text-center font-work-sans text-3xl font-bold uppercase text-gray-50 md:text-5xl">Les artistes</h2>
        <p class="text-center font-barlow text-gray-50 lg:text-xl">
          Laissez-vous emporter par les artistes <strong>les plus prometteurs</strong> venus des quatre coins du globe.
        </p>
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
          <ArtisteCard alt="Portrait de l'artiste Qrion" nom="Qrion" :image="imageQrion" date="Vendredi 5 août 2022" />
          <ArtisteCard alt="Portrait de l'artiste Madeon" nom="Madeon" :image="imageMadeon" date="Samedi 6 août 2022" />
          <ArtisteCard alt="Portrait de l'artiste Sarah Landry" nom="Sarah Landry" :image="imageSarah_Landry" date="Dimanche 7 août 2022" />
        </div>
        <div class="flex justify-center">
          <RouterLink to="/artistes"><bouton principal>Voir plus</bouton></RouterLink>
        </div>
      </div>
      <div class="mb-32 flex flex-col gap-7">
        <h2 class="flex justify-center text-center font-work-sans text-3xl font-bold uppercase text-gray-50 md:text-5xl">Le festival</h2>
        <figure class="relative">
          <img
            src="../assets/Palais_des_papes.jpg"
            alt="Photo de l'intérieur du Palais des Papes à Avignon"
            class="h-80 w-full object-cover"
          />
          <figcaption class="absolute top-0 left-0 h-80 w-full bg-shadow-card-top p-5">
            <p class="text-center font-barlow text-gray-50 lg:text-xl">
              <strong>Electronic Palace Festival</strong> garantie un week-end rententissant en vous transportant dans un univers à couper
              le souffle à l’intérieur du Palais des Papes d’Avignon.
            </p>
          </figcaption>
        </figure>
        <div class="flex justify-center">
          <RouterLink to="/festival"><bouton principal>Plus d'infos</bouton></RouterLink>
        </div>
      </div>
      <div class="mb-32 flex flex-col gap-7 px-5">
        <h2 class="flex justify-center text-center font-work-sans text-3xl font-bold uppercase text-gray-50 md:text-5xl">Des questions</h2>
        <p class="text-center font-barlow text-gray-50 lg:text-xl">
          Pour <strong>en savoir plus</strong> sur le festival, sur les artistes ou bien d’autres choses, contactez-nous via notre
          formulaire de contact. Abonnez-vous à notre newsletter pour ne rien rater de l’évènement.
        </p>
        <div class="flex justify-center">
          <RouterLink to="/contact"><bouton principal>Contacter</bouton></RouterLink>
        </div>
      </div>
    </div>
  </main>
  <Pieds />
</template>

<script>
import Hero from "../components/Hero.vue";
import Pieds from "../components/Pieds.vue";
import ArtisteCard from "../components/ArtisteCard.vue";
import bouton from "../components/bouton.vue";
import CarouselHome from "../components/CarouselHome.vue";
import imageQrion from "../assets/Qrion.jpeg?url";
import imageMadeon from "../assets/Madeon.jpeg?url";
import imageSarah_Landry from "../assets/Sarah_Landry.jpeg?url";
import CarouselHouse from "../assets/marcela-laskoski-YrtFlrLo2DQ-unsplash.jpg";
import CarouselEdm from "../assets/danny-howe-bn-D2bCvpik-unsplash.jpg";
import CarouselTrance from "../assets/antoine-j-A_0C42zmz1Q-unsplash.jpg";
import { defineComponent, ref } from "vue";

export default {
  data: function () {
    return {
      imageQrion,
      imageMadeon,
      imageSarah_Landry,
      CarouselHouse,
      CarouselEdm,
      CarouselTrance,
    };
  },
  components: { Hero, Pieds, ArtisteCard, bouton, CarouselHome },
  setup() {
    const _images = [
      { id: 1, url: CarouselHouse },
      { id: 2, url: CarouselEdm },
      { id: 3, url: CarouselTrance },
    ];
    const images = ref(_images);
    const handelDeleteImage = (index, number) => images.value.splice(index, 1);

    return { handelDeleteImage, images };
  },
};
</script>