<template>
  <div class="create-account">

    <div class="wrapper">
      <img src="@/assets/likeaglovelogo.png" class="loginlogo">
      <h4 class="create">Create a New Account</h4>
      <form class="loginForm" autocomplete="off">
        <div class="infoFormRow">
          <label for="Email">Email Address</label>
          <input type="text" name="Email" v-model="email">
        </div>
        <div class="infoFormRow">
          <label for="Name">Name</label>
          <input type="text" name="Name" v-model="Name">
        </div>
        <div class="infoFormRow">
          <label for="Password">Password</label>
          <input type="password" name="Password" v-model="password">
        </div>
        <!-- <div class="infoFormRow">
          <label for="confirmPassword">Confirm Password</label>
          <input type="text" name="confirmPassword" value="">
        </div> -->
        <!-- <div class="infoFormRow">
          <label for="image">Profile Photo</label>
          <input type="file" name="image" value="">
        </div> -->
      

        <button v-on:click="createAccount" class="createButton" to="/">Create Account</button>
      </form>
      <router-link to="/login">Cancel</router-link>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export default{
    name:'About',
    components:{
      
    },
    data(){
        return{
          email: '',
          password: '',
          Name:''
        }
    },
    methods: {
      createAccount: function(e) {
        
        let that = this;

        // console.log("register");
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
                /* eslint-disable no-debugger, no-console */
          console.log(user);

          // alert(`Account created for ${this.email}`);
          // this stuff just makes the console work idk
          /* eslint-disable no-debugger, no-console */
          var db = firebase.firestore();

          // gets all users
          db.collection("users").get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  // doc.data() is never undefined for query doc snapshots
                  // console.log(doc.id, " => ", doc.data());
              });
          });
          // end this stuff just makes the console work idk

          // Add a new document in collection "users"
        
          
            db.collection("users").doc(firebase.auth().currentUser.uid).set({
              name: that.Name,
              email: firebase.auth().currentUser.email,
              measurements: {
                  Height: "",
                  Chest: "",
                  Waist: "",
                  Hip: "",
                  LegLength: ""
                },
              inches: true,
              gender: true, //true is female, false is male,
              favItems: []
            })
            .then(function() {
                alert("Document successfully written!");
                //that.$router.go({path: that.$router.path});
                 that.$router.push({ name: 'enter-measurements' });

            })
            .catch(function(error) {
                alert("Error writing document: ", error);
            });
            

        // end of add a new document in collection "users"
        },
        err => {
          alert(err.message);
        }
        );
        e.preventDefault();

        
            
      } // end of create account method
    } //end of methods
} //end of export default
</script>

<style scoped>
.create-account{
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
.createButton{
  width:190px;
  margin-top:30px;
  margin-bottom: 20px;
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
.create{
  margin-top:10px;
}
</style>
