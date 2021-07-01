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

                    <div id="teamSVG">
                        <img src="/assets/img/vectors/Team.svg" alt="team" />
                    </div>
                </div>
            </div>
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

</style>
