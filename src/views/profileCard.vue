<template>
  <div class="profileCard">
    <div class="imageHolder">
      <img v-bind:src="image">
    </div>
    <h2>{{ username }}</h2>
  </div>
  
</template>

<script>
export default {
  name: 'profileCard',
  props: {
    msg: String
  },
  data(){
    return {
      username: 'Username',
      image:'./assets/profile-photo.jpg',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
  box-sizing: border-box;
}
.profileCard{
  /*border:#CDE9FD 3px solid;
  border-radius: 5px;*/
  width:90%;
  height:130px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /*object-fit: cover;*/
}
.imageHolder{
  border-top:#CDE9FD 3px solid;
  border-left:#CDE9FD 3px solid;
  border-right:#CDE9FD 3px solid;
  border-radius: 5px 5px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
img{
  width:100%;
  max-height:100px;
  /*height:100px;*/
  position: relative;
  bottom: 0;
  object-fit: cover;
}
h2{
  font-size:18px;
  font-weight: 400;
  background-color:#CDE9FD;
  padding:10px 15px 8px 15px;
  margin:0;
  border-bottom:#CDE9FD 3px solid;
  border-left:#CDE9FD 3px solid;
  border-right:#CDE9FD 3px solid;
  border-radius: 0px 0px 5px 5px;
}
h3 {
  margin: 40px 0 0;
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
