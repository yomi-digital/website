<template>
    <div class="servizi white">
         <div class="columns is-multiline -has-text-centered is-mobile">
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile ">
                        <img src="/assets/img/vectors/vector1.svg" alt="vector1" />
                        <div @click='toggle = !toggle'>
                            <p class="serviceTitle">BLOCKCHAIN</p>
                        </div>
                        <p class="left" v-show='toggle'><i>Offriamo consulenza strategica 
                        e tecnica nella progettazione di 
                        soluzioni permissionless e permissioned. 
                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector8.svg" alt="vector1" />
                        <div @click='toggle2 = !toggle2'>
                            <p class="serviceTitle">AI</p>
                        </div>
                        <p class="left" v-show='toggle2'><i>Un sistema intelligente, consente al capitale umano di occuparsi solo delle attività ad alto valore aggiunto. 
                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector4.svg" alt="vector1" />
                        <div @click='toggle3 = !toggle3'>
                            <p class="serviceTitle">GESTIONALI</p>
                        </div>
                        <p class="left" v-show='toggle3'><i>Basement e Weesell sono due gestionali che YOMI ha realizzato per la semplificazione dei processi aziendali. 
 
                        </i></p>               
                    </div>
                </div>
            </div>
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector3.svg" alt="vector1" />
                        <div @click='toggle4 = !toggle4'>
                            <p class="serviceTitle">SVILUPPO WEB</p>
                        </div>
                        <p class="left" v-show='toggle4'><i>Lavoriamo con le tecnologie web per offrire strumenti di lavoro efficaci rendendo semplice ciò che è complesso.


                        </i></p> 
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector6.svg" alt="vector1" />
                        <div @click='toggle5 = !toggle5'>
                            <p class="serviceTitle">E-COMMERCE</p>
                        </div>
                        <p class="left" v-show='toggle5'><i>Utilizziamo framework di ultima generazione e linguaggi di programmazione all’avanguardia.


                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector5.svg" alt="vector1" />
                        <div @click='toggle6 = !toggle6'>
                            <p class="serviceTitle">SITI WEB</p>
                        </div>
                        <p class="left" v-show='toggle6'><i>Offriamo consulenza strategica 
                        e tecnica nella progettazione di 
                        soluzioni permissionless e permissioned. 
                        </i></p>
                    </div>
                </div>
            </div>
            <div class="column is-full thirdTall">
               <div class="columns is-multiline has-text-centered is-mobile">
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector9.svg" alt="vector1" />
                        <div @click='toggle7 = !toggle7'>
                            <p class="serviceTitle">SVILUPPO <br>MOBILE</p>
                        </div>
                        <p class="left" v-show='toggle7'><i>Offriamo consulenza strategica 
                        e tecnica nella progettazione di 
                        soluzioni permissionless e permissioned. 
                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector2.svg" alt="vector1" />
                        <div @click='toggle8 = !toggle8'>
                            <p class="serviceTitle">RICERCA E<br> SVILUPPO</p>
                        </div>
                        <p class="left" v-show='toggle8'><i>Offriamo consulenza strategica 
                        e tecnica nella progettazione di 
                        soluzioni permissionless e permissioned. 
                        </i></p>
                    </div>
                    <div class="column is-one-third-desktop is-full-mobile">
                        <img src="/assets/img/vectors/vector7.svg" alt="vector1" />
                        <div @click='toggle9 = !toggle9'>
                            <p class="serviceTitle">CONSULENZA</p>
                        </div>
                        <p class="left" v-show='toggle9'><i>Offriamo consulenza strategica 
                        e tecnica nella progettazione di 
                        soluzioni permissionless e permissioned. 
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

    .serviceTitle {
        font-size: 25px;
        line-height: 30px;
        font-weight: 500;
    }
    .serviceTitle:hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .firstPad {
            padding: 30px;
        }
    }

    </style>
