<template>
    <div>
       <div class="columns is-multiline is-mobile ">
           <div class="column is-full firstPad">
               <p class="title">SCOPRI COME<br> UNIRTI AL TEAM</p>
           </div>
           <div class="column is-full firstPad">
               <div class="columns is-mobile is-multiline">
                    <div class="column is-one-quarter-desktop is-full-mobile">
                        <p class="headText">E-MAIL</p> 
                        <p class="content">info@yomi.digital</p>
                    </div>
                    <div class="column is-one-quarter-desktop is-full-mobile">
                        <p class="headText">TELEFONO</p> 
                        <p class="content">+39 17162101711</p>
                    </div>
               </div>
           </div>
       </div>
    </div>
</template>

<script>
export default {
  name: 'Join'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    
    .title {
        color: white;
        font-size: 45px;
        line-height: 55px;
        font-weight: 500;
        float: left;
    }

    .headText {
        font-size: 20px;
    }
    .content {
        font-size: 20px;
        color: white;
    }

    .firstPad {
        padding: 50px 0px 50px 200px;
    }

    @media (max-width: 768px) {
       .firstPad {
            padding: 30px;
        }
    }

    </style>
