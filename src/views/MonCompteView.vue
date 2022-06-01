<template>
  <HeroSec>Connexion</HeroSec>
  <div class="mb-32 flex flex-col gap-20 px-5 xl:px-32">
    <h2 class="text-4xl font-bold text-gray-50">Se connecter</h2>
    <form @submit.prevent="onCnx()" class="flex max-w-lg flex-col gap-8">
      <div class="flex flex-initial flex-col justify-center gap-2 font-barlow">
        <p class="text-xl text-gray-50">Email</p>
        <input
          v-model="user.email"
          class="rounded-lg bg-gray-50 text-gray-1000 focus:ring-red-500"
          type="text"
          required
          placeholder="abcd@mail.com"
        />
      </div>
      <div class="flex flex-initial flex-col justify-center gap-2 font-barlow">
        <p class="text-xl text-gray-50">Mot de passe</p>
        <input v-model="user.password" class="flex-auto rounded-lg bg-gray-50 text-gray-1000 focus:ring-red-500" type="password" required />
      </div>
      <div role="alert" class="bg-red-300 p-3 text-center text-sm text-gray-1000">{{ message }}</div>
      <div class="flex justify-between">
        <button class="rounded-lg bg-gray-50 py-2 px-4 text-xl text-gray-1000" type="submit">Connexion</button>
        <button class="rounded-lg bg-red-500 py-2 px-4 text-xl text-gray-50" @click="onDcnx()">Deconnexion</button>
      </div>
    </form>
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
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";

export default {
  data() {
    return {
      user: {
        email: "",
        paswword: "",
      },
      message: null,
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
          console.log("user connecté", response.user);
          this.user = response.user;
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
          this.user = getAuth().currentUser;
          this.user = {
            email: null,
            paswword: null,
          };
          console.log("User deconnecté", this.user);
          this.message = "user deconnecté";
        })
        .catch((error) => {
          console.log("erreur déconnexion", error);
        });
    },
  },

  components: { HeroSec, Pieds },
};
</script>