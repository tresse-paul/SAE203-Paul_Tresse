<template>
  <HeroSec />
  <div class="mx-5 mb-32 flex flex-col gap-12 xl:mx-32">
    <div>
      <h2
        class="flex-col items-center justify-between gap-5 font-work-sans text-3xl font-bold text-gray-50 md:flex md:flex-row md:text-5xl"
      >
        Liste des participants
        <span title="Créer un nouveau participant">
          <router-link to="/createParticipant">
            <button class="flex rounded-lg bg-gray-200 px-4 py-2 font-barlow text-xl text-gray-1000 hover:bg-gray-50">Créer +</button>
          </router-link>
        </span>
      </h2>
    </div>

    <div>
      <table>
        <tbody class="flex flex-col gap-7">
          <tr v-for="part in listeParticipant" :id="part.id" :key="part.id" class="h-max flex-col gap-6 md:flex md:flex-row">
            <img class="w-56 rounded-2xl object-cover" :src="part.photo" :alt="part.nom" />
            <div class="items-between flex flex-col gap-4">
              <td>
                <b class="font-work-sans text-3xl font-bold text-gray-50">{{ part.nom }}</b>
              </td>
              <td>
                <b class="font-barlow text-xl font-normal text-gray-50">{{ part.pays }}</b>
              </td>
              <td>
                <b class="font-barlow font-normal text-gray-50">{{ part.biographie }}</b>
              </td>
              <td>
                <a :href="part.idRes" class="font-barlow text-2xl text-red-300 hover:text-red-500"
                  ><button class="flex items-baseline gap-2 font-bold text-red-300 hover:text-red-500">
                    {{ part.res }} <Chevron class="fill-red-300 hover:fill-red-500" /></button
                ></a>
              </td>
              <td class="flex gap-3">
                <span title="Modifier le participant" class="mr-2">
                  <!-- Pour passer un paramètre dans la navigation :
                                On utilise le nom de la route
                                l'attribut params, permet de préciser le nom du paramètre (id) 
                                et sa valeur (part.id, id du participant) 
                                -->
                  <RouterLink :to="{ name: 'UpdateParticipant', params: { id: part.id } }">
                    <button class="flex rounded-lg bg-gray-200 px-4 py-2 font-barlow text-xl hover:bg-gray-50">Modifier</button>
                  </RouterLink>
                </span>
                <span title="Supprimer le participant" class="mr-2">
                  <RouterLink :to="{ name: 'DeleteParticipant', params: { id: part.id } }">
                    <button
                      class="flex rounded-lg border-2 border-red-500 bg-none px-4 py-2 font-barlow text-xl text-gray-50 hover:bg-red-500"
                    >
                      Supprimer
                    </button>
                  </RouterLink>
                </span>
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <Pieds />
</template>

<script>
import HeroSec from "../../components/HeroSec.vue";
import Pieds from "../../components/Pieds.vue";
import Eye from "../../components/icons/Eye.vue";
import Chevron from "../../components/icons/Chevron.vue";
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
  components: { HeroSec, Pieds, Eye, Chevron },

  Heroname: "ListeView",
  data() {
    return {
      listeParticipant: [], // Liste des participants
      listeGenre: [], //Liste des genres de musiques
    };
  },
  mounted() {
    // Montage de la vue
    // Appel de la liste des participants
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
      const q = query(dbPart, orderBy("nom", "asc"));
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
};
</script>


