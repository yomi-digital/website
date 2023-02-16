<template>
  <div>
    <a class="btn-close-custom" href="/">
      <svg
        width="72"
        height="15"
        viewBox="0 0 72 15"
        :fill="color"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 2H72" :stroke="color" stroke-width="3"  />
        <path d="M0 13H72" :stroke="color" stroke-width="3"  />
      </svg>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>
