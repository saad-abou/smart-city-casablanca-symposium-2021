<template>
<div>
    <v-container grid-list-xs>
        <v-row>
            <v-col align="center">
            <h1 style="color:#EC5713"  class="compHead">SPEAKERS</h1>
            <v-divider></v-divider>
            </v-col>
        </v-row>
        <v-container class="pa-5">
        <carousel :per-page-custom="responsive" :pagination-enabled="false" :navigation-enabled="true"  :scrollPerPage="false" :navigate-to="[slideshow,true]"	>
            <slide v-for="(speaker, index) in speakers" :key="index" :id="index" >
                 <v-hover v-slot="{ hover }">
                    <v-card class="mx-auto" color="grey lighten-4" max-width="300">
                    <v-img aspect-ratio="1"  :src="'../../'+speaker.src" gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)">
                        <div class="d-flex v-card--reveal-first white--text"
                                style="height: 80%"
                                v-if="!hover"
                            >
                            <b>{{speaker.name}}</b>
                        </div>
                        <v-expand-transition>
                            <v-overlay  v-if="hover" color="indigo darken-3" class="transition-easy-in-easy-out v-card--reveal white--text  pa-3"
                                style="height: 100%;">
                                <span style="text-align:left;" class="cvtext">{{speaker.cv}}</span>
                            </v-overlay >
                        </v-expand-transition>
                    </v-img>
                    </v-card>
                </v-hover>
            </slide>
        </carousel>
        </v-container>
    </v-container>
