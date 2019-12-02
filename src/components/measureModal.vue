<template>
  <div class="measureModal" v-show="value">
    <div class="modal">
      <h4>Re-measure</h4>
      <button>Use Measure App</button>
      <button @click="openEnterMeasurementsModal">Enter Measurements</button>

    <div class="modalWidth" v-click-outside="closeEnterMeasurementsPopup">
      <!-- <button @click="openModal">Open Modal</button> -->
      <enterMeasurementsModal v-model="enterMeasurementsModalOpen" class="enterMeasurementsModal"></enterMeasurementsModal>
    </div>
      <a>Cancel</a>
    </div>
  </div>
  
</template>

<script>
import enterMeasurementsModal from '@/components/enterMeasurementsModal.vue'
export default {
  name: 'measureModal',
  components: {
    enterMeasurementsModal
  },
  data(){
    return{
      enterMeasurementsModalOpen: false
    }
  },
  props: {
    value: {
      required: true
    }
  },
    methods: {
        // closePopup() {
        //   this.modalOpen = false;
        // },
        openEnterMeasurementsModal() {
            this.enterMeasurementsModalOpen = !this.enterMeasurementsModalOpen;
        },
        closeEnterMeasurementsPopup() {
          this.enterMeasurementsModalOpen = false;
        }  
      }
      
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.measureModal{
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
.modalWidth{
  width:100%;
}
</style>