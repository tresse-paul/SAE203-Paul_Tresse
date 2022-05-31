import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ProgrammationView from '../views/ProgrammationView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import FestivalView from '../views/FestivalView.vue'
import ContactView from '../views/ContactView.vue'
import LegaleView from '../views/LegaleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/programmation', name: 'Programmation', component: ProgrammationView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/legale', name: 'Legale', component: LegaleView },
    // ici les autre routes
  ]
})

export default router
