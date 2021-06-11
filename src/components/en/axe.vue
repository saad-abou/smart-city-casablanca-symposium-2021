<template>
<div>
    <v-container class="pa-4 text-center">
        <v-row>
            <v-col align="center">
            <h1 ><v-icon color="indigo lighten-3" class="mr-2">fas fa-boxes</v-icon>AXES</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row class="fill-height" align="center" justify="center" >
            <v-col cols="12" md="4">
                <v-hover v-slot="{ hover }">
                    <v-card data-aos="fade-right" data-aos-once="true" data-aos-easing="linear"
                    class="mx-auto" color="grey lighten-4" max-width="600" >
                        <v-img :aspect-ratio="16/9" height="300px" src="../../assets/Gestion_urbaine.jpg" >
                            <v-expand-transition>
                                <v-overlay v-if="hover"  absolute  color="orange darken-4"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                                    style="height: 100%;"
                                >
                                    <ul>
                                        <li>Régénération culturelle</li>
                                        <li>Régénération économique</li>
                                        <li>Régénération territoriale</li>
                                        <li>Stratégie de mitigation </li>
                                        <li>Transformation sociale et sociétale</li>
                                        <li>Transformation des usages/New Normal</li>
                                        <li>Conduite de changement</li>
                                        <li>Nouveaux paradigmes et Cocréation des richesses</li>
                                    </ul>
                                </v-overlay>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <h5 class="display-1 font-weight-light orange--text mb-2">
                                REGENERATION URBAINE
                            </h5>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" md="4">
                <v-hover v-slot="{ hover }">
                    <v-card data-aos="fade-right" data-aos-once="true" data-aos-easing="linear"
                    class="mx-auto" color="grey lighten-4" max-width="600" >
                        <v-img :aspect-ratio="16/9" height="300px" src="../../assets/Innovation_sociale.jpg" >
                            <v-expand-transition>
                                <v-overlay v-if="hover"  absolute  color="yellow accent-4"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                                    style="height: 100%;"
                                >
                                    <ul>
                                        <li>L’intelligence collective</li>
                                        <li>Communication et approches participatives</li>
                                        <li>Impact social</li>
                                        <li>Entrepreneuriat social et start-ups</li>
                                        <li>Economie social et solidaire</li>
                                        <li>Espaces collaboratifs d’innovation </li>
                                        <li>Espaces publics Smart</li>
                                        <li>Développement  inclusif</li>
                                    </ul>
                                </v-overlay>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <h6 class="display-1 font-weight-light orange--text mb-2">
                                INNOVATION SOCIALE
                            </h6>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" md="4">
                <v-hover v-slot="{ hover }">
                    <v-card data-aos="fade-right" data-aos-once="true" data-aos-easing="linear"
                    class="mx-auto" color="grey lighten-4" max-width="600" >
                        <v-img :aspect-ratio="16/9" height="260px" src="../../assets/Reg_territ.jpg" >
                            <v-expand-transition>
                                <v-overlay v-if="hover"  absolute  color="red accent-4"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                                    style="height: 100%;"
                                >
                                    <ul>
                                        <li>Gouvernance inclusive</li>
                                        <li>Planification urbaine stratégique</li>
                                        <li>Mécanismes financiers</li>
                                        <li>Politiques territoriales participatives</li>
                                        <li>Partenariats PPP</li>
                                        <li>Compétitivité territoriale</li>
                                        <li>Action publique</li>
                                        <li>Stratégie d’attractivité territoriale</li>
                                    </ul>
                                </v-overlay>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <h3 class="display-1 font-weight-light orange--text mb-2">
                                PLANIFICATION ET GESTION TERRITORIALE
                            </h3>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" md="4">
                <v-hover v-slot="{ hover }">
                    <v-card data-aos="fade-right" data-aos-once="true" data-aos-easing="linear"
                    class="mx-auto" color="grey lighten-4" max-width="600" >
                        <v-img :aspect-ratio="16/9" height="300px" src="../../assets/digital.jpg" >
                            <v-expand-transition>
                                <v-overlay v-if="hover"  absolute  color="orange darken-4"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                                    style="height: 100%;"
                                >
                                    <ul>
                                        <li>Smart Urban transition</li>
                                        <li>Data Store</li>
                                        <li>iOT et système d’Alertes urbaines</li>
                                        <li>Infrastructure digitale</li>
                                        <li>Urban data analytics</li>
                                        <li>Réalité Urbaine augmentée et virtuelle</li>
                                        <li>R&D et innovation</li>
                                    </ul>
                                </v-overlay>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <h3 class="display-1 font-weight-light orange--text mb-2">
                                TRANSFORMATION DIGITALE
                            </h3>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
            <v-col cols="12" md="4">
                <v-hover v-slot="{ hover }">
                    <v-card data-aos="fade-right" data-aos-once="true" data-aos-easing="linear"
                    class="mx-auto" color="grey lighten-4" max-width="600" >
                        <v-img :aspect-ratio="16/9" height="300px" src="../../assets/urban_services.jpg" >
                            <v-expand-transition>
                                <v-overlay v-if="hover"  absolute  color="orange darken-4"
                                    class="d-flex transition-fast-in-fast-out v-card--reveal"
                                    style="height: 100%;"
                                >
                                    <ul>
                                        <li>Urban ecosystem services</li>
                                        <li>Systèmes urbains intégrés</li>
                                        <li>City-as-a-service</li>
                                        <li>Mobilité et transport urbains</li>
                                        <li>Services WASH (water, satiation and hygiene)</li>
                                        <li>Accessibilité aux services</li>
                                        <li>Crises urbaines</li>
                                    </ul>
                                </v-overlay>
                            </v-expand-transition>
                        </v-img>
                        <v-card-text class="pt-6" style="position: relative;">
                            <h3 class="display-1 font-weight-light orange--text mb-2">
                                SERVICES URBAINS & RESILIENCE
                            </h3>
                        </v-card-text>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</div>  
</template>
<script>
export default {
    data() {
        return {
            overlay: false,
        }
    },
}
</script>
<style>
.v-card--reveal {
  text-align: left;
  bottom: 0;
  position: absolute;
  width: 100%;
}
</style>