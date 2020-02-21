<template>
  <div class="idealCard">
    <div>
      <img :src="image">
      <h3 v-for="(value, name) in measurements" v-bind:class="name" v-bind:key ="name">
        {{ value }}<span v-if="value"><span v-if="inches">"</span>
        <span v-else> cm</span></span>
      </h3>
    </div>
  </div>
  
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default {
  name: 'idealCard',
  props: {
    msg: String
  },
  data(){
    return {
      item: 'Top',
      image:'./assets/body-guide.png',
      measurements: {
          Height: "",
          Chest: "",
          Waist: "",
          Hip: "",
          LegLength: ""
      },
      inches:true
    }
  },
created() {
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.userID = firebase.auth().currentUser.uid;
    }
  },
  methods : {
    getUsers: function() {
            var that = this;
      /* eslint-disable no-debugger, no-console */
            var db = firebase.firestore();

            // identifying current user
            var currentUserID = firebase.auth().currentUser.uid;
            console.log(currentUserID);

            // getting user with current user's id
            var docRef = db.collection("users").doc(currentUserID);

            docRef.get().then(function(doc) {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    console.log(doc.data().email);
                    var currentUserEmail = doc.data().measurements;
                    that.measurements = currentUserEmail;
                    return currentUserEmail;
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
    }
  },

   mounted: function () {
    this.getUsers();
   
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.idealCard{
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: flex-end;*/
  width:170px;
  max-height: 240px;
}
img{
  width:100%;
  padding:0px 15px;
}
h2{
  font-size:18px;
  font-weight: 400;
  background-color:#CDE9FD;
  padding:10px 15px 8px 15px;
  margin:0;
}
h3{
  font-weight: 400;
  font-size:13px;
  position: relative;
}
.Height{
  top:-350px;
  left: 117px;
}
.Chest{
  top:-245px;
  left:50px;
}
.Waist{
  top:-334px;
  left:51px;
}
.Hip{
  top:-242px;
  left:51px;
}
.LegLength{
  top:-220px;
  left:5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>