<template>
  <HeroSec>Les artistes</HeroSec>
  <div class="xl:px-32">
    <div class="mb-32 flex flex-col gap-20">
      <div class="flex justify-between gap-9 px-5">
        <p class="font-barlow text-gray-50 lg:text-xl">
          Apprenez-en plus sur les artistes invité pour l’édition 2022 d’<strong>Electronic Palace Festival</strong>. Accédez à leurs
          <strong>réseaux sociaux</strong> et à leur profil <strong>Spotify</strong> en seulement quelques clics.
        </p>
      </div>
      <div class="flex flex-col gap-32 px-5">
        <div v-for="[genre, listeGenre] in participantParGenre" :key="genre" class="flex flex-col gap-7">
          <h2 class="relative mb-10 font-work-sans text-3xl font-bold uppercase text-gray-50 lg:text-5xl">
            {{ genre }}<span class="absolute left-0 bottom-0 -z-10 h-2.5 w-full bg-red-500"></span>
          </h2>
          <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(20rem,1fr))] gap-10">
            <ArtisteCard
              v-for="artiste in listeGenre"
              :key="artiste.id"
              :alt="`Portrait de l'artiste ${artiste.nom}.`"
              :nom="artiste.nom"
              :image="artiste.photo"
              :date="artiste.dateConcert"
              :heure="artiste.heureDebut"
              :id="artiste.id"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../components/HeroSec.vue";
import ArtisteCard from "../components/ArtisteCard.vue";
import Pieds from "../components/Pieds.vue";
import { groupBy } from "lodash";

// Bibliothèque Firestore : import des fonctions
import {
  getFirestore, // Obtenir le Firestore
  collection, // Utiliser une collection de documents
  onSnapshot, // Demander une liste de documents d'une collection, en les synchronisant
  query, // Permet d'effectuer des requêtes sur Firestore
  orderBy, // Permet de demander le tri d'une requête query
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Cloud Storage : import des fonctions
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  data: function () {
    return {
      listeParticipant: [], // Liste des participants
      listeGenre: [], //Liste des genres de musiques
    };
  },

  props: {
    genre: {
      type: String,
      required: true,
    },
  },
  computed: {
    participantParGenre() {
      let data = groupBy(this.listeParticipant, "genre");
      //debugger;
      console.log(data);
      return Object.entries(data).sort((a, b) => {
        if (a[0] === "House music") return -1;
        if (b[0] === "House music") return 1;
        if (a[0] === "Trance music") return 1;
        if (b[0] === "Trance music") return -1;
        return 0;
      });
    },
  },

  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
    // Appel de la liste des Genre
    this.getParticipants();
    this.getGenre();
  },
  methods: {
    async getParticipants() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      const dbPart = collection(firestore, "participant");
      // Liste des participants triés sur leur nom
      const q = query(dbPart, orderBy("genre", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeParticipant = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeParticipant.forEach(function (personne) {
          // Obtenir le Cloud Storage
          const storage = getStorage();
          // Récupération de l'image par son nom de fichier
          const spaceRef = ref(storage, "participant/" + personne.photo);
          // Récupération de l'url complète de l'image
          getDownloadURL(spaceRef)
            .then((url) => {
              // On remplace le nom du fichier
              // Par l'url complète de la photo
              personne.photo = url;
            })
            .catch((error) => {
              console.log("erreur downloadUrl", error);
            });
        });
      });
    },

    async getGenre() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document Genre
      const dbGenre = collection(firestore, "Genre");
      // Liste des genres triés sur leur libelle
      const q = query(dbGenre, orderBy("libelle", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeGenre = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        // Récupération des images de chaque participant
        // parcours de la liste
        this.listeGenre.forEach(function (genre) {});
      });
    },
  },
  components: { HeroSec, ArtisteCard, Pieds },
};
</script>
