<template>
    <div class="white">
        <div class="columns is-mobile is-multiline">
            <div class="column is-one-third-desktop is-full-mobile">
                <div class="columns is-multiline is-mobile firstPad">
                    <div class="column is-full textColorBlack">
                        <a href="#" style="color: black"><p>{{ $t('message.returnHome') }}</p></a>
                    </div>
                    <div class="column is-full textColorBlack">
                        <p>{{ $t('message.politics') }}<br><br> {{ $t('message.termsOfUse') }}</p>
                    </div>
                </div>
            </div>
            <div class="column is-one-third-desktop is-full-mobile">
                <div class="columns is-multiline is-mobile firstPad">
                    <div class="column is-full">
                        <p class="textColorBlack">VIA ERCOLANO 62, 97100 RAGUSA (RG)</p>
                    </div>
                    <div class="column is-full">
                        <a href="mailto:info@yomi.digital"><p class="email">INFO@YOMI.DIGITAL</p></a>
                    </div>
                </div>
            </div>
            <div class="column is-one-third-desktop is-full-mobile firstPad">
                <p class="iva textColorBlack">P.IVA: 01652950880</p>
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
    .email {
        color: #000000; 
        cursor: pointer;
        line-height: 30px;
    }
    .textColorBlack{
        color: #000000;
    }

    .firstPad {
        padding: 50px 0px 50px 200px;
    }

    @media (max-width: 768px) {
        .firstPad {
            padding: 30px;
        }
        .iva {
            padding-left: 10px;
            
        }
    }
   

    </style>
