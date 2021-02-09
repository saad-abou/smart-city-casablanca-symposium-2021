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
                <v-timeline-item color="purple darken-3" icon="fas fa-microphone">
                <v-card color="purple darken-3" dark>
                    <v-card-title class="title pt-1">
                     NOUVELLE CIBLE THÉRAPEUTIQUE POUR LA GESTION DU RISQUE CARDIOVASCULAIRE
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\Pr PATHAK.png" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Pr.Atul Pathak</h4>
                    <b >Chief of Cardiology
                    Centre Hospitalier Princess Grace, MONACO
                    Perelman School of Medecine, University of Pennsylvania,
                    Philadelphia, USA
                    </b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="purple darken-3" icon="fas fa-microphone">
                <v-card color="purple darken-3" dark>
                    <v-card-title class="title pt-1">
                     HYPERTENSION ARTÉRIELLE: VERS UNE ORDONNANCE RÉFLÉCHIE
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\Pr Faouzi Addad.jpg" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Pr.Faouzi Addad</h4>
                    <b>Professeur en Cardiologie - Service de Cardiologie
                    CHU Abderrahmen Mami-Ariana</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="purple darken-3" icon="fas fa-microphone">
                <v-card color="purple darken-3" dark>
                    <v-card-title class="title pt-1">
                     ASSOCIATION BISOPROLOL-AMLODIPINE:<br>
                     QUESL PROFILS PATIENT ?
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\laila.png" width="200"></v-img>
                    </v-col>
                    <v-col class="textBody">
                    <h4>Pr.Bendriss Laila</h4>
                    <b>Professeur de cardiologie 
                     Hôpital Militaire Avicenne, Marrakech</b>
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
    <v-row>
    <v-col align="center">
    <v-card color="purple darken-3" max-width="600" dark>
        <v-card-title class="title pt-1">
        MODÉRATEUR
        </v-card-title>
        <v-card-text class="white text--primary">
        <v-row >
        <v-col>
        <v-img src="..\assets\Abdelmajid.png" width="200"></v-img>
        </v-col>
        <v-col class="textBody">
        <h4>Pr.Bouzerda Abdelmajid</h4>
        <b>Professeur de cardiologie 
        Hôpital Militaire Avicenne, Marrakech</b>
        </v-col>
        </v-row>
        </v-card-text>
    </v-card>
    </v-col>
    </v-row>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style>
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

}

/* Landscape phone to portrait tablet */
@media (max-width: 767px) {

}

/* Landscape phones and down */
@media (max-width: 480px) {

}
</style>