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
        <v-tabs
        color="deep-purple accent-4"
        right
        >
        <v-tab><b>LUNDI</b></v-tab>
        <v-tab><b>MARDI</b></v-tab>
        <v-tab><b>MERCREDI</b></v-tab>

        <v-tab-item>
            <v-container fluid>
            <v-row>
            <template>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                     Dr B. Burroni
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\barbara.jpg" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Présentation de cas de Syndromes Myéloprolifératifs Chromosome Ph Négatifs</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                     Dr N. Hammas
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\nawal.jpg" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Présentation de cas locaux de syndromes Myéloprolifératifs Ch. Ph Négatifs locaux</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                      Dr A. AlBouzidi / Dr M. Réda El Ochi
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\avatar-homme1.png" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Conclusion et clôture du Workshop</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </template>
            </v-row>
            </v-container>
        </v-tab-item>
        <v-tab-item>
            <v-container fluid>
            <v-row>
             <template>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                     Dr B. Burroni
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\barbara.jpg" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Présentation de cas de Syndromes Myéloprolifératifs Chromosome Ph Négatifs</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                     Dr N. Hammas
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\nawal.jpg" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Présentation de cas locaux de syndromes Myéloprolifératifs Ch. Ph Négatifs locaux</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                      Dr A. AlBouzidi / Dr M. Réda El Ochi
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\avatar-homme1.png" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Conclusion et clôture du Workshop</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </template>
            </v-row>
            </v-container>
        </v-tab-item>
        <v-tab-item>
            <v-container fluid>
            <v-row>
            <template>
            <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
               <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                     Dr B. Burroni
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\barbara.jpg" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Présentation de cas de Syndromes Myéloprolifératifs Chromosome Ph Négatifs</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                     Dr N. Hammas
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\nawal.jpg" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Présentation de cas locaux de syndromes Myéloprolifératifs Ch. Ph Négatifs locaux</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
                <v-timeline-item color="red" icon="fas fa-microphone">
                <v-card dark>
                    <v-card-title class="title">
                      Dr A. AlBouzidi / Dr M. Réda El Ochi
                    </v-card-title>
                    <v-card-text class="white text--primary">
                    <v-row >
                    <v-col>
                    <v-img src="..\assets\avatar-homme1.png" width="200"></v-img>
                    </v-col>
                    <v-col>
                   <b>Conclusion et clôture du Workshop</b>
                    </v-col>
                    </v-row>
                    </v-card-text>
                </v-card>
                </v-timeline-item>
            </v-timeline>
            </template>
            </v-row>
            </v-container>
        </v-tab-item>
        </v-tabs>
    </v-card>
    </template>
    </v-col>
    </v-row>
    <v-row class="mt-4">
        <v-col align="center">
        <a href="/images/myw3schoolsimage.jpg" download>
        <v-btn rounded color="primary" dark>
           <v-icon>fas fa-download</v-icon>TELECHARGER LE PROGRAMME
        </v-btn>
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
    
</style>