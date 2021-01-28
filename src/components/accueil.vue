<template>
  <div class="view" >
        <v-img class="back"  src="..\assets\health.jpg" aspect-ratio="1.7" max-height="626">
         <v-row align="center">
          <v-col class="digit" align="center">
          <v-card class="agenda" color="rgb(0, 0, 189, 0.4)">
           <v-card class="tiemCard" color="blue darken-3">
             <h2 class="datetime" >Samedi, Decembre 25, 2021</h2>
          </v-card>
          <template>
            <div>
              <flip-countdown deadline="2021-12-25 00:00:00"></flip-countdown>
            </div>
          </template>
          </v-card>
          </v-col>
         </v-row>
        <nav class="navbar navbar-expand-sm d-none d-xl-block d-lg-block d-md-block bottomNav ">
        <v-row>
        <v-col md="4">
        <v-icon class="mr-5" color="white" large>far fa-calendar-alt</v-icon>
        <span style="color:blue">DATE</span><br><span style="color:white">06 juillet 2021</span>
        </v-col>
       <v-col  align="right" style="float: right;">
        <img  class="img-responsive" src="..\assets\unnamed.png" width="50" >
        </v-col>
        </v-row>
        </nav>   
        </v-img>   
  </div>
</template>

<script>
  import FlipCountdown from 'vue2-flip-countdown'

  export default {
    name: 'accueil',

    components: { FlipCountdown },

    mounted() {
    window.setInterval(() => {
        this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000),
       date:"2021-12-25 00:00:00",
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }
  }
</script>
<style >
.block {
    display: flex;
    flex-direction: column;
    margin: 20px;
}
.tiemCard{
  padding: 10px;
  width:500px
}
.agenda{
  width:500px
}
.digit {
    font-family: 'Roboto', serif;
    margin-top: 20%;
}
.time {
    font-size: 1em;
    font-family: 'Roboto', serif;
    background-color:#ffffff;
    border-radius: 15px;
}
.datetime{
  font-family: 'Oswald', sans-serif;
  color:#cca900
}
.view{
  text-align: center;
}
v-img.back{
  position: relative;
}
nav.bottomNav{
  background-color:rgba(0,0,0,0.4);
  position: absolute;
  width: 100%;
  bottom: -19px;
  
}

 
/* Large desktop */
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
.time {
 font-size:0.7em
}
.digit{
  margin-top: 25%;
}
.tiemCard{
  width:400px
}
.agenda{
  width:400px
}
.datetime{
  font-size:1.3em
}
}

.flip-clock__slot {
  color: #cca900;
}

</style>
