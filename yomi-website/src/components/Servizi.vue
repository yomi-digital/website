<template>
    <div id="serviceList" class="servizi white">
         <div class="columns is-multiline -has-text-centered is-mobile">
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile ">
                        <img src="/assets/img/vectors/vector1.svg" alt="vector1" />
                        <div @click='toggle = !toggle'>
                            <p class="serviceTitle">BLOCKCHAIN</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle'><i>
                            {{ $t('message.blockchain') }}
                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector8.svg" alt="vector1" />
                        <div @click='toggle2 = !toggle2'>
                            <p class="serviceTitle">{{ $t('message.aiTitle') }}</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle2'><i>{{ $t('message.aiDescription') }}
                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector4.svg" alt="vector1" />
                        <div @click='toggle3 = !toggle3'>
                            <p class="serviceTitle">{{ $t('message.erpTitle') }}</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle3'><i>{{ $t('message.erpDescription') }}
 
                        </i></p>               
                    </div>
                </div>
            </div>
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector3.svg" alt="vector1" />
                        <div @click='toggle4 = !toggle4'>
                            <p class="serviceTitle">{{ $t('message.webDevTitle') }}</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle4'><i>{{ $t('message.webDevDescription') }}


                        </i></p> 
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector6.svg" alt="vector1" />
                        <div @click='toggle5 = !toggle5'>
                            <p class="serviceTitle">E-COMMERCE</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle5'><i>{{ $t('message.eCommerce') }}


                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector5.svg" alt="vector1" />
                        <div @click='toggle6 = !toggle6'>
                            <p class="serviceTitle">{{ $t('message.websiteTitle') }}</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle6'><i>{{ $t('message.webDevDescription') }} 
                        </i></p>
                    </div>
                </div>
            </div>
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector9.svg" alt="vector1" />
                        <div @click='toggle7 = !toggle7'>
                            <p class="serviceTitle">{{ $t('message.mobileDevTitle') }}</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle7'><i>{{ $t('message.mobileDevContent') }} 
                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector2.svg" alt="vector1" />
                        <div @click='toggle8 = !toggle8'>
                            <p class="serviceTitle">{{ $t('message.researchTitle') }}</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle8'><i>{{ $t('message.researchDescription') }} 
                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector7.svg" alt="vector1" />
                        <div @click='toggle9 = !toggle9'>
                            <p class="serviceTitle">{{ $t('message.consultingTitle') }}</p>
                        </div>
                        <p class="left serviceDescription" v-show='toggle9'><i>{{ $t('message.consultingDescription') }}
                        </i></p>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            toggle: false,
            toggle2: false,
            toggle3: false,
            toggle4: false,
            toggle5: false,
            toggle6: false,
            toggle7: false,
            toggle8: false,
            toggle9: false
        }
    },
  name: 'Servizi'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
    .firstPad {
        padding: 50px 0px 50px 200px;
    }
    .thirdTall {
        min-height: 300px;
    }
    .white {
        background-color: white;
    }

    .servizi {
        min-height: 900px;
    }

    img {
        height: 67px;
    }
    .serviceDescription {
        padding: 10px;
    }

    .serviceTitle {
        font-size: 25px;
        line-height: 30px;
        font-weight: 500;
        font-family: "Obviously";
    }
    .serviceTitle:hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .firstPad {
            padding: 30px;
        }
        .serviceDescription {
            padding: 10px;
        }
    }

    </style>
