<template>
  <div>
        <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
            <h1 class="propsHead compHead"  style="color:#EC5713">
              SMART CITY FOR TERRITORIAL<br>
              RESILIENCE AND REGENERATION
            </h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-1" cols="12" >           
                  <div style="text-align: left;background-color:white;text-align: justify;text-justify: inter-word;" class="pa-5 text">
                    <b>Smart City Casablanca Symposium</b> will be held on 9th and 10th June 2021 under the theme “<b>Smart City for territorial resilience and regeneration</b>”.
                    A theme that has become fundamental for the future of our cities, particularly in the light of new emerging challenges and the current COVID-19 crisis as a strong example.
                    Indeed, the recent COVID-19 pandemic, the first global health crisis in over a century, has been described as the third greatest economic, financial and social shock of the 21st century after September 11 and the 2008 global financial crisis. This shock interrupted the dynamic processes of social and economic functioning of nations and cities due to the strict protocols of lockdown and social distancing imposed by countries across the globe.
                    <h1 style="text-align: right;" class="blue--text" v-show="!more" @click="more = !more"><b><a>+</a></b></h1>
                    <span v-show="more">
                    With this unprecedented context, prevailing urban challenges of health, education, informality and housing, among other components of urban systems, were foregrounded, which underlined the fundamental importance of resilience of cities and communities on one hand. On the other hand, it has led to a transformation of uses, in particular through an acceleration in the use of digital technologies as rapid response solutions to support the many fundamental services of cities.
                    Consequently, the key components of the Smart City have been highlighted significantly, during this pandemic period, either in terms of the integration of digital solutions in cities or in terms of 
                    resilience for the continuity of vital services and regeneration of territories.
                    Thus, this era of a new normal is marked by an urgent need to accelerate digital transformation and unify stakeholders by rethinking the governance of cities in order to tackle major social, economic and environmental challenges. A turning point for implementing territorial regeneration strategies in order to stimulate new dynamics in the many regions and areas affected.<br>
                    
                    <b style="color:blue">Mots clés :</b> Smart city, territoires, villes, résilience, régénération, pandémie, technologies, digital, new normal, transformation des usages.
                    </span>
                    <h1 style="text-align: right;"  class="blue--text" v-show="more" @click="more = !more"><b><a>-</a></b></h1>
                  </div>
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