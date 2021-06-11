<template>
    <div class="9juincomp">
        <v-row>
            <v-col align="left" cols="2"  style="background-color:#E4572C" class="white--text horaire">
                10:00<br>
                11:00
            </v-col>
            <v-col>
            <v-expansion-panels>
                <v-expansion-panel style="background-color:#F7F6F4!important">
                <v-expansion-panel-header>
                   <span style="font-size:1.2em"><span style="color:#E4572C"><b>PLÉNIÈRE 2</b></span><br><br>
                   Résilience territoriale et innovation sociale
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                        <h5 style="color:#ABA09C"><b>Brief</b></h5>
                        Face aux divers défis émergents à l’ère actuelle, la résilience territoriale revêt une importance fondamentale dans les stratégies de planification. Ce nouveau paradigme reflète une recherche continue d’une nouvelle perspective de durabilité et de performance territoriale. Ce concept se base sur une action territoriale intégrée, concertée et holistique cherchant à assurer une interconnexion entre toutes les composantes du territoire. En effet, étant donné que la société fait partie inhérente des territoires, ces derniers peuvent être de véritables incubateurs d’innovation sociale au profit de la résilience des territoires. Ce concept émergent vise l’implication de la société dans de nouvelles dynamiques de coopération institutionnalisée à travers une gouvernance endogène et inclusive. 
                        Cette première plénière permettra de mettre en avant le rôle de l’innovation sociale (innovation citoyenne, entreprenariat social, les politiques publiques, la société civile…) dans le renforcement de la résilience urbaine et la durabilité territoriale en temps de crise. Elle traitera aussi du besoin d’une gouvernance participative et inclusive favorisant l’émergence de l’innovation territoriale comme levier de la résilience urbaine.
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                        <a href="#speakers" @click="slideTo(1)" style="text-decoration:none"><v-avatar>
                                <img src="../../assets/hakima.png" alt="Fabienne">
                            </v-avatar>
                            <b class="ml-1">Hakima Fasly</b>
                        </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                        <a href="#speakers" @click="slideTo(26)" style="text-decoration:none"><v-avatar>
                                <img src="../../assets/driss.png" alt="Fabienne">
                            </v-avatar>
                            <b class="ml-1">Driss Abbadi</b>
                        </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(28)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/abdelkader.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Abdelkader Gonegai</b>
                            </a>
                        </v-col>
                         <v-col cols="12" md="4" sm="6" align="left" >
                        <a href="#speakers" @click="slideTo(4)" style="text-decoration:none"><v-avatar>
                                <img src="../../assets/fabien.png" alt="Fabienne">
                            </v-avatar>
                            <b class="ml-1">Fabienne Goux-Baudiment</b>
                        </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(9)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/rachel.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1" style="font-size:1em">Rachel Armstrong</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(20)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/agnes.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Agnès Jullien</b>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Modérateur</b></h5>
                        </v-col>
                        <v-col cols="12" md="6" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(21)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/anas.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Anass Kettani</b>
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
                11:00<br>
                12:30
            </v-col>
            <v-col>
            <v-expansion-panels>
                <v-expansion-panel style="background-color:#F7F6F4!important">
                <v-expansion-panel-header>
                   <span style="font-size:1.2em"><span style="color:#FAB417"><b>WORKSHOP</b></span><br><br>
                   Régénération urbaine, approches et pratiques innovantes 
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ADB9CA"><b>Brief</b></h5>
                    La régénération urbaine sous toutes ses différentes formes nécessite une diversité d'approches et de pratiques. La complexité croissante des défis urbains et leur nature interdépendante exigent des approches et des pratiques holistiques et innovantes afin de répondre aux exigences actuelles de durabilité, d'inclusivité et de croissance. Cette régénération découle de l'engagement d'acteurs diversifiés et multidisciplinaires proposant des solutions variées et appartenant aussi bien au secteur public que privé en passant par la société civile.
                    Ce workshop permet aux acteurs public/privé de présenter aux participants les différents projets de régénération urbaine et développement territorial dans les domaines culturel, sportif, social, économique…
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(10)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/giulio.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Giulio Verdini</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(11)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/carlo.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Carlo Alberini</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(12)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/matthew.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Matthew Hardy</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(19)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/nicolas.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Nicolas J.A. Buchoud</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(32)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/danielle.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Danielle Pailler</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(53)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/benaomar.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Khaoula Benamar</b>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Modérateur</b></h5>
                        </v-col>
                         <v-col cols="12" md="6" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(43)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/yakubu.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Hassan Yakubu</b>
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
                14:00<br>
                15:30
            </v-col>
            <v-col>
            <v-expansion-panels>
                <v-expansion-panel style="background-color:#F7F6F4!important">
                <v-expansion-panel-header>
                   <span style="font-size:1.2em"><span style="color:#E4572C"><b>PLÉNIÈRE 3</b></span><br><br>
                   Transformation digitale des services et usages
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ABA09C"><b>Brief</b></h5>
                    L’accélération des transformations induites par le digital bouleverse profondément la société et les usages. Dans la sphère urbaine, cette transformation à travers la ville intelligente permet la digitalisation des services comme le transport, la santé, l’éducation, la sécurité, le logement et les infrastructures.
                    L’ère de la transformation digitale permet de faciliter l’accès des citoyens aux services urbains avec une efficacité et une durabilité optimale tout en favorisant une approche participative et en réduisant la fracture sociale et numérique.
                    Ainsi, cette plénière vise à montrer comment la transformation digitale contribue à améliorer les services urbains et l’efficience des politiques territoriales. Elle propose également de discuter de l’impact de la transformation digitale sur les relations collectivités/agent public/ usager et enfin de présenter les outils de la transformation digitale urbaine à travers des exemples concrets. 
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" align="left" >
                            <a href="#speakers" @click="slideTo(13)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/saifur.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Saifur Rahman</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" align="left" >
                            <a href="#speakers" @click="slideTo(42)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/essaaidi.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Essaaidi Mohamed</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" align="left" >
                            <a href="#speakers" @click="slideTo(48)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/nebri.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Mohamed Faïçal Nebri</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" align="left" >
                            <a href="#speakers" @click="slideTo(29)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/amehdi.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Mehdi Alaoui</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" align="left" >
                            <a href="#speakers" @click="slideTo(30)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/mohammedt.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Mohammed Talbi</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="12" align="left" >
                            <a href="#speakers" @click="slideTo(54)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/faouzi.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Nour-Eddin El Faouzi</b>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Modérateur</b></h5>
                        </v-col>
                        <v-col cols="12" md="6" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(22)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/omar.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Omar Bouattane</b>
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
                   La ville servicielle : City-as-a-service (CaaS)<br><br>
                   Infrastructures digitales et performance territoriale
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ABA09C"><b>Brief</b></h5>
                    La gestion des villes est une action complexe exigeant la contribution de diverses parties prenantes afin de fournir aux citoyens des services urbains efficaces. L'intégration des technologies numériques offre une opportunité révolutionnaire de repenser la manière dont les services sont livrés aux usagers finaux. Ceci à travers des modèles de service gérés sur les plateformes technologiques.  La prestation de service est réinventée pour une efficacité accrue et une performance territoriale optimale. 
                    Ce workshop vise à présenter les projets de transformation digitale permettant de renforcer la performance territoriale et l’efficacité des services urbains.
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(49)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/urgen.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Levent Gurgen</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(34)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/najib.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Najib Ouradi</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(35)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/zouheir.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Zouheir Lakhdissi</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(14)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/karima.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Karima Echihabi</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(15)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/hicham.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Hicham Bahi</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="4" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(41)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/chebak.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Ahmed Chebak</b>
                            </a>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Modérateur</b></h5>
                        </v-col>
                        <v-col cols="12" md="6" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(25)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/mohammed.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Mohammed Khalil</b>
                            </a>
                        </v-col>
                    </v-row>
                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
            </v-col>
        </v-row>
        <v-row>
            <v-col align="left" cols="2"  style="background-color:#ACA19D" class="white--text horaire">
                17:30<br>
                18:00
            </v-col>
            <v-col>
            <v-expansion-panels>
                <v-expansion-panel style="background-color:#F7F6F4!important">
                <v-expansion-panel-header>
                   <span style="font-size:1.2em"><span><b>Cérémonie de clôture</b></span><br><br>
                   </span>
                </v-expansion-panel-header>
                 <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Intervenants</b></h5>
                        </v-col>
                        <v-col cols="12" md="3" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(0)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/mohamed.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Mohamed Jouahri</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="3" sm="6" align="left" >
                            <a href="#speakers" @click="slideTo(2)" style="text-decoration:none"><v-avatar>
                                    <img src="../../assets/awatif.png" alt="Fabienne">
                                </v-avatar>
                                <b class="ml-1">Awatif Hayar</b>
                            </a>
                        </v-col>
                        <v-col cols="12" md="3" sm="6" align="left" >
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
    </div>
</template>
<script>
export default {
    
    metaInfo() {
        return{
        title: 'Smart City Casablanca Symposium - 10 juin 2021',
        meta:[{
            name: 'description',
            content: 'SMART CITY CASABLANCA , SMART CITY CASABLANCA SYMPOSIUM, SCCS2021, SCCS 2021, SCCS, SCCS21, Smart City, casablanca, Casablanca Events et Animation organise un événement inédit le Smart City Casablanca Symposium sous le thème : Smart City au service de la résilience et la régénération territoriale.  Un projet fédérateur, participatif et collaboratif inspiré par le congrès Casablanca Smart City et qui a pour objectif de continuer à proposer à l’écosystème smart city Casablancais et Marocain une plateforme d’échanges et de réflexions malgré les restrictions sanitaires. Lévénement Smart City Casablanca Symposium qui fait partie intégrante de la démarche d’attractivité Wecasablanca, se tiendra sur 2 jours, dans un format hybride via une plateforme virtuelle de retransmission.'
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

</style>