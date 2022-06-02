<template>
  <div class="flex h-12 items-center justify-between rounded-full bg-gray-50 px-3.5 hover:-translate-y-1">
    <span class="h-3.5 w-3.5 rounded-full bg-red-500"></span>
    <!--<div v-for="participant in listeParticipant" :key="participant.id">-->
    <p class="font-barlow text-xl text-gray-1000">{{ nom }}</p>
    <!--</div>-->
    <Chevron class="fill-red-500" />
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";

import Chevron from "./icons/Chevron.vue";

export default {
  data() {
    return {
      listeParticipant: [],
    };
  },
  mounted() {
    //this.getParticipant();
  },
  //methods: {
  //async getParticipant() {
  //  const firestore = getFirestore();
  //  const dbParticipant = collection(firestore, "participant");
  //  const query = await getDocs(dbParticipant);
  //  query.forEach((doc) => {
  //    let participant = {
  //      id: doc.id,
  //      nom: doc.data().nom,
  //    };
  //    this.listeParticipant.push(participant);
  //  });
  //},
  //},

  components: { Chevron },
  props: {
    nom: String,
  },
};
</script>
