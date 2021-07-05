<template>
    <div class="white">
        <div class="columns is-mobile is-multiline">
            <div class="column is-one-third-desktop is-full-mobile">
                <div class="columns is-multiline is-mobile firstPad">
                    <div class="column is-full">
                        <p>TORNA ALLA HOME</p>
                    </div>
                    <div class="column is-full">
                        <p>POLITICA SULLA RISERVATEZZA<br> TERMINI DI UTILIZZO</p>
                    </div>
                </div>
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
                <div class="columns is-multiline is-mobile firstPad">
                    <div class="column is-full">
                        <p><b>VIA ERCOLANO 62, 97100 RAGUSA (RG)</b></p>
                    </div>
                    <div class="column is-full">
                        <p><b>INFO@YOMI.DIGITAL</b></p>
                    </div>
                </div>
            </div>
            <div class="column is-one-third-desktop is-full-mobile firstPad">
                <p><b>P.IVA: 01652950880</b></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .white {
        background-color: white;
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
