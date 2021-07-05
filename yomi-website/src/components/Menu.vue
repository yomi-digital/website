<template>
    <div>
        <div class="columns has-text-centered is-multiline">
            <div class="column is-full bordered">
                <div class="columns is-mobile">
                    <div class="column is-half fontWhite rightBorder">
                        MENU
                    </div>
                    <div class="column is-half">
                        <div class="columns is-mobile">
                            <div class="column fontWhite rightBorder">FB</div>
                            <div class="column fontWhite rightBorder">IG</div>
                            <div class="column fontWhite">IN</div>
                        </div>
                    </div>
                </div>
            </div>



            <div class="column is-full padding">
                <div class="columns">
                    <div class="column bigWhite">
                        <p style="text-align: left">
                            YOMI È UN DIGITAL <br>HUB HIT-TECH
                        </p>
                        <div class="floatLeft">
                            <div>
                                <img src="/assets/img/vectors/arrow1.svg" alt="arrow" />
                            </div>
                            <div class="relative">
                                <img class="biggerImage" src="/assets/img/vectors/scrollDown.svg" alt="arrow" />
                                <p class="absolute">SCROLL DOWN</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="column">
                        <div class="fontWhite">
                            <p>
                                Promuoviamo la diffusione della tecnologia per il raggiungimento di una realtà più etica e democratica. Le competenze della nostra squadra ci consentono di utilizzare le tecnologie più innovative plasmandole e adattandole alle complesse esigenze dei nostri clienti.
                            </p>
                        </div> 
                        <br>
                        <div class="biggerLight">
                            <p>
                                Il nostro obiettivo è quello di essere una guida nel mondo sconfinato della tecnologia, fornendo a tutti i mezzi per realizzare le proprie visioni.
                            </p>
                            <br>
                            <p>
                                Il nostro hub è un luogo fisico e digitale libero, dove tutti hanno la possibilità di esprimere il proprio io e le proprie idee senza il timore di non essere ascoltati.
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
  name: 'Menu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
  
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
    @media (max-width: 768px) {
        .padding {
            padding: 50px;
        }
    }


</style>
