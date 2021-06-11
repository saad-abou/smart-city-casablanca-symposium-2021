import Vue from 'vue';
import VueRouter from 'vue-router';
import indexfr from './components/indexfr';
import indexen from './components/indexen';
import juin09 from './components/fr/9juin';
import juin10 from './components/fr/10juin';
import juin09en from './components/en/9juin_en';
import juin10en from './components/en/10juin_en';
//import ExampleComponent from './components/ExampleComponent';
import VueMeta from 'vue-meta'

Vue.use(VueMeta)

Vue.use(VueRouter);

export default new VueRouter({
        mode:'history',
        routes:[
            {
                path:'/',
                redirect: '/fr/09juin'
            },
            {
                path:'/fr',
                component:indexfr,
                children: [
                    {
                      path: '09juin',
                      component: juin09
                    },
                    {
                      path: '10juin',
                      component: juin10
                    },
                    {
                        path: '/',
                        redirect: '09juin'
                    },
                  ]
            },
            {
                path:'/en',
                component:indexen,
                children: [
                    {
                      path: '09june',
                      component: juin09en
                    },
                    {
                      path: '10june',
                      component: juin10en
                    },
                    {
                        path: '/',
                        redirect: '09june'
                    },
                  ]
            },
            {   path: '*',
                redirect: '/fr/09juin'
            }
            
        ]
});
