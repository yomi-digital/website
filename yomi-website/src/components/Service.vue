<template>
        <div id="servizi" class="white">
            <div class="columns has-text-centered is-multiline ">
                <div class="column is-full bordered">
                    <marquee-text class="highlight">
                        <p class="headerText">{{ $t('message.service') }}>>>{{ $t('message.service') }}>>>{{ $t('message.service') }}>>>{{ $t('message.service') }}>>>{{ $t('message.service') }}>>>{{ $t('message.service') }}>>></p>
                    </marquee-text>                   
                </div>      
                <div class="column is-full padding">
                    <div class="columns has-text-centered is-multiline is-vcentered">
                        <div class="column is-half bigText textLeft serviziPad">
                            <p>{{ $t('message.serviceTitle1') }}<br>{{ $t('message.serviceTitle2') }}<br>{{ $t('message.serviceTitle3') }}<br>{{ $t('message.serviceTitle4') }}</p>
                        </div>
                        <div class="column is-half smallerText textLeft serviziPad">
                            <p>{{ $t('message.serviceDescription1') }}<br>{{ $t('message.serviceDescription2') }}<br>{{ $t('message.serviceDescription3') }}<br>{{ $t('message.serviceDescription4') }}<br>{{ $t('message.serviceDescription5') }}<br>{{ $t('message.serviceDescription6') }}</p>
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
 
    .textLeft {
        text-align: left;
    }
    .padding {
        padding: 150px
    }

    .smallPadding {
        padding: 100px;
        padding-top: 0;
    }

    .serviziPad {
        padding: 0px 50px 10px 50px;
    }

    .bordered{
        border-top: black solid 1px;
        border-bottom: black solid 1px;
    }

    .headerText {
        font-size: 50px;
        font-weight: 500;
        text-align: center;
    }

    .highlight:hover {
        color: #40FF98;
    }

    .bigText{
        font-size: 50px;
    }
    .smallerText{
        font-size: 35px;
    }
    

    @media (max-width: 768px) {
       
        .padding{
            padding: 10px;
        }

        .bigText {
            font-size: 40px;
        }
        .smallerText{
            font-size: 25px;
        }
        .smallPadding {
            padding: 60px;
        }
       
    }

    .white {
        background-color: white;
    }

 
</style>
