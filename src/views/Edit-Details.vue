<template>
  <div class="edit-details">
    <navBar></navBar>
    <div class="top">
        <!-- // <img :src="image" class="favItemPic"> -->
        <h2>{{ item }}</h2>
        
    </div>
    <router-link class="changePhotoOverlay editDetailsOverlay" :to="{name: 'edit-details-item', params: { item: favItemInfo.item, itemInfo: favItemInfo } }">
        <img src="@/assets/camera.png" class="overlayIcon">
        <h4>Change Photo</h4>
    </router-link>
    <!-- <pictureModal></pictureModal> -->
<!--     <div class="modalWidth" v-click-outside="closePopup">
      <button @click="openModal">Open Modal</button>
      <pictureModal v-model="modalOpen"></pictureModal>
    </div> -->

    <router-link class="changeItemOverlay editDetailsOverlay" :to="{name: 'edit-details-item', params: { item: favItemInfo.item, itemInfo: favItemInfo } }">
        <h4>Change Item Name</h4>
    </router-link>

<!--     <div class="modalWidth" v-click-outside="closeNamePopup">
      <button @click="openModal">Open Modal</button>
      <itemNameModal v-model="nameModalOpen"></itemNameModal>
    </div> -->

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
    <a class="changeMeasurementsOverlay editDetailsOverlay">
        <img src="@/assets/ruler.png" class="overlayIcon">
        <h4>Re-measure</h4>
    </a>
<!--     <div class="modalWidth" v-click-outside="closeMeasurePopup">
      <measureModal v-model="measureModalOpen"></measureModal>
    </div> -->
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
    <a class="changeInfoOverlay editDetailsOverlay">
        <img src="@/assets/pencil.png" class="overlayIcon">
        <h4>Edit Info</h4>
    </a>
<!--     <div class="modalWidth" v-click-outside="closeInfoPopup">
      <infoModal v-model="infoModalOpen"></infoModal>
    </div> -->
    <!-- <router-link to="/edit-details"><button>Edit Item</button></router-link> -->
    <router-link to="/details" class="delete">Delete Item</router-link>
    <router-link to="/details" class="bottomButtonWrapper"><button class="bottomButton">Save Item</button></router-link>
  </div>
</template>

<script>
import favItemMeasurements from '@/components/favItemMeasurements.vue'
// import pictureModal from '@/components/pictureModal.vue'
// import measureModal from '@/components/measureModal.vue'
// import infoModal from '@/components/infoModal.vue'
// import itemNameModal from '@/components/itemNameModal.vue'
import navBar from '@/components/navBar.vue'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default{
    name:'edit-details',
    props: {
      msg: String,
      itemInfo:Object,
      item:String
    },
    components: {
      // pictureModal,
      favItemMeasurements,
      // measureModal,
      // infoModal,
      // itemNameModal,
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
  },
    // methods: {
    //     openModal() {
    //         this.modalOpen = !this.modalOpen;
    //     },
    //     closePopup() {
    //       this.modalOpen = false;
    //     },
    //     close() {
    //       this.$emit("input", !this.value);
    //     },
    //     openMeasureModal() {
    //         this.measureModalOpen = !this.measureModalOpen;
    //     },
    //     closeMeasurePopup() {
    //       this.measureModalOpen = false;
    //     },
    //     openInfoModal() {
    //         this.infoModalOpen = !this.infoModalOpen;
    //     },
    //     closeInfoPopup() {
    //       this.infoModalOpen = false;
    //     },
    //     openNameModal() {
    //         this.nameModalOpen = !this.nameModalOpen;
    //     },
    //     closeNamePopup() {
    //       this.nameModalOpen = false;
    //     } 
    //   } 
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
</style>
