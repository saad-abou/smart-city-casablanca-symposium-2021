<template>
  <div>
        <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
            <h1 class="propsHead compHead" style="color:#EC5713"  >
              SMART CITY AU SERVICE DE LA RÉSILIENCE<br>
              ET LA RÉGÉNÉRATION TERRITORIALE
            </h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="pa-1" cols="12"> 
                  <div style="text-align: left;background-color:white;text-align: justify;text-justify: inter-word;" class="pa-5 text">
                     <b> Smart City Casablanca Symposium </b> sera organisé les 9 et 10 juin 2021 sous le thème <b>« Smart City au service de la résilience et la régénération territoriale »</b>.
                    Une thématique devenue fondamentale pour le futur de nos villes, notamment sous la lumière des nouveaux défis émergents et la crise actuelle de la COVID-19 en est un fort exemple.
                    En effet, la récente pandémie COVID-19, la première crise sanitaire mondiale depuis plus d'un siècle, a été décrite comme le troisième plus grand choc économique, financier et social du 21e siècle après le 11 septembre et la crise financière mondiale de 2008.
                    Ce choc a interrompu les processus dynamiques de fonctionnement social et économique des nations et des villes dû aux protocoles stricts de confinement et de distanciation spatiale imposés par les pays à travers le globe.
                    <h1 style="text-align: right;" class="blue--text" v-show="!more" @click="more = !more"><b><a>+</a></b></h1>
                    <span v-show="more">
                    Dans ce contexte sans précédent, les défis urbains dominants en matière de santé, d’éducation, de précarité et de logement, entre autres composantes des systèmes urbains, ont été mis au premier plan ce qui a souligné l’importance fondamentale de la résilience des villes et des communautés d’une part.
                    D’autre part, cela a conduit à une transformation des usages notamment à travers une accélération de l'utilisation des technologies numériques comme solutions de réponse rapide pour soutenir les nombreux services fondamentaux des villes. 
                    Par conséquent, les composantes clés de la Smart City ont été mises en évidence de manière significative, lors de cette période de pandémie, soit en matière d’intégration des solutions digitales dans les villes, soit en matière de résilience pour la continuité des services vitaux et de régénération des territoires.
                    Ainsi, cette ère d'une nouvelle normalité est marquée par un besoin urgent d'accélérer la transformation digitale et d’unifier les parties prenantes en repensant la gouvernance des villes afin de faire face à des défis sociaux, économiques et environnementaux importants. Une période charnière pour mettre en œuvre les stratégies de régénération territoriale afin d’impulser de nouvelles dynamiques dans les nombreuses régions et domaines affectés.<br>
                    <b style="color:blue">Mots clés :</b> Smart city, territoires, villes, résilience, régénération, pandémie, technologies, digital, new normal, transformation des usages.
                    </span>
                    <h1 style="text-align: right;" class="blue--text" v-show="more" @click="more = !more"><b><a>-</a></b></h1>
                  </div>   
            </v-col>
        </v-row>
        </v-container>
  </div>  
</template>
<script>
export default {
  data() {
    return {
      more:false
    }
  },
}
</script>
<style >
.propo{
    text-align: center;
}
.welcome_text{

}
@media all and (max-width: 768px) {
  
  .propsHead{
    font-size: 1.5rem;
    padding: .75rem;
    color:#EC5713
  }
}
</style>