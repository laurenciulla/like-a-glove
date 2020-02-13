import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import '@firebase/firestore'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyCyr8TDpKzMo4goxp2kHujk29sJcjyP-JM",
  authDomain: "like-a-glove.firebaseapp.com",
  databaseURL: "https://like-a-glove.firebaseio.com",
  projectId: "like-a-glove",
  storageBucket: "like-a-glove.appspot.com",
  messagingSenderId: "511367690799",
  appId: "1:511367690799:web:d12f9fdf02f6cad280a4da",
  measurementId: "G-78HF26XZDF"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  firebase,
  render: h => h(App)
}).$mount('#app')
