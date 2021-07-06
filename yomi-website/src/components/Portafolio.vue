<template>
    <div id="portafolio">
        <div class="columns has-text-centered is-multiline">

            <div class="column is-half secondColumn">
                <div class="columns is-multiline is-mobile">
                    <div class="column is-full firstPad">
                        <p class="title">PORTFOLIO</p>
                    </div>
                
                    <div class="column is-full firstPad">
                        <p class="content alignLeft">Nel tempo abbiamo costruito collaborazioni proficue. La nostra clientela<br> è composta da piccole realtà italiane, start up e grandi compagnie<br> internazionali che si sono affidate alla professionalità e competenza del<br> nostro team. L’eterogeneità della nostra clientela ci ha permesso di<br> ampliare le nostre conoscenze e realizzare differenti progetti disegnati<br> su misura con le tecnologie più innovative. 	</p>
                    </div>
                </div>
            </div>   

            <div class="column is-full">
                <div class="columns has-text-centered">
                    <div style="padding-top:0;" class="column is-half secondColumn listPad">
                        <div class="columns is-multiline is-mobile">

                            <!-- PORTFOLIO MODALS -->
                            <!-- THE HUB -->
                            <div class="column is-three-fifths is-offset-one-fifth borders">
                                <div class="columns is-mobile is-multiline">                     
                                    <div 
                                        label="Launch component modal"
                                        size="is-medium"
                                        @click="isTheHubModalActive = true"
                                    >
                                        <div class="column is-full flexCenter">
                                            <p class="numberContent alignLeft">THE HUB</p>
                                        </div>
                                    </div>
                                    <b-modal
                                        v-model="isTheHubModalActive"
                                        >
                                        <template>
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="columns is-multiline is-mobile">
                                                            <div class="column is-full ">
                                                                <p class="alignLeft modalsTitle">THE HUB</p>
                                                            </div>
                                                            <div class="column is-full">
                                                                <p class="alignLeft modalsDescription">
                                                                    Piattaforma di masternode hosting (in competizione con GIN, Nodehost e pochi altri) e di staking box virtuali (sistema unico a livello internazionale). Una suite completa per la gestione degli sviluppi legati alla blockchain di Scryta.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="modalsImage">
                                                            image
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-modal>                                       
                                </div>
                            </div>

                            <!-- NETWORK REVOLUTION -->
                            <div class="column is-three-fifths is-offset-one-fifth borders">
                                <div class="columns is-mobile is-multiline">                     
                                    <div 
                                        label="Launch component modal"
                                        size="is-medium"
                                        @click="isNetworkModalActive = true"
                                    >
                                        <div class="column is-full flexCenter">
                                            <p class="numberContent alignLeft">NETWORK REVOLUTION</p>
                                        </div>
                                    </div>
                                    <b-modal
                                        v-model="isNetworkModalActive"
                                        >
                                        <template>
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="columns is-multiline is-mobile">
                                                            <div class="column is-full ">
                                                                <p class="alignLeft modalsTitle">NETWORK REVOLUTION</p>
                                                            </div>
                                                            <div class="column is-full">
                                                                <p class="alignLeft modalsDescription">
                                                                    DESCRIPTION
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="modalsImage">
                                                            image
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-modal>                                       
                                </div>
                            </div>

                            <!-- DIGITAL ORACLES -->
                            <div class="column is-three-fifths is-offset-one-fifth borders">
                                <div class="columns is-mobile is-multiline">                     
                                    <div 
                                        label="Launch component modal"
                                        size="is-medium"
                                        @click="isDigitalModalActive = true"
                                    >
                                        <div class="column is-full flexCenter">
                                            <p class="numberContent alignLeft">DIGITAL ORACLES</p>
                                        </div>
                                    </div>
                                    <b-modal
                                        v-model="isDigitalModalActive"
                                        >
                                        <template>
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="columns is-multiline is-mobile">
                                                            <div class="column is-full ">
                                                                <p class="alignLeft modalsTitle">DIGITAL ORACLES</p>
                                                            </div>
                                                            <div class="column is-full">
                                                                <p class="alignLeft modalsDescription">
                                                                    Description
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="modalsImage">
                                                            image
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-modal>                                       
                                </div>
                            </div>

                            <!-- EINAUDISTORE -->
                            <div class="column is-three-fifths is-offset-one-fifth borders">
                                <div class="columns is-mobile is-multiline">                     
                                    <div 
                                        label="Launch component modal"
                                        size="is-medium"
                                        @click="isEinaudistoreModalActive = true"
                                    >
                                        <div class="column is-full flexCenter">
                                            <p class="numberContent alignLeft">EINAUDISTORE</p>
                                        </div>
                                    </div>
                                    <b-modal
                                        v-model="isEinaudistoreModalActive"
                                        >
                                        <template>
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="columns is-multiline is-mobile">
                                                            <div class="column is-full ">
                                                                <p class="alignLeft modalsTitle">EINAUDISTORE</p>
                                                            </div>
                                                            <div class="column is-full">
                                                                <p class="alignLeft modalsDescription">
                                                                    Description
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="modalsImage">
                                                            image
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-modal>                                       
                                </div>
                            </div>
                            <!-- MCA GROUP -->
                            <div class="column is-three-fifths is-offset-one-fifth borders">
                                <div class="columns is-mobile is-multiline">                     
                                    <div 
                                        label="Launch component modal"
                                        size="is-medium"
                                        @click="isMcaModalActive = true"
                                    >
                                        <div class="column is-full flexCenter">
                                            <p class="numberContent alignLeft">MCA GROUP</p>
                                        </div>
                                    </div>
                                    <b-modal
                                        v-model="isMcaModalActive"
                                        >
                                        <template>
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="columns is-multiline is-mobile">
                                                            <div class="column is-full ">
                                                                <p class="alignLeft modalsTitle">MCA GROUP</p>
                                                            </div>
                                                            <div class="column is-full">
                                                                <p class="alignLeft modalsDescription">
                                                                    Description
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="column is-half-desktop is-full-mobile">
                                                        <div class="modalsImage">
                                                            image
                                                        </div>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-modal>                                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <img id="girandola" src="/assets/img/vectors/girandola3.gif" alt="girandola">
                    </div>
                </div>
            </div>

            <div class="column is-half mobile-centered leftPad">
                <div class="columns has-text-centered smallPadding is-multiline bottomPad ">
                    <div class="column is-full thirdColumn">
                        <p class="left">
                            VUOI SCOPRIRE DI PIÙ?
                        </p>                         
                    </div>
                    <div class="column thirdColumn">
                         <b-button rounded type='is-dark button' class="left">Download PDF</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
            return {
                isTheHubModalActive: false,
                isNetworkModalActive: false,
                isDigitalModalActive: false,
                isEinaudistoreModalActive: false, 
                isMcaModalActive: false
            }
        },
        methods: {
            closeModal: function(){
                this.isComponentModalActive = false
            }
        },
    name: 'Portafolio',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title {
        color: white;
        font-size: 45px;
        line-height: 55px;
        font-weight: 500;
        float: left;
    }

    .leftPad{
        padding-left: 200px;
    }
    .thirdColumn {
        padding: 0px 0px 30px 70px
    }
    .secondColumn {
        padding: 100px 0px 50px 100px ;
        margin-top: 50px;
    }
    .left {
        float: left;
        color: white;
    }
    .content {
        color: white;
        font-size: 25px;
    }

    .smallPadding {
        padding: 50px;
    }
    .listPad {
        padding-left: 90px;
    }

    .floatLeft {
        float: left;
    }

 
    .alignLeft {
        text-align: left;
    }
    .arrow {
        height: 20px;
    }

 
    .firstPad {
        padding: 50px 0px 50px 200px;
    }

    .modalsPad {
        padding: 50px;
    }

    .modalsTitle {
        font-size: 20px;
        font-weight: 600;
        border-bottom: solid black 1px;
    }

    .modalsDescription {
        font-size: 16px;
        font-weight: 500;
    }

    .modalsImage {
        min-width: 436px;
        min-height: 268px;
        border: solid black 1px;
    }

    .borders{
        border-bottom: solid white 1px;
    }

    .white {
        background-color: white;
    }
    #girandola {
        height: 300px;
    }
    .numbers {
        font-size: 40px;
        color: white;
        text-align: left;
        padding-left: 20px;
        float: left;
    }
    .flexCenter {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }
    .numberContent {
        float:left;
        color: white;
        font-size: 20px;
        padding-top: 10px;  
        cursor: pointer;
    }

    .button:hover {
        border-color: #40FF98;
    }

    /* MOBILE!!!!!!!! */
    
    @media (max-width: 768px) {
        .secondColumn {
            padding: 20px;
            margin-top: 0px;
        }
        .thirdColumn {
            padding: 20px
        }
        .smallPadding{
            padding: 10px;
        }

        .numbers {
            padding-left: 10px;
            font-size: 20px;
        }
        .numberContent {
            float:left;
            padding-left: 5px;
        }
        .firstPad {
            padding: 30px;
        }
        .bottomPad {
            padding-bottom: 50px;
        }
        .mobile-centered {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        .modalsImage {
            display: none;
        }
        .leftPad {
            padding-left: 0;
        }
    }

   
</style>
