<template>
    <v-container class="propo" grid-list-xs >
    <v-row>
    <v-col align="center">
    <h1 ><v-icon color="indigo lighten-3" class="mr-2">fas fa-ring</v-icon>A PROPOS</h1>
    <v-divider></v-divider>
    </v-col>
    </v-row>
    <v-row>
    <v-col align="center">
    <h4 class="mt-5 welcome_text">Cher Docteur,</h4>
    <v-row>
      <v-col class="welcome_text" align="center">En partenariat avec <b style="color:red">l’Association des Cardoilogues de Marrakech</b>
      </v-col>
    </v-row> 
    <v-row>
      <v-col class="welcome_text"> 
       les laboratoires
      <b style="color:#5700d1">Merck</b>
      ont l’immense plaisir de vous inviter aux 
      </v-col>
    </v-row> 
    <v-row color="blue">
      <v-col class="welcome_text" align="center" style="color:#5700d1"><b>Rencontres de Cardiologie-Merck</b></v-col>
    </v-row> 
    <v-row><v-col class="welcome_text" align="center">le mercredi <b style="color:#5700d1">17 Février 2021</b> à partir de <b style="color:#5700d1">19H30</b></v-col></v-row>
    </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="mt-5">
    </v-row>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style >
.propo{
    text-align: center;
}
.welcome_text{
  font-size: 1.5em;
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
 
 /* #navbarSupportedContent{
    background-color:black
  }*/

}
</style>