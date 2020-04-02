<template>
  <div class="idealCard">
    <div class="picture">
      <!-- <img :src="image"> -->
      <router-link to="/details"><button>View Details</button></router-link>
    </div>
    
    <h2>{{ favItems[0].item }}</h2>
  </div>
  
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default {
  name: 'favItemCard',
  props: {
    msg: String,
    favItems: 
      [{
        item:String,
        image: './assets/scrunchy-top.jpg'
      }]
    
  },
  data(){
    return {
      //favItems: [],
      //item: "",
      //image:'./assets/scrunchy-top.jpg',
      type:'top',
      info: {
        Colors: {
          red: "",
          orange: "",
          yellow: "",
          green: "",
          blue: "",
          purple: "",
          pink: "",
          white: "",
          black: "",
          silver: "",
          gold: ""
        },
        Fabric: "",
        Fit: "",
        Store: "",
        Style: ""
      },
      itemMeasurements: {
          Shoulder_Width: 10,
          Shoulder_Length: 2,
          Chest: 3,
          Bust: 32,
          Waist: 28
      },
      inches:true
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
              // var currentUserName = doc.data().name;
              // that.currentUserName = currentUserName;
              // return currentUserName;

              var favItems = doc.data().favItems;
              that.favItems = favItems;
              for (var i = favItems.length - 1; i >= 0; i--) {
                console.log(favItems[i].item); 
              }
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
button{
  background-color: #ffffff;
  font-size: 20px;
  border:none;
  border-radius: 5px;
  margin-bottom: 25px;
  
  padding:10px 20px;
}
router-link{
  width:90%;
}
.idealCard{
  border:#CDE9FD 3px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width:170px;
  height:240px;
  max-height: 200px;
  
}
.picture{
  background-image: url('/assets/scrunchy-top.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width:100%;
  height:inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
img{
  width:100%;
  padding:0px;
  position: relative;
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
  top:-38px;
  left: 77px;
}
.shoulderLength{
  top:-72px;
  left:40px;
}
.chest{
  top:-61px;
  left:101px;
}
.bust{
  top:-78px;
  left:58px;
}
.waist{
  top:-70px;
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