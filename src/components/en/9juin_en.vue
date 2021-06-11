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
                    <b style="font-size:1.2em">Opening Ceremony</b>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Speakers</b></h5>
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
                            <h5 style="color:#ABA09C"><b>MODERATOR</b></h5>
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
                   <span style="font-size:1.2em"><span style="color:#E4572C"><b>PLENARY 1</b></span><br><br>
                   Inclusive regeneration of territories
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ABA09C"><b>Brief</b></h5>
                    The period of rapid development that the world is going through continues to bring about fundamental changes in cities and territories. This movement involves the transformation of economic models, changes in societal structures, change in uses, the creation of new services, the acceleration of urban change and the redistribution of activities in the territories. To this movement is added the current COVID-19 pandemic which has imposed several fundamental changes in the practice of cities, and which will continue to have long-term impacts. It is therefore essential to rethink how territories face these crises and disturbances and reinvent themselves after these changes by implementing innovative and inclusive regeneration strategies.
                    Thus, this plenary aims to explore strategies for inclusive territorial regeneration, sustainable and wealth-creating, and to expose good practices in terms of inclusive and sustainable urban regeneration.
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Speakers</b></h5>
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
                   Smart territorial Planning and management <br><br>
                    R&D and territorial innovation ecosystem
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ADB9CA"><b>Brief</b></h5>
                    In response to the various issues identified in territories, several research areas are increasingly interested in concepts related to territorial intelligence/innovation. Indeed, territories are complex systems, where a multitude of actors and components interact continuously. Thus, understanding the various economic, environmental, social issues and the nature of public policies, among others, is crucial for the implementation of innovative territoty management strategies. As a result, the development of collaborative spaces for the promotion of R&D and technology transfer has more than ever a preponderant role in promoting social innovation and supporting innovative territorial planning.
                    Thus, this workshop will constitute a platform to present university projects around cases of innovation ecosystem development, smart territorial planning and management, social innovation projects and University-Territory technology transfer programs.
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Speakers</b></h5>
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
                            <h5 style="color:#ABA09C"><b>MODERATOR</b></h5>
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
                   Moroccan territorial collectivity at the time of digital transformation
                   </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row>
                    <v-col align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                    <h5 style="color:#ADB9CA"><b>Brief</b></h5>
                   Digital transformation is an important performance lever for Local Authorities with the objective to dematerialize procedures for better harmonization between administrations and optimal service to users. The year 2020 was the year of digital transformation  for local authorities with the accelerating effect of the Covid-19 crisis. The year 2021 is the year of open government, management by data, and the pursuit of digitization.
                    </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="12" sm="12" align="left" class="text" style="text-align: left;text-align: justify;text-justify: inter-word;">
                            <h5 style="color:#ABA09C"><b>Speakers</b></h5>
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
                            <h5 style="color:#ABA09C"><b>MODERATOR</b></h5>
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
        title: 'Smart City Casablanca Symposium - 09 june 2021',
        meta:[{
            name: 'description',
            content: 'SMART CITY CASABLANCA , SMART CITY CASABLANCA SYMPOSIUM, SCCS2021, SCCS 2021, SCCS, SCCS21, Smart City, casablanca, Casablanca Events et Animation is organizing Smart City Casablanca Symposium under the theme : Smart City for territorial resilience and regeneration. An unifying, participatory and collaborative project inspired by the Casablanca Smart City congress and which aims to continue to offer the Casablanca and Moroccan smart city ecosystem an active platform for sharing of ideas, experiences and best practices despite Covid-19 restrictions. The event Smart City Casablanca Symposium, which is an integral part of the Wecasablanca attractiveness strategy, will be held over 2 days, in a hybrid format via a virtual retransmission platform.'
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