<template>
  <div class="enterMeasurementsModal" v-show="value">
    <div class="modal">
      <h4>Enter Measurements</h4>
      
        <div class="left-right-wrapper">
     
          <div class="left-modal">

            <form>
              <div class="form-row">
                <label for="Shoulder_Width">Shoulder Width:</label>
                <input id="Shoulder_Width" name="Shoulder_Width" type="text" value="10">
                <span v-if="inches">in</span>
                <span v-else>cm</span>
                <!-- change value to a variable of the user's current value -->
              </div>
              <div class="form-row">
                <label for="Shoulder_Length">Shoulder Length:</label>
                <input id="Shoulder_Length" name="Shoulder_Length" type="text" value="2">
                <span v-if="inches">in</span>
                <span v-else>cm</span>
                <!-- change value to a variable of the user's current value -->
              </div>
              <div class="form-row">
                <label for="Chest">Chest:</label>
                <input id="Chest" name="Chest" type="text" value="3">
                <span v-if="inches">in</span>
                <span v-else>cm</span>
                <!-- change value to a variable of the user's current value -->
              </div>
              <div class="form-row">
                <label for="Bust">Bust:</label>
                <input id="Bust" name="Bust" type="text" value="34">
                <span v-if="inches">in</span>
                <span v-else>cm</span>
                <!-- change value to a variable of the user's current value -->
              </div>
              <div class="form-row">
                <label for="Waist">Waist:</label>
                <input id="Waist" name="Waist" type="text" value="28">
                <span v-if="inches">in</span>
                <span v-else>cm</span>
                <!-- change value to a variable of the user's current value -->
              </div>
              <div class="right">
                  <favItemMeasurements class="favItemMeasurements"></favItemMeasurements>
                </div>
              <button type="submit" to="/">Save Info</button>

            </form>
          </div>
          
      </div>
    
        

        
      
      <a>Cancel</a>
    </div>
  </div>
  
</template>

<script>
import favItemMeasurements from '@/components/favItemMeasurements.vue'

export default {
  name: 'enterMeasurementsModal',
  components: {
    favItemMeasurements
  },
  data() {
    return{
      object: {
              Shoulder_Width: 10,
              Shoulder_Length: 2,
              Chest: 3,
              Bust: 32,
              Waist: 28
            },
            inches:true
    }
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
<style scoped>
*{
  box-sizing: border-box;
}
.enterMeasurementsModal{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color:rgba(205,233,253,.66);
  z-index: 10000;
}
.modal{
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 10000;
  position: absolute;
  top:0px;
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
  margin:20px 0px 10px 0px;
  width: 100%;
  position: relative;
  left:35%;
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
.measurements-active{
  color:#0494FC;
  font-size: 17px;
}

.form-row{
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 30px;
  margin:5px 0px 0px 0px;
}
.switch-row{
  font-size: 18px;
  line-height: 30px;
  margin:5px 0px 0px 0px;
  width: 50%;
}
.switch-row div{
  margin-top: 5px;
}
input{
  font-size: 16px;
  text-decoration: underline;
  border: 0px solid;
  margin-left: 5px;
  width:20px;
}
textarea:focus, input:focus, select:focus{
    outline: none;
}
.left-right-wrapper{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
  padding-top:0;
  width:100%;
}
.favItemMeasurements{
  position: relative;
  top:-190px;
}
</style>