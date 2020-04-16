<template>
  <div class="edit-details">
    <navBar></navBar>
    <div class="top">
        <!-- // <img :src="image" class="favItemPic"> -->
        <form>
          <h2>
            <!-- <label for="Height">Height:</label> -->
            <input id="item" name="item" type="text" v-model="item" >
          </h2>
          <div class="overlay">
              <button to="/" class="save" v-on:click="editItemName">Save Info</button>
          </div>
        </form>
        <!-- <h2>{{ item }}</h2> -->
        
    </div>
<!--     <a class="changePhotoOverlay editDetailsOverlay">
        <img src="@/assets/camera.png" class="overlayIcon">
        <h4>Change Photo</h4>
    </a> -->
<!--     <a class="changeItemOverlay editDetailsOverlay">
        <h4>Change Item Name</h4>
    </a> -->

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
<!--     <a class="changeMeasurementsOverlay editDetailsOverlay">
        <img src="@/assets/ruler.png" class="overlayIcon">
        <h4>Re-measure</h4>
    </a> -->

    <div class="itemInfoWrapper">
      <div class="itemInfo">
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
<!--     <a class="changeInfoOverlay editDetailsOverlay">
        <img src="@/assets/pencil.png" class="overlayIcon">
        <h4>Edit Info</h4>
    </a> -->

    <!-- <router-link to="/details" class="delete">Delete Item</router-link> -->
    <router-link to="/details" class="bottomButtonWrapper"><button class="bottomButton">Save Item</button></router-link>
  </div>
</template>

<script>
import favItemMeasurements from '@/components/favItemMeasurements.vue'
import navBar from '@/components/navBar.vue'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default{
    name:'edit-details-item',
    props: {
      msg: String,
      itemInfo:Object,
      item:String
    },
    components: {
      favItemMeasurements,
      navBar
    },
    data(){
        return{
          favItemInfo:this.itemInfo,
          favItems: [],
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
              var favItems = doc.data().favItems;
              that.favItems = favItems;
              return favItems;
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
      var itemRef = db.collection("users").doc(currentUserID);
            console.log(itemRef);
  },
  methods : {
    editItemName: function(e) {
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
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });

            //  docRef.update({
            //   favItems: 
            //       {
            //         item: that.item,
            //       }
                
            // })
            // .then(function() {
            //     alert("Your changes have been saved!");
            //     that.$router.push('/');

            // })
            // .catch(function(error) {
            //     alert("Error writing document: ", error);
            // });
      e.preventDefault();
    }
  },
}
</script>

<style scoped>
.edit-details{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.measurements{
    display: flex;
    flex-direction: row;
    width: 100%;
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
}
.top{
    background-image: url('/assets/scrunchy-top.jpg');
    background-repeat: no-repeat;
    height:300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size:cover;
    width:100%;
}
.itemInfo{
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
.editDetailsOverlay{
  background-color: rgba(4,148,252,.66);
  position: absolute;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  padding:10px 0px;
  left: 0;
}
.changePhotoOverlay{
  top:23%;
}
.changeItemOverlay{
  top:41%;
  padding:0px 0px;
}
.changeMeasurementsOverlay{
  top:58%;
}
.changeInfoOverlay{
  top:74%;
}
.editDetailsOverlay h4{
  color:#ffffff;
  margin:10px 0px;
}
.overlayIcon{
  width: 40px;
}
.modalWidth{
  width:100%;
}
.delete{
  margin-top:20px;
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
button.save{
  background-color: #0494FC;
  /*width:100%;*/
  font-size: 20px;
  border:none;
  border-radius: 5px;
  color:#ffffff;
  padding:15px 30px;
  position: absolute;
  margin-top: -25px;

}
.overlay{
  background-color: rgba(205,233,253,.66);
  width:100vw;
  height:50%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 100;
}
h2 input{
    background-color: #CDE9FD;
    /*width:100%;*/
    /*padding:15px;*/
    /*padding-left: 10%;*/
    color:#2c3e50;
    font-weight: 400;
    font-size:22px;
    margin:0;
    border:none;
    display: inline;
    text-decoration: underline;
}
textarea:focus, input:focus, select:focus{
    outline: none;
}
</style>