</div>  
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
    data() {
        return {
            overlay: false,
            selectslide:5,
            speakers: [
                {name:"Mohamed Jouahri",cv:"Directeur Général de Casablanca Events et Animation",
                  src:"mohamed.png"},
                {name:"Hakima Fasly",cv:"Vice-Présidente du Conseil de la Ville de Casablanca",
                  src:"hakima.png"},
                {name:"Aawatif Hayar",cv:"Présidente de l’Université Hassan II de Casablanca",
                  src:"awatif.png",},
                {name:"Hassan Radoine",cv:"Directeur Ecole d'Architecture, planification et design de l’ Université Mohammed VI Polytechnique - Benguerir-Maroc",
                  src:"hassan.png",},
                {name:"Fabienne Goux-Baudiment",cv:"Docteur en sciences sociales et prospectiviste. ",
                  src:"fabien.png"},
                {name:"Cathal O'Madagain",cv:"Directeur scientifique et Professeur Assistant à l'École d'intelligence collective, UM6P. Docteur en philosophie de l'Université de Toronto.",
                  src:"cathal.png",},
                {name:"Remy Sietchiping",cv:"Chef de la Section des politiques, de la législation et de la gouvernance au sein du Service des pratiques urbaines d'ONU-Habitat. Docteur en géographie de l'Université de Melbourne, Australie.",
                  src:"remy.png",},
                {name:"Monceyf Fadili",cv:"Expert international en planification urbaine et développement territorial.Ancien Conseiller ONU-Habitat.",
                  src:"monceyf.png",}, 
                {name:"Tridib Banerjee",cv:"Professeur émérite de politique publique, Université de Californie du Sud -USA.",
                  src:"tridib.png"},
                {name:"Rachel Armstrong",cv:"Professeur d'architecture expérimentale, Université de Newcastle et professeur invité au Département d'architecture, KU Leuven, Belgique.",
                  src:"rachel.png",},
                {name:"Giulio Verdini",cv:"Professeur à la School of Architecture and Cities de l'Université de Westminster et directeur du BA Designing Cities: Planning and Architecture. Il est également professeur invité à l'Université  Mohammed VI polytechnique de Ben Guerir. ",
                  src:"giulio.png",},
                {name:"Carlo Alberini",cv:"Architecte et urbaniste à l'Université  Mohammed VI polytechnique avec un doctorat en planification des ports et projets de régénération des fronts de mer. Il a été membre et professeur d'urbanisme, d'histoire urbaine et de gestion urbaine à l'École d'architecture de Gênes et de Florence.",
                  src:"carlo.png",}, 
                {name:"Matthew Hardy",cv:"Professeur à l’Université d’Oxford dans le cadre du programme de développement urbain durable et est maître de conférences et directeur des études d’architecture et d’urbanisme à la Prince’s Foundation for Building Community. ",
                  src:"matthew.png",},
                {name:"Saifur Rahman",cv:"Directeur fondateur de l'Advanced Research Institute (www.ari.vt.edu) à Virginia Tech, États-Unis, où il est le professeur Joseph R. Loring de génie électrique et informatique. Il dirige également le Center for Energy and the Global Environment (www.ceage.vt.edu). Il est membre à vie de l'IEEE et lauréat de la médaille du millénaire de l'IEEE.",
                  src:"saifur.png",},
                {name:"Karima Echihabi",cv:"Enseignante chercheuse au sein de la School of Computer Science de l’Université Mohammed VI Polytechnique au Maroc (UM6P). Ses travaux de recherche portent sur l’analyse des données, la gestion des séries de données et l’apprentissage machine. ",
                  src:"karima.png",},
                {name:"Hicham Bahi",cv:"Professeur Assistant à l'École d'architecture, de planification et de design, UM6P et titulaire d'un doctorat en SIG et télédétection. Il est entre autres le coordinateur du projet Observatoire de la performance territoriale, le coordinateur du programme de formation doctorale de SAP + D et membre de l'équipe de recherche du projet de métabolisme urbain mené conjointement avec le MIT.",
                  src:"hicham.png",},
                {name:"Mehdi Boukhari",cv:"Rédacteur en chef des Editions Economiques, en charge de la Rubrique Eco des journaux télévisées chez 2M TV.",
                  src:"mehdi.png",}, 
                {name:"Lou Vasta",cv:"Lou Vasta, fondateur et PDG, Vasta & Associates, Inc., CHICAGO, États-Unis",
                  src:"lou.png",},
                {name:"Lamiae Benmakhlouf",cv:"Directrice Générale de MITC (Moroccan Information Technopark Company), Mme Lamia Benmakhlouf œuvre depuis 20ans dans le soutien à l’entrepreneuriat et l’innovation dans les secteurs à forte valeur ajoutée.",
                  src:"lamiae.png",},
                {name:"Nicolas J.A. Buchoud",cv:"Président du Cercle Grand Paris de l’Investissement Durable, co-fondateur de Renaissance Urbaine.",
                  src:"nicolas.png",},
                {name:"Agnès Jullien",cv:"Vice-Présidente International de l’Université Gustave Eiffel-France. Directrice exécutive du Forum des laboratoires routiers Européens.",
                  src:"agnes.png"},
                {name:"Anass Kettani",cv:"Directeur du Pôle Insertion et Entrepreneuriat de l’Université Hassan II de Casablanca. Directeur Adjoint du laboratoire Biologie et Santé, Faculté des Sciences Ben Msik, Casablanca. Professeur de L’Enseignement Supérieur Université Hassan II de Casablanca.",
                  src:"anas.png",},
                {name:"Omar BOUATTANE",cv:"Directeur de l'Ecole Normale Supérieure de l'Enseignement Technique de Mohammedia.",
                  src:"omar.png",},
                {name:"El M’Kaddem Kheddioui",cv:"Vice-Président, Chargé du Partenariat, la Coopération et du Développement de l'Université Hassan II de Casablanca.Enseignant Chercheur à la Faculté des Sciences et Techniques de Mohammedia de l'UH2C, Département de l'Ingénierie électrique.Directeur du Laboratoire de recherche Physique de l'Atmosphère, Matériaux et Modélisations (LPAMM), FSTM.Vice-président du Centre de Recherche de GreenTIC de l’UH2C.Co-Initiateur et coordonnateur du projet e-douar.",
                  src:"kaddem.png",},
                {name:"Khalid Safir",cv:"Wali, Directeur Général des Collectivités Territoriales.",
                  src:"safir.png"},
                {name:"Mohammed Khalil",cv:"Chargé de mission Digitalisation auprès de la Présidente de l'Université Hassan II de Casablanca.",
                  src:"mohammed.png"},
                {name:"Driss Abbadi",cv:"Doyen de la Faculté des sciences juridiques, économiques et Sociales Aïn Sbâa de l'Université Hassan II de Casablanca.",src:"driss.png",},
                {name:"Hans Martin Neumann",cv:"Coordinateur du programme Smart City - Austrian Institute of Technology",
                  src:"hans.png"},
                {name:"Abdelkader Gonegai",cv:"Doyen de la Faculté des Lettres et sciences humaines Ben M'Sik de l'Université Hassan II de Casablanca.",
                  src:"abdelkader.png",},
                {name:"Mehdi Alaoui",cv:"Vice-président de l'APEBI .Président de l'association Hack & Pitch.Fondateur de LaStartupFactory.",
                  src:"amehdi.png",}, 
                {name:"Mohammed Talbi",cv:"Doyen de la Faculté des Sciences Ben M'Sik de l'Université Hassan II de Casablanca.",
                  src:"mohammedt.png"},
                {name:"Mohamed Amine Souissi",cv:"Chargé de la Division de la transformation digitale - Direction de développement des compétences et de la transformation digitale – DGCT.",
                  src:"amine.png",},
                {name:"Danielle Pailler",cv:"Directrice Maghreb chez l'Agence Universitaire de la Francophonie.",
                  src:"danielle.png",},
                {name:"Annick Vignes",cv:"Directrice de recherche en économie et Professeur à l' Ecole Nationale des Ponts et Chaussées (Paris).",
                  src:"annick.png",},
                {name:"Najib Ouradi",cv:"Directeur de la BU Casa Numeric au sein de la SDL Casablanca Prestations. Après avoir suivi la mission d’élaboration du Schéma Directeur de Transformation Numérique, sa  BU Casa Numeric en assure la mise en œuvre depuis 2018.",
                  src:"najib.png",},
                {name:"Zouheir Lakhdissi",cv:"PDG de Dial Technologies .Entrepreneur digital, consultant et expert international dans le domaine de l’innovation digitale.",
                  src:"zouheir.png",},
                {name:"Brahim Bachirat",cv:"Chef de la division de la promotion de la gouvernance -Direction de Développement des Compétences et de la Transformation Digitale - DGCT.",src:"brahim.png",},
                {name:"Fayçal Benachou",cv:"Directeur général de la société Ribatis, chargée de la mise en œuvre et de l’exploitation de la plateforme Rokhas.ma dans le cadre d’un Partenariat Public Privé.",src:"faysal.png",},
                {name:"Anas Benouahoud",cv:"Chef de Département Accompagnement des Organismes Publics - Direction du Gouvernement Electronique E-GOV  - Agence de Développement Digital.",src:"benouahoud.png",},
                {name:"Salaheddine Mechkouri",cv:"Chef de service des applications de l’administration des collectivités territoriales – Division de la transformation digitale - Direction de développement des compétences et de la transformation digitale – DGCT.",src:"mechkouri.png",},
                {name:"Sanae Belatiq",cv:"Chef de service du contrôle administratif – Division des institutions locales - Direction des Institutions Locales - DGCT",src:"belatiq.png",},
                {name:"Ahmed Chebak",cv:"Professeur en génie électrique et en électromécanique à l’UM6P et Directeur pédagogique du Green Tech Institute.",src:"chebak.png",},
                {name:"Essaaidi Mohamed",cv:"Membre senior de l'IEEE et Professeur à l'ENSIAS, Université Mohammed V de Rabat.",src:"essaaidi.png",},
                {name:"Hassan Yakubu",cv:"Analyste à la School of Architecture, Planning & Design-UM6P.",src:"yakubu.png",},
                {name:"Abdelaaziz Omari",cv:"Président du Conseil de la ville de Casablanca.",
                  src:"omari.png"},
                {name:"Piero Scaruffi",cv:"Président de l'Institut de recherche en intelligence artificielle de la Silicon Valley.",
                  src:"piero.png"},
                {name:"Huê-Tâm Jamme",cv:"Professeur Assistant en urbanisme à l'École des sciences géographiques et de l'urbanisme, Université de l'Etat d'Arizona-USA.",
                  src:"jamme.png"},
                {name:"Alex Black",cv:"Conseiller économique du Consulat Américain à Casablanca.",
                  src:"alex.png"},
                {name:"Mohamed Faïçal Nebri",cv:"Responsable du Département Stratégie, Développement, Coopération et Communication -ADD",
                  src:"nebri.png"},
                {name:"Levent Gurgen",cv:"President de l' Urban Technology Alliance.",
                  src:"urgen.png"},
                {name:"Said Ahmidouch",cv:"Wali de la Région de Casablanca Settat.",
                  src:"ahmidouch.png"},
                {name:"Nouzha Bouchareb",cv:"Ministre de l’Aménagement du Territoire National, de l’Urbanisme, de l’Habitat et de la Politique de la Ville.",
                  src:"bouchareb.png"},
                {name:"Ismail Hammoumi",cv:"Ingénieur-Chercheur à l’Ecole d'Architecture, planification et design de l’ Université Mohammed VI Polytechnique.",
                  src:"hammoumi.png"},
                {name:"Khaoula Benaomar",cv:"Architecte-Urbaniste de l'Ecole Nationale d'Architecture de Rabat.",
                  src:"benaomar.png"},
                {name:"Nour-Eddin El Faouzi",cv:"Professeur de Mobilité intelligente et systèmes de transport intelligents et Directeur adjoint du département Composants et Systèmes à l’Université Gustave Eiffel.",
                  src:"faouzi.png"},
                {name:"Mohamed Jouahri",cv:"Directeur Général de Casablanca Events et Animation",
                  src:"mohamed.png"},
                {name:"Hakima Fasly",cv:"Vice-Présidente du Conseil de la Ville de Casablanca",
                  src:"hakima.png"},
                {name:"Aawatif Hayar",cv:"Présidente de l’Université Hassan II de Casablanca",
                  src:"awatif.png",},
                {name:"Hassan Radoine",cv:"Directeur Ecole d'Architecture, planification et design de l’ Université Mohammed VI Polytechnique - Benguerir-Maroc",
                  src:"hassan.png",},
                {name:"Fabienne Goux-Baudiment",cv:"Docteur en sciences sociales et prospectiviste. ",
                  src:"fabien.png"},
                {name:"Cathal O'Madagain",cv:"Directeur scientifique et Professeur Assistant à l'École d'intelligence collective, UM6P. Docteur en philosophie de l'Université de Toronto.",
                  src:"cathal.png",},
                {name:"Remy Sietchiping",cv:"Chef de la Section des politiques, de la législation et de la gouvernance au sein du Service des pratiques urbaines d'ONU-Habitat. Docteur en géographie de l'Université de Melbourne, Australie.",
                  src:"remy.png",},
                {name:"Monceyf Fadili",cv:"Expert international en planification urbaine et développement territorial.Ancien Conseiller ONU-Habitat.",
                  src:"monceyf.png",}, 
                {name:"Tridib Banerjee",cv:"Professeur émérite de politique publique, Université de Californie du Sud -USA.",
                  src:"tridib.png"},
                {name:"Rachel Armstrong",cv:"Professeur d'architecture expérimentale, Université de Newcastle et professeur invité au Département d'architecture, KU Leuven, Belgique.",
                  src:"rachel.png",},
                {name:"Giulio Verdini",cv:"Professeur à la School of Architecture and Cities de l'Université de Westminster et directeur du BA Designing Cities: Planning and Architecture. Il est également professeur invité à l'Université  Mohammed VI polytechnique de Ben Guerir. ",
                  src:"giulio.png",},
                {name:"Carlo Alberini",cv:"Architecte et urbaniste à l'Université  Mohammed VI polytechnique avec un doctorat en planification des ports et projets de régénération des fronts de mer. Il a été membre et professeur d'urbanisme, d'histoire urbaine et de gestion urbaine à l'École d'architecture de Gênes et de Florence.",
                  src:"carlo.png",}, 
                {name:"Matthew Hardy",cv:"Professeur à l’Université d’Oxford dans le cadre du programme de développement urbain durable et est maître de conférences et directeur des études d’architecture et d’urbanisme à la Prince’s Foundation for Building Community. ",
                  src:"matthew.png",},
                {name:"Saifur Rahman",cv:"Directeur fondateur de l'Advanced Research Institute (www.ari.vt.edu) à Virginia Tech, États-Unis, où il est le professeur Joseph R. Loring de génie électrique et informatique. Il dirige également le Center for Energy and the Global Environment (www.ceage.vt.edu). Il est membre à vie de l'IEEE et lauréat de la médaille du millénaire de l'IEEE.",
                  src:"saifur.png",},
                {name:"Karima Echihabi",cv:"Enseignante chercheuse au sein de la School of Computer Science de l’Université Mohammed VI Polytechnique au Maroc (UM6P). Ses travaux de recherche portent sur l’analyse des données, la gestion des séries de données et l’apprentissage machine. ",
                  src:"karima.png",},
                {name:"Hicham Bahi",cv:"Professeur Assistant à l'École d'architecture, de planification et de design, UM6P et titulaire d'un doctorat en SIG et télédétection. Il est entre autres le coordinateur du projet Observatoire de la performance territoriale, le coordinateur du programme de formation doctorale de SAP + D et membre de l'équipe de recherche du projet de métabolisme urbain mené conjointement avec le MIT.",
                  src:"hicham.png",},
                {name:"Mehdi Boukhari",cv:"Rédacteur en chef des Editions Economiques, en charge de la Rubrique Eco des journaux télévisées chez 2M TV.",
                  src:"mehdi.png",}, 
                {name:"Lou Vasta",cv:"Lou Vasta, fondateur et PDG, Vasta & Associates, Inc., CHICAGO, États-Unis",
                  src:"lou.png",},
                {name:"Lamiae Benmakhlouf",cv:"Directrice Générale de MITC (Moroccan Information Technopark Company), Mme Lamia Benmakhlouf œuvre depuis 20ans dans le soutien à l’entrepreneuriat et l’innovation dans les secteurs à forte valeur ajoutée.",
                  src:"lamiae.png",},
                {name:"Nicolas J.A. Buchoud",cv:"Président du Cercle Grand Paris de l’Investissement Durable, co-fondateur de Renaissance Urbaine.",
                  src:"nicolas.png",},
                {name:"Agnès Jullien",cv:"Vice-Présidente International de l’Université Gustave Eiffel-France. Directrice exécutive du Forum des laboratoires routiers Européens.",
                  src:"agnes.png"},
                {name:"Anass Kettani",cv:"Directeur du Pôle Insertion et Entrepreneuriat de l’Université Hassan II de Casablanca. Directeur Adjoint du laboratoire Biologie et Santé, Faculté des Sciences Ben Msik, Casablanca. Professeur de L’Enseignement Supérieur Université Hassan II de Casablanca.",
                  src:"anas.png",},
                {name:"Omar BOUATTANE",cv:"Directeur de l'Ecole Normale Supérieure de l'Enseignement Technique de Mohammedia.",
                  src:"omar.png",},
                {name:"El M’Kaddem Kheddioui",cv:"Vice-Président, Chargé du Partenariat, la Coopération et du Développement de l'Université Hassan II de Casablanca.Enseignant Chercheur à la Faculté des Sciences et Techniques de Mohammedia de l'UH2C, Département de l'Ingénierie électrique.Directeur du Laboratoire de recherche Physique de l'Atmosphère, Matériaux et Modélisations (LPAMM), FSTM.Vice-président du Centre de Recherche de GreenTIC de l’UH2C.Co-Initiateur et coordonnateur du projet e-douar.",
                  src:"kaddem.png",},
                {name:"Khalid Safir",cv:"Wali, Directeur Général des Collectivités Territoriales.",
                  src:"safir.png"},
                {name:"Mohammed Khalil",cv:"Chargé de mission Digitalisation auprès de la Présidente de l'Université Hassan II de Casablanca.",
                  src:"mohammed.png"},
                {name:"Driss Abbadi",cv:"Doyen de la Faculté des sciences juridiques, économiques et Sociales Aïn Sbâa de l'Université Hassan II de Casablanca.",src:"driss.png",},
                {name:"Hans Martin Neumann",cv:"Coordinateur du programme Smart City - Austrian Institute of Technology",
                  src:"hans.png"},
                {name:"Abdelkader Gonegai",cv:"Doyen de la Faculté des Lettres et sciences humaines Ben M'Sik de l'Université Hassan II de Casablanca.",
                  src:"abdelkader.png",},
                {name:"Mehdi Alaoui",cv:"Vice-président de l'APEBI .Président de l'association Hack & Pitch.Fondateur de LaStartupFactory.",
                  src:"amehdi.png",}, 
                {name:"Mohammed Talbi",cv:"Doyen de la Faculté des Sciences Ben M'Sik de l'Université Hassan II de Casablanca.",
                  src:"mohammedt.png"},
                {name:"Mohamed Amine Souissi",cv:"Chargé de la Division de la transformation digitale - Direction de développement des compétences et de la transformation digitale – DGCT.",
                  src:"amine.png",},
                {name:"Danielle Pailler",cv:"Directrice Maghreb chez l'Agence Universitaire de la Francophonie.",
                  src:"danielle.png",},
                {name:"Annick Vignes",cv:"Directrice de recherche en économie et Professeur à l' Ecole Nationale des Ponts et Chaussées (Paris).",
                  src:"annick.png",},
                {name:"Najib Ouradi",cv:"Directeur de la BU Casa Numeric au sein de la SDL Casablanca Prestations. Après avoir suivi la mission d’élaboration du Schéma Directeur de Transformation Numérique, sa  BU Casa Numeric en assure la mise en œuvre depuis 2018.",
                  src:"najib.png",},
                {name:"Zouheir Lakhdissi",cv:"PDG de Dial Technologies .Entrepreneur digital, consultant et expert international dans le domaine de l’innovation digitale.",
                  src:"zouheir.png",},
                {name:"Brahim Bachirat",cv:"Chef de la division de la promotion de la gouvernance -Direction de Développement des Compétences et de la Transformation Digitale - DGCT.",src:"brahim.png",},
                {name:"Fayçal Benachou",cv:"Directeur général de la société Ribatis, chargée de la mise en œuvre et de l’exploitation de la plateforme Rokhas.ma dans le cadre d’un Partenariat Public Privé.",src:"faysal.png",},
                {name:"Anas Benouahoud",cv:"Chef de Département Accompagnement des Organismes Publics - Direction du Gouvernement Electronique E-GOV  - Agence de Développement Digital.",src:"benouahoud.png",},
                {name:"Salaheddine Mechkouri",cv:"Chef de service des applications de l’administration des collectivités territoriales – Division de la transformation digitale - Direction de développement des compétences et de la transformation digitale – DGCT.",src:"mechkouri.png",},
                {name:"Sanae Belatiq",cv:"Chef de service du contrôle administratif – Division des institutions locales - Direction des Institutions Locales - DGCT",src:"belatiq.png",},
                {name:"Ahmed Chebak",cv:"Professeur en génie électrique et en électromécanique à l’UM6P et Directeur pédagogique du Green Tech Institute.",src:"chebak.png",},
                {name:"Essaaidi Mohamed",cv:"Membre senior de l'IEEE et Professeur à l'ENSIAS, Université Mohammed V de Rabat.",src:"essaaidi.png",},
                {name:"Hassan Yakubu",cv:"Analyste à la School of Architecture, Planning & Design-UM6P.",src:"yakubu.png",},
                {name:"Abdelaaziz Omari",cv:"Président du Conseil de la ville de Casablanca.",
                  src:"omari.png"},
                {name:"Piero Scaruffi",cv:"Président de l'Institut de recherche en intelligence artificielle de la Silicon Valley.",
                  src:"piero.png"},
                {name:"Huê-Tâm Jamme",cv:"Professeur Assistant en urbanisme à l'École des sciences géographiques et de l'urbanisme, Université de l'Etat d'Arizona-USA.",
                  src:"jamme.png"},
                {name:"Alex Black",cv:"Conseiller économique du Consulat Américain à Casablanca.",
                  src:"alex.png"},
                {name:"Mohamed Faïçal Nebri",cv:"Responsable du Département Stratégie, Développement, Coopération et Communication -ADD",
                  src:"nebri.png"},
                {name:"Levent Gurgen ",cv:"President de l' Urban Technology Alliance.",
                  src:"urgen.png"},
                {name:"Said Ahmidouch",cv:"Wali de la Région de Casablanca Settat.",
                  src:"ahmidouch.png"},
                {name:"Nouzha Bouchareb",cv:"Ministre de l’Aménagement du Territoire National, de l’Urbanisme, de l’Habitat et de la Politique de la Ville.",
                  src:"bouchareb.png"},
                {name:"Ismail Hammoumi",cv:"Ingénieur-Chercheur à l’Ecole d'Architecture, planification et design de l’ Université Mohammed VI Polytechnique.",
                  src:"hammoumi.png"},
                {name:"Khaoula Benaomar",cv:"Architecte-Urbaniste de l'Ecole Nationale d'Architecture de Rabat.",
                  src:"benaomar.png"},
                {name:"Nour-Eddin El Faouzi",cv:"Professeur de Mobilité intelligente et systèmes de transport intelligents et Directeur adjoint du département Composants et Systèmes à l’Université Gustave Eiffel.",
                  src:"faouzi.png"},
                {name:"Mohamed Jouahri",cv:"Directeur Général de Casablanca Events et Animation",
                  src:"mohamed.png"},
                {name:"Hakima Fasly",cv:"Vice-Présidente du Conseil de la Ville de Casablanca",
                  src:"hakima.png"},
                {name:"Aawatif Hayar",cv:"Présidente de l’Université Hassan II de Casablanca",
                  src:"awatif.png",},
                {name:"Hassan Radoine",cv:"Directeur Ecole d'Architecture, planification et design de l’ Université Mohammed VI Polytechnique - Benguerir-Maroc",
                  src:"hassan.png",},
                {name:"Fabienne Goux-Baudiment",cv:"Docteur en sciences sociales et prospectiviste. ",
                  src:"fabien.png"},
                {name:"Cathal O'Madagain",cv:"Directeur scientifique et Professeur Assistant à l'École d'intelligence collective, UM6P. Docteur en philosophie de l'Université de Toronto.",
                  src:"cathal.png",},
                {name:"Remy Sietchiping",cv:"Chef de la Section des politiques, de la législation et de la gouvernance au sein du Service des pratiques urbaines d'ONU-Habitat. Docteur en géographie de l'Université de Melbourne, Australie.",
                  src:"remy.png",},
                {name:"Monceyf Fadili",cv:"Expert international en planification urbaine et développement territorial.Ancien Conseiller ONU-Habitat.",
                  src:"monceyf.png",}, 
                {name:"Tridib Banerjee",cv:"Professeur émérite de politique publique, Université de Californie du Sud -USA.",
                  src:"tridib.png"},
                {name:"Rachel Armstrong",cv:"Professeur d'architecture expérimentale, Université de Newcastle et professeur invité au Département d'architecture, KU Leuven, Belgique.",
                  src:"rachel.png",},
                {name:"Giulio Verdini",cv:"Professeur à la School of Architecture and Cities de l'Université de Westminster et directeur du BA Designing Cities: Planning and Architecture. Il est également professeur invité à l'Université  Mohammed VI polytechnique de Ben Guerir. ",
                  src:"giulio.png",},
                {name:"Carlo Alberini",cv:"Architecte et urbaniste à l'Université  Mohammed VI polytechnique avec un doctorat en planification des ports et projets de régénération des fronts de mer. Il a été membre et professeur d'urbanisme, d'histoire urbaine et de gestion urbaine à l'École d'architecture de Gênes et de Florence.",
                  src:"carlo.png",}, 
                {name:"Matthew Hardy",cv:"Professeur à l’Université d’Oxford dans le cadre du programme de développement urbain durable et est maître de conférences et directeur des études d’architecture et d’urbanisme à la Prince’s Foundation for Building Community. ",
                  src:"matthew.png",},
                {name:"Saifur Rahman",cv:"Directeur fondateur de l'Advanced Research Institute (www.ari.vt.edu) à Virginia Tech, États-Unis, où il est le professeur Joseph R. Loring de génie électrique et informatique. Il dirige également le Center for Energy and the Global Environment (www.ceage.vt.edu). Il est membre à vie de l'IEEE et lauréat de la médaille du millénaire de l'IEEE.",
                  src:"saifur.png",},
                {name:"Karima Echihabi",cv:"Enseignante chercheuse au sein de la School of Computer Science de l’Université Mohammed VI Polytechnique au Maroc (UM6P). Ses travaux de recherche portent sur l’analyse des données, la gestion des séries de données et l’apprentissage machine. ",
                  src:"karima.png",},
                {name:"Hicham Bahi",cv:"Professeur Assistant à l'École d'architecture, de planification et de design, UM6P et titulaire d'un doctorat en SIG et télédétection. Il est entre autres le coordinateur du projet Observatoire de la performance territoriale, le coordinateur du programme de formation doctorale de SAP + D et membre de l'équipe de recherche du projet de métabolisme urbain mené conjointement avec le MIT.",
                  src:"hicham.png",},
                {name:"Mehdi Boukhari",cv:"Rédacteur en chef des Editions Economiques, en charge de la Rubrique Eco des journaux télévisées chez 2M TV.",
                  src:"mehdi.png",}, 
                {name:"Lou Vasta",cv:"Lou Vasta, fondateur et PDG, Vasta & Associates, Inc., CHICAGO, États-Unis",
                  src:"lou.png",},
                {name:"Lamiae Benmakhlouf",cv:"Directrice Générale de MITC (Moroccan Information Technopark Company), Mme Lamia Benmakhlouf œuvre depuis 20ans dans le soutien à l’entrepreneuriat et l’innovation dans les secteurs à forte valeur ajoutée.",
                  src:"lamiae.png",},
                {name:"Nicolas J.A. Buchoud",cv:"Président du Cercle Grand Paris de l’Investissement Durable, co-fondateur de Renaissance Urbaine.",
                  src:"nicolas.png",},
                {name:"Agnès Jullien",cv:"Vice-Présidente International de l’Université Gustave Eiffel-France. Directrice exécutive du Forum des laboratoires routiers Européens.",
                  src:"agnes.png"},
                {name:"Anass Kettani",cv:"Directeur du Pôle Insertion et Entrepreneuriat de l’Université Hassan II de Casablanca. Directeur Adjoint du laboratoire Biologie et Santé, Faculté des Sciences Ben Msik, Casablanca. Professeur de L’Enseignement Supérieur Université Hassan II de Casablanca.",
                  src:"anas.png",},
                {name:"Omar BOUATTANE",cv:"Directeur de l'Ecole Normale Supérieure de l'Enseignement Technique de Mohammedia.",
                  src:"omar.png",},
                {name:"El M’Kaddem Kheddioui",cv:"Vice-Président, Chargé du Partenariat, la Coopération et du Développement de l'Université Hassan II de Casablanca.Enseignant Chercheur à la Faculté des Sciences et Techniques de Mohammedia de l'UH2C, Département de l'Ingénierie électrique.Directeur du Laboratoire de recherche Physique de l'Atmosphère, Matériaux et Modélisations (LPAMM), FSTM.Vice-président du Centre de Recherche de GreenTIC de l’UH2C.Co-Initiateur et coordonnateur du projet e-douar.",
                  src:"kaddem.png",},
                {name:"Khalid Safir",cv:"Wali, Directeur Général des Collectivités Territoriales.",
                  src:"safir.png"},
                {name:"Mohammed Khalil",cv:"Chargé de mission Digitalisation auprès de la Présidente de l'Université Hassan II de Casablanca.",
                  src:"mohammed.png"},
                {name:"Driss Abbadi",cv:"Doyen de la Faculté des sciences juridiques, économiques et Sociales Aïn Sbâa de l'Université Hassan II de Casablanca.",src:"driss.png",},
                {name:"Hans Martin Neumann",cv:"Coordinateur du programme Smart City - Austrian Institute of Technology",
                  src:"hans.png"},
                {name:"Abdelkader Gonegai",cv:"Doyen de la Faculté des Lettres et sciences humaines Ben M'Sik de l'Université Hassan II de Casablanca.",
                  src:"abdelkader.png",},
                {name:"Mehdi Alaoui",cv:"Vice-président de l'APEBI .Président de l'association Hack & Pitch.Fondateur de LaStartupFactory.",
                  src:"amehdi.png",}, 
                {name:"Mohammed Talbi",cv:"Doyen de la Faculté des Sciences Ben M'Sik de l'Université Hassan II de Casablanca.",
                  src:"mohammedt.png"},
                {name:"Mohamed Amine Souissi",cv:"Chargé de la Division de la transformation digitale - Direction de développement des compétences et de la transformation digitale – DGCT.",
                  src:"amine.png",},
                {name:"Danielle Pailler",cv:"Directrice Maghreb chez l'Agence Universitaire de la Francophonie.",
                  src:"danielle.png",},
                {name:"Annick Vignes",cv:"Directrice de recherche en économie et Professeur à l' Ecole Nationale des Ponts et Chaussées (Paris).",
                  src:"annick.png",},
                {name:"Najib Ouradi",cv:"Directeur de la BU Casa Numeric au sein de la SDL Casablanca Prestations. Après avoir suivi la mission d’élaboration du Schéma Directeur de Transformation Numérique, sa  BU Casa Numeric en assure la mise en œuvre depuis 2018.",
                  src:"najib.png",},
                {name:"Zouheir Lakhdissi",cv:"PDG de Dial Technologies .Entrepreneur digital, consultant et expert international dans le domaine de l’innovation digitale.",
                  src:"zouheir.png",},
                {name:"Brahim Bachirat",cv:"Chef de la division de la promotion de la gouvernance -Direction de Développement des Compétences et de la Transformation Digitale - DGCT.",src:"brahim.png",},
                {name:"Fayçal Benachou",cv:"Directeur général de la société Ribatis, chargée de la mise en œuvre et de l’exploitation de la plateforme Rokhas.ma dans le cadre d’un Partenariat Public Privé.",src:"faysal.png",},
                {name:"Anas Benouahoud",cv:"Chef de Département Accompagnement des Organismes Publics - Direction du Gouvernement Electronique E-GOV  - Agence de Développement Digital.",src:"benouahoud.png",},
                {name:"Salaheddine Mechkouri",cv:"Chef de service des applications de l’administration des collectivités territoriales – Division de la transformation digitale - Direction de développement des compétences et de la transformation digitale – DGCT.",src:"mechkouri.png",},
                {name:"Sanae Belatiq",cv:"Chef de service du contrôle administratif – Division des institutions locales - Direction des Institutions Locales - DGCT",src:"belatiq.png",},
                {name:"Ahmed Chebak",cv:"Professeur en génie électrique et en électromécanique à l’UM6P et Directeur pédagogique du Green Tech Institute.",src:"chebak.png",},
                {name:"Essaaidi Mohamed",cv:"Membre senior de l'IEEE et Professeur à l'ENSIAS, Université Mohammed V de Rabat.",src:"essaaidi.png",},
                {name:"Hassan Yakubu",cv:"Analyste à la School of Architecture, Planning & Design-UM6P.",src:"yakubu.png",},
                {name:"Abdelaaziz Omari",cv:"Président du Conseil de la ville de Casablanca.",
                  src:"omari.png"},
                {name:"Piero Scaruffi",cv:"Président de l'Institut de recherche en intelligence artificielle de la Silicon Valley.",
                  src:"piero.png"},
                {name:"Huê-Tâm Jamme",cv:"Professeur Assistant en urbanisme à l'École des sciences géographiques et de l'urbanisme, Université de l'Etat d'Arizona-USA.",
                  src:"jamme.png"},
                {name:"Alex Black",cv:"Conseiller économique du Consulat Américain à Casablanca.",
                  src:"alex.png"},
                {name:"Mohamed Faïçal Nebri",cv:"Responsable du Département Stratégie, Développement, Coopération et Communication -ADD",
                  src:"nebri.png"},
                {name:"Levent Gurgen ",cv:"President de l' Urban Technology Alliance.",
                  src:"urgen.png"},
                {name:"Said Ahmidouch",cv:"Wali de la Région de Casablanca Settat.",
                  src:"ahmidouch.png"},
                {name:"Nouzha Bouchareb",cv:"Ministre de l’Aménagement du Territoire National, de l’Urbanisme, de l’Habitat et de la Politique de la Ville.",
                  src:"bouchareb.png"},
                {name:"Ismail Hammoumi",cv:"Ingénieur-Chercheur à l’Ecole d'Architecture, planification et design de l’ Université Mohammed VI Polytechnique.",
                  src:"hammoumi.png"},
                {name:"Khaoula Benaomar",cv:"Architecte-Urbaniste de l'Ecole Nationale d'Architecture de Rabat.",
                  src:"benaomar.png"},
                {name:"Nour-Eddin El Faouzi",cv:"Professeur de Mobilité intelligente et systèmes de transport intelligents et Directeur adjoint du département Composants et Systèmes à l’Université Gustave Eiffel.",
                  src:"faouzi.png"},
                
            ],
            responsive: [
                [200, 1],[767, 2],[1000, 4]
            ],
        }
    },
    props: ['slideshow'],
    components: {
        Carousel,
        Slide
    },
    methods: {
    },
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.v-card--reveal-first {
  align-items: center;
  top: 120px;
  justify-content: center;
  position: absolute;
  width: 100%;
  font-size:1.2em
}
.cvtext{
  display: block;
   font-size:0.8em;
}
@media (min-width: 800px) and (max-width: 1100px) {
  .cvtext{
   display: block;
   font-size:1.1vw;
}
.v-card--reveal-first {
  font-size:1em
}
}
@media (max-width: 767px) {
  .cvtext{
  display: block;
   font-size:0.9em;
}
}
@media (max-width: 767px) {
  .cvtext{
  display: block;
   font-size:0.9em;
}
}
@media (max-width: 330px) {
  .cvtext{
  display: block;
   font-size:0.7em;
}
}
</style>