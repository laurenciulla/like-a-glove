<template>
  <div class="about">
    <navBar></navBar>
    <!-- <div class="top" :style="styles"> -->
    <div class="top">
         <img :src="favItemInfo.image" class="favItemPic">
          
    </div>
    <h2>{{ itemTitle }}</h2>
    <div class="measurements">
        <div class="left">
            <h1>Measurements</h1>
            <ul>
              <li  v-for="(value, name) in favItemInfo.itemMeasurements" v-bind:key="name">
                {{ name }}: {{ value }}<span class="tiny-in" v-if="inches"> in</span>
                <span v-else> cm</span>
              </li>
            </ul>
        </div>
        <div class="right">
         <favItemMeasurements v-bind:itemInfo = "favItemInfo"></favItemMeasurements>
        </div>
    </div>
    <div class="itemInfoWrapper">
      <div class="item-Info">
          <h1>Item Info</h1>
          <ul class="info">
                <li>
                  Store: {{ favItemInfo.info.Store }}
                </li>
                <li>
                  Fabric: {{ favItemInfo.info.Fabric }}
                </li>
                <li>
                  Style: {{ favItemInfo.info.Style }}
                </li>
                <li>
                  Colors: <ul  v-for="(value, color) in favItemInfo.info.Colors" v-bind:key="color" class="color-list">
                <li v-if="value" class="color-style">{{ color }}</li>
                    </ul>
                </li>
                <li>
                  Fit: <span v-if="favItemInfo.info.Fit <= 33">Loose-Fitting</span>
                      <span v-if="favItemInfo.info.Fit > 33 && favItemInfo.info.Fit < 66">Average</span>
                      <span v-if="favItemInfo.info.Fit >= 66">Form-Fitting</span>
                </li>
              </ul>
      </div>
    </div>
    <router-link :to="{name: 'edit-details', params: { index:itemIndex } }"><button>Edit Item</button></router-link>
    <router-link to="/details">Delete Item</router-link>
    <router-link to="/" class="bottomButtonWrapper"><button class="bottomButton">Done</button></router-link>
  </div>
</template>
<script>
import favItemMeasurements from '@/components/favItemMeasurements.vue'
import navBar from '@/components/navBar.vue'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default{
    name:'Details',
    props: {
      msg: String,
      itemInfo:Object,
      //item:String,
      itemMeasurements:Object,
      index:String,
      image:String
    },
    components:{
      favItemMeasurements,
      navBar
    },
    data(){
        return{
          favItemInfo:{},

          favItemIndex:this.index,
          //index:this.index,
          favItems: [],
          inches:true,
          itemIndex:0,
          itemTitle:"Sample Title",
          itemImgSrc: this.image,
          styles: {
            // 'background-image': 'url("' + itemImgSrc + '")',
          },
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
              that.itemIndex = that.index;
              that.itemTitle = favItems[that.index].item;
              // that.itemImgSrc = favItems[that.index].image;
              that.favItemInfo = favItems[that.index];
              return favItems;
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
  },
}
</script>
<style scoped>
.about{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.measurements{
    display: flex;
    flex-direction: row;
    width: 100%;
    background-color: white;
}
.tiny-in{
  font-size: 16px;
}
h2{
    background-color: #CDE9FD;
    width:100%;
    padding:15px;
    padding-left: 10%;
    color:#2c3e50;
    font-weight: 400;
    font-size:22px;
    margin:0;
}
.favItemPic{
    width:100%;
    margin:0;
    z-index: -1;
    /*margin-top:100px;*/
}
.top{
    /*background-image: url('/assets/scrunchy-top.jpg');*/
    background-repeat: no-repeat;
    max-height:300px;
    /*height:300px;*/
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-size:cover;
    width:100%;
    /*margin-top:200px;*/
}
.item-Info{
    margin-left: 5%;
    width: 100%;
}
.itemInfoWrapper{
  width:90%;
}
.info{
    list-style: none;
      display: inline-grid;
      grid-template-rows: repeat(3, auto);
      grid-auto-flow: column;
}
.info li{
    margin-right:30px;
}
button{
  background-color: #0494FC;
  color:#ffffff;
  font-size: 20px;
  border:none;
  border-radius: 5px;
  padding:15px 60px;
  margin:20px 0px;
}
a{
    text-decoration: none;
}
a:visited{
    text-decoration: none;
    color:black;
}
router-link{
    width:70%;
}
.bottomButton{
    width:100%;
    border-radius: 0;
    padding:20px;
    display: block;
    margin:0;
    margin-top:20px;
}
.bottomButtonWrapper{
  width:100%;
}
.color-list{
  list-style: none;
  display: inline-block;
}
li.color-style{
  text-transform: capitalize;
  display:inline;
  margin-right: 5px;
}
</style>