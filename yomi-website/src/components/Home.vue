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
                <img src="/assets/img/vectors/Arrow1.svg" alt="arrow" />
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

</style>
