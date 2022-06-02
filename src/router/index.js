import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import LegaleView from '../views/LegaleView.vue'
import MonCompteView from '../views/MonCompteView.vue'

import CreateParticipant from '../views/participant/CreateView.vue'

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

    { path: '/createParticipant', name: 'CreateParticipant', component: CreateParticipant },

    { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFoundView },
    // ici les autre routes
  ]
})

export default router
