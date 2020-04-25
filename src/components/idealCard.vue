<template>
  <div class="idealCard">
    <div class="picContainer">
      <img :src="image">
      <h3 class="chest">
        {{ chestAvg }}
        <span v-if="inches">"</span>
        <span v-else> cm</span>
      </h3>
      <h3 class="bust">
        {{ bustAvg }}
        <span v-if="inches">"</span>
        <span v-else> cm</span>
      </h3>
      <h3 class="waist">
        {{ waistAvg }}
        <span v-if="inches">"</span>
        <span v-else> cm</span>
      </h3>
      <h3 class="shoulderWidth">
        {{ shoulderWidthAvg }}
        <span v-if="inches">"</span>
        <span v-else> cm</span>
      </h3>
      <h3 class="shoulderLength">
        {{ shoulderLengthAvg }}
        <span v-if="inches">"</span>
        <span v-else> cm</span>
      </h3>

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
      bustAvg: '',
      waistAvg: '',
      shoulderWidthAvg: '',
      shoulderLengthAvg: '',
      currentUserName: '',
    }
  },
  created() {
      var that = this;
      var currentUserID = firebase.auth().currentUser.uid;
      var currentUserName = that.currentUserName;
      var favItems = that.favItems; 
      var chestAvg = that.chestAvg;
      var bustAvg = that.bustAvg; 
      var waistAvg = that.waistAvg;  
      var shoulderWidthAvg = that.shoulderWidthAvg;  
      var shoulderLengthAvg = that.shoulderLengthAvg;

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
              chestAvg = Number((chestAvg).toFixed(1));
              // console.log(chestAvg);
              that.chestAvg = chestAvg;
              // end chest

              // start bust
              var bustArray = [];
              for (var j = favItems.length - 1; j >= 0; j--) {
                // var plsWork = favItems[i];

                var bustArrayLength = bustArray.push(parseFloat(favItems[j].itemMeasurements.Bust));
              }
              var bustSum = bustArray.reduce(function(a, b){
                    return a + b;
                }, 0);
              var bustAvg = bustSum/bustArrayLength;
              bustAvg = Number((bustAvg).toFixed(1));
              // console.log(bustAvg);
              that.bustAvg = bustAvg;
              // end chest

              // start waist
              var waistArray = [];
              for (var p = favItems.length - 1; p >= 0; p--) {
                var waistArrayLength = waistArray.push(parseFloat(favItems[p].itemMeasurements.Waist));
              }
              var waistSum = waistArray.reduce(function(a, b){
                    return a + b;
                }, 0);
              var waistAvg = waistSum/waistArrayLength;
              waistAvg = Number((waistAvg).toFixed(1));
              // console.log(bustAvg);
              that.waistAvg = waistAvg;
              // end waist

              // start shoulderWidth
              var shoulderWidthArray = [];
              for (var q = favItems.length - 1; q >= 0; q--) {
                var shoulderWidthArrayLength = shoulderWidthArray.push(parseFloat(favItems[q].itemMeasurements.Shoulder_Width));
              }
              var shoulderWidthSum = shoulderWidthArray.reduce(function(a, b){
                    return a + b;
                }, 0);
              var shoulderWidthAvg = shoulderWidthSum/shoulderWidthArrayLength;
              shoulderWidthAvg = Number((shoulderWidthAvg).toFixed(1));
              // console.log(bustAvg);
              that.shoulderWidthAvg = shoulderWidthAvg;
              // end shoulderWidth

              // start shoulderLength
              var shoulderLengthArray = [];
              for (var m = favItems.length - 1; m >= 0; m--) {
                var shoulderLengthArrayLength = shoulderLengthArray.push(parseFloat(favItems[m].itemMeasurements.Shoulder_Length));
              }
              var shoulderLengthSum = shoulderLengthArray.reduce(function(a, b){
                    return a + b;
                }, 0);
              var shoulderLengthAvg = shoulderLengthSum/shoulderLengthArrayLength;
              shoulderLengthAvg = Number((shoulderLengthAvg).toFixed(1));
              // console.log(bustAvg);
              that.shoulderLengthAvg = shoulderLengthAvg;
              // end shoulderLength



              return favItems, chestAvg, bustAvg, waistAvg, shoulderWidthAvg, shoulderLengthAvg;
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      // console.log(favItems[0]);
      



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
.picContainer{
  max-height: 205px;
}
img{
  width:100%;
  padding:0px 20px;
  /*position: relative;*/
  /*top:180px;*/
  margin:0;

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
  display: inline-block;
  padding:0;
  margin:0;
  position: relative;
  max-width:35px;
}
.shoulderWidth{
  top:-191px;
  left: 7px;
}
.shoulderLength{
  top:-197px;
  left:-68px;
}
.chest{
  top:-160px;
  left:97px;
}
.bust{
  top:-145px;
  left:42px;
}
.waist{
  top:-110px;
  left:25px;
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