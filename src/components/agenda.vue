<template>
    <v-container>
    <v-row>
    <v-col align="center">
    <h1 ><v-icon color="indigo lighten-3" class="mr-2">fas fa-calendar-week</v-icon>AGENDA</h1>
    <v-divider></v-divider>
    </v-col>
    </v-row>
    <v-row>
    <v-col align="center">
    <template>
    <v-card>
            <v-container fluid>
            <v-row>
            <template>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item color="#3F66A7" icon="fas fa-microphone">
                <v-card color="#3F66A7" dark>
                    <v-card-title class="title pt-1">
                    <v-row>
                        <v-col lg="3" sm="12" md="12">
                            <v-card :class="`rounded-r-xl`" color="#B5537F">14:00</v-card>
                        </v-col>
                        <v-col lg="9" sm="12" md="12">
                        Mot D'introduction
                        </v-col>
                    </v-row>
                    </v-card-title>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="#3F66A7" icon="fas fa-microphone">
                <v-card color="#3F66A7" class="mb-4"  dark>
                    <v-card-title class="title pt-1">
                    <v-row>
                        <v-col lg="3" sm="12" md="12">
                            <v-card :class="`rounded-r-xl`" color="#B5537F">14:15</v-card>
                        </v-col>
                        <v-col lg="9" sm="12" md="12">
                            Vers une approche multidisciplinaire pour la prise en charge du cancer du sein
                        </v-col>
                    </v-row>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\berrada.png" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Pr Narjiss Berrada</h4>
                    <b>Oncologue Médicale- Cancérologue. Cabinet Chellah Oncology
                    </b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                    <v-card-text class="pink lighten-2">
                    <v-row>
                    <v-col align="left">
                    <b>Modérée par</b> : Pr Mehdi Karkouri /
                    Pr Mohammed Elkarroumi
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="#3F66A7" icon="fas fa-microphone">
                <v-card color="#3F66A7" dark>
                    <v-card-title class="title pt-1">
                    <v-row>
                        <div class="col-lg-3 col-sm-12 col-md-12">
                            <v-card :class="`rounded-r-xl`" color="#B5537F">14:45</v-card>
                        </div>
                        <div class="col-lg-9 col-sm-12 col-md-12">
                             HPV et Cancer du col de l'uterus: actualités & implication cliniques          
                        </div>
                    </v-row>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\attar.jpg" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Dr Hicham El Attar</h4>
                    <b>Anatomo-Cyto-Pathologiste, laboratoire privé
                    </b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                    <v-card-text class="pink lighten-2">
                    <v-row>
                    <v-col align="left">
                    <b>Modérée par</b> : Pr Mehdi Karkouri /
                    Pr Mohammed Elkarroumi
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="#3F66A7" icon="fas fa-microphone">
                <v-card color="#3F66A7" dark>
                    <v-card-title class="title pt-1">
                    <v-row>
                    <div class="col-lg-3 col-sm-12 col-md-12">
                    <v-card :class="`rounded-r-xl`" color="#B5537F">15:35</v-card>
                    </div>
                    <div class="col-lg-9 col-sm-12 col-md-12">
                    Tests pré-nataux: DPNI & T21
                    </div>
                    </v-row>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\benkhalifa.png" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Pr Moncef Benkhalifa </h4>
                    <b>Professeur de médecine de la reproduction, biologie du développement et de la reproduction à l'Université Picardie Jules Verne, Amiens.
                    </b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                    <v-card-text class="pink lighten-2">
                    <v-row>
                    <v-col align="left">
                    <b>Modérée par</b> : Dr Hicham Ouazzani / 
                    Dr Yassir Ait Benkaddour
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="#3F66A7" icon="fas fa-microphone">
                <v-card color="#3F66A7" dark>
                    <v-card-title class="title pt-1">
                    <v-row>
                    <div class="col-lg-3 col-sm-12 col-md-12">
                    <v-card :class="`rounded-r-xl`" color="#B5537F">16:05</v-card>
                    </div>
                    <div class="col-lg-9 col-sm-12 col-md-12">
                    Optimisation de la PMA en 2021
                    </div>
                    </v-row>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\sefroui.png" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Pr Omar Sefrioui </h4>
                    <b>
                    Président de la SMMR et professeur agrégé en gynécologie
                    </b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                    <v-card-text class="pink lighten-2">
                    <v-row>
                    <v-col align="left">
                    <b>Modérée par</b> : Dr Hicham Ouazzani / 
                    Dr Yassir Ait Benkaddour
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="#3F66A7" icon="fas fa-microphone">
                <v-card color="#3F66A7" dark>
                    <v-card-title class="title pt-1">
                    <v-row>
                    <div class="col-lg-3 col-sm-12 col-md-12">
                    <v-card :class="`rounded-r-xl`" color="#B5537F">16:35</v-card>
                    </div>
                    <div class="col-lg-9 col-sm-12 col-md-12">
                    Prise en charge des couples Sero Discordants en FIV/ICSI
                    </div>
                    </v-row>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\avatar-homme1.png" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Dr Elodie Lefranc</h4>
                    <b>Médecin Biologiste de la Reproduction (CBH) au CHU Amiens Picardie, site Sud
                    </b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                    <v-card-text class="pink lighten-2">
                    <v-row>
                    <v-col align="left">
                    <b>Modérée par</b> : Dr Hicham Ouazzani / 
                    Dr Yassir Ait Benkaddour
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="#3F66A7" icon="fas fa-microphone">
                <v-card color="#3F66A7" dark>
                    <v-card-title class="title pt-1">
                    <v-row>
                    <div class="col-lg-3 col-sm-12 col-md-12">
                    <v-card :class="`rounded-r-xl`" color="#B5537F">17:15</v-card>
                    </div>
                    <div class="col-lg-9 col-sm-12 col-md-12">
                    Les infections materno-fœtales : TORCH
                    </div>
                    </v-row>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\lmimouni.png" width="150"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Dr Badre Eddine Lmimouni</h4>
                    <b>Docteur en Pharmacie, Spécialiste en Biologie Médicale,
                     Chef de service de Parasitologie et mycologie médicale à l'Hôpital Militaire d'Instruction<br> Mohammed V
                    </b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                    <v-card-text class="pink lighten-2">
                    <v-row>
                    <v-col align="left">
                    <b>Modérée par</b> : Pr Said Bouhya / 
                    Pr Badre Eddine Lmimouni
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="#3F66A7" icon="fas fa-microphone">
                <v-card color="#3F66A7" dark>
                    <v-card-title class="title pt-1">
                    <v-row>
                    <div class="col-lg-3 col-sm-12 col-md-12">
                    <v-card :class="`rounded-r-xl`" color="#B5537F">17:45</v-card>
                    </div>
                    <div class="col-lg-9 col-sm-12 col-md-12">
                    Pré-éclampsie: sFlt-1, PlGf,sFlt-1/PlGf ratio et diagnostic
                    </div>
                    </v-row>
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\nourdine.png" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Dr Noureddine Louanjli </h4>
                    <b>Médecin biologiste au sein d'un laboratoire privé et membre de la SMMR
                    </b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                    <v-card-text class="pink lighten-2">
                    <v-row>
                    <v-col align="left">
                    <b>Modérée par</b> : Pr Said Bouhya / 
                    Pr Badre Eddine Lmimouni
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </template>
            </v-row>
            </v-container>
    </v-card>
    </template>
    </v-col>
    </v-row>
    <v-row class="mt-2">
    <v-col align="center">
    <a href="https://drive.google.com/file/d/108WEGg9Seqt9gJQbrwfTufe8iuTAKOHq/view" target="_blank">
    <div class="programme"><b>Consultez le programme officiel</b></div>
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
.programme{
    background-color:#3F66A7;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-size:50px;
    height:100px;
    border-radius: 25px;
    
}
 .title{
      word-break: keep-all;
 } 
 .textBody{
     text-align: left;
 }  

 @media (min-width: 1200px) {

}

/* Portrait tablet to landscape and desktop */
@media (min-width: 768px) and (max-width: 979px) {

    .programme{
    font-size:40px;   
}

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {
    .programme{
    font-size:20px;   
}

}

/* Landscape phones and down */
@media (max-width: 480px) {
.programme{
    font-size:20px;   
}

}
</style>