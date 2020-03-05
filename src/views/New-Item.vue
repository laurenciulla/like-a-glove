<template>
  <div class="new-item">
    <navBar></navBar>
<!--     <nav>
        <router-link to="/"><img src="@/assets/back.png" class="back"></router-link>
        <img class="logo" alt="Like a Glove logo" src="@/assets/likeaglovelogo.png">
        <router-link to="/"><img src="@/assets/logout.png" class="logout"></router-link>
    </nav> -->
    <div class="new-item-wrapper">
      <h4>New Item</h4>
      <form class="editInfoForm">
        <div class="infoFormRow">
          <label for="Store">Item Name</label>
          <input type="text" name="itemName" v-model="item">
        </div>
        <div class="infoFormRow">
          <label for="Store">Store</label>
          <input type="text" name="Store" v-model="info.Store">
        </div>
        <div class="infoFormRow">
          <label for="Colors">Colors</label>
          <div class="colorCheckboxContainer">
            <span class="colorCheckboxVisible red"><input name="Red" type="checkbox" class="colorCheckbox" v-model="info.Colors.Red"></span>

            <span class="colorCheckboxVisible orange"><input name="Colors" type="checkbox" value="Orange" class="colorCheckbox" v-model="info.Colors.Orange"></span>

            <span class="colorCheckboxVisible yellow"><input name="Colors" type="checkbox" value="Yellow" class="colorCheckbox" v-model="info.Colors.Yellow"></span>

            <span class="colorCheckboxVisible green"><input name="Colors" type="checkbox" value="Green" class="colorCheckbox" v-model="info.Colors.Green"></span>

            <span class="colorCheckboxVisible blue"><input name="Colors" type="checkbox" value="Blue" class="colorCheckbox" v-model="info.Colors.Blue"></span>

            <span class="colorCheckboxVisible purple"><input name="Colors" type="checkbox" value="Purple" class="colorCheckbox" v-model="info.Colors.Purple"></span>

            <span class="colorCheckboxVisible pink"><input name="Colors" type="checkbox" value="Pink" class="colorCheckbox" v-model="info.Colors.Pink"></span>

            <span class="colorCheckboxVisible white"><input name="Colors" type="checkbox" value="White" class="colorCheckbox" v-model="info.Colors.White"></span>

            <span class="colorCheckboxVisible black"><input name="Colors" type="checkbox" value="Black" class="colorCheckbox" v-model="info.Colors.Black"></span>

            <span class="colorCheckboxVisible silver"><input name="Colors" type="checkbox" value="Silver" class="colorCheckbox" v-model="info.Colors.Silver"></span>

            <span class="colorCheckboxVisible gold"><input name="Colors" type="checkbox" value="Gold" class="colorCheckbox" v-model="info.Colors.Gold"></span>
          </div>          
        </div>
        <div class="infoFormRow">
          <label for="Style">Style</label>
          <select name="Style" v-model="info.styleSelected">
            <option value="casual">Casual</option>
            <option value="edgy">Edgy</option>
            <option value="classic">Classic</option>
            <option value="vintage">Vintage</option>
            <option value="bohemian">Bohemian</option>
          </select>
        </div>
        <div class="infoFormRow">
          <label for="Fit">Fit</label>
          <range-slider
            class="slider"
            min="10"
            max="100"
            step="1"
            value="50"
            v-model="sliderValue">
          </range-slider>
          <div class="fitLabels">
            <span>Loose</span>
            <span>Form-fitting</span>
          </div>
          
          <!-- <input type="text" name="Fit"> -->

        </div>
        <div class="infoFormRow">
          <label for="Fabric">Fabric</label>
          <select name="Fabric" v-model="info.fabricSelected">
            <option value="denim">Denim</option>
            <option value="leather">Leather</option>
            <option value="cotton">Cotton</option>
            <option value="suede">Suede</option>
            <option value="velvet">Velvet</option>
            <option value="silk">Silk</option>
          </select>
        </div>

        <button @click="openNewPictureModal" class="iconButton"><img src="@/assets/camera.png" class="overlayIconNew"><span class="buttontext">Add Photo</span></button>

        <div class="modalWidth" v-click-outside="closeNewPicturePopup">
          <!-- <button @click="openModal">Open Modal</button> -->
          <newPictureModal v-model="newPictureModalOpen" class="enterMeasurementsModal"></newPictureModal>
        </div>

        <button @click="openMeasureModal" class="iconButton"><img src="@/assets/ruler.png" class="overlayIconNew"><span class="buttontext">Measure</span></button>

        <div class="modalWidth" v-click-outside="closeMeasurePopup">
          <!-- <button @click="openModal">Open Modal</button> -->
          <measureModal v-model="measureModalOpen" class="measureModal"></measureModal>
        </div>

        <a class="cancel">Cancel</a>

        <button v-on:click="createNewItem" class="bottomButton-new">Save Item</button>
      </form>
      
    </div>
  </div>
</template>

