<template>
  <div :class="{ geisha: true, zoomGesha: !enterGeisha }" >
    <img src="../assets/images/geisha.png" alt="">
  </div>
</template>

<script>
export default {
    name:'geisha',
    props: ["enterGeisha"],
}
</script>

<style>

</style>