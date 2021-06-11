<template>
<v-app>
  <nav style="background-color:white" class="navbar navbar-light navbar-expand-md bg-faded justify-content-center sticky-top ">
    <a href="#" class="d-flex  mr-auto">
      <img  class="img-responsive logonav" src="../assets/Sc.png" width="200" height="45" >
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar3">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
        <ul class="nav navbar-nav ml-md-15 justify-content-center first">
           <li>
            <a href="#propos">
              <b>ABOUT</b>
            </a>
          </li>
          <li>
            <a href="#thematique">
              <b>CLAIM</b>
            </a>
          </li>
          <li>
            <a href="#agenda">
              <b>PROGRAM</b>
            </a>
          </li>
          <li>
            <a href="#speakers">
              <b>SPEAKERS</b>
            </a>
          </li>
          <li>
            <a href="#sponsors">
              <b>PARTNERS</b>
            </a>
          </li>
          <li  @click="click" class="inscriBtnEn inscriBtn ml-md-3">
            <a>
              <inscription_en ref="regestreComponent"></inscription_en>
            </a>
          </li>
        </ul>
        <ul class=" navbar-nav ml-auto LGactive justify-content-end">
          <li>
            <a  @click="goTo('/fr')">
              <b>FR</b>
            </a>
          </li>
        </ul>
    </div>
</nav>

  <div  data-spy="scroll" data-target="#navbar-app" data-offset="0">
    <div id="accueil">
    <accueil_en  />
    </div>
    <div>
    <timer_en/>
    </div>
    <div id="propos">
    <propos_en class="mt-5"/>
    </div>
    <div id="thematique">
    <thematique_en class="mt-5"/>
    </div>
    <div id="axe">
    <axe2_en />
    </div>
    <div id="axe">
    <scientifique_en/>
    </div>
    <div id="agenda">
    <agenda_en class="mt-5" v-on:slidenum="slidenum" />
    </div>
    <div id="speakers">
    <speakers_en class="mt-5" :slideshow="slideshow"/>
    </div> 
    <div id="sponsors">
    <sponsors_en class="mt-5 "/>
    </div>
  </div>
  <div class="social" style="text-align:right">
    <v-card class="social flex pa-1" max-width="40px" color="white">
        <a href="https://web.facebook.com/SmartCityCasablanca/?_rdc=1&_rdr" target="_blank"><img height="29" width="29" class="img-responsive mb-1" src="../assets/F.png" ></a> 
        <a href="https://www.instagram.com/smartcitycasablanca/" target="_blank"> <img height="29" width="29" class="img-responsive mb-1" src="../assets/I.png" ></a> 
        <a href="https://twitter.com/SmartCityCasa" target="_blank"> <img height="29" width="29" class="img-responsive mb-1" src="../assets/T.png" ></a> 
        <a href="https://www.youtube.com/channel/UCCw7MXIu8Vq63Gq_dz10QPQ" target="_blank"> <img height="29" width="29" class="img-responsive " src="../assets/Y.png" ></a> 
    </v-card>
  </div>
  <div style="background-color:#282525">
  <v-container grid-list-xs class="mb-4">
    <v-row class="safariFlex">
        <v-col cols="12" md="4" sm="12"  align="center" class="mt-5 safariFlex-colum-foter">
         <a href="https://www.casablancasmartcity.com/en" target="_blanc"><img  class="img-responsive Logofoter" src="../assets/cityw.png" height="100" width="200" ></a>
        </v-col>
        <v-col cols="12" md="8" sm="12"  align="right" class="mt-15 safariFlex-colum-foter">
          <p class="footText">
            <b> Site map - Legal notice <br>
             © 2021 Casablanca Events et Animation <br></b>
             The Smart City Casablanca site complies with Law 09-08 relating to the protection of individuals with regard to the processing of personal data <br>
             personnel Authorization of the CNDP (National Commission for the Control of Personal Data Protection) <br>
          </p>
        </v-col>
    </v-row>
  </v-container>
  <div class="col-md-12 text-center">
        <a href="https://ascrea.ma/" target="_blanc"><img width="100px" height="71" src="../assets/logo.png" alt="ascrea"></a>
  </div>
  </div>  
</v-app>
</template>

<script>
export default {

  data: () => ({
    scrollPosition: null,
     slideshow:""
  }),
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
    goTo(path){
           this.$router.push(path)
        },
    click: function() {
        this.$refs.regestreComponent.setValue();

        this.$gtag.event('form d\'inscription', {
        'event_category': 'en',
        'event_label': 'dernier click',
        'value': 1
      })
    },
    slidenum(num){
      this.slideshow=num
     
    }
},
mounted() {
    window.addEventListener('scroll', this.updateScroll);

    this.$gtag.event('page visitée', {
        'event_category': 'en',
        'event_label': 'dernier visiteur',
        'value': 1
      })

      this.slideshow=0
  },
 
};
</script>
<style >
html{
  scroll-behavior: smooth;
}
/*.accueil{
  background-image:url('/assets/health.jpg');
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
}*/
.first li a{
  color:#000!important;
  transition: 0.3s;
}
.first li a:hover{
  color:white!important;
  background-color:#0C3D58!important
}

.LGactive li a{
  color:white!important;
  background-color:#E30525!important;
  padding:5px
}
.LGactive li a:hover{
  background-color:#0C3D58!important;
}

@media (min-width:900px) {

  .bntEn{
    
  }
}

h1{
  /*font-family: 'Montserrat', sans-serif;*/
}
@media (min-width: 1200px) {

}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
    .inscriBtnEn{
      width:142px
    }
}

/* Landscape phones and down */
@media (max-width: 480px) {
  
 /* #navbarSupportedContent{
    background-color:black
  }*/

}

.footer{
    margin-top:100px;
}

v-img.sponsor{
  position: relative;
}
.footTitle{
    text-align:left;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.0rem;
    font-weight: 500
}
.titlefootline{
  content: "";
    display: block;
    width: 4.375rem;
    height: .25rem;
    background-color: red;
    bottom: 0;
    right: 0;
}

.social{
  position: absolute;
  right: 0px;
  position: fixed;
  width:50px;
  top: 30%;
  z-index: 9;
}
.navbar{
  margin-bottom:0px!important
}
</style>