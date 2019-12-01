<template>
  <div class="favItemMeasurements">
    <div>
      <img :src="image">
      <h3 v-for="(value, name) in object" v-bind:class="name" v-bind:key ="name">
        {{ value }}<span v-if="inches">"</span>
        <span v-else> cm</span>
      </h3>
    </div>
  
  </div>
  
</template>

<script>
export default {
  name: 'favItemMeasurements',
  props: {
    msg: String
  },
  data(){
    return {
      item: 'Top',
      image:'./assets/ideal-top.png',
      object: {
          shoulderWidth: 10,
          shoulderLength: 2,
          chest: 3,
          bust: 32,
          waist: 28
      },
      inches:true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.favItemMeasurements{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width:170px;
  max-height: 210px;
}
img{
  width:100%;
  padding:0px 20px;
  position: relative;
  top:180px;
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
.shoulderWidth{
  top:-23px;
  left: 77px;
}
.shoulderLength{
  top:-57px;
  left:40px;
}
.chest{
  top:-58px;
  left:101px;
}
.bust{
  top:-75px;
  left:58px;
}
.waist{
  top:-71px;
  left:63px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>