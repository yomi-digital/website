<template>
    <div>
        <div class="columns has-text-centered is-multiline">

            <div class="column is-full smallPadding">
                <div class="largePadding moreLeftPad">
                    <p class="title alignLeft">PORTFOLIO</p>
                    <br>
                    <p class="content alignLeft">Nel tempo abbiamo costruito collaborazioni proficue. La nostra clientela<br> è composta da piccole realtà italiane, start up e grandi compagnie<br> internazionali che si sono affidate alla professionalità e competenza del<br> nostro team. L’eterogeneità della nostra clientela ci ha permesso di<br> ampliare le nostre conoscenze e realizzare differenti progetti disegnati<br> su misura con le tecnologie più innovative. 	</p>
                </div>
            </div>   

            <div class="column is-full">
                <div class="columns has-text-centered">
                    <div style="padding-top:0;" class="column is-half secondColumn">
                        <div class="columns is-multiline is-mobile">
                            <div class="column is-full borders">
                                <p class="numbers">01</p>
                                <p class="numberContent">THE HUB</p>
                            </div>
                            <div class="column is-full borders">
                                <p class="numbers">02</p>
                                <p class="numberContent">NETWORK REVOLUTION</p>
                            </div>
                            <div class="column is-full borders">
                                <p class="numbers">03</p>
                                <p class="numberContent">DIGITAL ORACLES</p>
                            </div>
                            <div class="column is-full borders">
                                <p class="numbers">04</p>
                                <p class="numberContent">EINAUDISTORE</p>
                            </div>
                            <div class="column is-full borders">
                                <p class="numbers">05</p>
                                <p class="numberContent">MCA GROUP</p>
                            </div>
                        </div>
                    </div>
                    <div class="column is-half">
                        <img id="girandola" src="/assets/img/vectors/girandola3.gif" alt="girandola">
                    </div>
                </div>
            </div>

            <div class="column is-half">
                <div class="columns has-text-centered smallPadding is-multiline">
                    <div class="column is-full thirdColumn">
                        <p class="left">
                            VUOI SCOPRIRE DI PIÙ?
                        </p>                         
                    </div>
                    <div class="column thirdColumn">
                         <b-button rounded type='is-dark' class="left">Download PDF</b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Portafolio',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .title {
        color: white;
        font-size: 40px;
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

    .largePadding {
        padding: 50px 100px 0px 150px;
    }
    .alignLeft {
        text-align: left;
    }

    .moreLeftPad{
        padding-left: 400px;
    }

    .borders{
        border-top: solid white 1px;
        border-bottom: solid white 1px;
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
    .numberContent {
        float:left;
        color: white;
        font-size: 20px;
        padding-left: 85px;
        padding-top: 10px;
    
    }

    @media (max-width: 768px) {
        .largePadding {
            padding: 50px;
        }
        .smallPadding{
            padding: 10px;
        }
        .moreLeftPad {
            padding: 50px;
        }
        .numbers {
            padding-left: 10px;
            font-size: 20px;
        }
        .numberContent {
        float:left;
        padding-left: 25px;
        }
    }
   
</style>
