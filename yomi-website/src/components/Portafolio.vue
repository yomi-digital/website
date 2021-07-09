<template>
    <div id="portafolio">
        <div class="columns has-text-centered is-multiline">

            <div class="column is-half secondColumn">
                <div class="columns is-multiline is-mobile">
                    <div class="column is-10-desktop is-offset-2-desktop is-full-mobile ">
                        <p class="title">PORTFOLIO</p>
                    </div>
                
                    <div class="column is-10-desktop is-offset-2-desktop is-full-mobile ">
                        <p class="content alignLeft contentFont">{{ $t('message.portfolioContent') }}</p>
                    </div>
                </div>
            </div>   

            <div class="column is-full">
                <div class="columns has-text-centered">
                    <div style="padding-top:0;" class="column is-half secondColumn listPad">
                        <div class="columns is-multiline is-mobile">

                            <!-- PORTFOLIO MODALS -->
                            <!-- THE HUB -->
                            <div class="column is-10-desktop is-offset-2-desktop is-full-mobile borders">
                                <div class="columns is-mobile is-multiline">   
                                    <div class="column is-full flexCenter">
                                        <div 
                                            class="columns is-mobile"
                                            @click="theHubisOpen = !theHubisOpen; rotateArrow('1')"
                                            size="is-medium"  
                                        >
                                            <div class="column is-half">
                                                <p class="numberContent alignLeft">THE HUB</p>
                                            </div>
                                            <div class="column is-half alignLeft flexCenter">
                                                <img id="rotateArrow1" class="rightArrow" src="/assets/img/vectors/Arrow4.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <b-collapse
                                        animation="slide"
                                        v-model="theHubisOpen"
                                        >
                                        <template>                  
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-full">
                                                        <p class="alignLeft modalsDescription">
                                                            {{ $t('message.theHubContent') }}
                                                        </p>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-collapse>                                       
                                </div>
                            </div>

                            <!-- 4Ambassador -->

                            <div class="column is-10-desktop is-offset-2-desktop is-full-mobile borders">
                                <div class="columns is-mobile is-multiline">   
                                    <div class="column is-full flexCenter">
                                        <div 
                                            class="columns is-mobile"
                                            @click="ambassadorIsOpen = !ambassadorIsOpen; rotateArrow('2')"
                                            size="is-medium"  
                                        >
                                            <div class="column is-half">
                                                <p class="numberContent alignLeft">4AMBASSADOR</p>
                                            </div>
                                            <div class="column is-half alignLeft flexCenter">
                                                <img id="rotateArrow2" class="rightArrow" src="/assets/img/vectors/Arrow4.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <b-collapse
                                        animation="slide"
                                        v-model="ambassadorIsOpen"
                                        >
                                        <template>                  
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-full">
                                                        <p class="alignLeft modalsDescription">
                                                            {{ $t('message.ambassadorContent') }}
                                                        </p>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-collapse>                                       
                                </div>
                            </div>

                            <!-- DIGITAL ORACLES -->

                            <div class="column is-10-desktop is-offset-2-desktop is-full-mobile borders">
                                <div class="columns is-mobile is-multiline">   
                                    <div class="column is-full flexCenter">
                                        <div 
                                            class="columns is-mobile"
                                            @click="digitalIsOpen = !digitalIsOpen; rotateArrow('3')"
                                            size="is-medium"  
                                        >
                                            <div class="column is-half">
                                                <p class="numberContent alignLeft">DIGITAL ORACLES</p>
                                            </div>
                                            <div class="column is-half alignLeft flexCenter">
                                                <img id="rotateArrow3" class="rightArrow" src="/assets/img/vectors/Arrow4.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <b-collapse
                                        animation="slide"
                                        v-model="digitalIsOpen"
                                        >
                                        <template>                  
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-full">
                                                        <p class="alignLeft modalsDescription">
                                                            {{ $t('message.digitalOraclesContent') }}
                                                        </p>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-collapse>                                       
                                </div>
                            </div>


                            <!-- NFT -->

                            <div class="column is-10-desktop is-offset-2-desktop is-full-mobile borders">
                                <div class="columns is-mobile is-multiline">   
                                    <div class="column is-full flexCenter">
                                        <div 
                                            class="columns is-mobile"
                                            @click="nftIsOpen = !nftIsOpen; rotateArrow('4')"
                                            size="is-medium"  
                                        >
                                            <div class="column is-half">
                                                <p class="numberContent alignLeft">NFT STUDIO</p>
                                            </div>
                                            <div class="column is-half alignLeft flexCenter">
                                                <img id="rotateArrow4" class="rightArrow" src="/assets/img/vectors/Arrow4.svg" alt="arrow" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <b-collapse
                                        animation="slide"
                                        v-model="nftIsOpen"
                                        >
                                        <template>                  
                                            <div class="white">
                                                <div class="columns is-mobile modalsPad is-multiline">
                                                    <div class="column is-full">
                                                        <p class="alignLeft modalsDescription">
                                                            {{ $t('message.nftContent') }}
                                                        </p>
                                                    </div>
                                                </div>  
                                            </div>         
                                        </template>
                                    </b-collapse>                                       
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <img id="girandola" src="/assets/img/vectors/girandola3.gif" alt="girandola">
                    </div>
                </div>
            </div>

            <div class="column is-half mobile-centered thirdColumn">
                <div class="columns has-text-centered is-multiline bottomPad">
                    <div class="column is-10-desktop is-offset-2-desktop is-full-mobile ">
                        <p class="left">
                            VUOI SCOPRIRE DI PIÙ?
                        </p>                         
                    </div>
                    <div class="column is-10-desktop is-offset-2-desktop is-full-mobile ">
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
                theHubisOpen: false,
                ambassadorIsOpen: false,
                digitalIsOpen: false,
                nftIsOpen: false,
            }
        },
        methods: {
            closeModal: function(){
                this.isComponentModalActive = false
            },
            rotateArrow: function(elId){
                document.getElementById('rotateArrow'+elId).classList.toggle('rotated');
            }
        },
    name: 'Portafolio',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .rotated {
        transform: rotate(90deg)
    }
    .title {
        color: white;
        font-size: 45px;
        line-height: 55px;
        font-weight: 500;
        float: left;
        font-family: "Obviously Wide Medi";
    }

    .leftPad{
        padding-left: 200px;
    }
    .thirdColumn {
        padding: 50px 0px 50px 100px ;
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

    .contentFont {
        font-family: "Obviously Medi";
    }
  
    .rightArrow {
        height:20px;
        cursor: pointer;
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
        font-family: "Obviously Semi";
    }

    .button:hover {
        border-color: #40FF98;
    }

    /* MOBILE!!!!!!!! */
    
    @media (max-width: 768px) {
        .secondColumn {
            padding: 30px;
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
        .title {
            font-size: 35px;
        }
        .contentFont {
            font-size: 20px;
        }
    }

   
</style>
