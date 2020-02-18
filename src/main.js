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

let app;
firebase.auth().onAuthStateChanged(user => {
  // this stuff just makes the console work idk
        /* eslint-disable no-debugger, no-console */
        var db = firebase.firestore();

        // gets all users
        db.collection("users").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });
  // end this stuff just makes the console work idk
  // i am console logging just to make the no-unused-vars error shut up
  console.log(user);
  if(!app) {
    app = new Vue({
      router,
      firebase,
      render: h => h(App)
    }).$mount('#app')
  }
})





