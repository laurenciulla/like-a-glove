<template>
  <div class="login">
    <!-- <navBar></navBar> -->

    <div class="wrapper">
      <img src="@/assets/likeaglovelogo.png" class="loginlogo">
      <form class="loginForm">
        <div class="infoFormRow">
          <label for="Email">Email</label>
          <input type="text" name="Email" v-model="email">
        </div>
        <div class="infoFormRow">
          <label for="Password">Password</label>
          <input type="password" name="Password" v-model="password">
        </div>
      

        <button type="submit" class="formButton" to="/" v-on:click="login">Log In</button>
      </form>

      <router-link to="/create-account"><button >Create Account</button></router-link>
      
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
// import navBar from '@/components/navBar.vue'
export default{
    name:'Login',
    components:{
      // navBar
    },
    data(){
        return{
          email: '',
          password: '',

        }
    },
    methods: {
      login: function(e) {
        // this stuff just makes the console work idk
        /* eslint-disable no-debugger, no-console */
        var db = firebase.firestore();

        // gets all users
        db.collection("users").get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        });
        // end this stuff just makes the console work idk

        // console.log("register");
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          alert(`You are logged in as ${user.email}`);
          this.$router.go({path: this.$router.path});
        },
        err => {
          alert(err.message);
        }
        );
        e.preventDefault();
      }
    }
}
</script>

<style scoped>
.login{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height:100vh;
}
.wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
button{
  background-color: #0494FC;
  color:#ffffff;
  font-size: 16px;
  border:none;
  border-radius: 5px;
  padding:15px 30px;
  margin:10px 0px;
  width: 190px;
}
.formButton{
  width:190px;
}

form.loginForm{
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.infoFormRow input{
  border:2px #0494FC solid;
  border-radius: 5px;
  padding:8px;
  font-size: 16px;
  margin-bottom:5px;
}
.infoFormRow select{
  background-image: url('/assets/down-arrow.png');
  background-position: 97% 3%;
  background-repeat: no-repeat;
  background-size:contain;
  background-color: #ffffff;
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
  width:100%;
}
select:focus, input:focus{
  outline: none;
}

.save{
  width:100%;
}
.overlayIconNew{
  width: 30px;
  /*display: block;*/
}
.buttontext{
  display: block;
  margin-top:5px;
}
.loginlogo{
  width:90%;
}
</style>
