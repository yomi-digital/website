<template>
    <div class="servizi white">
         <div class="columns is-multiline -has-text-centered is-mobile">
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile ">
                        <img src="/assets/img/vectors/vector1.svg" alt="vector1" />
                        <p>BLOCKCHAIN</p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector8.svg" alt="vector1" />
                        <p>AI</p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector4.svg" alt="vector1" />
                        <p>GESTIONALI</p>
                    </div>
                </div>
            </div>
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector3.svg" alt="vector1" />
                        <p>SVILUPPO WEB</p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector6.svg" alt="vector1" />
                        <p>E-COMMERCE</p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector5.svg" alt="vector1" />
                        <p>SITI WEB</p>
                    </div>
                </div>
            </div>
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector9.svg" alt="vector1" />
                        <p>SVILUPPO <br>MOBILE</p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector2.svg" alt="vector1" />
                        <p>RICERCA E<br> SVILUPPO</p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector7.svg" alt="vector1" />
                        <p>CONSULENZA</p>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
export default {
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

    @media (max-width: 768px) {
        .firstPad {
            padding: 30px;
        }
    }

    </style>
