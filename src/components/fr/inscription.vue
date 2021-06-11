<template>
    <v-container class="inscrire" grid-list-xs >
    <v-row>
    <v-col>
    <template>
        <v-row>
            <v-dialog
            v-model="dialog"
            persistent
            max-width="600px"
            >
            <template v-slot:activator="{ on, attrs }">
                <b v-bind="attrs" v-on="on" >
                    INSCRIPTION
                </b>  
            </template>
            <v-card class="pa-1">
                <v-card-title>
                <span class="headline" style="white-space: nowrap;">Formulaire d'inscription</span>
                </v-card-title>
                <span v-if="error" class="red--text ml-2">Cet email déjà inscrit</span>
                <v-list class="overflow-y-auto" max-height="400">
                <v-card-text>
                    <v-container v-if="!confirmed">
                    <v-form  ref="form" v-model="valid" lazy-validation >
                        <v-row>
                        <v-col  cols="12" md="6" sm="6"  >
                            <v-text-field label="Nom*"
                            :rules="allRule"
                            v-model="nom"
                            required></v-text-field>
                        </v-col>
                        <v-col  cols="12" md="6" sm="6"  >
                            <v-text-field label="Prenom*"
                            :rules="allRule"
                            v-model="prenom"
                            required></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Email*"
                            :rules="emailRules"
                            v-model="email"
                            class="my-input"
                            onpaste="return false"
                            autocomplete="nope"
                            required>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field label="Confirmation d'email*"
                            :rules="emailconfermRules"
                            v-model="emailConferm"
                            class="my-input"
                            onpaste="return false"
                            autocomplete="nope"
                            required>
                            </v-text-field>
                        </v-col>
                        <v-col  cols="12" md="6" sm="6" >
                            <v-autocomplete
                                v-model="select"
                                :hint="`${select.name}, ${select.code}`"
                                :items="items"
                                item-text="name"
                                item-value="code"
                                label="Select"
                                persistent-hint
                                return-object
                                single-line
                            ></v-autocomplete>
                        </v-col>
                        <v-col  cols="12" md="6" sm="6" >
                            <v-text-field label="Ville*"
                            :rules="allRule"
                            v-model="city"
                            required></v-text-field>
                        </v-col>
                        <v-col  cols="12">
                            <v-select
                                :items="domainList"
                                label="Domaine d’activité*"
                                item-text="Activite_fr"
                                item-value="Activite_fr"
                                v-model="domaine"
                                required
                                :rules="domaineRule"
                            ></v-select>
                        </v-col>
                        </v-row>
                        </v-form>
                    </v-container>
                    <v-container v-else>
                        <v-alert class="text" text>
                        Cher participant,<br>
                        Vous êtes bien inscrit au Smart City Casablanca Symposium.<br>
                        Pour accéder à la plateforme de l’évènement, veuillez vérifier votre boite E-mail et vos spams le cas échéant.<br>
                        Merci.
                        </v-alert>
                    </v-container>
                </v-card-text>
                </v-list>
                <v-card-actions>
                    <v-btn color="blue darken-1" text @click="ferme()" >
                        Fermer
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        :disabled="!valid"
                        @click="validate"
                        v-if="!confirmed"
                        :loading="inscribtn"
                    >
                        S'inscrire
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </v-row>
        </template>
    </v-col>
    </v-row>
   <!-- <v-row class="mt-10">
    <v-col >
        <v-card>
          <v-card-title  class="white--text orange darken-4">
          <h4>
          Accès à la plateforme</h4></v-card-title> 
          <v-card-text style="font-size:1.1em; text-align:left" class="mt-2">
           Une fois inscrit(e), rappelez-vous que pour accéder à la session, veuillez :<br>
           1.       Cliquer sur le lien suivant : <a href="https://whd2021.ascreacongres.ma/stream">https://casaevent.ascreacongres.ma/stream</a><br>
           2.       Renseigner votre Email<br>
           3.       Cliquer sur "S’identifier"<br>
           <b>Note</b> : La plateforme ne sera accessible que le <b>09 juin 2021</b> à partir de <b>13H45</b>.
          </v-card-text> 
        </v-card>
    </v-col>    
    </v-row>-->
    </v-container>
