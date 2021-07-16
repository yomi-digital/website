import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import MarqueeText from 'vue-marquee-text-component'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ClassOnScroll from 'vue-class-on-scroll' // Es6 module


import './fonts/fontsheet.css'

Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.component('marquee-text', MarqueeText)
    // Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
    // Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(ClassOnScroll)
Vue.use(VueCarousel);

// TRANSLATIONS
const messages = {
    en: {
        message: {
            team: "TEAM",
            whoWeAre1: 'YOMI IS A HI-TECH',
            whoWeAre2: 'DIGITAL HUB',
            promote1: 'We promote the diffusion of technology for the achievement of a more ethical and democratic reality.',
            promote2: "Technology, from the Greek discourse on art, was a growth medium at the service of others. Today, after the digital revolution, it is the tool that makes one's ideas and desires concrete.",
            ourHub: 'Our hub is a free physical and digital place, where everyone has the opportunity to express themselves and their ideas without the fear of not being heard.',
            ourGoal: 'Our goal is to be a guide in the boundless world of technology, providing everyone with the means to realize their visions. ',
            serviceTitle1: 'WE ARE THE IDEAL TECHNOLOGICAL PARTNER FOR YOUR INNOVATION PROCESSES',
            // serviceTitle2: 'IDEAL TECHNOLOGICAL PARTNER',
            // serviceTitle3: 'FOR YOUR INNOVATION',
            // serviceTitle4: 'PROCESSES',
            serviceDescription1: 'The know-how acquired over many years of experience has always been guided by the objective of offering highly professional products and services, tailored to customer satisfaction.',
            // serviceDescription2: 'of experience has always been guided',
            // serviceDescription3: 'by the objective of offering highly',
            // serviceDescription4: 'professional products and services,',
            // serviceDescription5: 'tailored to customer satisfaction.',
            // serviceDescription6: '',
            blockchain: 'Experts in Blockchain and open source technologies. Tokens, NFT, smart contracts, notarization and traceability are just some of the services we offer.',
            aiTitle: 'ARTIFICIAL INTELLIGENCE',
            aiDescription: 'AI can be a valuable support, allowing human capital to take care of high value-added activities.',
            erpTitle: 'ERP SOFTWARE',
            erpDescription: 'Basement and Weesell are built for business process simplification. They model themselves entirely to your needs.',
            webDevTitle: 'WEB DEVELOPMENT',
            webDevDescription: 'We update and work to provide efficient tools by making simple what, by its nature, is complex.',
            websiteTitle: 'WEBSITE',
            websiteDescription: 'Open the doors of your business through a responsive website that adapts to all devices in an intuitive and smart way.',
            eCommerce: 'We use frameworks and programming languages of the latest generation taking care of the design consistent with your corporate image.',
            mobileDevTitle: 'MOBILE DEVELOPMENT',
            mobileDevContent: 'A good app is an evolved tool to offer services, give the staff new working tools, and attract new customers.',
            researchTitle: 'RESEARCH AND DEVELOPMENT',
            researchDescription: 'To explore the latest frontiers of technology and design hi-tech tools and products.',
            consultingTitle: 'CONSULTING',
            consultingDescription: 'We bring our technological approach and strategic vision to your companies with the aim of promoting a digital revolution.',
            portfolioContent: "Small Italian realities, start-ups and large international companies have relied on the professionalism of our team. The heterogeneity of our customers has allowed us to realize different projects with the most innovative technologies.",
            theHubContent: 'Blockchain hosting platform and NFT minting with a unique system at international level.',
            digitalOraclesContent: 'Innovative platform that connects startups and investors. Monitors and rewards work done through blockchain technology.',
            quadransContent: 'Open source, public and decentralized blockchain for Smart Contracts and dApps where company and users can store and share data, validate processes and optimize governance procedures. FoodChain, the transparent supply chain, has chosen Quadrans to track food products.',
            umiContent: 'Is a first NFT API interface that allows you to create, manage and sell non-fungible tokens on different blockchains. The platform allows our customers like Stargraph, Impssbl, Hexarchia to manage the complexities of the blockchain in full autonomy.',
            nftContent: 'Platform that assists artists in creating and issuing unique digital creations through non-fungible tokens.',
            team1: 'Not the usual software house. A young and dynamic group of passionate professionals, with a pragmatic approach to work based on continuous training and updating, to meet the growing demand for technologically advanced products and services.',
            team2: 'A digital laboratory in continuous evolution and experimentation, which makes the passion for innovation its main strength.',
            partnerContent: 'Together we invent, think, create, collaborate, build, test, learn and win.',
            joinTeam: 'FIND OUT HOW TO JOIN THE TEAM',
            returnHome: 'RETURN HOME',
            politics: 'PRIVACY POLICY',
            termsOfUse: 'TERMS OF USE',
            service: 'SERVICES',
            phone: 'PHONE NUMBER',
            cta: 'DO YOU WANT MORE INFO?'
        }
    },
    it: {
        message: {
            team: "TEAM",
            whoWeAre1: 'YOMI È UN DIGITAL',
            whoWeAre2: 'HUB HI-TECH',
            promote1: 'Promuoviamo la diffusione della tecnologia per il raggiungimento di una realtà più etica e democratica.',
            promote2: 'La tecnologia, dal greco discorso sull’arte, era un mezzo di crescita al servizio dell’altro. Oggi dopo la rivoluzione digitale, è lo strumento che rende concrete le proprie idee e i propri desideri.',
            ourHub: 'Il nostro hub è un luogo fisico e digitale libero, dove tutti hanno la possibilità di esprimere il proprio io e le proprie idee senza il timore di non essere ascoltati.',
            ourGoal: 'Il nostro obiettivo è quello di essere una guida nel mondo sconfinato della tecnologia, fornendo a tutti i mezzi per realizzare le proprie visioni.',
            serviceTitle1: 'SIAMO IL PARTNER TECNOLOGICO IDEALE PER I TUOI PROCESSI DI INNOVAZIONE',
            // serviceTitle2: 'TECNOLOGICO IDEALE',
            // serviceTitle3: 'PER I TUOI PROCESSI',
            // serviceTitle4: 'DI INNOVAZIONE',
            serviceDescription1: 'Il know-how acquisito in tanti anni di esperienza è stato sempre guidato dall’obiettivo primario di offrire prodotti e servizi altamente professionali disegnati su misura esclusivamente per la soddisfazione del cliente.',
            // serviceDescription2: 'esperienza è stato sempre guidato',
            // serviceDescription3: 'dall’obiettivo primario di offrire prodotti e',
            // serviceDescription4: 'servizi altamente professionali disegnati',
            // serviceDescription5: 'su misura esclusivamente per la',
            // serviceDescription6: 'soddisfazione del cliente.',
            blockchain: 'Esperti di Blockchain e di tecnologie open source. Token, NFT, smart contract, notarizzazione e tracciabilità sono solo alcuni dei servizi che offriamo.',
            aiTitle: 'INTELLIGENZA ARTIFICIALE',
            aiDescription: 'l’AI può essere un valido supporto, consentendo al capitale umano di occuparsi delle attività ad alto valore aggiunto.',
            erpTitle: 'GESTIONALI',
            erpDescription: 'Basement e Weesell sono stati realizzati per la semplificazione dei processi aziendali. Si modellano interamente alle vostre esigenze.',
            webDevTitle: 'SVILUPPO WEB',
            webDevDescription: 'Ci aggiorniamo e lavoriamo per offrire strumenti efficienti rendendo semplice ciò che, per sua natura, è complesso.',
            websiteTitle: 'SITI WEB',
            websiteDescription: 'Apri le porte della tua azienda attraverso un sito web responsive che si adatti a tutti i dispositivi in modo intuitivo e intelligente.',
            eCommerce: 'Utilizziamo framework e linguaggi di programmazione di ultima generazione curando il design coerentemente alla tua immagine aziendale.',
            mobileDevTitle: 'SVILUPPO MOBILE',
            mobileDevContent: 'Una buona app è uno strumento evoluto per offrire servizi, dare al personale nuovi strumenti di lavoro, attrarre nuovi clienti.',
            researchTitle: 'RICERCA E SVILUPPO',
            researchDescription: 'Per esplorare le ultime frontiere della tecnologia e progettare strumenti e prodotti hi-tech.',
            consultingTitle: 'CONSULENZA',
            consultingDescription: 'Portiamo il nostro approccio tecnologico e la nostra visione strategica nelle vostre aziende con l’obiettivo di promuovere una rivoluzione digitale.',
            portfolioContent: "Piccole realtà italiane, start up e grandi compagnie internazionali si sono affidate alla professionalità del nostro team. L’eterogeneità della nostra clientela ci ha permesso di realizzare differenti progetti con le tecnologie più innovative.",
            theHubContent: 'Piattaforma di masternode hosting di NFT minting e di staking box virtuali con un sistema unico a livello internazionale.',
            digitalOraclesContent: 'Piattaforma innovativa che collega startup e investitori. Monitora e ricompensa il lavoro svolto attraverso la tecnologia blockchain.',
            quadransContent: 'Blockchain open source, pubblica e decentralizzata per Smart Contract e dApps dove imprese e utenti possono memorizzare e condividere dati, convalidare processi e ottimizzare procedure di governance. FoodChain, la filiera trasparente, ha scelto Quadrans per tracciare i prodotti alimentari.',
            umiContent: 'È un interfaccia API first NFT che permette di creare, gestire e vendere token non fungibili su diverse blockchain. La piattaforma consente ai loro clienti come Stargraph, Impssbl, Hexarchia di gestire le complessità della blockchain in autonomia.',
            nftContent: 'Piattaforma che assiste gli artisti nella creazione e nell’emissione di creazioni digitali uniche attraverso token non fungibili.',
            team1: 'Non la solita software house. Un gruppo giovane e dinamico di professionisti appassionati, con un approccio al lavoro pragmatico fondato sulla continua formazione e aggiornamento, per rispondere alla crescente domanda di prodotti e servizi tecnologicamente all’avanguardia.',
            team2: 'Un laboratorio digitale in continua evoluzione e sperimentazione, che fa della passione per l’innovazione il suo principale punto di forza.',
            partnerContent: 'Insieme inventiamo, pensiamo, creiamo, collaboriamo, costruiamo, testiamo, impariamo e vinciamo.',
            joinTeam: 'SCOPRI COME UNIRTI AL TEAM',
            returnHome: 'TORNA ALLA HOME',
            politics: 'POLITICA SULLA RISERVATEZZA',
            termsOfUse: 'TERMINI DI UTILIZZO',
            service: 'SERVIZI',
            phone: 'TELEFONO',
            cta: 'VUOI SAPERE DI PIÙ?'
        }
    }
};

const i18n = new VueI18n({
    locale: 'en',
    messages
});

new Vue({
    render: h => h(App),
    i18n
}).$mount('#app')