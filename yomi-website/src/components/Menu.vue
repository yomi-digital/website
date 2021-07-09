<template>
    <div id="whoWeAre">
        <div class="columns has-text-centered is-multiline is-mobile">
            <div class="column is-full bordered">
                <div class="columns is-mobile menuBar">
                    <div class="column is-1-desktop is-3-mobile fontWhite rightBorder menuSection">
                      <div class="columns has-text-centered is-mobile">
                        <div class="column is-full">
                          <Slide
                            :closeOnNavigation="true"
                          >
                            <a href="#whoWeAre" style="color: white;"><p>CHI SIAMO</p></a>
                            <a href="#portafolio" style="color: white;"><p>PORTFOLIO</p></a>
                            <a href="#servizi" style="color: white;"><p>SERVIZI</p></a>
                            <a href="#contact" style="color: white;"><p>CONTATTI</p></a>
                            <br>
                            <a href="https://www.instagram.com/yomi_digitalhub/" style="color: white;" target="_blank"><p>INSTAGRAM</p></a>
                            <a href="https://www.facebook.com/YOMI-107740754843280/" style="color: white;" target="_blank"><p>FACEBOOK</p></a>
                            <a href="https://www.linkedin.com/company/yomidigitalhub/" style="color: white;" target="_blank"><p>LINKEDIN</p></a>
                          </Slide> 
                        </div>
                      </div>
                    </div>
                    <div class="column is-10-desktop is-6-mobile">
                        <div class="columns is-mobile">
                            <div class="column fontWhite rightBorder">
                                <a href="https://www.facebook.com/YOMI-107740754843280/" style="color: white;" target="_blank"><p>FB</p></a>
                            </div>
                            <div class="column fontWhite rightBorder">
                                <a href="https://www.instagram.com/yomi_digitalhub/" style="color: white;" target="_blank"><p>IG</p></a>
                            </div>
                            <div class="column fontWhite rightBorder">
                                <a href="https://www.linkedin.com/company/yomidigitalhub/" style="color: white;" target="_blank"><p>IN</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="is-1-desktop is-3-mobile laguageContainer">
                      <div class="">
                        <select class="language" v-model="$i18n.locale">
                            <option
                                v-for="(lang, i) in langs"
                                :key="`lang-${i}`"
                                :value="lang"
                            >
                                {{ lang }}
                            </option>
                        </select>
                      </div>
                    </div>
                </div>
            </div>



            <div class="column is-full padding">
                <div class="columns">
                    <div class="column bigWhite">
                        <p class="textLeft">
                            {{ $t('message.whoWeAre1') }}<br>{{ $t('message.whoWeAre2') }}
                        </p>
                        <div class="floatLeft logoMenu">
                            <div>
                                <img id="menuArrow" src="/assets/img/vectors/Arrow1.svg" alt="arrow" />
                            </div>
                            <div class="relative">
                                <img class="biggerImage" src="/assets/img/vectors/scrollDown.svg" alt="arrow" />
                                <p class="absolute">SCROLL DOWN</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="column">
                        <div class="textLeft mediumFont">
                            <p class="promoteTextMobile">
                                {{ $t('message.promote1') }}
                                <br>
                                {{ $t('message.promote2') }}
                                <br>
                            </p>
                        </div> 
                        <br>
                        <div class="biggerLight textLeft contentHomeMobile">
                            <p>
                                {{ $t('message.ourHub') }}
                            </p>
                            <br>
                            <p>
                                {{ $t('message.ourGoal') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { Slide } from 'vue-burger-menu'
    export default {
        data() {
            return {
                isComponentModalActive: false,
                langs: ['en', 'it'] 
            }
        },
        methods: {
            closeModal: function(){
                this.isComponentModalActive = false
            }
        },
        name: 'Menu',
        components: {
          Slide
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .bm-burger-button {
    z-index: 1;
    left: 40%;
    top: 30%;

  }
  .bm-burger-button span {
    background: white!important;
  }

  @media (max-width: 768px) {
    .bm-burger-button {
      z-index: 1;
      left: 33%;
      top: 30%;

    }
    .language{
      margin-left: 15px;
    }
  }
</style>

<style scoped>
.textLeft {
  text-align: left;
}
.black-text {
  color: black;
}

.mediumFont{
  font-family: "Obviously Medi";
  font-size: 25px;
  
  color: white !important;
  
  cursor: pointer;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 10%;

}

.white {
  background-color: white;
}

.fontWhite {
  font-family: "Obviously";
  color: white !important;
  font-size: 35px;
  cursor: pointer;
  font-weight: 500;
  line-height: 54px;
  letter-spacing: 10%;
  font-style: normal;
}

.bigWhite {
  font-size: 50px;
  color: white !important;
  font-weight: 500;
  font-family: "Obviously Wide Medi";
}
.biggerLight {
  font-size: 20px;
  color: #e5e5e5;
  font-family: "Obviously";
  font-style: italic;
}

.padding {
  padding: 150px;
}

.relative {
  position: relative;
}

.absolute {
  font-size: 13px;
  color: white !important;
  position: absolute;
  left: 55px;
  bottom: 133px;
}
.absolute:hover {
  color: #40ff98!important;
  text-decoration: underline;
}

.bordered {
  border: solid white 1px;
}

.rightBorder {
  border-right: solid white 1px;
}

.floatLeft {
  float: left;
}

.biggerImage {
  height: 250px;
}
.topBorder {
  border-top: solid black 1px;
}
.bottomBorder {
  border-bottom: solid black 1px;
}
.littePad {
  padding: 30px;
}
.littleTopPad {
  padding-top: 50px;
}
.littleLeftPad {
  padding-left: 25px;
}

.laguageContainer {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin: auto;
  }

.language {
  background: none;
  border: black;
  font-size: 40px;
  color: white;
  position: inherit;
  text-transform: uppercase;
}

@media (max-width: 768px) {
  .padding {
    padding: 50px;
  }
  #whoWeAre {
  padding: 10px 10px!important;
  }
  .floatLeft {
    float: none;
  }
  .absolute {
    left: 70px;
    top: 135px;
  }
  #menuArrow {
    display: none;
  }
  .bm-burger-button {
    left: 40px;
  }
  .bigWhite {
    font-size: 30px;
  }
  .biggerImage {
    margin-top: 20px;
  }
  .promoteTextMobile {
    line-height: 40px;
    font-size: 20px;
  }
  .contentHomeMobile {
    font-size: 16px;
  }
}

#whoWeAre {
  padding: 10px 50px;
}

.menuSection {
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}



</style>
