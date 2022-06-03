<template>
  <HeroSec />
  <div class="mb-32 px-5 xl:px-32">
    <form class="flex flex-col items-center gap-7" enctype="multipart/form-data" @submit.prevent="updateParticipant">
      <div class="flex flex-col gap-7">
        <div class="flex justify-center">
          <h2 class="font-work-sans text-3xl font-bold text-gray-50">Mise à jour participant</h2>
        </div>

        <div class="px-5xl:px-32">
          <div class="flex-col items-center gap-28 md:flex">
            <div>
              <div>
                <img class="h-64 w-64 object-cover" :src="imageData" />
              </div>
            </div>

            <div class="col-6">
              <div clas>
                <div>
                  <span class="text-xl font-bold text-gray-50">Photo</span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <input type="file" class="flex text-gray-50" ref="file" id="file" @change="previewImage" />
                  <label class="text text-gray-50" for="file">Sélectionner l'image</label>
                </div>
              </div>
              <br />
              <div class="flex flex-col gap-2">
                <div>
                  <span class="text-xl font-bold text-gray-50">Nom</span>
                </div>
                <input
                  class="h-10 rounded-lg px-3 active:ring-red-500"
                  placeholder="Nom de la personne"
                  v-model="participant.nom"
                  required
                />
              </div>
              <br />
              <div class="flex flex-col gap-2">
                <div>
                  <span class="text-xl font-bold text-gray-50">Genre de musique</span>
                </div>
                <select class="h-10 rounded-lg px-3 active:ring-red-500" v-model="participant.genre">
                  <option selected disabled>Sélectionner le genre de musique produite</option>
                  <option v-for="genre in listeGenre" :key="genre.libelle">
                    {{ genre.libelle }}
                  </option>
                </select>
              </div>
              <br />
              <div class="flex flex-col gap-2">
                <div>
                  <span class="text-xl font-bold text-gray-50">Pays</span>
                </div>
                <input
                  class="h-10 rounded-lg px-3 active:ring-red-500"
                  placeholder="Pays d'origine de l'artiste"
                  v-model="participant.pays"
                  required
                />
              </div>
              <br />
              <div class="flex flex-col gap-2">
                <div>
                  <span class="text-xl font-bold text-gray-50">Date de concert</span>
                </div>
                <input
                  type="date"
                  class="flex h-10 flex-none rounded-lg px-3 active:ring-red-500"
                  v-model="participant.dateConcert"
                  format="dd/mm/yyyy"
                  required
                />
              </div>
              <br />
              <div class="flex flex-col gap-2">
                <div>
                  <span class="text-xl font-bold text-gray-50">Heure de début du concert</span>
                </div>
                <input
                  type="time"
                  class="flex h-10 flex-none rounded-lg px-3 active:ring-red-500"
                  v-model="participant.heureDebut"
                  format="dd/mm/yyyy"
                  required
                />
              </div>
              <br />
              <div class="flex flex-col gap-2">
                <div>
                  <span class="text-xl font-bold text-gray-50">biographie</span>
                </div>
                <textarea
                  class="h-32 rounded-lg px-3 active:ring-red-500"
                  placeholder="Biographie de l'artiste"
                  v-model="participant.biographie"
                  required
                />
              </div>
              <br />
              <div class="flex flex-col gap-2">
                <div>
                  <span class="text-xl font-bold text-gray-50">Réseau social</span>
                </div>
                <select class="h-10 rounded-lg px-3 active:ring-red-500" v-model="participant.res">
                  <option selected disabled>Sélectionner un réseau social</option>
                  <option v-for="reseau in listeReseau" :key="reseau.nom">
                    {{ reseau.nom }}
                  </option>
                </select>
              </div>
              <br />
              <div class="flex flex-col gap-2">
                <div>
                  <span class="text-xl font-bold text-gray-50">Lien du réseau social</span>
                </div>
                <input
                  class="h-10 rounded-lg px-3 active:ring-red-500"
                  placeholder="URL du reseau de l'artiste"
                  v-model="participant.idRes"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-between gap-20">
          <button type="submit" class="flex-auto rounded-lg bg-gray-200 px-4 py-2 font-barlow text-xl hover:bg-gray-50">Modifier</button>
          <button class="flex-auto rounded-lg border-2 border-red-500 bg-none px-4 py-2 font-barlow text-xl text-gray-50 hover:bg-red-500">
            <RouterLink to="/participant">Cancel</RouterLink>
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
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Storage
import { getStorage, ref, getDownloadURL, uploadString, deleteObject } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-storage.js";

