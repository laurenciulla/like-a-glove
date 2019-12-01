<template>
  <div class="infoModal" v-show="value">
    <div class="modal">
      <h4>Edit Item Info</h4>
      <form class="editInfoForm">
        <div class="infoFormRow">
          <label for="Store">Store</label>
          <input type="text" name="Store" value="Brandy Melvile">
        </div>
        <div class="infoFormRow">
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
          <input type="text" name="Fit">
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
      </form>
      <button>Save Info</button>
      <a>Cancel</a>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'infoModal',
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
.infoFormRow input{
  border:2px #0494FC solid;
  border-radius: 5px;
  padding:8px;
  font-size: 16px;
}
.infoFormRow label{
  margin-right: 5px;
}
.inforFormRow{
  display: flex;
  flex-direction: column;
}
</style>