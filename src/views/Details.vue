<template>
  <div class="about">
    <nav>
    	<!-- <img src="@/assets/back.png"> -->
     	<img class="logo" alt="Like a Glove logo" src="@/assets/likeaglovelogo.png">
     	<!-- <img src="@/assets/logout.png"> -->
    </nav>
    <div class="top">
    	<!-- // <img :src="image" class="favItemPic"> -->
		<h2>{{ item }}</h2>
  	</div>
  	<div class="measurements">
  		<div class="left">
  			<h1>Measurements</h1>
	  		<ul>
	          <li v-bind:key="value" v-for="value, name in object">
	            {{ name }}: {{ value }}<span v-if="inches">"</span>
	            <span v-else> cm</span>
	          </li>
	        </ul>
  		</div>
  		<div class="right">
  			<!-- <img src="@/assets/ideal-top.png"> -->
	      <!-- <h3 v-for="value, name in object" v-bind:class="name">
	        {{ value }}<span v-if="inches">"</span>
	        <span v-else> cm</span>
	      </h3> -->
  		</div>
  	</div>
  	<div class="itemInfo">
  		<h1>Item Info</h1>
  		<ul class="info">
	          <li v-bind:key="value" v-for="value, name in info">
	            {{ name }}: {{ value }}
	          </li>
	        </ul>
  	</div>
  	<router-link to="/about"><button>Edit Item</button></router-link>
  	<router-link to="/about">Delete Item</router-link>
  	<router-link to="/about"><button class="bottomButton">Done</button></router-link>
  </div>
</template>

<script>
export default{
	name:'About',
	data(){
		return{
			item: 'Scrunchy Top',
      		image:'./assets/scrunchy-top.jpg',
      		type:'top',
      		object: {
	          Shoulder_Width: 10,
	          Shoulder_Length: 2,
	          Chest: 3,
	          Bust: 32,
	          Waist: 28
	      	},
	      	info: {
	      		Store: 'Express',
	      		Colors: 'Pink',
	      		Style: 'Casual',
	      		Fabric: 'Cotton',
	      		Fit: "Form-Fitting"
	      	},
      		inches:true

		}
	}
}
</script>

<style scoped>
.about{
	display: flex;
	flex-direction: column;
	align-items: center;
}
.measurements{
	display: flex;
	flex-direction: row;
	width: 100%;
}
h2{
	background-color: #CDE9FD;
	width:100%;
	padding:15px;
	padding-left: 10%;
	color:#2c3e50;
	font-weight: 400;
	font-size:22px;
	margin:0;
}
.favItemPic{
	width:100%;
	margin:0;
}
.top{
	background-image: url('/assets/scrunchy-top.jpg');
	background-repeat: no-repeat;
	height:300px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	background-size:cover;
	width:100%;
}
.itemInfo{
	margin-left: 20%;
	width: 100%;
}
.info{
	list-style: none;
	  display: inline-grid;
	  grid-template-rows: repeat(3, auto);
	  grid-auto-flow: column;
}
.info li{
	margin-right:30px;
}
button{
  background-color: #0494FC;
  color:#ffffff;
  font-size: 20px;
  border:none;
  border-radius: 5px;
  padding:15px 60px;
  margin:20px 0px;
}
a{
	text-decoration: none;
}
a:visited{
	text-decoration: none;
}
router-link{
	width:100%;
}
.bottomButton{
	width:100%;
	border-radius: 0;
	padding:20px;
	display: block;
}
</style>
