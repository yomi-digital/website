<template>
    <section class="hero is-fullheight is-default is-bold">

        <div class="hero-head">
            <div class="columns has-text-centered">
                <div id="menu" class="column is-5 fontWhite">
                    MENU
                </div>
                <div id="social" class="colums">
                    <div class="column fontWhite">FB</div>
                    <div class="column fontWhite">IG</div>
                    <div class="column fontWhite">IN</div>
                </div>
            </div>
        </div>


        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5 bigWhite">
                        <p>
                            YOMI È UN DIGITAL HUB HIT-TECH
                        </p>
                        <div id="arrow">
                            <img src="/assets/img/vectors/arrow1.svg" alt="arrow" />
                        </div>
                        <div id="arrow">
                            <img src="/assets/img/vectors/scrollDown.svg" alt="arrow" />
                        </div>
                    </div>
                    <div class="column is-6 is-offset-1">
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
    </section>
</template>

<script>
export default {
  name: 'Menu',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hero-head{
        border: solid white 1px;
    }
    #social {
        float: right;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 50%;
    }
    .fontWhite{
        color: white;
        font-size: 35px;
    }
    #menu {
        width: 50%;
        float: left;
        border-right: solid white 1px;
    }
    .bigWhite {
        font-size: 50px;
        color: white;
    }
    .biggerLight{
        font-size: 20px;
        color: rgb(207, 149, 149);
    }

</style>
