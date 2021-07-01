<template>
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
        </head>
        <body>
            <div id="header">
                <div id="intro">
                    <div id="vectors">
                        <img src="/assets/img/vectors/Group1.svg" alt="vector1" />
                        <img src="/assets/img/vectors/Group2.svg" alt="vector2" />
                        <img src="/assets/img/vectors/Group3.svg" alt="vector3" />
                        <img src="/assets/img/vectors/Group4.svg" alt="vector4" />
                        <img src="/assets/img/vectors/Group1.svg" alt="vector1" />
                    </div>
                    <div id="logo">
                        <img src="/assets/img/vectors/logo.svg" alt="logo" />
                    </div>
                </div>
            </div>
        </body>
    </html>

</template>

<script>
export default {
  name: 'Home',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    body, html {
        padding: 0;
        margin: 0;
        width: 100%;
        min-height: 100vh;
        background-color: black!important;
         display: flex;
        flex-direction: row;
        justify-content: center;
    }

    #header {
        width: 80%;
    }

    #intro{
        height: 100%;
        width: 100%;
        position: relative;
    }

    #vectors {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }

    #logo {
        position: absolute;
        top: 45%;
        left: 32%;
    }
   
</style>
