<template>
  <div>
        <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
              <h1 style="color:#EC5713" class="compHead">ABOUT</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-5" cols="12" >           
                  <v-card style="text-align: left;background-color:#EA5816;color:white;text-align: justify;text-justify: inter-word;" class="pa-5 text">
                    <p>Casablanca Events et Animation is organizing <b>Smart City Casablanca Symposium</b> 
                     under the theme : <b>Smart City for territorial resilience and regeneration.</b>
                     An unifying, participatory and collaborative project inspired by the <a  href="https://www.casablancasmartcity.com/en" target="_blanc">Casablanca Smart City</a>
                     congress and which aims to continue to offer the Casablanca and Moroccan smart city ecosystem an active platform for sharing of ideas,
                     experiences and best practices despite Covid-19 restrictions. The event <b>Smart City Casablanca Symposium</b>, which is an integral part of the Wecasablanca attractiveness strategy,
                     will be held over 2 days, in a hybrid format via a virtual retransmission platform.
                    </p>
                  </v-card>
            </v-col>
        </v-row>
        </v-container>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      more:false
    }
  },
}
</script>
<style >
.propo{
    text-align: center;
}
.welcome_text{

}
@media all and (max-width: 768px) {
  
  .propsHead{
    font-size: 1.5rem;
    padding: .75rem;
    color:#EC5713
  }
}

.ps {
  height:330px;
}
</style>