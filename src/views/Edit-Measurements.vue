<template>
  <div id="app">
    <navBar></navBar>
<!--     <nav>
      <img class="logo" alt="Like a Glove logo" src="@/assets/likeaglovelogo.png">
    </nav> -->
    <div id="measurements">
      <div class="left">
        <profileCard></profileCard>
        <div class="editDiv">
          <h1 class="measurements-active">Edit Measurements</h1>
        </div>

        <form action="/">
          <div class="form-row">
            <label for="Height">Height:</label>
            <input id="Height" name="Height" type="text" value="67">
            <span v-if="inches">in</span>
            <span v-else>cm</span>
            <!-- change value to a variable of the user's current value -->
          </div>
          <div class="form-row">
            <label for="Chest">Chest:</label>
            <input id="Chest" name="Chest" type="text" value="32">
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
          <div class="form-row">
            <label for="Hip">Hip:</label>
            <input id="Hip" name="Hip" type="text" value="34">
            <span v-if="inches">in</span>
            <span v-else>cm</span>
            <!-- change value to a variable of the user's current value -->
          </div>
          <div class="form-row">
            <label for="LegLength">Leg Length:</label>
            <input id="LegLength" name="LegLength" type="text" value="32">
            <span v-if="inches">in</span>
            <span v-else>cm</span>
            <!-- change value to a variable of the user's current value -->
          </div>

          <div class="switch-wrapper">
            <div class="switch-row">
              <label for="Gender">Gender:</label>
              <!-- toggle -->
              <div class="can-toggle demo-rebrand-1">
                <input id="Gender" type="checkbox">
                <label for="Gender">
                  <div class="can-toggle__switch" data-checked="Male" data-unchecked="Female"></div>
                </label>
              </div>
              <!-- end toggle -->
            </div>
            <div class="switch-row">
              <label for="Units" class="right-toggle-label">Units:</label>
              <!-- toggle -->
              <div class="can-toggle demo-rebrand-1 right-toggle">
                <input id="Units" type="checkbox">
                <label for="Units">
                  <div class="can-toggle__switch" data-checked="CM" data-unchecked="IN"></div>
                </label>
              </div>
              <!-- end toggle -->
            </div>
          </div>

          <div class="overlay">
              <button type="submit" to="/" class="save">Save Info</button>
          </div>

        </form>
      </div>
      <div class="right">
        <bodyGuide class="bodyGuide"></bodyGuide>
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

    <!-- <div class="overlay">
      <router-link to="/"><button class="save">Save Info</button></router-link>
    </div> -->

    
      
  
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
import navBar from '@/components/navBar.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    profileCard,
    idealCard,
    bodyGuide,
    favItemCard,
    navBar
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
.measurements-active{
  color:#0494FC;
  font-size: 17px;
}
button.save{
  background-color: #0494FC;
  /*width:100%;*/
  font-size: 20px;
  border:none;
  border-radius: 5px;
  color:#ffffff;
  padding:15px 30px;
  position: absolute;
  margin-top: -25px;

}
.overlay{
  background-color: rgba(205,233,253,.66);
  width:100vw;
  height:50%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 100;
}
.form-row{
  display: flex;
  flex-direction: row;
  font-size: 18px;
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
  font-size: 18px;
  text-decoration: underline;
  border: 0px solid;
  margin-left: 5px;
  width:25px;
}
textarea:focus, input:focus, select:focus{
    outline: none;
}
.switch-wrapper{
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
}
.right-toggle{
  position: absolute;
  left: 200px;
}
.right-toggle-label{
  margin-left: 70px;
}


