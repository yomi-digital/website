<template>
    <div id="contact">
        <div class="columns is-multiline has-text-centered is-mobile">
            <div class="column is-full">
                <div class="columns is-multiline firstPad has-text-centered is-mobile">
                    <div class="column is-full">
                        <p class="white title">PARTNER</p>
                    </div>
                    <div class="column is-full">
                        <p class="white content">{{ $t('message.partnerContent') }}</p>
                    </div>
                </div>
            </div>
            <div class="column is-full">
                <div class="partners">
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
  name: 'Partner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .white {
        color: white;
        float: left;
        line-height: 30px;
        font-weight: 500;
    }
    .firstColumn {
        padding: 100px 0px 50px 150px;
    }

    .firstPad {
        padding: 50px 0px 50px 200px;
    }
    .title {
        color: white;
        font-size: 45px;
        line-height: 55px;
        font-weight: 500;
        float: left;
    }
    .content {
        font-size: 20px;
        text-align: left;
    }

    .partners {
        min-height: 400px;
        border: solid white 1px;
        margin: 20px;
    }
    
    @media (max-width: 768px) {
       .firstColumn {
            padding: 50px;
        }
        .firstPad {
            padding: 30px;
        }
    }
    #contact {
        padding: 0 40px;
    }

    </style>
