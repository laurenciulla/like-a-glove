<template>
  <div id="app">
    <nav>
      <router-link to="/" class="noback"><img src="@/assets/back.png" class="back"></router-link>
        <img class="logo" alt="Like a Glove logo" src="@/assets/likeaglovelogo.png">
        <router-link to="/"><img src="@/assets/logout.png" class="logout"></router-link>
    </nav>
    <div id="measurements">
      <div class="left">
        <profileCard></profileCard>
        <div class="editDiv">
          <h1>Measurements</h1> 
          <router-link to="/edit-measurements"><img src="@/assets/edit.png" class="edit" alt="Edit Measurements"></router-link>
        </div>
        <ul>
          <li v-for ="(value, name) in measurements" v-bind:key ="name">
            {{ name }}: {{ value }} 
            <span v-if="inches"> in</span>
            <span v-else> cm</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <bodyGuide class="bodyGuide"></bodyGuide>
        <!-- <img src="./assets/body-guide.png" class="bodyGuide"> -->
        <!-- <img src="./assets/body-guide.png" class="bodyGuide"> -->
        <!--  <h3 v-for="value, name in object" v-bind:class="name">
            {{ value }} 
            <span v-if="inches"> "</span>
            <span v-else> cm</span>
          </h3> -->
      </div>
      
    </div>

    <div id="idealPieces">
      <h1 class="comp">Ideal Pieces</h1>
      <div class="cardContainer">
        <idealCard class="card"></idealCard>
        <idealCard class="card"></idealCard>
        <idealCard class="card"></idealCard>
      </div>
    </div>

    <div id="favItems">
      <h1>Your Favorite Items</h1>
      <div class="cardContainer">
        <favItemCard class="card"></favItemCard>
      </div>
    </div>
    
      
  
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import profileCard from '@/components/profileCard.vue'
import idealCard from '@/components/idealCard.vue'
import bodyGuide from '@/components/bodyGuide.vue'
import favItemCard from '@/components/favItemCard.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    profileCard,
    idealCard,
    bodyGuide,
    favItemCard
  },
  data(){
    return{
        measurements: {
          Height: 67,
          Chest: 32,
          Waist: 28,
          Hip: 34,
          LegLength: 29
      },
      inches: true,
      active: false,
      value: null
    }
  }
}
</script>

<style>
#measurements{
  margin-top:10%;
  display: flex;
  flex-direction: row;
}
.left, #idealPieces, #favItems{
  margin-left: 10%;
}
.card{
  margin-top:15px;
  margin-right:25px;
  min-width: 180px;
}
.cardContainer{
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
.cardContainer::-webkit-scrollbar {
  display: none;
}
.left{
  width:50%;
}
.right{
  position: absolute;
  right:25px;
  width:40%;
}
.bodyGuide{
  width: 90%;
  margin-top:-15px;
}
h1{
  font-size:20px;
  margin:20px 0px 0px 0px;
}
nav{
  background-color:#CDE9FD;
  width:100%;
  display: flex;
  justify-content: space-between;
}
ul{
  list-style-type: none;
  line-height: 30px;
  margin:5px 0px 0px 0px;
  padding:0;
}
h3{
  font-weight: 400;
  font-size:13px;
  position: relative;
  max-width: 30px;
}
.Height{
  top:0px;
}
#app {
  font-family: 'Almarai', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: left;
  font-size:18px;
}
.logo{
  width:40%;
  align-self:center;
}
body{
  margin:0;
  max-width: 100vw;
}
.app{
  overflow-x: hidden;
}
.edit{
  width: 60%;
  align-self: center;
  padding-left: 6px;
  padding-top: 15px;
}
.edit:after{
  width: 100%;
  align-self: center;
  padding-left: 5px;
  padding-top: 23px;
}
.editDiv{
  display: flex;
  flex-direction: row;
}
.back, .logout{
  width: 70%;
  align-self: center;
  margin: 0px 10px;
}
.noback{
  z-index: -10;
}
</style>