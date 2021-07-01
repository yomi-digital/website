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
                        <img src="yomi-website/src/assets/img/vectors/Group1.svg" alt="vector1" />
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
        border: white solid 1px;
    }
   
</style>
