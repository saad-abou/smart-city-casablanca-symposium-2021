<template>
    <v-container class="inscrire" grid-list-xs >
    <v-row>
    <v-col align="center">
    <h1 ><v-icon color="indigo lighten-3" class="mr-2">fas fa-user-plus</v-icon>INSCRIPTION</h1>
    <v-divider></v-divider>
    </v-col>
    </v-row>
    <v-row class="mt-10">
    <v-col class="inscrireInfo" align="center">
    <p>Numéro de la réunion : <b style="color:blue">175 306 3137</b></p>
    <p>Mot de passe : <b style="color:blue">Novartis</b></p>
    </v-col>
    </v-row>
    <v-row class="mt-10 mb-5">
    <v-col align="center">
    <a href="#" type="button" class="insriBtn btn btn-outline-success ">
     <v-icon class="mr-1">fas fa-sign-in-alt</v-icon><b style="color:black">S'INSCRIRE</b>
    </a>
    </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style>
.inscrire{
    margin-bottom:120px
}
.inscrireInfo{
    font-size:1.5em
}
@media (max-width: 480px) {
 .inscrireInfo{
    font-size:1em
}
  
}
    
</style>