</template>
<script>
export default {
   data () {
      return {
        inscribtn:false,
        email:'',
        emailConferm:'',
        nom:'',
        prenom:'',
        city:'',
        domaine:'',
        valid: true,
        dialog: false,
        confirmed: false,
        error:false,
        
        emailRules: [
            v => !!v || 'E-mail est requis',
            v => /.+@.+/.test(v) || 'L\'email doit être valide',
        ],
        emailconfermRules: [ 
            v => !!v || 'Confirmation d\'email est requis',
            v => v == this.email  || 'L\'email doit être valide'
        ],

        allRule: [v => !!v || 'Ce champ est requis',],
        domaineRule: [(v) => !!v || "Item is required"],
        select: { name: 'Morocco', code: 'MA' },
        items: [
            {"name": "Afghanistan", "code": "AF"}, 
            {"name": "land Islands", "code": "AX"}, 
            {"name": "Albania", "code": "AL"}, 
            {"name": "Algeria", "code": "DZ"}, 
            {"name": "American Samoa", "code": "AS"}, 
            {"name": "AndorrA", "code": "AD"}, 
            {"name": "Angola", "code": "AO"}, 
            {"name": "Anguilla", "code": "AI"}, 
            {"name": "Antarctica", "code": "AQ"}, 
            {"name": "Antigua and Barbuda", "code": "AG"}, 
            {"name": "Argentina", "code": "AR"}, 
            {"name": "Armenia", "code": "AM"}, 
            {"name": "Aruba", "code": "AW"}, 
            {"name": "Australia", "code": "AU"}, 
            {"name": "Austria", "code": "AT"}, 
            {"name": "Azerbaijan", "code": "AZ"}, 
            {"name": "Bahamas", "code": "BS"}, 
            {"name": "Bahrain", "code": "BH"}, 
            {"name": "Bangladesh", "code": "BD"}, 
            {"name": "Barbados", "code": "BB"}, 
            {"name": "Belarus", "code": "BY"}, 
            {"name": "Belgium", "code": "BE"}, 
            {"name": "Belize", "code": "BZ"}, 
            {"name": "Benin", "code": "BJ"}, 
            {"name": "Bermuda", "code": "BM"}, 
            {"name": "Bhutan", "code": "BT"}, 
            {"name": "Bolivia", "code": "BO"}, 
            {"name": "Bosnia and Herzegovina", "code": "BA"}, 
            {"name": "Botswana", "code": "BW"}, 
            {"name": "Bouvet Island", "code": "BV"}, 
            {"name": "Brazil", "code": "BR"}, 
            {"name": "British Indian Ocean Territory", "code": "IO"}, 
            {"name": "Brunei Darussalam", "code": "BN"}, 
            {"name": "Bulgaria", "code": "BG"}, 
            {"name": "Burkina Faso", "code": "BF"}, 
            {"name": "Burundi", "code": "BI"}, 
            {"name": "Cambodia", "code": "KH"}, 
            {"name": "Cameroon", "code": "CM"}, 
            {"name": "Canada", "code": "CA"}, 
            {"name": "Cape Verde", "code": "CV"}, 
            {"name": "Cayman Islands", "code": "KY"}, 
            {"name": "Central African Republic", "code": "CF"}, 
            {"name": "Chad", "code": "TD"}, 
            {"name": "Chile", "code": "CL"}, 
            {"name": "China", "code": "CN"}, 
            {"name": "Christmas Island", "code": "CX"}, 
            {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
            {"name": "Colombia", "code": "CO"}, 
            {"name": "Comoros", "code": "KM"}, 
            {"name": "Congo", "code": "CG"}, 
            {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
            {"name": "Cook Islands", "code": "CK"}, 
            {"name": "Costa Rica", "code": "CR"}, 
            {"name": "Cote D'Ivoire", "code": "CI"}, 
            {"name": "Croatia", "code": "HR"}, 
            {"name": "Cuba", "code": "CU"}, 
            {"name": "Cyprus", "code": "CY"}, 
            {"name": "Czech Republic", "code": "CZ"}, 
            {"name": "Denmark", "code": "DK"}, 
            {"name": "Djibouti", "code": "DJ"}, 
            {"name": "Dominica", "code": "DM"}, 
            {"name": "Dominican Republic", "code": "DO"}, 
            {"name": "Ecuador", "code": "EC"}, 
            {"name": "Egypt", "code": "EG"}, 
            {"name": "El Salvador", "code": "SV"}, 
            {"name": "Equatorial Guinea", "code": "GQ"}, 
            {"name": "Eritrea", "code": "ER"}, 
            {"name": "Estonia", "code": "EE"}, 
            {"name": "Ethiopia", "code": "ET"}, 
            {"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
            {"name": "Faroe Islands", "code": "FO"}, 
            {"name": "Fiji", "code": "FJ"}, 
            {"name": "Finland", "code": "FI"}, 
            {"name": "France", "code": "FR"}, 
            {"name": "French Guiana", "code": "GF"}, 
            {"name": "French Polynesia", "code": "PF"}, 
            {"name": "French Southern Territories", "code": "TF"}, 
            {"name": "Gabon", "code": "GA"}, 
            {"name": "Gambia", "code": "GM"}, 
            {"name": "Georgia", "code": "GE"}, 
            {"name": "Germany", "code": "DE"}, 
            {"name": "Ghana", "code": "GH"}, 
            {"name": "Gibraltar", "code": "GI"}, 
            {"name": "Greece", "code": "GR"}, 
            {"name": "Greenland", "code": "GL"}, 
            {"name": "Grenada", "code": "GD"}, 
            {"name": "Guadeloupe", "code": "GP"}, 
            {"name": "Guam", "code": "GU"}, 
            {"name": "Guatemala", "code": "GT"}, 
            {"name": "Guernsey", "code": "GG"}, 
            {"name": "Guinea", "code": "GN"}, 
            {"name": "Guinea-Bissau", "code": "GW"}, 
            {"name": "Guyana", "code": "GY"}, 
            {"name": "Haiti", "code": "HT"}, 
            {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
            {"name": "Holy See (Vatican City State)", "code": "VA"}, 
            {"name": "Honduras", "code": "HN"}, 
            {"name": "Hong Kong", "code": "HK"}, 
            {"name": "Hungary", "code": "HU"}, 
            {"name": "Iceland", "code": "IS"}, 
            {"name": "India", "code": "IN"}, 
            {"name": "Indonesia", "code": "ID"}, 
            {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
            {"name": "Iraq", "code": "IQ"}, 
            {"name": "Ireland", "code": "IE"}, 
            {"name": "Isle of Man", "code": "IM"}, 
            {"name": "Israel", "code": "IL"}, 
            {"name": "Italy", "code": "IT"}, 
            {"name": "Jamaica", "code": "JM"}, 
            {"name": "Japan", "code": "JP"}, 
            {"name": "Jersey", "code": "JE"}, 
            {"name": "Jordan", "code": "JO"}, 
            {"name": "Kazakhstan", "code": "KZ"}, 
            {"name": "Kenya", "code": "KE"}, 
            {"name": "Kiribati", "code": "KI"}, 
            {"name": "Korea, Democratic People", "code": "KP"}, 
            {"name": "Korea, Republic of", "code": "KR"}, 
            {"name": "Kuwait", "code": "KW"}, 
            {"name": "Kyrgyzstan", "code": "KG"}, 
            {"name": "Lao People Democratic Republic", "code": "LA"}, 
            {"name": "Latvia", "code": "LV"}, 
            {"name": "Lebanon", "code": "LB"}, 
            {"name": "Lesotho", "code": "LS"}, 
            {"name": "Liberia", "code": "LR"}, 
            {"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
            {"name": "Liechtenstein", "code": "LI"}, 
            {"name": "Lithuania", "code": "LT"}, 
            {"name": "Luxembourg", "code": "LU"}, 
            {"name": "Macao", "code": "MO"}, 
            {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
            {"name": "Madagascar", "code": "MG"}, 
            {"name": "Malawi", "code": "MW"}, 
            {"name": "Malaysia", "code": "MY"}, 
            {"name": "Maldives", "code": "MV"}, 
            {"name": "Mali", "code": "ML"}, 
            {"name": "Malta", "code": "MT"}, 
            {"name": "Marshall Islands", "code": "MH"}, 
            {"name": "Martinique", "code": "MQ"}, 
            {"name": "Mauritania", "code": "MR"}, 
            {"name": "Mauritius", "code": "MU"}, 
            {"name": "Mayotte", "code": "YT"}, 
            {"name": "Mexico", "code": "MX"}, 
            {"name": "Micronesia, Federated States of", "code": "FM"}, 
            {"name": "Moldova, Republic of", "code": "MD"}, 
            {"name": "Monaco", "code": "MC"}, 
            {"name": "Mongolia", "code": "MN"}, 
            {"name": "Montenegro", "code": "ME"},
            {"name": "Montserrat", "code": "MS"},
            {"name": "Morocco", "code": "MA"}, 
            {"name": "Mozambique", "code": "MZ"}, 
            {"name": "Myanmar", "code": "MM"}, 
            {"name": "Namibia", "code": "NA"}, 
            {"name": "Nauru", "code": "NR"}, 
            {"name": "Nepal", "code": "NP"}, 
            {"name": "Netherlands", "code": "NL"}, 
            {"name": "Netherlands Antilles", "code": "AN"}, 
            {"name": "New Caledonia", "code": "NC"}, 
            {"name": "New Zealand", "code": "NZ"}, 
            {"name": "Nicaragua", "code": "NI"}, 
            {"name": "Niger", "code": "NE"}, 
            {"name": "Nigeria", "code": "NG"}, 
            {"name": "Niue", "code": "NU"}, 
            {"name": "Norfolk Island", "code": "NF"}, 
            {"name": "Northern Mariana Islands", "code": "MP"}, 
            {"name": "Norway", "code": "NO"}, 
            {"name": "Oman", "code": "OM"}, 
            {"name": "Pakistan", "code": "PK"}, 
            {"name": "Palau", "code": "PW"}, 
            {"name": "Palestinian Territory, Occupied", "code": "PS"}, 
            {"name": "Panama", "code": "PA"}, 
            {"name": "Papua New Guinea", "code": "PG"}, 
            {"name": "Paraguay", "code": "PY"}, 
            {"name": "Peru", "code": "PE"}, 
            {"name": "Philippines", "code": "PH"}, 
            {"name": "Pitcairn", "code": "PN"}, 
            {"name": "Poland", "code": "PL"}, 
            {"name": "Portugal", "code": "PT"}, 
            {"name": "Puerto Rico", "code": "PR"}, 
            {"name": "Qatar", "code": "QA"}, 
            {"name": "Reunion", "code": "RE"}, 
            {"name": "Romania", "code": "RO"}, 
            {"name": "Russian Federation", "code": "RU"}, 
            {"name": "RWANDA", "code": "RW"}, 
            {"name": "Saint Helena", "code": "SH"}, 
            {"name": "Saint Kitts and Nevis", "code": "KN"}, 
            {"name": "Saint Lucia", "code": "LC"}, 
            {"name": "Saint Pierre and Miquelon", "code": "PM"}, 
            {"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
            {"name": "Samoa", "code": "WS"}, 
            {"name": "San Marino", "code": "SM"}, 
            {"name": "Sao Tome and Principe", "code": "ST"}, 
            {"name": "Saudi Arabia", "code": "SA"}, 
            {"name": "Senegal", "code": "SN"}, 
            {"name": "Serbia", "code": "RS"}, 
            {"name": "Seychelles", "code": "SC"}, 
            {"name": "Sierra Leone", "code": "SL"}, 
            {"name": "Singapore", "code": "SG"}, 
            {"name": "Slovakia", "code": "SK"}, 
            {"name": "Slovenia", "code": "SI"}, 
            {"name": "Solomon Islands", "code": "SB"}, 
            {"name": "Somalia", "code": "SO"}, 
            {"name": "South Africa", "code": "ZA"}, 
            {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
            {"name": "Spain", "code": "ES"}, 
            {"name": "Sri Lanka", "code": "LK"}, 
            {"name": "Sudan", "code": "SD"}, 
            {"name": "Suriname", "code": "SR"}, 
            {"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
            {"name": "Swaziland", "code": "SZ"}, 
            {"name": "Sweden", "code": "SE"}, 
            {"name": "Switzerland", "code": "CH"}, 
            {"name": "Syrian Arab Republic", "code": "SY"}, 
            {"name": "Taiwan, Province of China", "code": "TW"}, 
            {"name": "Tajikistan", "code": "TJ"}, 
            {"name": "Tanzania, United Republic of", "code": "TZ"}, 
            {"name": "Thailand", "code": "TH"}, 
            {"name": "Timor-Leste", "code": "TL"}, 
            {"name": "Togo", "code": "TG"}, 
            {"name": "Tokelau", "code": "TK"}, 
            {"name": "Tonga", "code": "TO"}, 
            {"name": "Trinidad and Tobago", "code": "TT"}, 
            {"name": "Tunisia", "code": "TN"}, 
            {"name": "Turkey", "code": "TR"}, 
            {"name": "Turkmenistan", "code": "TM"}, 
            {"name": "Turks and Caicos Islands", "code": "TC"}, 
            {"name": "Tuvalu", "code": "TV"}, 
            {"name": "Uganda", "code": "UG"}, 
            {"name": "Ukraine", "code": "UA"}, 
            {"name": "United Arab Emirates", "code": "AE"}, 
            {"name": "United Kingdom", "code": "GB"}, 
            {"name": "United States", "code": "US"}, 
            {"name": "United States Minor Outlying Islands", "code": "UM"}, 
            {"name": "Uruguay", "code": "UY"}, 
            {"name": "Uzbekistan", "code": "UZ"}, 
            {"name": "Vanuatu", "code": "VU"}, 
            {"name": "Venezuela", "code": "VE"}, 
            {"name": "Viet Nam", "code": "VN"}, 
            {"name": "Virgin Islands, British", "code": "VG"}, 
            {"name": "Virgin Islands, U.S.", "code": "VI"}, 
            {"name": "Wallis and Futuna", "code": "WF"}, 
            {"name": "Western Sahara", "code": "EH"}, 
            {"name": "Yemen", "code": "YE"}, 
            {"name": "Zambia", "code": "ZM"}, 
            {"name": "Zimbabwe", "code": "ZW"},
        ],
        domainList:[
            {
                "IdA": "1",
                "Activite_fr": "Art, Design",
                "Activite_en": "Art, Design"
            },
            {
                "IdA": "2",
                "Activite_fr": "Audiovisuel - Spectacle",
                "Activite_en": "Audiovisual - Show"
            },
            {
                "IdA": "3",
                "Activite_fr": "Audit, gestion",
                "Activite_en": "Audit, management"
            },
            {
                "IdA": "4",
                "Activite_fr": "Automobile",
                "Activite_en": "Automobile"
            },
            {
                "IdA": "5",
                "Activite_fr": "Banque, assurance",
                "Activite_en": "Bank"
            },
            {
                "IdA": "6",
                "Activite_fr": "BTP, architecture",
                "Activite_en": "BTP, architecture"
            },
            {
                "IdA": "7",
                "Activite_fr": "Chimie, pharmacie",
                "Activite_en": "Chemistry, pharmacy"
            },
            {
                "IdA": "8",
                "Activite_fr": "Commerce, distribution",
                "Activite_en": "Commerce, distribution"
            },
            {
                "IdA": "9",
                "Activite_fr": "Communication - Marketing",
                "Activite_en": "Communication - Marketing"
            },
            {
                "IdA": "10",
                "Activite_fr": "Construction aéronautique, ferroviaire et navale",
                "Activite_en": "Aeronautical, railway and naval construction"
            },
            {
                "IdA": "11",
                "Activite_fr": "Culture - Artisanat d'art",
                "Activite_en": "Culture - Art"
            },
            {
                "IdA": "12",
                "Activite_fr": "Droit, justice",
                "Activite_en": "Law, justice"
            },
            {
                "IdA": "13",
                "Activite_fr": "Edition, Journalisme",
                "Activite_en": "Publishing, Journalism"
            },
            {
                "IdA": "14",
                "Activite_fr": "Électronique",
                "Activite_en": "Electronic"
            },
            {
                "IdA": "15",
                "Activite_fr": "Énergie",
                "Activite_en": "Energy"
            },
            {
                "IdA": "16",
                "Activite_fr": "Enseignement",
                "Activite_en": "Education"
            },
            {
                "IdA": "17",
                "Activite_fr": "Environnement",
                "Activite_en": "Environment"
            },
            {
                "IdA": "18",
                "Activite_fr": "Fonction publique",
                "Activite_en": "Public function"
            },
            {
                "IdA": "19",
                "Activite_fr": "Hôtellerie, restauration",
                "Activite_en": "Hotel and catering"
            },
            {
                "IdA": "20",
                "Activite_fr": "Industrie alimentaire",
                "Activite_en": "Food industry"
            },
            {
                "IdA": "21",
                "Activite_fr": "Informatique et télécoms",
                "Activite_en": "IT and telecoms"
            },
            {
                "IdA": "22",
                "Activite_fr": "Logistique, transport",
                "Activite_en": "Logistics, transport"
            },
            {
                "IdA": "23",
                "Activite_fr": "Maintenance",
                "Activite_en": "Maintenance"
            },
            {
                "IdA": "24",
                "Activite_fr": "Mécanique",
                "Activite_en": "Mechanical"
            },
            {
                "IdA": "25",
                "Activite_fr": "Mode, industrie textile",
                "Activite_en": "Fashion, textile industry"
            },
            {
                "IdA": "26",
                "Activite_fr": "Recherche",
                "Activite_en": "Research"
            },
            {
                "IdA": "27",
                "Activite_fr": "Santé",
                "Activite_en": "Health"
            },
            {
                "IdA": "28",
                "Activite_fr": "Social",
                "Activite_en": "Social"
            },
            {
                "IdA": "29",
                "Activite_fr": "Sport, loisirs – Tourisme",
                "Activite_en": "Sport, leisure - Tourism"
            },
            {
                "IdA": "30",
                "Activite_fr": "Traduction - interprétariat",
                "Activite_en": "Translation - interpreting"
            },
            {
                "IdA": "31",
                "Activite_fr": "Autre",
                "Activite_en": "Other"
            }
        ],
      }
    },
    mounted() {
     
    },
    methods: {
        validate () {
         if(this.$refs.form.validate()){
                this.inscribtn = true
                this.email = this.email.toLowerCase()
                this.axios({
                    method: 'post',
                    url: 'https://sccs2021.ascreacongres.ma/api/inscrit',
                    data: {
                        email:this.email ,
                        name:this.nom+' '+this.prenom,
                        city:this.city,
                        country:this.select.name,
                        type:this.domaine,
                    }
                    }).then(()=>{                
                        this.confirmed = true
                        this.error=false
                        this.inscribtn=false
                    }, err =>{
                        if(err){
                        this.error=true
                        this.inscribtn=false
                        }
                    });
                
        }
      },
      clear(){
          this.confirmed = false
            this.email = '',
            this.emailConferm='',
            this.nom = '' , 
            this.prenom = '' , 
            this.city = '' , 
            this.domaine= '',
            this.select = { name: 'Morocco', code: 'MA' } 
      },

      ferme(){
          this.dialog = false
          this.email = '',
          this.emailConferm='',
            this.nom = '' , 
            this.prenom = '' , 
            this.city = '' , 
            this.domaine= '',
            this.select = { name: 'Morocco', code: 'MA' } 
            this.error = false
            this.inscribtn = false
      },
      setValue(){
          this.dialog = true
      }
    },
  }
</script>
<style>
h1{
 font-family: 'Montserrat';
}
.inscrire{
   
}
.inscrireInfo{
    font-size:1.5em
}
@media (max-width: 480px) {
  
}
@media all and (max-width: 768px) {
  .btn{
    font-size:10px
    }
    .insbtn{
        font-size:1em
    }
    .textInsc{
        font-size:10px
    } 
}



.my-input input{
  text-transform: lowercase
}

.welcome_text{
  font-size: 1.5em;
}    
.btn{
    background-color: #FBB400 !important;
    border-radius: 10px;
}
.insbtn{
        font-size:30px

    }
.textInsc{
    font-size:20px
}  

.ps {
  height: 400px;
}

@media (max-width: 480px) {
    .insbtn{
        font-size:15px
    }
}
</style>