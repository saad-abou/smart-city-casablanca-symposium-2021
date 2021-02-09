<template>
<v-app>
 <nav id="navbar-app" class="nav navbar-light fixed-top navbar-expand-md scrolling-navbar appnav" :class="{change_color: scrollPosition > 50}">
    <div class="container">

      <!-- Brand -->
      <a class="navbar-brand" href="https://mdbootstrap.com/material-design-for-bootstrap/" target="_blank">
        <img  class="img-responsive logonav" src="merck.png" width="130" >
      </a>

      <!-- Collapse -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <v-icon class="colap" color="indigo lighten-5" small>fas fa-bars</v-icon>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <!-- Right -->
        <ul class="nav ml-auto  nav-stacked">
          <li class="nav-item active">
            <a href="#accueil" class="nav-link" >
              <b>ACCUEIL</b>
            </a>
          </li>
          <li class="nav-item" >
            <a href="#propos" class="nav-link" >
              <b>A PROPOS</b>
            </a>
          </li>
          <li class="nav-item">
            <a href="#agenda" class="nav-link" >
              <b>AGENDA</b>
            </a>
          </li>
          <li class="nav-item">
            <a href="#inscription" class="nav-link" >
             <b>INSCRIPTION</b>
            </a>
          </li>
          <li class="nav-item">
            <a href="#contact" class="nav-link" >
              <b>CONTACT</b>
            </a>
          </li>
        </ul>

      </div>

    </div>
  </nav>
  <div  data-spy="scroll" data-target="#navbar-app" data-offset="0">
    <div id="accueil">
    <accueil  />
    </div>
    <div id="propos">
    <propos class="mt-5"/>
    </div>
    <div id="agenda">
    <agenda   class="mt-5"/>
    </div>
    <div id="inscription">
    <inscription   class="mt-5"/>
    </div>
    <div id="contact">
    <contact  class="mt-5"/>
    </div>
  </div>
    <v-row class="footer d-none d-lg-block " >
    <v-col align="center" class="mt-5">
    <p style="color:black">© Copyright 2021 <b style="color:green">ASCREA</b></p>
    <img  class="img-responsive ascreaLogo" src="unnamed.png" width="50" >
    </v-col>
    </v-row>
</v-app>
</template>

<script>
import accueil from './components/accueil';
import propos from './components/propos';
import agenda from './components/agenda';
import inscription from './components/inscription';
import contact from './components/contact';

export default {
  name: 'App',

  components: {
     accueil,
     propos,
     agenda,
     inscription,
     contact,
  },

  data: () => ({
    scrollPosition: null
  }),
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
},
mounted() {
    window.addEventListener('scroll', this.updateScroll);
}
};
</script>
<style >
html{
  scroll-behavior: smooth;
}
.accueil{
  background-image:url('/assets/health.jpg');
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
}
.nav-link b{
    color: white;
}
.nav .nav-item a:hover{
    color: white;
    background-color:#e8103b;
    text-decoration:none
}
.nav-item{
   margin-right:20px
}


.logo{
  max-width:150px
}
.view,body,html{height:100%}.nav{background-color:rgba(0,0,0,0.3)}.page-footer,.top-nav-collapse{background-color:rgba(0,0,0,.2)}@media only screen and (max-width:768px){.nav{background-color:rgba(0,0,0,.2)}}

@media (min-width:900px) {
.navbar-dark .nav-item > .nav-link.active  {
    color: white;
    background-color:#141413
}}

h1{
  font-family: 'Oswald', sans-serif;
}
@media (min-width: 1200px) {

}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {

}

/* Landscape phones and down */
@media (max-width: 480px) {
  .logonav{
    width:100px; 
  }
 /* #navbarSupportedContent{
    background-color:black
  }*/

}
 .change_color {
       background-color:rgba(0,0,0,.8)
   }
.navbar-light .nav{
  color: rgba(0, 0, 0, 0.9);
}   

.nav>.active>a { 
            color: white;
            background-color:#e8103b
}

.footer{
    color:white;
    margin-top:100px;
    height:150px
}
</style>