.can-toggle *, .can-toggle *:before, .can-toggle *:after {
  box-sizing: border-box;

}
.can-toggle input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}
.can-toggle input[type="checkbox"][disabled] ~ label {
  pointer-events: none;
}
.can-toggle input[type="checkbox"][disabled] ~ label .can-toggle__switch {
  opacity: 0.4;
}
.can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:before {
  content: attr(data-unchecked);
  left: 0;
}
.can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
  content: attr(data-checked);
}
.can-toggle label {
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  position: relative;
  display: flex;
  align-items: center;
}
.can-toggle label .can-toggle__label-text {
  flex: 1;
  padding-left: 32px;
}
.can-toggle label .can-toggle__switch {
  position: relative;
}
.can-toggle label .can-toggle__switch:before {
  content: attr(data-checked);
  position: absolute;
  top: 0;
  text-align: center;
}
.can-toggle label .can-toggle__switch:after {
  content: attr(data-unchecked);
  position: absolute;
  z-index: 5;
  text-align: center;
  background: white;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.can-toggle label .can-toggle__switch:before {
  color: rgba(255, 255, 255, 0.5);
}
.can-toggle label .can-toggle__switch:after {
  transition: -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);
  transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1);
  transition: transform 0.3s cubic-bezier(0, 1, 0.5, 1), -webkit-transform 0.3s cubic-bezier(0, 1, 0.5, 1);
  color: #0494FC;
}
.can-toggle input[type="checkbox"]:focus ~ label .can-toggle__switch:after, .can-toggle input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}
.can-toggle input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
  -webkit-transform: translate3d(65px, 0, 0);
          transform: translate3d(65px, 0, 0);
}
.can-toggle input[type="checkbox"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle input[type="checkbox"]:checked:hover ~ label .can-toggle__switch:after {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}
.can-toggle label {
  font-size: 14px;
}
.can-toggle label .can-toggle__switch {
  height: 36px;
  flex: 0 0 134px;
  border-radius: 4px;
}
.can-toggle label .can-toggle__switch:before {
  left: 67px;
  font-size: 12px;
  line-height: 36px;
  width: 67px;
  padding: 0 12px;
  font-size:14px;
}
.can-toggle label .can-toggle__switch:after {
  top: 2px;
  left: 2px;
  border-radius: 2px;
  width: 65px;
  line-height: 32px;
  font-size: 12px;
  /*font-weight: 700;*/
  font-size:14px;
}
.can-toggle label .can-toggle__switch:hover:after {
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.4);
}

.can-toggle.demo-rebrand-1 input[type="checkbox"][disabled] ~ label {
  color: #0494FC;
}
.can-toggle.demo-rebrand-1 input[type="checkbox"]:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-1 input[type="checkbox"]:hover ~ label .can-toggle__switch {
  background-color: #0494FC;
}
.can-toggle.demo-rebrand-1 input[type="checkbox"]:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-1 input[type="checkbox"]:hover ~ label .can-toggle__switch:after {
  color: #0494FC;
}
.can-toggle.demo-rebrand-1 input[type="checkbox"]:hover ~ label {
  color: #0494FC;
}
.can-toggle.demo-rebrand-1 input[type="checkbox"]:checked ~ label:hover {
  color: #0494FC;
}
.can-toggle.demo-rebrand-1 input[type="checkbox"]:checked ~ label .can-toggle__switch {
  background-color: #0494FC;
}
.can-toggle.demo-rebrand-1 input[type="checkbox"]:checked ~ label .can-toggle__switch:after {
  color: #0494FC;
}
.can-toggle.demo-rebrand-1 input[type="checkbox"]:checked:focus ~ label .can-toggle__switch, .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked:hover ~ label .can-toggle__switch {
  background-color: #0494FC;
}
.can-toggle.demo-rebrand-1 input[type="checkbox"]:checked:focus ~ label .can-toggle__switch:after, .can-toggle.demo-rebrand-1 input[type="checkbox"]:checked:hover ~ label .can-toggle__switch:after {
  color: #0494FC;
}
.can-toggle.demo-rebrand-1 label .can-toggle__label-text {
  flex: 1;
}
.can-toggle.demo-rebrand-1 label .can-toggle__switch {
  transition: background-color 0.3s ease-in-out;
  background: #0494FC;
}
.can-toggle.demo-rebrand-1 label .can-toggle__switch:before {
  color: #ffffff;
}
.can-toggle.demo-rebrand-1 label .can-toggle__switch:after {
  transition: -webkit-transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out;
  transition: transform 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;
  color: #0494FC;
}

</style>