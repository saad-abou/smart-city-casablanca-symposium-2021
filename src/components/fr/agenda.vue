<template>
    <v-container>
    <v-row>
    <v-col align="center">
        <h1 style="color:#EC5713"  class="compHead">PROGRAMME</h1>
    <v-divider></v-divider>
    </v-col>
    </v-row>
    <v-row>
    <v-col>
        <nav style="background-color:white" class="navbar navbar-light navbar-expand bg-faded justify-content-center ">
                <ul class="nav navbar-nav  justify-content-center child " style="text-align:center">
                   <li class="agendaLink mr-1"><router-link to="/fr/09juin"><b>MERCREDI 09 JUIN 2021</b></router-link></li>
                    <li class="agendaLink2"><router-link to="/fr/10juin"><b>JEUDI 10 JUIN 2021</b></router-link></li>      
                </ul>
        </nav>
        <div class="mt-5">
            <router-view v-on:gotoslide="getslide"></router-view>
        </div>
    </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {
    methods: {
      getslide(num){
          this.$emit('slidenum',num);
      }
    },
    
}
</script>
<style>
.agendaLink{
    color:white;
    background-color:#0C3D58;
}
.agendaLink2{
    color:white;
    background-color:#ACA19D;
}
.child li a{
  color:#fff!important;
  transition: 0.3s;
  width:200px;
  padding:8px!important
}
.child li a:hover{
  color:white!important;
  background-color:#BE1D27!important
}

@media (max-width: 480px) {

.child li a{
  width:150px;
  padding:2px!important;
  font-size:0.7em
}

}

@media (max-width: 390px) {

.child li a{
  width:120px;
  padding:1px!important;
  font-size:0.6em
}

}
</style>