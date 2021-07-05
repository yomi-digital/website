<template>
    <div class="white">
            <div class="columns has-text-centered is-multiline ">
                <div class="column is-full bordered">
                    <p class="teamHeader dontShow">TEAM >>> TEAM >>> TEAM >>> TEAM >>> TEAM >>> TEAM >>></p>
                </div>
                <div class="column is-full padding">
                    <div class="column is-half biggerFont">
                        <p>
                        Non la solita software house. Un gruppo giovane e dinamico di professionisti appassionati, con un approccio al lavoro pragmatico fondato sulla continua formazione e aggiornamento,  per rispondere alla crescente domanda di prodotti e servizi tecnologicamente all’avanguardia.
                        <br><br>
                        Un laboratorio digitale in continua evoluzione e sperimentazione, che fa della passione per l’innovazione il suo principale punto di forza. 
                        </p>
                    </div>
                </div>
            </div>
 
        <div id="teamSVG">
            <img class="fullWidth" src="/assets/img/vectors/Team.svg" alt="team" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Team',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
    .teamHeader{
        font-size: 50px;
        font-weight: 500;
        text-align: center;
    }

    .teamHeader:hover {
        color: #40FF98;
    }

    .bordered {
        border: black solid 1px
    }
    .biggerFont{
        font-size: 28px
    }

    .fullWidth {
        width: 100%;
    }

    .white {
        background-color: white;
    }
    .padding {
        padding: 150px;
    }

    
    @media (max-width: 768px) {
        .padding {
            padding: 50px;
        }
        .dontShow{
            display: none;
        }
    }

    </style>
