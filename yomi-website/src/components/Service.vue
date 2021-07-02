<template>

    <section class="section fullWidth">
        <div class="hero is-fullheight">
            <div class="columns has-text-centered fullWidth is-vcentered">
                <div class="column bordered">
                    <p class="headerText">SERVIZI>>>SERVIZI>>>SERVIZI>>>SERVIZI>>>SERVIZI>>>SERVIZI>>></p>
                </div>
            </div>
            <div class="columns has-text-centered is-multiline fullWidth is-vcentered biggerColumn">

                <div class="column is-half  bigText verticalAlign">
                    <p>IL PARTNER<br> TECNOLOGICO IDEALE <br>PER I TUOI PROCESSI<br> DI INNOVAZIONE</p>
                </div>

                <div class="column is-half verticalAlign smallerText">
                    <p>Il know-how acquisito in tanti anni di <br>esperienza è stato sempre guidato<br> dall’obiettivo primario di offrire prodotti e<br> servizi altamente professionali disegnati<br> su misura esclusivamente per la<br> soddisfazione del cliente. </p>
                </div>

            </div>
            <div class="columns has-text-centered fullWidth is-vcentered ">

                <div class="column">
                    <img src="/assets/img/vectors/arrow2.svg" alt="arrow" />
                </div>
            </div>
        </div>
    </section>
  
</template>

<script>
export default {
  name: 'Service',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    section {
        background-color: white;
        height: 100%;
    }

    .biggerColumn{
        height: 80%;   
    }

   

    .fullWidth {
        width: 100%;
    }

    .bordered{
        border-top: black solid 1px;
        border-bottom: black solid 1px;
    }

    .headerText {
        font-size: 35px;
        font-weight: 500;
        text-align: center;
    }

    .bigText{
        font-size: 40px;
    }
    .smallerText{
        font-size: 25px;
    }

    .verticalAlign{
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
    }

    @media (max-width: 768px) {
        .headerText{
            display: none;
        } 
    }

    .hero.is-fullheight {
        min-height: 60vh;
    }
</style>
