<template>
  <HeroSec>Contact</HeroSec>
  <div class="px-5 xl:px-32">
    <div class="flex flex-col gap-20">
      <div class="flex flex-col gap-7">
        <p class="font-barlow text-gray-50 lg:text-xl">
          Pour nous <strong>contacter</strong>, envoyer un mail à l’adresse <strong>festival@epf.fr</strong> Nous répondons dans les plus
          brefs délais. Merci de votre compréhension.
        </p>
        <p class="font-barlow text-gray-50 lg:text-xl">
          Il est également possible de nous envoyer un message directement via <strong>le formulaire ci-dessous</strong>.
        </p>
      </div>
      <div class="flex flex-col gap-7"></div>
    </div>
    <form class="mb-32">
      <div class="mb-6">
        <label for="Prenom" class="mb-2 block text-xl font-bold text-gray-50 dark:text-gray-50 md:text-2xl">Prénom</label>
        <input
          type="text"
          class="
            dark:shadow-sm-light
            block
            w-full
            rounded-lg
            border border-gray-300
            bg-gray-50
            p-2.5
            text-gray-900
            shadow-sm
            focus:border-red-500 focus:ring-red-500
            dark:border-gray-600
            dark:bg-gray-50
            dark:text-gray-1000
            dark:placeholder-gray-400
            dark:focus:border-red-500
            dark:focus:ring-red-500
          "
          placeholder="Pierre"
          required
        />
      </div>
      <div class="mb-6">
        <label for="Nom" class="mb-2 block text-xl font-bold text-gray-50 dark:text-gray-50 md:text-2xl">Nom</label>
        <input
          type="text"
          class="
            dark:shadow-sm-light
            block
            w-full
            rounded-lg
            border border-gray-300
            bg-gray-50
            p-2.5
            text-gray-900
            shadow-sm
            focus:border-red-500 focus:ring-red-500
            dark:border-gray-600
            dark:bg-gray-50
            dark:text-gray-1000
            dark:placeholder-gray-400
            dark:focus:border-red-500
            dark:focus:ring-red-500
          "
          placeholder="Adezinger"
          required
        />
      </div>
      <div class="mb-6">
        <label for="email" class="mb-2 block text-xl font-bold text-gray-50 dark:text-gray-50 md:text-2xl">Votre Email</label>
        <input
          type="email"
          class="
            dark:shadow-sm-light
            block
            w-full
            rounded-lg
            border border-gray-300
            bg-gray-50
            p-2.5
            text-gray-900
            shadow-sm
            focus:border-red-500 focus:ring-red-500
            dark:border-gray-600
            dark:bg-gray-50
            dark:text-gray-1000
            dark:placeholder-gray-400
            dark:focus:border-red-500
            dark:focus:ring-red-500
          "
          placeholder="name@email.com"
          required
        />
      </div>
      <div class="mb-6">
        <label for="message" class="mb-2 block text-xl font-bold text-gray-50 dark:text-gray-50 md:text-2xl">Message</label>
        <textarea
          class="
            dark:shadow-sm-light
            block
            h-40
            w-full
            rounded-lg
            border border-gray-300
            bg-gray-50
            p-2.5
            text-gray-900
            shadow-sm
            focus:border-red-500 focus:ring-red-500
            dark:border-gray-600
            dark:bg-gray-50
            dark:text-gray-1000
            dark:placeholder-gray-400
            dark:focus:border-red-500
            dark:focus:ring-red-500
          "
          placeholder="Écrivez ici votre message..."
          required
        />
      </div>
      <div class="mb-6 flex items-start">
        <div class="flex h-5 items-center">
          <p class="text-xs text-gray-50">
            En envoyant un message, vous acceptez notre <strong>Politique de confidentialité</strong> ainsi que nos
            <strong>Conditions d’utilisations</strong>.
          </p>
        </div>
      </div>
      <div class="mb-6 flex items-start">
        <div class="flex h-5 items-center">
          <input
            id="terms"
            type="checkbox"
            value=""
            class="
              focus:ring-3
              h-4
              w-4
              rounded
              border border-gray-300
              bg-gray-50
              focus:ring-red-500
              dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-red-500
            "
            required
          />
        </div>
        <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-50"
          >En cochant cette case, vous acceptez de recevoir des mails de notre newsletter.</label
        >
      </div>
      <div class="flex justify-center">
        <button type="submit">
          <bouton>Envoyer</bouton>
        </button>
      </div>
    </form>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../components/HeroSec.vue";
import Pieds from "../components/Pieds.vue";
import bouton from "../components/bouton.vue";

export default {
  components: { HeroSec, Pieds, bouton },
};
</script>