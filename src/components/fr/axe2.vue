<template>
    <div>
        <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
            <h1 style="color:#EC5713"  class="compHead">AXES</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <div class="row safariFlex">
            <div class="col-md-6 col-sm-12 safariFlex-colum"  >
                 <v-img  src="../../assets/Reg_territ.jpg"  width="100%" aspect-ratio="1.4"
                  transition="slide-x-transition" alt="REGENERATION URBAINE" > 
                  </v-img>
            </div>
            <div class="pa-md-10 col-md-6 col-sm-12 safariFlex-colum"  >           
                <h2 class="axeHead">REGENERATION URBAINE</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li>Régénération culturelle</li>
                    <li>Régénération économique</li>
                    <li>Régénération territoriale</li>
                    <li>Stratégie de mitigation </li>
                    <li>Transformation sociale et sociétale</li>
                    <li>Transformation des usages/New Normal</li>
                    <li>Conduite de changement</li>
                    <li>Nouveaux paradigmes et Co-création des richesses</li>
                </ul>
            </div>
        </div>
        <v-row class="orderFix safariFlex">
            <v-col id="af" cols="12" md="6" sm="12" class="safariFlex-colum" >
                 <v-img  src="../../assets/Innovation_sociale.jpg"  width="100%" aspect-ratio="1.4"
                  transition="scroll-x-reverse-transition" alt="INNOVATION SOCIALE" > 
                  </v-img>
            </v-col>
            <v-col id="bf" class="pa-md-10 safariFlex-colum" cols="12" md="6" sm="12"  >           
                <h2 class="axeHead">INNOVATION SOCIALE</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li>L’intelligence collective</li>
                    <li>Communication et approches participatives</li>
                    <li>Impact social</li>
                    <li>Entrepreneuriat social et start-ups</li>
                    <li>Economie social et solidaire</li>
                    <li>Espaces collaboratifs d’innovation </li>
                    <li>Espaces publics Smart</li>
                    <li>Développement  inclusif</li>
                </ul>
            </v-col>
        </v-row>
        <v-row class="safariFlex">
            <v-col cols="12" md="6" sm="12" class="safariFlex-colum"  >
                 <v-img  src="../../assets/Gestion_urbaine.jpg"  width="100%" aspect-ratio="1.4"
                  transition="slide-x-transition" alt="PLANIFICATION ET GESTION TERRITORIALE" > 
                  </v-img>
            </v-col>
            <v-col class="pa-md-10 safariFlex-colum" cols="12" md="6" sm="12"  >           
                <h2 class="axeHead">PLANIFICATION ET GESTION TERRITORIALE</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li>Gouvernance inclusive</li>
                    <li>Planification urbaine stratégique</li>
                    <li>Mécanismes financiers</li>
                    <li>Politiques territoriales participatives</li>
                    <li>Partenariats PPP</li>
                    <li>Compétitivité territoriale</li>
                    <li>Action publique</li>
                    <li>Stratégie d’attractivité territoriale</li>
                </ul>
            </v-col>
        </v-row>
        <v-row class="orderFix safariFlex">
            <v-col id="cf" cols="12" md="6" sm="12" class="safariFlex-colum" >
                 <v-img  src="../../assets/digital.jpg"  width="100%" aspect-ratio="1.4"
                  transition="scroll-x-reverse-transition" alt="TRANSFORMATION DIGITALE" > 
                  </v-img>
            </v-col>
            <v-col id="df" class="pa-md-10 safariFlex-colum" cols="12" md="6" sm="12" >           
                <h2 class="axeHead">TRANSFORMATION DIGITALE</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li>Smart Urban transition</li>
                    <li>Data Store</li>
                    <li>iOT et système d’Alertes urbaines</li>
                    <li>Infrastructure digitale</li>
                    <li>Urban data analytics</li>
                    <li>Réalité Urbaine augmentée et virtuelle</li>
                    <li>R&D et innovation</li>
                </ul>
            </v-col>
        </v-row>
        <v-row class="safariFlex">
            <v-col cols="12" md="6" sm="12" class="safariFlex-colum" >
                 <v-img  src="../../assets/urban_services.jpg"  width="100%" aspect-ratio="1.4"
                  transition="slide-x-transition" alt="SERVICES URBAINS & RESILIENCE" > 
                  </v-img>
            </v-col>
            <v-col class="pa-md-10 safariFlex-colum" cols="12" md="6" sm="12" >           
                <h2 class="axeHead">SERVICES URBAINS & RESILIENCE</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li>Urban ecosystem services</li>
                    <li>Systèmes urbains intégrés</li>
                    <li>City-as-a-service</li>
                    <li>Mobilité et transport urbains</li>
                    <li>Services WASH (water, satiation and hygiene)</li>
                    <li>Accessibilité aux services</li>
                    <li>Crises urbaines</li>
                </ul>
            </v-col>
        </v-row>
        </v-container>
    </div>  
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style>

.axeHead{
    text-align:left;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.9375rem;
    font-weight: 800
}
.titleLine {
    content: "";
    display: block;
    width: 4.375rem;
    height: .25rem;
    background-color: #FBB400;
    bottom: 0;
    left: 0;
}

   .orderFix #bf   {order: 1;}
    .orderFix #af {order: 2;}
    .orderFix #df   {order: 1;}
    .orderFix #cf {order: 2;}

    .orderFix #bf   {-webkit-order: 1;}
    .orderFix #af {-webkit-order: 2;}
    .orderFix #df   {-webkit-order: 1;}
    .orderFix #cf {-webkit-order: 2;}

@media screen and (min-width: 770px) {

    .safariFlex{
        display: flex;
        display: -webkit-box;
         display:-webkit-flex; 
    }
    .safariFlex-colum{
        flex: 0 0 50%;
    }
    .safariFlex-colum-foter{
         flex: 0 0 70%;
    }
  

}

@media all and (max-width: 767px) {

    .orderFix #bf   {order: 2;}
    .orderFix #af {order: 1;}
    .orderFix #df   {order: 2;}
    .orderFix #cf {order: 1;}

    .orderFix #bf   {-webkit-order: 2;}
    .orderFix #af {-webkit-order: 1;}
    .orderFix #df   {-webkit-order: 2;}
    .orderFix #cf {-webkit-order: 1;}

}
@media (max-width: 980px) {

    .axeHead{
        font-size: 1rem!important;     
    }

}

@media (max-width: 390px) {

    .axeHead{
        font-size: 1.5rem!important;     
    }

}

</style>