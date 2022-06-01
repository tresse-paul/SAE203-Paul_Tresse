import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCIl4El67nnKvnmHiTTbGmkeVdrBjobKWc",
    authDomain: "electronic-palace-festival.firebaseapp.com",
    projectId: "electronic-palace-festival",
    storageBucket: "electronic-palace-festival.appspot.com",
    messagingSenderId: "26603941493",
    appId: "1:26603941493:web:764a640371cead3723d23c",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
