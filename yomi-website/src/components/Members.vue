<template>
    <section class="hero is-fullheight is-default is-bold">
        <div class="hero-body ">
            <div class="columns has-text-centered marginZero is-multiline is-mobile width25">
                <div class="column is-full border">
                    <div><p>SEBASTIANO CATAUDO</p></div>
                    <div><p>CTO, Blockchain Guru<br>Co-founder</p></div>
                </div>
                <br>
                <div class="column is-full border">
                    <div><p>SEBASTIANO CATAUDO</p></div>
                    <div><p>CTO, Blockchain Guru<br>Co-founder</p></div>
                </div>
            </div>
            <div class="columns has-text-centered  marginZero is-multiline is-mobile width25">
                <div class="column is-full border">
                    <div><p>SEBASTIANO CATAUDO</p></div>
                    <div><p>CTO, Blockchain Guru<br>Co-founder</p></div>
                </div>
                <div class="column is-full border">
                    <div><p>SEBASTIANO CATAUDO</p></div>
                    <div><p>CTO, Blockchain Guru<br>Co-founder</p></div>
                </div>
            </div>
            <div class="columns has-text-centered  marginZero is-multiline is-mobile width25">
                <div class="column is-full border">
                    <div><p>SEBASTIANO CATAUDO</p></div>
                    <div><p>CTO, Blockchain Guru<br>Co-founder</p></div>
                </div>
                <div class="column is-full border ">
                    <div><p>SEBASTIANO CATAUDO</p></div>
                    <div><p>CTO, Blockchain Guru<br>Co-founder</p></div>
                </div>
            </div>
            <div class="columns has-text-centered  marginZero is-multiline is-mobile width25">
                <div class="column is-full border">
                    <div><p>SEBASTIANO CATAUDO</p></div>
                    <div><p>CTO, Blockchain Guru<br>Co-founder</p></div>
                </div>
                <div class="column is-full border">
                    <div><p>SEBASTIANO CATAUDO</p></div>
                    <div><p>CTO, Blockchain Guru<br>Co-founder</p></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Members',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   section{
        background-color: white;
    }

    .border{
        border: solid black 1px;
    }
    .width25{
        width: 25%;
    }

    .marginZero {
        margin: 0!important;
    }

    @media (max-width: 480px) {
        .hero-body {
            flex-direction: column;
        }
        .columns{
            width: 100%;
        }
    }

</style>
