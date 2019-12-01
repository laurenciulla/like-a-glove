<template>
  <div class="idealCard">
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
  name: 'idealCard',
  props: {
    msg: String
  },
  data(){
    return {
      item: 'Top',
      image:'./assets/body-guide.png',
      object: {
          Height: 67,
          Chest: 32,
          Waist: 28,
          Hip: 34,
          LegLength: 28
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
.idealCard{
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: flex-end;*/
  width:170px;
  max-height: 240px;
}
img{
  width:100%;
  padding:0px 15px;
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
.Height{
  top:-300px;
  left: 117px;
}
.Chest{
  top:-277px;
  left:50px;
}
.Waist{
  top:-267px;
  left:51px;
}
.Hip{
  top:-274px;
  left:51px;
}
.LegLength{
  top:-230px;
  left:5px;
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