export default {
  components: { HeroSec, Pieds },
  name: "UpdateView",
  data() {
    return {
      imageData: null, // Image prévisualisée
      listeGenre: [], // Liste des pays pour la nationalité du participant
      listeReseau: [], // Liste des pays pour la nationalité du participant
      participant: {
        // Le participant à créer
        nom: null, // son nom
        genre: null, //Genre de musique produite
        photo: null, // sa photo (nom du fichier)
        dateConcert: null, //la date de son concert
        heureDebut: null, //heure de début du concert
        biographie: null, //biographie de l'artiste
        nationalite: null, // sa nationalité
        idRes: null,
      },

      refParticipant: null, // Référence du participant à modifier
      imgModifiee: false, // Indique si l'image du participant a été modifiée, par défaut : non
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
    // Appel de la liste des pays
    this.getReseau();
    this.getGenre();
  },

  methods: {
    async getReseau() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document pays
      const dbReseau = collection(firestore, "reseau");
      // Liste des participants triés
      const q = query(dbReseau, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeReseau = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },

    async getGenre() {
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de données (collection)  document reseau
      const dbGenre = collection(firestore, "Genre");
      // Liste des participants triés
      // query permet de faire une requête sur Firebase
      // notement pour filtrer, trier ... des données
      //orderBy permet de préciser sur quel élément trier, et dans quel ordre
      // ici le nom du réseau par ordre croissant (asc)
      const q = query(dbGenre, orderBy("libelle", "asc"));
      // Récupération de la liste des pays à partir de la query
      // La liste est synchronisée
      await onSnapshot(q, (snapshot) => {
        this.listeGenre = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("Liste des genres de musique", this.listeGenre);
      });
    },

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
          this.imageData = url;
        })
        .catch((error) => {
          console.log("erreur downloadUrl", error);
        });
    },

    previewImage: function (event) {
      // Mise à jour de la photo du participant
      this.file = this.$refs.file.files[0];
      // Récupérer le nom du fichier pour la photo du participant
      this.participant.photo = this.file.name;
      // Si cette fonction s'exécute, c'est que l'image est modifiée
      this.imgModifiee = true;
      // Reference to the DOM input element
      // Reference du fichier à prévisualiser
      var input = event.target;
      // On s'assure que l'on a au moins un fichier à lire
      if (input.files && input.files[0]) {
        // Creation d'un filereader
        // Pour lire l'image et la convertir en base 64
        var reader = new FileReader();
        // fonction callback appellée lors que le fichier a été chargé
        reader.onload = (e) => {
          // Read image as base64 and set to imageData
          // lecture du fichier pour mettre à jour
          // la prévisualisation
          this.imageData = e.target.result;
        };
        // Demarrage du reader pour la transformer en data URL (format base 64)
        reader.readAsDataURL(input.files[0]);
      }
    },

    async updateParticipant() {
      // Si l'image a été modifiée
      if (this.imgModifiee) {
        // On supprime l'ancienne
        const storage = getStorage();
        // Référence du fichier
        let docRef = ref(storage, "participant/" + this.photoActuelle);
        // Suppression photo actuelle
        deleteObject(docRef);
        // création nouvelle photo
        // Référence de l'image à uploader
        docRef = ref(storage, "participant/" + this.participant.photo);
        await uploadString(docRef, this.imageData, "data_url").then((snapshot) => {
          console.log("Uploaded a base64 string", this.participant.photo);
        });
      }
      // Dans tous les cas on met à jour le participant dans Firestore
      const firestore = getFirestore();
      // Modification du participant à partir de son id
      await updateDoc(doc(firestore, "participant", this.$route.params.id), this.participant);
      // redirection sur la liste des participants
      this.$router.push("/participant");
    },
  },
};
</script>


