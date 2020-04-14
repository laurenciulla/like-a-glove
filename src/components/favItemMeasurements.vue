<template>
  <div class="favItemMeasurements">
    <div>
      <img :src="image">
      <h3 v-for="(value, name) in favItemInfo.itemMeasurements" v-bind:class="name" v-bind:key ="name">
        {{ value }}<span v-if="inches">"</span>
        <span v-else> cm</span>
      </h3>
    </div>
  
  </div>
  
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default {
  name: 'favItemMeasurements',
  props: {
    msg: String,
    itemInfo:Object
  },
  data(){
    return {
      item: 'Top',
      image:'./assets/ideal-top.png',
      // object: {
      //     shoulderWidth: this.itemInfo.itemMeasurements.Shoulder_Width,
      //     shoulderLength: 2,
      //     chest: 3,
      //     bust: 32,
      //     waist: 28
      // },
      inches:true,
      favItemInfo:this.itemInfo,
          favItems: [],
    }
  },
      created() {

      
      var that = this;
      var currentUserID = firebase.auth().currentUser.uid;
      var currentUserName = that.currentUserName;
      var favItems = that.favItems;
      

      var db = firebase.firestore();
      var docRef = db.collection("users").doc(currentUserID);

      docRef.get().then(function(doc) {
          if (doc.exists) {
              var favItems = doc.data().favItems;
              that.favItems = favItems;
              // for (var i = favItems.length - 1; i >= 0; i--) {
              //   console.log(favItems[i].item); 
              // }
              return favItems;
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      // console.log(currentUserName);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.favItemMeasurements{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width:170px;
  max-height: 210px;
}
img{
  width:100%;
  padding:0px 20px;
  position: relative;
  top:180px;
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
.Shoulder_Width{
  top:-114px;
  left: 77px;
}
.Shoulder_Length{
  top:-90px;
  left:40px;
}
.Chest{
  top:-23px;
  left:101px;
}
.Bust{
  top:28px;
  left:58px;
}
.Waist{
  top:-69px;
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