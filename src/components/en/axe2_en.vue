<template>
    <div>
        <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
            <h1 style="color:#EC5713" class="compHead">TOPICS</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <div class="row safariFlex">
            <div class="col-md-6 col-sm-12 safariFlex-colum"  >
                 <v-img  src="../../assets/Reg_territ.jpg"  width="100%" aspect-ratio="1.4"
                  transition="slide-x-transition" alt="URBAN REGENERATION" > 
                  </v-img>
            </div>
            <div class="pa-md-10 col-md-6 col-sm-12 safariFlex-colum"  >           
                <h2 class="axeHead">URBAN REGENERATION</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li>Cultural regeneration</li>
                    <li>Territorial regeneration</li>
                    <li>Economic regeneration</li>
                    <li>Mitigation strategy </li>
                    <li>Social and societal transformation</li>
                    <li>Transformation of uses / New Normal</li>
                    <li>Change management</li>
                    <li>New paradigms and Co Creation of wealth</li>
                </ul>
            </div>
        </div>
        <v-row class="orderFix safariFlex" >
            <v-col id="a"  cols="12" md="6" sm="12" class="safariFlex-colum" >
                 <v-img  src="../../assets/Innovation_sociale.jpg"  width="100%" aspect-ratio="1.4"
                  transition="scroll-x-reverse-transition" alt="SOCIAL INNOVATION"> 
                  </v-img>
            </v-col>
            <v-col id="b" class="pa-md-10 safariFlex-colum" cols="12" md="6" sm="12" >           
                <h2 class="axeHead">SOCIAL INNOVATION</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li> Collective intelligence </li>
                    <li> Communication and participatory approaches </li>
                    <li> Social impact </li>
                    <li> Social entrepreneurship and start-ups </li>
                    <li> Social and solidarity economy </li>
                    <li> Collaborative innovation spaces </li>
                    <li> Smart public spaces </li>
                    <li> Inclusive development </li>
                </ul>
            </v-col>
        </v-row>
        <v-row class="safariFlex">
            <v-col cols="12" md="6" sm="12" class="safariFlex-colum">
                 <v-img  src="../../assets/Gestion_urbaine.jpg"  width="100%" aspect-ratio="1.4"
                  transition="slide-x-transition" alt="PLANNING AND TERRITORIAL MANAGEMENT" > 
                  </v-img>
            </v-col>
            <v-col class="pa-md-10 safariFlex-colum" cols="12" md="6" sm="12">           
                <h2 class="axeHead">PLANNING AND TERRITORIAL MANAGEMENT</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li> Inclusive governance </li>
                    <li> Strategic urban planning </li>
                    <li> Financial mechanisms </li>
                    <li> Participatory territorial policies </li>
                    <li> PPP partnerships </li>
                    <li> Territorial competitiveness </li>
                    <li> Public action </li>
                    <li> Territorial attractiveness strategy </li>
                </ul>
            </v-col>
        </v-row>
        <v-row class="orderFix safariFlex">
            <v-col id="c" cols="12" md="6" sm="12" class="safariFlex-colum" >
                 <v-img  src="../../assets/digital.jpg"  width="100%" aspect-ratio="1.4"
                  transition="scroll-x-reverse-transition" alt="DIGITAL TRANSFORMATION" > 
                  </v-img>
            </v-col>
            <v-col id="d" class="pa-md-10 order-sm-1 safariFlex-colum" cols="12" md="6" sm="12" >           
                <h2 class="axeHead">DIGITAL TRANSFORMATION</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li> Smart Urban transition </li>
                    <li> Data Store </li>
                    <li> iOT and urban alert system </li>
                    <li> Digital infrastructure </li>
                    <li> Urban data analytics </li>
                    <li> Augmented and virtual urban reality </li>
                    <li> R&D and innovation </li>
                </ul>
            </v-col>
        </v-row>
        <v-row class="safariFlex">
            <v-col cols="12" md="6" sm="12" class="safariFlex-colum">
                 <v-img  src="../../assets/urban_services.jpg"  width="100%" aspect-ratio="1.4"
                  transition="slide-x-transition" alt="URBAN SERVICES & RESILIENCE" > 
                  </v-img>
            </v-col>
            <v-col class="pa-md-10 safariFlex-colum" cols="12" md="6" sm="12" >           
                <h2 class="axeHead">URBAN SERVICES & RESILIENCE</h2>
                <div class="titleLine mb-2 ml-1"></div>
                <ul style="list-style-type: square;text-align: left;">
                    <li> Urban ecosystem services </li>
                    <li> Integrated urban systems </li>
                    <li> City-as-a-service </li>
                    <li> Mobility and urban transport </li>
                    <li> WASH (water, satiation and hygiene) services </li>
                    <li> Accessibility to services </li>
                    <li> Urban crises </li>
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
    .orderFix #b   {order: 1;}
    .orderFix #a {order: 2;}
    .orderFix #d   {order: 1;}
    .orderFix #c {order: 2;}

    .orderFix #b   {-webkit-order: 1;}
    .orderFix #a {-webkit-order: 2;}
    .orderFix #d   {-webkit-order: 1;}
    .orderFix #c {-webkit-order: 2;}

@media all and (max-width: 767px) {

    .orderFix #b   {order: 2;}
    .orderFix #a {order: 1;}
    .orderFix #d   {order: 2;}
    .orderFix #c {order: 1;}


    .orderFix #b   {-webkit-order: 2;}
    .orderFix #a {-webkit-order: 1;}
    .orderFix #d   {-webkit-order: 2;}
    .orderFix #c {-webkit-order: 1;}

}
</style>