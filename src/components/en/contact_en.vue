<template>
    <v-container class="propo" grid-list-xs fluid>
    <v-row>
    <v-col align="center">
    <h1 ><v-icon color="indigo lighten-3" class="mr-2">fas fa-envelope</v-icon>CONTACT</h1>
    <v-divider></v-divider>
    </v-col>
    </v-row>
    <v-row class="mt-10">
    <v-col class="inscrireInfo" align="center">
    <p>khalil Sibari<br><b style="color:green">+212 602 820 075</b><br>
    <b style="color:green">khalil.sibari@ascrea.ma</b>
    </p>
    <p>
    Sara Kenas<br><b style="color:green">+212 660 289 097</b><br>
    <b style="color:green">sara.kenas@ascrea.ma</b>
    </p>
    </v-col>
    </v-row>
    <v-row class="footer d-lg-none d-xl-block d-md-block" >
    <v-col align="center" class="mt-5">
    <p style="color:black">© Copyright 2021 <b style="color:green">ASCREA</b></p>
    <img  class="img-responsive ascreaLogo" src="\assets\unnamed.png" width="50" >
    </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style> 

@media (max-width: 480px) {
 .inscrireInfo{
    font-size:1em
}
.ascreaLogo{
    width:50px
}
  
}
.footer{
    color:white;
    margin-top:100px;
    height:150px
}

</style>