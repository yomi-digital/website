<template>
    <div id="membersBody" class="white">
        <div class="columns has-text-centered is-multiline padding">
            <div class="column is-one-quarter border">
                <div class="minHeight  text-vcentered ">
                    <p class="name">SEBASTIANO CATAUDO</p><br>
                    <i>CTO, Blockchain Guru<br>Co-founder</i>
                </div>
            </div>
    
            <div class="column is-one-quarter border "> 
                <div class="minHeight text-vcentered">
                    <p class="name">LIVIO LOMBARDO</p><br>
                    <i>Finance & Administration<br>Co-founder</i>
                </div>
            </div>
    
            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name">ROBERTO DIANO</p><br>
                    <i>Sales<br>Co-founder</i>
                </div>
            </div>

            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name">GIORGIA GUIDETTI</p><br>
                    <i>Marketing Specialist</i>
                </div>
            </div>

            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name">ALAN DEVALIS</p><br>
                    <i>Full Stack Developer</i>
                </div>
            </div>

            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name">STEFANO RANIOLO</p><br>
                    <i>Front end Developer</i>
                </div>
            </div>
    
        
            <div class="column is-one-quarter border">
                <div class="minHeight text-vcentered">
                    <p class="name">SIMONE CALABRESE</p><br>
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
        font-family: "Obviously Medi";
    }

    .name {
        font-size: 25px;
        font-weight: 500;
        color: #000000;
        font-family: "Obviously Medi";
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
        #membersBody {
        padding: 0!important;
    }
    }

    .minHeight {
        min-height: 300px;
    }

    #membersBody {
        padding: 0 50px;
    }

</style>
