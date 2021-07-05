<template>
        <div class="white">
            <div class="columns has-text-centered is-multiline ">
                <div class="column is-full bordered">
                    <p class="headerText dontShow">SERVIZI>>>SERVIZI>>>SERVIZI>>>SERVIZI>>>SERVIZI>>>SERVIZI>>></p>
                </div>      
                <div class="column is-full padding">
                    <div class="columns has-text-centered is-multiline is-vcentered">
                        <div class="column is-half  bigText">
                            <p>IL PARTNER<br> TECNOLOGICO IDEALE <br>PER I TUOI PROCESSI<br> DI INNOVAZIONE</p>
                        </div>
                        <div class="column is-half  smallerText">
                            <p>Il know-how acquisito in tanti anni di <br>esperienza è stato sempre guidato<br> dall’obiettivo primario di offrire prodotti e<br> servizi altamente professionali disegnati<br> su misura esclusivamente per la<br> soddisfazione del cliente. </p>
                        </div>
                    </div>
                </div>
                <div class="column is-full smallPadding">
                    <img src="/assets/img/vectors/arrow2.svg" alt="arrow" />
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Service',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
    .padding {
        padding: 200px
    }

    .smallPadding {
        padding: 100px;
        padding-top: 0;
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

    .headerText:hover {
        color: #40FF98;
    }

    .bigText{
        font-size: 40px;
    }
    .smallerText{
        font-size: 25px;
    }

    @media (max-width: 768px) {
       .dontShow{
           display: none;
       }
        .padding{
            padding: 10px;
        }
    }

    .white {
        background-color: white;
    }

 
</style>
