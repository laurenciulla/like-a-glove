<template>
  <div class="itemNameModal" v-show="value">
    <div class="modal">
      <h4>Change Item Name</h4>
      <form class="editInfoForm">
        <div class="infoFormRow">
          <label for="Store">Item Name</label>
          <input type="text" name="itemName" value="Scrunchy Top">
        </div>
        

        <button type="submit" to="/" class="save">Save Info</button>
      </form>
      <a>Cancel</a>
    </div>
  </div>
  
</template>

<script>


export default {
  name: 'itemNameModal',
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
.itemNameModal{
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

.save{
  width:100%;
}
</style>