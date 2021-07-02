<template>
    <section class="hero is-fullheight is-default is-bold">

        <div class="hero-head">
            <div class="columns has-text-centered">
                <div id="teamHeader" class="column">
                    <p>TEAM >>> TEAM >>> TEAM >>> TEAM >>> TEAM >>> TEAM >>></p>
                </div>
            </div>
 
        </div>


        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">

                    <div class="column is-5 biggerFont">
                        <p>
                            
                        Non la solita software house. Un gruppo giovane e dinamico di professionisti appassionati, con un approccio al lavoro pragmatico fondato sulla continua formazione e aggiornamento,  per rispondere alla crescente domanda di prodotti e servizi tecnologicamente all’avanguardia.
                        <br><br>
                        Un laboratorio digitale in continua evoluzione e sperimentazione, che fa della passione per l’innovazione il suo principale punto di forza. 

                        </p>
                    </div>

                    
                </div>
                
            </div>
        </div>
    <div id="teamSVG">
        <img class="fullWidth" src="/assets/img/vectors/Team.svg" alt="team" />
    </div>
    </section>
</template>

<script>
export default {
  name: 'Team',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    section{
        background-color: white;
    }
    #teamHeader{
        font-size: 50px;
        border: solid black 1px;
        line-height: 55px;
        font-weight: 500;
    }
    .biggerFont{
        font-size: 28px
    }

    .fullWidth {
        width: 100%;
    }
</style>
