<template>
<div>
    <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
            <h1 style="color:#EC5713" class="compHead">SCIENTIFIC COMMITTEE</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-container class="pa-5">
            <v-row>
                <v-col align="center" cols="12" md="6" sm="6" v-for="(speaker, index) in speakers" :key="index" :id="index" >
                <v-hover v-slot="{ hover }">
                <v-card class="mx-auto" color="grey lighten-4" max-width="300">
                <v-img aspect-ratio="1"  :src="'../../'+speaker.src" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                    <div class="d-flex v-card--reveal-first white--text"
                            style="height: 80%"
                            v-if="!hover"
                        >
                        <b>{{speaker.name}}</b>
                    </div>
                    <v-expand-transition>
                        <v-overlay  v-if="hover" color="indigo darken-3" class="transition-easy-in-easy-out v-card--reveal white--text  pa-3"
                            style="height: 100%;">
                            <span style="text-align:left;" class="cvtext">{{speaker.cv}}</span>
                        </v-overlay >
                    </v-expand-transition>
                </v-img>
                </v-card>
                </v-hover>
                </v-col>
            </v-row>
        </v-container>
    </v-container>
</div>  
</template>
<script>
export default {
    data() {
        return {
            speakers: [
                 {name:"Aawatif Hayar",cv:"President of Hassan II University of Casablanca.",
                  src:"awatif.png",},
                {name:"Hassan Radoine",cv:"Director School of Architecture, Planning and Design of Mohammed VI Polytechnic University.",
                  src:"hassan.png",},    
            ],
        }
    },
}
</script>
<style >
.compHead{
    font-size: 1.9375rem;
}
</style>