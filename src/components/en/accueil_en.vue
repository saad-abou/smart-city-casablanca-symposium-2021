<template>
  <div class="view" > 
        <div>
          <img  class="img-responsive center" width="400" height="200" src="..\..\assets\cityen_text.jpg" alt="Smart city casablanca" >
        </div>
         <div class="text-center d-md-none">
          <v-btn rounded color="yellow darken-2" @click="click" dark>
            <inscription_en ref="regestreComponent"></inscription_en>
          </v-btn>
        </div>
  </div>
</template>

<script>

  export default {
    name: 'accueil',

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
  },
  methods:{
    click: function() {
        this.$refs.regestreComponent.setValue();

        this.$gtag.event('form d\'inscription', {
        'event_category': 'en',
        'event_label': 'dernier click',
        'value': 1
      })
    },
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
  position: absolute;
  width: 100%;
  bottom: 100px;
}
@media all and (max-width: 768px) {
  nav.bottomNav{
  bottom: 9px;
}
  
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

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}
</style>
