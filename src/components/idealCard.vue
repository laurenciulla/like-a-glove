<template>
  <div class="idealCard">
    <div>
      <img :src="image">
      <h3 class="chest">{{ chestAvg }}<span v-if="inches">"</span>
        <span v-else> cm</span></h3>
      <!-- <h3 v-for="(value, name) in object" v-bind:class="name" v-bind:key ="name">
        {{ value }}<span v-if="inches">"</span>
        <span v-else> cm</span>
      </h3> -->
    </div>
    
    <h2>{{ item }}</h2>
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
      image:'./assets/ideal-top.png',
      object: {
          shoulderWidth: 10,
          shoulderLength: 2,
          chest: 3,
          bust: 32,
          waist: 28
      },
      inches:true,
      favItems: [],
      chestAvg: '',
      currentUserName: '',
    }
  },
  created() {
      var that = this;
      var currentUserID = firebase.auth().currentUser.uid;
      var currentUserName = that.currentUserName;
      var favItems = that.favItems; 
      var chestAvg = that.chestAvg;     

      var db = firebase.firestore();
      var docRef = db.collection("users").doc(currentUserID);

      docRef.get().then(function(doc) {
          if (doc.exists) {
            // var currentUserName = doc.data().name;
            // that.currentUserName = currentUserName;
              var favItems = doc.data().favItems;
              that.favItems = favItems;
              // start chest
              var chestArray = [];
              for (var i = favItems.length - 1; i >= 0; i--) {
                var plsWork = favItems[i];

                var chestArrayLength = chestArray.push(parseFloat(favItems[i].itemMeasurements.Chest));
              }
              var chestSum = chestArray.reduce(function(a, b){
                    return a + b;
                }, 0);
              var chestAvg = chestSum/chestArrayLength;
              console.log(chestAvg);
              that.chestAvg = chestAvg;
              // end chest
              return favItems, chestAvg;
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      // console.log(favItems[0]);
      
      var shoulderWidthAvg = 0;
      var shoulderLengthAvg = 0;
      var bustAvg = 0;
      var waistAvg = 0;
      // console.log(shoulderWidthAvg);


  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.idealCard{
  border:#CDE9FD 3px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width:170px;
  max-height: 240px;
}
img{
  width:100%;
  padding:0px 20px;
  position: relative;
  top:45px;
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
.shoulderWidth{
  top:-23px;
  left: 77px;
}
.shoulderLength{
  top:-57px;
  left:40px;
}
.chest{
  top:-127px;
  left:101px;
}
.bust{
  top:-75px;
  left:58px;
}
.waist{
  top:-71px;
  left:63px;
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