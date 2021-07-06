<template>
    <div id="whoWeAre">
        <div class="columns has-text-centered is-multiline is-mobile">
            <div class="column is-full bordered">
                <div class="columns is-mobile menuBar">
                    <div class="column is-half fontWhite rightBorder">
                        <div 
                            label="Launch component modal"
                            size="is-medium"
                            @click="isComponentModalActive = true"
                        >
                            <p class="menu fontWhite">MENU</p>
                        </div>
                        <b-modal
                            v-model="isComponentModalActive"
                            >
                            <template>
                                <div class="white"> 
                                    <div class="columns is-mobile is-multiline has-text-centered littePad">
                                        <div class="column is-full littleTopPad">
                                            <div class="columns is-mobile is-multiline black-text littePad">
                                                <div class="column is-full topBorder">
                                                    <a href="#whoWeAre" style="color: black;" @click="closeModal"><p class="floatLeft littleLeftPad">CHI SIAMO</p></a>
                                                </div>
                                                <div class="column is-full topBorder">                                       
                                                    <a href="#portafolio" style="color: black;" @click="closeModal"><p class="floatLeft littleLeftPad">PORTFOLIO</p></a>
                                                </div>
                                                <div class="column is-full topBorder">                                           
                                                    <a href="#servizi" style="color: black;" @click="closeModal"><p class="floatLeft littleLeftPad">SERVIZI</p></a>
                                                </div>
                                                <div class="column is-full topBorder bottomBorder">                                                  
                                                    <a href="#contact" style="color: black;" @click="closeModal"><p class="floatLeft littleLeftPad">CONTATTI</p></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="column is-full littleTopPad">
                                            <div class="columns is-mobile is-multiline black-text littePad ">
                                                <div class="column is-full topBorder">
                                                    <a href="https://www.instagram.com/yomi_digitalhub/" style="color: black;" target="_blank"><p class="floatLeft littleLeftPad">INSTAGRAM</p></a>
                                                </div>
                                                <div class="column is-full topBorder">
                                                    <a href="https://www.facebook.com/YOMI-107740754843280/" style="color: black;" target="_blank"><p class="floatLeft littleLeftPad">FACEBOOK</p></a>
                                                </div>
                                                <div class="column is-full topBorder bottomBorder">
                                                    <a href="https://www.linkedin.com/company/yomidigitalhub/" style="color: black;" target="_blank"><p class="floatLeft littleLeftPad">LINKEDIN</p></a>
                                                </div>                                   
                                            </div>
                                        </div>
                                        <div class="column is-full littleTopPad">
                                            <div class="columns is-mobile is-multiline black-text littePad ">
                                                <div class="column is-full topBorder">
                                                    <p class="floatLeft littleLeftPad">VIA ERCOLANO 62, 97100 RAGUSA (RG)</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </b-modal>
                    </div>
                    <div class="column is-half">
                        <div class="columns is-mobile">
                            <div class="column fontWhite rightBorder">
                                <a href="https://www.facebook.com/YOMI-107740754843280/" style="color: white;" target="_blank"><p>FB</p></a>
                            </div>
                            <div class="column fontWhite rightBorder">
                                <a href="https://www.instagram.com/yomi_digitalhub/" style="color: white;" target="_blank"><p>IG</p></a>
                            </div>
                            <div class="column fontWhite">
                                <a href="https://www.linkedin.com/company/yomidigitalhub/" style="color: white;" target="_blank"><p>IN</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="column is-full padding">
                <div class="columns">
                    <div class="column bigWhite">
                        <p class="textLeft">
                            {{ $t('message.whoWeAre1') }}<br>{{ $t('message.whoWeAre2') }}
                        </p>
                        <div class="floatLeft logoMenu">
                            <div>
                                <img id="menuArrow" src="/assets/img/vectors/arrow1.svg" alt="arrow" />
                            </div>
                            <div class="relative">
                                <img class="biggerImage" src="/assets/img/vectors/scrollDown.svg" alt="arrow" />
                                <p class="absolute">SCROLL DOWN</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="column">
                        <div class="fontWhite textLeft">
                            <p>
                                {{ $t('message.promote1') }}
                                <br>
                                {{ $t('message.promote2') }}
                                <br>
                            </p>
                        </div> 
                        <br>
                        <div class="biggerLight textLeft">
                            <p>
                                {{ $t('message.ourHub') }}
                            </p>
                            <br>
                            <p>
                                {{ $t('message.ourGoal') }}
                            </p>
                        </div>
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
                isComponentModalActive: false,
            }
        },
        methods: {
            closeModal: function(){
                this.isComponentModalActive = false
            }
        },
        name: 'Menu',
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .textLeft {
        text-align: left;
    }
    .black-text {
        color: black;
    }

    .white {
        background-color: white;
    }
    .menu {
        cursor: pointer;
    }
    .fontWhite{
        color: white;
        font-size: 35px;
    }
   
    .bigWhite {
        font-size: 60px;
        color: white;
    }
    .biggerLight{
        font-size: 20px;
        color: #E5E5E5;
        font-style: italic;
    }

    .padding {
        padding: 150px;
    }

    .relative {
        position: relative;
    }

    .absolute {
        font-size: 16px;
        color: white;
        position: absolute;
        left: 62px;
        bottom: 133px;
    }
    .absolute:hover {
        color: #40FF98;
        text-decoration: underline;
    }

    .bordered {
        border: solid white 1px;
    }

    .rightBorder {
        border-right: solid white 1px;
    }

    .floatLeft {
        float: left;
    }

    .biggerImage {
        height: 250px;
    }
    .topBorder {
        border-top: solid black 1px;
    }
    .bottomBorder {
        border-bottom: solid black 1px;
    }
    .littePad {
        padding: 30px;
    }
    .littleTopPad {
        padding-top: 50px;
    }
    .littleLeftPad {
        padding-left: 25px
    }
    
   
    @media (max-width: 768px) {
        .padding {
            padding: 50px;
        }
      
        .floatLeft {
            float: none;
        }
        .absolute {
            left: 110px;
        }
        #menuArrow {
            display: none;
        }
    }

    #whoWeAre {
        padding-top: 10px;
      
    }
    

</style>