<script>
import newPictureModal from '@/components/newPictureModal.vue'
import measureModal from '@/components/measureModal.vue'
import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'
import navBar from '@/components/navBar.vue'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default{
    name:'About',
    components:{
      RangeSlider,
      newPictureModal,
      measureModal,
      navBar
    },
    methods: {
        // closePopup() {
        //   this.modalOpen = false;
        // },
        openNewPictureModal() {
            this.newPictureModalOpen = !this.newPictureModalOpen;
        },
        closeNewPicturePopup() {
          this.newPictureModalOpen = false;
        },
        openMeasureModal() {
            this.measureModalOpen = !this.measureModalOpen;
        },
        closeMeasurePopup() {
          this.measureModalOpen = false;
        },
        createNewItem: function(e) {
            var that = this;
            /* eslint-disable no-debugger, no-console */
            var db = firebase.firestore();

            // identifying current user
            var currentUserID = firebase.auth().currentUser.uid;
            console.log(currentUserID);

            // getting user with current user's id
            var docRef = db.collection("users").doc(currentUserID);
                  e.preventDefault();


            docRef.update({
              favItems: firebase.firestore.FieldValue.arrayUnion(
                  {
                    item: that.item,
                    image: './assets/scrunchy-top.jpg',
                    type: 'top',
                    itemMeasurements: {
                      Shoulder_Width: "",
                      Shoulder_Length: "",
                      Chest: "",
                      Bust: "",
                      Waist: ""
                    },
                    info: {
                      Store: that.info.Store,
                      Colors: {
                        red: that.info.Colors.Red,
                        orange: that.info.Colors.Orange,
                        yellow: that.info.Colors.Yellow,
                        green: that.info.Colors.Green,
                        blue: that.info.Colors.Blue,
                        purple: that.info.Colors.Purple,
                        pink: that.info.Colors.Pink,
                        white: that.info.Colors.White,
                        black: that.info.Colors.Black,
                        silver: that.info.Colors.Silver,
                        gold: that.info.Colors.Gold,
                      },
                      Style: that.info.styleSelected,
                      Fabric: that.info.fabricSelected,
                      Fit: that.sliderValue
                    },
                    // sliderValue:50,
                  }
                )
            })
            .then(function() {
                alert("Your changes have been saved!");
                that.$router.push('/');

            })
            .catch(function(error) {
                alert("Error writing document: ", error);
            });
           
          }   
      },
    data(){
        return{
            item: '',
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
                Store: '',
                Colors: {
                  red: false,
                  orange: false,
                  yellow: false,
                  green: false,
                  blue: false,
                  purple: false,
                  pink: false,
                  white: false,
                  black: false,
                  silver: false,
                  gold: false
                },
                Style: '',
                Fabric: '',
                Fit: "Form-Fitting"
            },
            inches:true,
            sliderValue:50,
            newPictureModalOpen: false,
            measureModalOpen: false

        }
    }
}
</script>

<style scoped>
.new-item-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
button{
  background-color: #0494FC;
  color:#ffffff;
  font-size: 16px;
  border:none;
  border-radius: 5px;
  padding:15px 30px;
  margin:10px 0px;
  width: 80%;
}
.iconButton{
  padding:10px 30px;
  width:100%;
}
h4{
  margin:10px;
}
a{
  margin:10px;
}
form.editInfoForm{
  width: 80%;
}
.infoFormRow input, .infoFormRow select{
  border:2px #0494FC solid;
  border-radius: 5px;
  padding:8px;
  font-size: 16px;
  margin-bottom:5px;
  /*background-color: #ffffff;*/
}
.infoFormRow select{
  background-image: url('/assets/down-arrow.png');
  background-position: 97% 3%;
  background-repeat: no-repeat;
  background-size:contain;
  background-color: #ffffff;
}
.infoFormRow label{
  margin-right: 5px;
  font-size:15px;
  color: #2c3e50;
  margin:5px 0px;
}
.infoFormRow{
  display: flex;
  flex-direction: column;
}
select:focus, input:focus{
  outline: none;
}
.colorCheckboxContainer{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
}
input[type=checkbox] {
  /*visibility: hidden;*/
}
.colorCheckboxVisible{
  position: relative;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 5px;
  margin-bottom: 5px;
}
/*.colorCheckboxVisible:after{
  content:"";
  border:2px solid #0494FC;
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  display: block;
  border-radius: 5px;
}
.white:after{
  top:-1px;
  left: -1px;
}*/
.red{
  background-color: #FF2929;
}
.orange{
  background-color: #FF9D3B;
}
.yellow{
  background-color: #FFED64;
}
.green{
  background-color: #00C608;
}
.blue{
  background-color: #007CD6;
}
.purple{
  background-color: #A353FF;
}
.pink{
  background-color: #FF83A9;
}
.white{
  background-color: #ffffff;
  border:1px solid #000000;
}
.black{
  background-color: #000000;
}
.silver{
  background-color: #A7AEB4;
}
.gold{
  background-color: #B29700;
}

.slider{
  width:100%;
  padding:0;
}
span.range-slider-fill{
  background-color: #0494FC;
}
.fitLabels{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size:11px;
  color:#000000;
  margin:5px 0px;
}
.save{
  width:100%;
}
.overlayIconNew{
  width: 30px;
  /*display: block;*/
}
.buttontext{
  display: block;
  margin-top:5px;
}
.bottomButton-new{
    width:100%;
    border-radius: 0;
    padding:20px;
    display: block;
    margin:0;
    margin-top:20px;
    width:125%;
    margin-left: -12.5%;
}
.cancel{
  text-align: center;
  width: 100%;
  display: block;
}
.new-item-wrapper h4{
  margin-top:30px;
}
</style>
<style lang="scss">
$rail-fill-color: #0494FC !default;
.range-slider-fill {
  background-color: $rail-fill-color;
}
</style>
