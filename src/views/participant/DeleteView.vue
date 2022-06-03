<template>
  <HeroSec />
  <div class="mb-32 px-5 xl:px-32">
    <form class="flex flex-col items-center gap-7" enctype="multipart/form-data" @submit.prevent="deleteParticipant">
      <div class="flex flex-col gap-7">
        <div class="flex justify-center">
          <h2 class="font-work-sans text-3xl font-bold text-gray-50">Suppresion artiste</h2>
        </div>

        <div class="px-5xl:px-32">
          <div class="flex flex-col items-center gap-5 md:flex">
            <div>
              <img class="h-64 w-64 object-cover" :src="photoActuelle" />
            </div>
            <div>
              <span class="font-work-sans text-2xl font-bold text-gray-50">{{ participant.nom }}</span>
            </div>
            <div>
              <div>
                <span class="font-barlow text-xl text-gray-50">{{ participant.dateConcert }}</span>
              </div>
            </div>
            <div>
              <div>
                <span class="font-barlow text-xl text-gray-50">{{ participant.heureDebut }}</span>
              </div>
            </div>
          </div>
          <br />
          <h5 class="font-barlow text-gray-50" role="alert">Attention vous allez supprimer cet artiste, cette action est irréversible !</h5>
        </div>

        <div class="flex justify-between gap-20">
          <button class="flex-auto rounded-lg bg-gray-200 px-4 py-2 font-barlow text-xl hover:bg-gray-50">
            <RouterLink to="/participant">Cancel</RouterLink>
          </button>
          <button
            type="submit"
            class="flex-auto rounded-lg border-2 border-red-500 bg-none px-4 py-2 font-barlow text-xl text-gray-50 hover:bg-red-500"
          >
            Supprimer
          </button>
        </div>
      </div>
    </form>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../../components/HeroSec.vue";
import Pieds from "../../components/Pieds.vue";

// Bibliothèque Firestore : import des fonctions
import { getFirestore, doc, getDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import { getStorage, ref, getDownloadURL, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: { HeroSec, Pieds },
  name: "DeleteView",
  data() {
    return {
      participant: {
        // Le participant à créer
        nom: null, // son nom
        photo: null, // sa photo (nom du fichier)
        nationalite: null, // sa nationalité
      },

      refParticipant: null, // Référence du participant à modifier
      photoActuelle: null, // Photo actuelle du participant
    };
  },
  mounted() {
    // Montage de la vue
    // Récupération du id passé en paramètre
    // On utilise le id passé par la route
    // via la variable système $route de la vue
    console.log("id participant", this.$route.params.id);
    // Recherche participant concerné
    this.getParticipant(this.$route.params.id);
  },

  methods: {
    async getParticipant(id) {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document participant
      // Récupération sur Firestore du participant via son id
      const docRef = doc(firestore, "participant", id);
      // Référence du participant concerné
      this.refParticipant = await getDoc(docRef);
      // Test si le participant demandé existe
      if (this.refParticipant.exists()) {
        // Si oui on récupère ses données
        this.participant = this.refParticipant.data();
        // Mémorisation photoActuelle
        this.photoActuelle = this.participant.photo;
      } else {
        // Sinon simple message d'erreur
        this.console.log("Participant inexistant");
      }
      // Obtenir le Storage
      const storage = getStorage();
      // Référence de l'image du participant
      const spaceRef = ref(storage, "participant/" + this.participant.photo);
      // Récupération de l'url complète de l'image
      getDownloadURL(spaceRef)
        .then((url) => {
          // Mise à jour de l'image prévisualisée
          this.photoActuelle = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    async deleteParticipant() {
      const firestore = getFirestore();
      // Suppresion du participant
      await deleteDoc(doc(firestore, "participant", this.$route.params.id));

      // Suppresson de l'image
      const storage = getStorage();
      // Référence du fichier de la photo
      let docRef = ref(storage, "participant/" + this.participant.photo);
      // Suppression du fichier
      deleteObject(docRef);

      // redirection sur la liste des participants
      this.$router.push("/participant");
    },
  },
};
</script>

