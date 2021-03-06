import { createRouter, createWebHistory } from 'vue-router'

// Fonction d'authentification
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-auth.js'

// Fonctions Firestore
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where
} from 'https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js'

import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import LegaleView from '../views/LegaleView.vue'
import MonCompteView from '../views/MonCompteView.vue'

import CreateParticipant from '../views/participant/CreateView.vue'
import UpdateParticipant from '../views/participant/UpdateView.vue'
import ListeParticipant from '../views/participant/ListeView.vue'
import DeleteParticipant from '../views/participant/DeleteView.vue'

import PageNotFoundView from '../views/PageNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/legale', name: 'Legale', component: LegaleView },
    { path: '/compte', name: 'MonCompte', component: MonCompteView },

    { path: '/createParticipant', name: 'CreateParticipant', component: CreateParticipant, beforeEnter: guard },
    { path: '/updateParticipant/:id', name: 'UpdateParticipant', component: UpdateParticipant, beforeEnter: guard },
    { path: '/participant', name: 'ListeParticipant', component: ListeParticipant },
    { path: '/deleteParticipant/:id', name: 'DeleteParticipant', component: DeleteParticipant, beforeEnter: guard },

    { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFoundView },
    // ici les autre routes
  ],
  scrollBehavior(to, from, savedPosition) {
    console.log("to", to)
    if (to.hash) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("2s apr??s...")
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        }, 200)
      })
    }
  },

})

// On cr???? un guard : Observateur (fonction) permettant de savoir si un utilisateur
// a le droit d'utiliser une route
// param??tres : to : d'o?? il vient, from o?? il veut aller, next o?? il doit aller apr??s contr??le
function guard(to, from, next) {
  // recherche utilisateur connect??
  getAuth().onAuthStateChanged(function (user) {
    if (user) {
      // User connect??
      console.log('router OK => user ', user);
      // Obtenir Firestore
      const firestore = getFirestore();
      // Base de donn??es (collection)  document participant
      const dbUsers = collection(firestore, "users");
      // Recherche du user par son uid
      const q = query(dbUsers, where("uid", "==", user.uid));
      onSnapshot(q, (snapshot) => {
        let userInfo = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        // userInfo ??tant un tableau, on r??cup??re
        // ses informations dans la 1?? cellule du tableau : 0
        let isAdmin = userInfo[0].admin;
        if (isAdmin) {
          // Utilisateur administrateur, on autorise la page/vue
          next(to.params.name);
          return;
        } else {
          // Utilisateur non administrateur, renvoi sur accueil
          alert("Vous n'avez pas l'autorisation pour cette fonction");
          next({ name: "AccueilView" });
          return;
        }
      })
    } else {
      // Utilisateur non connect??, renvoi sur accueil
      console.log('router NOK => user ', user);
      next({ name: "AccueilView" });
    }
  });
}

export default router
