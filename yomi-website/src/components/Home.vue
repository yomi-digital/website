<template>   
    <section class="hero is-fullheight">
        
        <div class="container is-fluid flexCenter">

            <img class=" vectors" src="/assets/img/vectors/home_vec1.svg" alt="vector1" />
            <img class=" vectors" src="/assets/img/vectors/home_vec2.svg" alt="vector2" />
            <img class="hideMobile vectors" src="/assets/img/vectors/home_vec3.svg" alt="vector3" />
            <img class="vectors" src="/assets/img/vectors/home_vec4.svg" alt="vector4" />
            <img class="hideMobile vectors" src="/assets/img/vectors/home_vec1.svg" alt="vector1" />
            <img class="hideMobile vectors" src="/assets/img/vectors/home_vec2.svg" alt="vector2" />
            <img class="hideMobile vectors" src="/assets/img/vectors/home_vec3.svg" alt="vector3" />

            <div>
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
            <div id="logo">
                <img src="/assets/img/vectors/logo.svg" alt="logo" />
            </div>
            <div id="arrow">
                <img src="/assets/img/vectors/arrow1.svg" alt="arrow" />
            </div>
    
        </div>
    </section>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return { langs: ['en', 'it'] }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  

    #logo {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    #arrow {
        position: absolute;
        left: 50%;
        top: 95%;
        transform: translate(-50%,-50%);
    }
    #logo img {
        height: 200px;
    }
    

    img {
        max-height: 100vh;
        width: auto;
    }
    @media (max-width: 768px) {
        .hideMobile {
            display: none;
        }
    }
    
    .flexCenter {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .language {
        background: none;
        border: black;
        border-bottom: 1px white solid;
        color: white;
        height: 30px;
        float: right;
        position: absolute;
        right: 30px;
        top: 15px;
  }
</style>
