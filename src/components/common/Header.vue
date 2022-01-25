<template>  
 <div class="background" d-flex justify-content-center align-items-center gradient>
        <header>
                <div class="banner">
                        <router-link to="/"><img alt="IW Logo" src="../../assets/banner_w.png" width="310" height="30" align="left"></router-link>
                </div>
                <div class="menuWrap">
                        <ul class="menu">
                                <li><router-link to="/">All</router-link></li>
                                <li><router-link to="/employees">Employees</router-link></li>
                                <li><router-link to="/skills">Skills</router-link></li>
                                <li><router-link to="/login">Log out</router-link></li>
                        </ul>
                </div>
        </header>
        <div class="main-title">
                <h1 class="h1-seo">IW Skills Matrix</h1>
                <h3>some brief description here blalba</h3>
        </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
header{width:100%; text-align:center; position:relative; height:120px; }
header h1{position:absolute; top:0; left:100px;}
header ul.menu:after{display:block; clear:both; content:'';}
header ul.menu{position:absolute; top:20px; right:50px;}
header ul.menu li{float:left; padding:10px 20px; list-style:none;}

a{text-decoration:none; color:#333;}
.container{

}

@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     font-family: 'Open Sans', sans-serif
 }
.background {
  width: 100%;
  height:200%;
  text-align: center;
  position: relative;
  z-index: 1;
  padding-bottom: 10%;
  margin: auto;

}

.background::after {
  width: 100%;
  height: 100%;
  content: "";
  background: url("../../assets/header.jpg");
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.876;

}
.banner{
      padding-left: 4%;
      padding-top: 1.7%;    
}
.main-title{
        margin: 0;
        padding-top: 5%;
        color: white;
        font-weight: 900;
}
li a{
        color: white;
}

 /* .background {
  width: 100%;
  height: 100%;
  text-align: center;
  background: url("../../assets/header.jpg");
  opacity: 0.5;
} */
</style>