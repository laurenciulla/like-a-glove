<template>
  <div class="newItemCard">
    <div class="picture">
      <button v-on:click="routeToNewItem" class="add">+</button>
    </div>
    
    <h2>Add Item</h2>
  </div>
  
</template>

<script>
export default {
  name: 'newItemCard',
  props: {
    msg: String
  },
  data(){
    return {
      item: 'Scrunchy Top',
      image:'./assets/scrunchy-top.jpg',
      type:'top',
      object: {
          shoulderWidth: 10,
          shoulderLength: 2,
          chest: 3,
          bust: 32,
          waist: 28
      },
      inches:true
    }
  },

  methods: {
    routeToNewItem: function () {
      console.log("wtf");
      this.$router.push({path: "/new-item"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
button.add{
  background-color: #0494FC;
  color:#ffffff;
  font-size: 20px;
  border:none;
  border-radius: 50px;
  margin-bottom: 40px;
  width:60px;
  height:60px;
  font-size:50px;
  padding:10px;
  line-height:42px;
}
router-link{
  width:90%;
}
.newItemCard{
  border:#CDE9FD 3px solid;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:170px;
  height:240px;
  max-height: 200px;
  
}
.picture{
  
  width:100%;
  height:inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}
h2{
  font-size:18px;
  font-weight: 400;
  background-color:#CDE9FD;
  padding:10px 15px 8px 15px;
  margin:0;
}
h3{
  font-weight: 400;
  font-size:13px;
  position: relative;
}
a {
  color: #42b983;
}
</style>