<template>
    <div class="white">
        <div class="columns has-text-centered is-multiline padding">
            <div class="column is-one-quarter border">
                <div class="minHeight  text-vcentered ">
                    <p class="name"><b>SEBASTIANO CATAUDO</b></p><br>
                    <i>CTO, Blockchain Guru<br>Co-founder</i>
                </div>
            </div>
    
            <div class="column is-one-quarter border "> 
                <div class="minHeight text-vcentered">
                    <p class="name"><b>LIVIO LOMBARDO</b></p><br>
                    <i>Finance & Administration<br>Co-founder</i>
                </div>
            </div>
    
            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name"><b>ROBERTO DIANO</b></p><br>
                    <i>Sales<br>Co-founder</i>
                </div>
            </div>

            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name"><b>GIORGIA GUIDETTI</b></p><br>
                    <i>Marketing Specialist</i>
                </div>
            </div>

            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name"><b>ALAN DEVALIS</b></p><br>
                    <i>Full Stack Developer</i>
                </div>
            </div>

            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name"><b>STEFANO RANIOLO</b></p><br>
                    <i>Front end Developer</i>
                </div>
            </div>
    
        
            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name"><b>SIMONE CALABRESE</b></p><br>
                    <i>Junior Developer</i>
                </div>
            </div>
            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="maybeYou">maybe you?</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Members',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .border{
        border: solid black 1px;
    }

    .padding {
        padding: 100px;
    }

    .maybeYou {
        color: #000000;
        font-weight: 500;
        line-height: 20px;
        font-size: 25px;
        font-style: bold;
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
        font-weight: 500;
        color: #000000;
    }

    i {
        color: #000000;
    }
    .job {
        font: 20px;
    }
 
    .white {
        background-color: white;
         display: grid;
    }

     @media (max-width: 768px) {
        .padding {
            padding: 30px;
        }
    }

    .minHeight {
        min-height: 400px;
    }

</style>
