<template>
  <div class="create-account">

    <div class="wrapper">
      <img src="@/assets/likeaglovelogo.png" class="loginlogo">
      <h4 class="create">Create a New Account</h4>
      <form class="loginForm">
        <div class="infoFormRow">
          <label for="Email">Email Address</label>
          <input type="text" name="Email" value="">
        </div>
        <div class="infoFormRow">
          <label for="Username">Username</label>
          <input type="text" name="Username" value="">
        </div>
        <div class="infoFormRow">
          <label for="Password">Password</label>
          <input type="text" name="Password" value="">
        </div>
        <div class="infoFormRow">
          <label for="confirmPassword">Confirm Password</label>
          <input type="text" name="confirmPassword" value="">
        </div>
        <div class="infoFormRow">
          <label for="image">Profile Photo</label>
          <input type="file" name="image" value="">
        </div>
      

        <button type="submit" class="createButton" to="/">Create Account</button>
      </form>
      <a href="">Cancel</a>
    </div>
  </div>
</template>

<script>
export default{
    name:'About',
    components:{
      
    },
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
            inches:true,


        }
    }
}
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
