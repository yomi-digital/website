<template>
    <div class="white">
            <div class="columns has-text-centered is-multiline ">
                <div class="column is-full bordered">
                    <marquee-text class="highlight">
                        <p class="teamHeader ">TEAM >>> TEAM >>> TEAM >>> TEAM >>> TEAM >>> TEAM >>> </p> 
                    </marquee-text> 
                </div>
                <div class="column is-full padding">
                    <div class="column is-half biggerFont alignLeft">
                        <p>
                        {{ $t('message.team1') }}
                        <br><br>
                        {{ $t('message.team2') }}
                        </p>
                    </div>
                </div>
                <div class='column is-full'>
                    <img src="/assets/img/vectors/Team.svg" alt="team" />
                </div>
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
    p {
        font-weight: 500;
        
        color: #000000;
    }

    img {
        width: 100%;
    }
    .teamHeader{
        font-size: 50px;
        font-weight: 500;
        text-align: center;
    }

    .highlight:hover {
        color: #40FF98;
    }

    .bordered {
        border: black solid 1px
    }
    .biggerFont{
        font-size: 28px
    }
    .alignLeft {
        text-align: left;
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
        img {
            height: 120px;
            width: auto;
            max-width: none;
        }
    }

    </style>
