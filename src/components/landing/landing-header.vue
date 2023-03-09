<template>
  <header class="header-bar">
    <div class="container">
      <div class="_h-d-f _h-ai-c _h-gap-md">
        <a href="#" class="logo">
          <img src="/img/logo_mini.svg" alt="logo"/>
        </a>
        <div class="bar _t-ff-primary">
          Free open source project based on Astro
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "landing-header"
}
</script>

<style lang="postcss">
@import "../../styles/landing/components/header-bar.css";
</style>