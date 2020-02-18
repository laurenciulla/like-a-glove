<template>
	<div class="navBar">
		<!-- <p v-if="isLoggedIn">{{ currentUser }}</p> -->
		<ul>
			<li v-if="isLoggedIn" class="navbuttons back"><button v-on:click="back"><img src="@/assets/back.png" class="navicon" alt="Go Back"></button></li>
			<li class="navlogo"><img class="logo" alt="Like a Glove logo" src="@/assets/likeaglovelogo.png"></li>
			<li v-if="isLoggedIn" class="navbuttons"><button v-on:click="logout"><img src="@/assets/logout.png" alt="Logout" class="navicon"></button></li>
		</ul>
	</div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default {
	name: 'navbar',
	data() {
		return {
			isLoggedIn: false,
			currentUser: false
		}
	},
	created() {
		if (firebase.auth().currentUser) {
			this.isLoggedIn = true;
			this.currentUser = firebase.auth().currentUser.email;
		}
	},
	methods : {
		logout: function() {
			firebase.auth().signOut().then(() => {
				this.$router.go({path: this.$router.path});
			});
		},
		back: function() {
			this.$router.push('/');
		}
	}
}
</script>

<style scoped>
	.navBar{
		background-color:#CDE9FD;
		display: flex;
		flex-direction: row;
		justify-content: center;
	} 
	ul{
		margin:0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width:100%;
	}
	.navbuttons{
		width:30%;
	}
	.navlogo{
		width:40%;
	}
	.logo{
		width:100%;
		align-self: center;
	}
	.navicon{
		width:50%;
	}
	button, router-link{
		text-align: center;
		width:100%;
	}
	.back{
		z-index: -10;
	}
</style>