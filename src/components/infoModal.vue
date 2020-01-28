<template>
  <div class="infoModal" v-show="value">
    <div class="modal">
      <h4>Edit Item Info</h4>
      <form class="editInfoForm">
        <div class="infoFormRow">
          <label for="Store">Store</label>
          <input type="text" name="Store" value="Brandy Melville">
        </div>
        <!-- <div class="infoFormRow">
          <label for="Colors">Colors</label>
          <select name="Colors">
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="silver">Silver</option>
            <option value="gold">Gold</option>
          </select>
        </div> -->
        <div class="infoFormRow">
          <label for="Colors">Colors</label>
          <div class="colorCheckboxContainer">
            <span class="colorCheckboxVisible red"><input name="Colors" type="checkbox" value="Red" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible orange"><input name="Colors" type="checkbox" value="Orange" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible yellow"><input name="Colors" type="checkbox" value="Yellow" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible green"><input name="Colors" type="checkbox" value="Green" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible blue"><input name="Colors" type="checkbox" value="Blue" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible purple"><input name="Colors" type="checkbox" value="Purple" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible pink"><input name="Colors" type="checkbox" value="Pink" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible white"><input name="Colors" type="checkbox" value="White" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible black"><input name="Colors" type="checkbox" value="Black" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible silver"><input name="Colors" type="checkbox" value="Silver" class="colorCheckbox"></span>

            <span class="colorCheckboxVisible gold"><input name="Colors" type="checkbox" value="Gold" class="colorCheckbox"></span>
          </div>          
        </div>
        <div class="infoFormRow">
          <label for="Style">Style</label>
          <select name="Style">
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
          <select name="Fabric">
            <option value="denim">Denim</option>
            <option value="leather">Leather</option>
            <option value="cotton">Cotton</option>
            <option value="suede">Suede</option>
            <option value="velvet">Velvet</option>
            <option value="silk">Silk</option>
          </select>
        </div>

        <button type="submit" to="/" class="save">Save Info</button>
      </form>
      <a>Cancel</a>
    </div>
  </div>
  
</template>

<script>
import RangeSlider from 'vue-range-slider'

import 'vue-range-slider/dist/vue-range-slider.scss'

export default {
  data() {
    return{
      sliderValue:50,
    }
  },
  name: 'infoModal',
  components: {
    RangeSlider
  },
  props: {
    value: {
      required: true
    }
  },
    methods: {
        closePopup() {
          this.modalOpen = false;
        } 
      }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// $rail-fill-color: red !default;
*{
  box-sizing: border-box;
}
.infoModal{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color:rgba(205,233,253,.66);
  z-index: 1000;
}
.modal{
  width:90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 1000;
  position: absolute;
  top:150px;
  border-radius: 5px;
  padding:20px 0px;
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
  visibility: hidden;
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
// .range-slider-fill {
//   background-color: $rail-fill-color;
// }
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
</style>
<style lang="scss">
$rail-fill-color: #0494FC !default;
.range-slider-fill {
  background-color: $rail-fill-color;
}
</style>