<template>
  <div class="edit-details">
    <nav>
        <router-link to="/details"><img src="@/assets/back.png" class="back"></router-link>
        <img class="logo" alt="Like a Glove logo" src="@/assets/likeaglovelogo.png">
        <router-link to="/"><img src="@/assets/logout.png" class="logout"></router-link>
    </nav>
    <div class="top">
        <!-- // <img :src="image" class="favItemPic"> -->
        <h2>{{ item }}</h2>
        
    </div>
    <a @click="openModal" class="changePhotoOverlay editDetailsOverlay">
        <img src="@/assets/camera.png" class="overlayIcon">
        <h4>Change Photo</h4>
    </a>
    <!-- <pictureModal></pictureModal> -->
    <div class="modalWidth" v-click-outside="closePopup">
      <!-- <button @click="openModal">Open Modal</button> -->
      <pictureModal v-model="modalOpen"></pictureModal>
    </div>

    <a @click="openNameModal" class="changeItemOverlay editDetailsOverlay">
        <h4>Change Item Name</h4>
    </a>

    <div class="modalWidth" v-click-outside="closeNamePopup">
      <!-- <button @click="openModal">Open Modal</button> -->
      <itemNameModal v-model="nameModalOpen"></itemNameModal>
    </div>

    <div class="measurements">
        <div class="left">
            <h1>Measurements</h1>
            <ul>
              <li  v-for="(value, name) in object" v-bind:key="name">
                {{ name }}: {{ value }}<span v-if="inches">"</span>
                <span v-else> cm</span>
              </li>
            </ul>
        </div>
        <div class="right">
          <favItemMeasurements></favItemMeasurements>
        </div>
    </div>
    <a @click="openMeasureModal" class="changeMeasurementsOverlay editDetailsOverlay">
        <img src="@/assets/ruler.png" class="overlayIcon">
        <h4>Re-measure</h4>
    </a>
    <div class="modalWidth" v-click-outside="closeMeasurePopup">
      <measureModal v-model="measureModalOpen"></measureModal>
    </div>
    <div class="itemInfoWrapper">
      <div class="itemInfo">
          <h1>Item Info</h1>
          <ul class="info">
                <li v-bind:key="name" v-for="(value, name) in info">
                  {{ name }}: {{ value }}
                </li>
              </ul>
      </div>
    </div>
    <a @click="openInfoModal" class="changeInfoOverlay editDetailsOverlay">
        <img src="@/assets/pencil.png" class="overlayIcon">
        <h4>Edit Info</h4>
    </a>
    <div class="modalWidth" v-click-outside="closeInfoPopup">
      <infoModal v-model="infoModalOpen"></infoModal>
    </div>
    <!-- <router-link to="/edit-details"><button>Edit Item</button></router-link> -->
    <router-link to="/details" class="delete">Delete Item</router-link>
    <router-link to="/details" class="bottomButtonWrapper"><button class="bottomButton">Save Item</button></router-link>
  </div>
</template>

<script>
import favItemMeasurements from '@/components/favItemMeasurements.vue'
import pictureModal from '@/components/pictureModal.vue'
import measureModal from '@/components/measureModal.vue'
import infoModal from '@/components/infoModal.vue'
import itemNameModal from '@/components/itemNameModal.vue'
export default{
    name:'About',
    components: {
      pictureModal,
      favItemMeasurements,
      measureModal,
      infoModal,
      itemNameModal
    },
    data(){
        return{
            item: 'Scrunchy Top',
            image:'./assets/scrunchy-top.jpg',
            type:'top',
            object: {
              Shoulder_Width: 10,
              Shoulder_Length: 2,
              Chest: 3,
              Bust: 32,
              Waist: 28
            },
            info: {
                Store: 'Express',
                Colors: 'Pink',
                Style: 'Casual',
                Fabric: 'Cotton',
                Fit: "Form-Fitting"
            },
            inches:true,
            modalOpen: false,
            measureModalOpen: false,
            infoModalOpen: false,
            nameModalOpen: false

        }
    },
    methods: {
        openModal() {
            this.modalOpen = !this.modalOpen;
        },
        closePopup() {
          this.modalOpen = false;
        },
        close() {
          this.$emit("input", !this.value);
        },
        openMeasureModal() {
            this.measureModalOpen = !this.measureModalOpen;
        },
        closeMeasurePopup() {
          this.measureModalOpen = false;
        },
        openInfoModal() {
            this.infoModalOpen = !this.infoModalOpen;
        },
        closeInfoPopup() {
          this.infoModalOpen = false;
        },
        openNameModal() {
            this.nameModalOpen = !this.nameModalOpen;
        },
        closeNamePopup() {
          this.nameModalOpen = false;
        } 
      } 
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
  top:43%;
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
</style>
