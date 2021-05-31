import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './Routes'
import store from './storage/store'
import firebase from "firebase/app";
import 'firebase/firestore';
import "firebase/auth";


Vue.use(VueRouter)

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAwGBINMKU4J9QuIveB-sKO-5iJAGKZlVY",
  authDomain: "vue-project-f69ed.firebaseapp.com",
  projectId: "vue-project-f69ed",
  storageBucket: "vue-project-f69ed.appspot.com",
  messagingSenderId: "841538276717",
  appId: "1:841538276717:web:a5304945d0915e95ffde64",
  measurementId: "G-EQ0KRVWWRY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

/*
router.beforeEach((to, from, next) => {
  console.log("to", to)
  console.log("from", from)
  console.log("next", next)
})
*/
