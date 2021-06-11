<template>
  <div>
        <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
              <h1 style="color:#EC5713"  class="compHead">A PROPOS</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-1" cols="12"> 
                  <v-card style="text-align: left;background-color:#EA5816;color:white;text-align: justify;text-justify: inter-word;" class="pa-5 text">
                    <p>
                    Casablanca Events et Animation organise un événement inédit le <b>Smart City Casablanca Symposium</b> sous le thème : <b>Smart City au service de la résilience et la régénération territoriale</b>.
                     Un projet fédérateur, participatif et collaboratif inspiré par le congrès <a href="https://www.casablancasmartcity.com" target="_blanc">Casablanca Smart City</a> et qui a pour objectif de continuer à proposer à l’écosystème smart city Casablancais et Marocain
                      une plateforme d’échanges et de réflexions malgré les restrictions sanitaires. L’événement <b>Smart City Casablanca Symposium</b> qui fait partie intégrante de la démarche d’attractivité Wecasablanca,
                       se tiendra sur 2 jours, dans un format hybride via une plateforme virtuelle de retransmission.
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
</style>