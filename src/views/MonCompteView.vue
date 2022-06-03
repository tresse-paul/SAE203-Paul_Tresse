<template>
  <HeroSec>Connexion</HeroSec>
  <div class="mb-32 flex w-screen items-center gap-52 px-5 xl:px-32">
    <div class="flex flex-col gap-20">
      <h2 class="text-4xl font-bold text-gray-50">Se connecter</h2>
      <form @submit.prevent="onCnx" class="flex max-w-lg flex-col gap-8">
        <div class="flex flex-initial flex-col justify-center gap-2 font-barlow">
          <p class="text-xl text-gray-50">Email</p>
          <input
            v-model="user.email"
            class="rounded-lg bg-gray-50 text-gray-1000 focus:ring-red-500"
            type="email"
            required
            placeholder="abcd@mail.com"
          />
        </div>
        <div class="flex flex-initial flex-col justify-center gap-2 font-barlow">
          <p class="text-xl text-gray-50">Mot de passe</p>
          <input v-model="user.password" class="flex-auto rounded-lg bg-gray-50 text-gray-1000 focus:ring-red-500" :type="type" required />
        </div>
        <div role="alert" class="bg-red-300 p-3 text-center text-sm text-gray-1000">{{ message }}</div>
        <div class="flex justify-between gap-10">
          <button class="flex-auto rounded-lg bg-gray-50 py-2 px-4 text-xl text-gray-1000" type="submit">Connexion</button>
          <button class="flex-auto rounded-lg bg-red-500 py-2 px-4 text-xl text-gray-50" @click="onDcnx()">Deconnexion</button>
        </div>
      </form>
    </div>
    <div class="flex">
      <button class="flex h-10 items-center justify-center rounded-lg bg-gray-50 px-4 py-2 font-barlow text-lg text-gray-1000">
        <RouterLink to="/participant">Gérer les participants</RouterLink>
      </button>
    </div>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../components/HeroSec.vue";
import Pieds from "../components/Pieds.vue";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js";

import { emitter } from "../main.js";

export default {
  data() {
    return {
      user: {
        email: "",
        paswword: "",
      },
      message: null,
      view: false,
      type: "password",
      imageData: null,
    };
  },

  mounted() {
    let user = getAuth().currentUser;
    if (user) {
      this.user = user;
      this.message = "User déjà connecté :" + this.user.email;
    } else {
      this.message = "User non connecté :" + this.user.email;
    }
  },

  methods: {
    onCnx() {
      signInWithEmailAndPassword(getAuth(), this.user.email, this.user.password)
        .then((response) => {
          this.user = response.user;
          emitter.emit("connectUser", { user: this.user });
          this.message = "User connecté : " + this.user.email;
        })
        .catch((error) => {
          console.log("Erreur de connexion", error);
          this.message = "Erreur d'authentification";
        });
    },

    onDcnx() {
      signOut(getAuth())
        .then((response) => {
          this.message = "User non connecté";
          this.user = {
            email: null,
            paswword: null,
          };
          emitter.emit("deConnectUser", { user: this.user });
        })
        .catch((error) => {
          console.log("erreur déconnexion", error);
        });
    },

    affiche() {
      this.view = !this.view;
      if (this.view) {
        this.type = "text";
      } else {
        this.type = "password";
      }
    },
  },

  components: { HeroSec, Pieds },
};
</script>