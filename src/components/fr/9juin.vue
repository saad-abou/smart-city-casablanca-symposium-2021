<template>
    <div class="9juincomp">
        <v-row>
            <v-col align="left" cols="2" style="background-color:#ACA19D" class="white--text horaire">
                10:00<br>
                11:00
            </v-col>
            <v-col>
            <v-expansion-panels>
                <v-expansion-panel style="background-color:#F7F6F4!important">
                <v-expansion-panel-header>
                    <b style="font-size:1.2em">Cérémonie d'ouverture</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(50)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/ahmidouch.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Said Ahmidouch</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(51)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/bouchareb.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Nouzha Bouchareb</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(24)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/safir.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Khalid Safir</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(44)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/omari.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Abdelaaziz Omari</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(0)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/mohamed.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Mohamed Jouahri</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(2)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/awatif.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Aawatif Hayar</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(3)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/hassan.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Hassan Radoine</b>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Modérateur</b></h5>
                        </v-col>
                        <v-col cols="12" md="3" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(16)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/mehdi.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Mehdi Boukhari</b>
                            </a>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="left" cols="2"  style="background-color:#E4572C" class="white--text horaire">
                11:00<br>
                12:30
            </v-col>
            <v-col>
            <v-expansion-panels>
                <v-expansion-panel style="background-color:#F7F6F4!important">
                <v-expansion-panel-header>
                   <span style="font-size:1.2em"><span style="color:#E4572C"><b>PLÉNIÈRE 1</b></span><br><br>
                   Régénération inclusive des territoires
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ABA09C"><b>Brief</b></h5>
                    La période de développement rapide que traverse le monde actuel continue à engendrer des changements fondamentaux dans les villes et territoires. Ce mouvement implique la transformation des modèles économiques, les changements des structures sociétales, le changement des usages, la création de nouveaux services, l’accélération des mutations urbaines et la redistribution des activités dans les territoires. A ce mouvement s’ajoute la pandémie actuelle de la COVID-19 qui a imposé plusieurs changements de fond dans la pratique des villes et qui continuera à avoir des impacts sur le long-terme. Il est ainsi primordial de repenser la manière dont les territoires font face à ces crises et perturbations et se réinventent après ces mutations en mettant en œuvre des stratégies de régénération innovantes et inclusives.
                    Ainsi, cette plénière vise à explorer les stratégies de régénération territoriale inclusive, durable et créatrice de richesse, et exposer les bonnes pratiques en termes de régénération urbaine inclusive et durable.
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(45)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/piero.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Piero Scaruffi</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(7)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/monceyf.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Monceyf Fadili</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(47)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/alex.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Alex Black</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(8)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/tridib.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Tridib Banerjee</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(46)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/jamme.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Huê-Tâm Jamme</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                        <a href="#speakers" @click="slideTo(27)" style="text-decoration:none"><v-avatar>
                                <img src="../../assets/hans.png" alt="Fabienne">
                            </v-avatar>
                            <b class="ml-1">Hans Martin Neumann</b>
                        </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(6)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/remy.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1" style="font-size:1em">Remy Sietchiping</b>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Modérateur</b></h5>
                        </v-col>
                        <v-col cols="12" md="3" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(3)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/hassan.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Hassan Radoine</b>
                            </a>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="left" cols="2"  style="background-color:#FAB417" class="white--text horaire">
                14:00<br>
                15:30
            </v-col>
            <v-col>
            <v-expansion-panels>
                <v-expansion-panel style="background-color:#F7F6F4!important">
                <v-expansion-panel-header>
                   <span style="font-size:1.2em"><span style="color:#FAB417"><b>WORKSHOP</b></span><br><br>
                   Planification et gestion territoriale intelligente<br><br>
                   R&amp;D et écosystème d’innovation territoriale
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ADB9CA"><b>Brief</b></h5>
                    En réponse aux diverses problématiques identifiées dans les territoires, plusieurs domaines de recherche s’intéressent de manière croissante aux concepts liés à l’intelligence/ l’innovation territoriale. En effet, les territoires sont des systèmes complexes, où une multitude d’acteurs et de composantes interagissent de manière continue. Ainsi, la compréhension des divers enjeux économiques, environnementaux, sociaux et de la nature des politiques publiques, entre autres, est cruciale pour la mise en place de stratégies de gestion de territoire innovante. De ce fait, l’aménagement d’espace collaboratifs de valorisation de la R&D et de transfert de technologie a plus que jamais un rôle prépondérant pour favoriser l’innovation sociale et l’accompagnement d’une planification territoriale innovante.
                    Ainsi, ce workshop constituera une plateforme pour présenter des projets universitaires autour de cas de développement d’écosystème d’innovation, de planification et gestion territoriale intelligente, de projet d’innovation sociale et de programme de transfert de technologie Université-Territoire.
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(5)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/cathal.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Cathal O'Madagain</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(17)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/lou.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Lou Vasta</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(18)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/lamiae.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Lamiae Benmakhlouf</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(23)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/kaddem.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">El M’Kaddem Kheddioui</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(33)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/annick.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Annick Vignes</b>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Modérateur</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(52)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/hammoumi.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Ismail Hammoumi</b>
                            </a>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="left" cols="2"  style="background-color:#FAB417" class="white--text horaire">
                16:00<br>
                17:30
            </v-col>
            <v-col>
            <v-expansion-panels>
                <v-expansion-panel style="background-color:#F7F6F4!important">
                <v-expansion-panel-header>
                   <span style="font-size:1.2em"><span style="color:#FAB417"><b>WORKSHOP</b></span><br><br>
                   Les collectivités territoriales marocaines à l’heure de la transformation digitale
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ADB9CA"><b>Brief</b></h5>
                    La transformation digitale est un levier de performance important pour les Collectivités Territoriales avec un objectif de dématérialisation des procédures pour une meilleure harmonisation entre les administrations et un service optimal à l’usager.L’année 2020, a été l’année de la transformation digitale par excellence pour les collectivités territoriales avec l'effet accélérateur de la crise de la Covid-19. L’année 2021 est l’année de l’open government, de la gestion par la Data, et de la poursuite de la digitalisation.
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(36)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/brahim.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Brahim Bachirat</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(37)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/faysal.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Fayçal Benachou</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(38)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/benouahoud.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Anas Benouahoud</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(39)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/mechkouri.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Salaheddine Mechkouri</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="4" align="left" >
                            <a href="#speakers" @click="slideTo(40)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/belatiq.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Sanae Belatiq</b>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Modérateur</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(31)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/amine.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Mohamed Amine Souissi</b>
                            </a>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {

    metaInfo() {
        return{
        title: 'Smart City Casablanca Symposium - 09 juin 2021',
        meta:[{
            name: 'description',
            content: 'SMART CITY CASABLANCA , SMART CITY CASABLANCA SYMPOSIUM, SCCS2021, SCCS 2021, SCCS, SCCS21, Smart City, casablanca,  Casablanca Events et Animation organise un événement inédit le Smart City Casablanca Symposium sous le thème : Smart City au service de la résilience et la régénération territoriale.  Un projet fédérateur, participatif et collaboratif inspiré par le congrès Casablanca Smart City et qui a pour objectif de continuer à proposer à l’écosystème smart city Casablancais et Marocain une plateforme d’échanges et de réflexions malgré les restrictions sanitaires. Lévénement Smart City Casablanca Symposium qui fait partie intégrante de la démarche d’attractivité Wecasablanca, se tiendra sur 2 jours, dans un format hybride via une plateforme virtuelle de retransmission.'
        }
        ]
      }
    },
    methods: {
        slideTo(num){
            this.$emit('gotoslide',num)
        }
    },
    
}
</script>
<style >

.9juincomp{
    font-family: 'Montserrat', sans-serif;
}

@media all and (max-width: 768px) {
  
  .horaire{
      font-size: 0.9em;
      padding-left: 1px!important;
    }
  
}


</style>