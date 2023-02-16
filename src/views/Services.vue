<template>
  <div class="services">
    <ButtonNav />
    <div class="container-fluid pd-container mt-5">
      <div class="row margin-btm">
        <div class="col-12">
          <h2 class="">SERVICES</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid p-0">
      <div class="row margin-btm pt-5">
        <div class="col-12 service-content">
          
          <MarqueeText :repeat="10" :duration="6" >
            <h4>{{$t('service.firstBanner')}}&nbsp;</h4>
          </MarqueeText>
          <div  @click="showTextFirst ='blockchain'" :class="{ active : showTextFirst === 'blockchain', 'lft-40' : !isMobile }" class="single-service position-one transform-rotate-one">
            <p class="text-strong">Blockchain</p>
          </div>
          <div  @click="showTextFirst ='metaverse'" :class="{ active : showTextFirst === 'metaverse','lft-10' : !isMobile }" class="single-service position-two transform-rotate-two">
            <p class="text-strong">Metaverse</p>
          </div>
          <div  @click="showTextFirst ='ai'" :class="{ active : showTextFirst === 'ai', 'lft-75' : !isMobile }" class="single-service position-two transform-rotate-three">
            <p class="text-strong">Ai</p>
          </div>
        </div>
        <div class="col-8 offset-2 block-text">
          <p v-if="showTextFirst == ''">{{ $t('service.firstDescription') }}</p>
          <p class="active-text fade-in" v-if="showTextFirst == 'blockchain'">Smart Contracts / Blockchain Protocols / NFTs & Tokenization / DApps / Notarization / DeFi / MEGO Suite</p>
          <p class="active-text fade-in" v-if="showTextFirst == 'ai'">Machine learning / Process Automation</p>
          <p class="active-text fade-in" v-if="showTextFirst == 'metaverse'">dApp Integration / API Integration / NFT Marketplace Integration</p>
        </div>
      </div>
      <div class="row margin-btm pt-5">
        <div class="col-12 service-content">
          <MarqueeText :repeat="10" :duration="6" reverse>
            <h4>{{$t('service.secondBanner')}}&nbsp;</h4>
          </MarqueeText>
          <div @click="showTextSecond ='marketplace'" :class="{ active : showTextSecond === 'marketplace', 'lft-10' : !isMobile }" class="single-service position-one transform-rotate-two">
            <p class="text-strong">marketplace</p>
          </div>
          <div @click="showTextSecond ='app'" :class="{ active : showTextSecond === 'app', 'lft-15' : !isMobile }" class="single-service position-three transform-rotate-two">
            <p class="text-strong">app</p>
          </div>
          <div @click="showTextSecond ='commerce'" :class="{ active : showTextSecond === 'commerce', 'lft-40 ms-5' : !isMobile }" class="single-service position-one transform-rotate-three">
            <p class="text-strong">E-commerce</p>
          </div>
          <div @click="showTextSecond ='website'" :class="{ active : showTextSecond === 'website', 'lft-75' : !isMobile }" class="single-service position-one transform-rotate-three">
            <p class="text-strong">website</p>
          </div>
          <div @click="showTextSecond ='landing'" :class="{ active : showTextSecond === 'landing', 'lft-50' : !isMobile }" class="single-service position-two transform-rotate-one lft-50">
            <p class="text-strong">landing</p>
          </div>
          <div @click="showTextSecond ='web3'" :class="{ active : showTextSecond === 'web3', 'lft-75' : !isMobile }" class="single-service position-five transform-rotate-two">
            <p class="text-strong">web3 <br> integration</p>
          </div>
         
        </div>
        <div class="col-8 offset-2 block-text">
          <p  v-if="showTextSecond == ''">{{ $t('service.secondDescription') }}</p>
          <p class="active-text fade-in" v-if="showTextSecond == 'marketplace'">Smart Contracts / Blockchain Protocols / NFTs & Tokenization / DApps / Notarization / DeFi / MEGO Suite</p>
          <p class="active-text fade-in" v-if="showTextSecond == 'app'">Machine learning / Process Automation</p>
          <p class="active-text fade-in" v-if="showTextSecond == 'website'">dApp Integration / API Integration / NFT Marketplace Integration</p>
          <p class="active-text fade-in" v-if="showTextSecond == 'landing'">dApp Integration / API Integration / NFT Marketplace Integration dApp Integration / API Integration / NFT Marketplace Integration</p>
          <p class="active-text fade-in" v-if="showTextSecond == 'commerce'">bellu u e-commerce</p>
          <p class="active-text fade-in" v-if="showTextSecond == 'web3'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor numquam harum, laudantium iure consectetur doloribus inventore debitis alias enim quisquam sit voluptatem exercitationem magni cupiditate deleniti distinctio asperiores natus quam?</p>
        </div>
      </div>
      <div class="row margin-btm pt-5">
        <div class="col-12 service-content">
          <MarqueeText :repeat="10" :duration="6">
            <h4>{{$t('service.thirdBanner')}}&nbsp;</h4>
          </MarqueeText>
          <div class="single-service position-one  transform-rotate-one lft-50">
            <p class="text-strong">ux/ui design</p>
          </div>
          <div class="single-service position-three  transform-rotate-two lft-25 ms-5">
            <p class="text-strong">branding</p>
          </div>
        </div>
        <div class="col-8 offset-2 block-text">
          <p>{{ $t('service.thirdDescription') }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center link-portfolio">
          <Bubble :resizeHeightBubble="isMobile ? 180 : 250" :resizeWidthBubble="isMobile ? 200 : 480"  />
          <a class="w-50 m-auto" href="#/internal-project">KNOW MORE ABOUT MEGO TICKETS</a>
        </div>
      </div>

    
      <div class="gap"></div>
      <div v-if="isDesktop" class="gap"></div>
    </div>
    <FooterExt />
    <Footer />
  </div>
</template>

<script>
import MarqueeText from "vue-marquee-text-component";
import checkViewport from "@/mixins/checkViewport";
import Footer from "@/components/Footer.vue";
import Bubble from "@/components/Bubble.vue";
import FooterExt from "@/components/FooterExt.vue";
import ButtonNav from "@/components/ButtonNav.vue";

export default {
  name: "about",
  mixins: [checkViewport],
  components: {
    Footer,
    FooterExt,
    Bubble,
    MarqueeText,
    ButtonNav,
  },
  data() {
    return {
      showTextFirst:"",
      showTextSecond:"",
      showTextThird:"",
      
    };
  },
  methods: {

  },
};
</script>
