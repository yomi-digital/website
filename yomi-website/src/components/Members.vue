<template>
    <section class="section">
        <div class="hero is-fullheight fullWidth">
            <div class="columns has-text-centered is-multiline fullWidth">

            <div class="column is-one-quarter border text-vcentered">
                <p class="name"><strong>SEBASTIANO CATAUDO</strong></p><br>
                <p>CTO, Blockchain Guru<br>Co-founder</p>
            </div>
    
            <div class="column is-one-quarter border text-vcentered">
                <p class="name"><strong>LIVIO LOMBARDO</strong></p><br>
                <p>Finance & Administration<br>Co-founder</p>
            </div>
    
            <div class="column is-one-quarter border text-vcentered">
                <p class="name"><strong>ROBERTO DIANO</strong></p><br>
                <p>Sales<br>Co-founder</p>
            </div>

            <div class="column is-one-quarter border text-vcentered">
                <p class="name"><strong>GIORGIA GUIDETTI</strong></p><br>
                <p>Marketing Specialist</p>
            </div>

            <div class="column is-one-quarter border text-vcentered">
                <p class="name"><strong>ALAN DEVALIS</strong></p><br>
                <p>Full Stack Developer</p>
            </div>

            <div class="column is-one-quarter border text-vcentered">
                <p class="name"><strong>STEFANO RANIOLO</strong></p><br>
                <p>Front end Developer</p>
            </div>
    
          
        
            <div class="column is-one-quarter border text-vcentered">
                <p class="name"><strong>SIMONE CALABRESE</strong></p><br>
                <p>Junior Developer</p>
            </div>
            <div class="column is-one-quarter border text-vcentered">
                <p>maybe you?</p>
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
    .columns{
        height: 90%;
    }

    .text-vcentered {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .name {
        font-size: 30px;
    }

    .job {
        font: 20px;
    }

    .fullWidth{
        width: 100%;
    }

    .container {
        margin:0;
        margin-right: 0;
    }
    .hero{
        display: grid;
    }



</style>
