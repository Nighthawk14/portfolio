<template>
  <div id="app">
    <home></home>
    <left-nav></left-nav>
    <projects></projects>
    <technos></technos>
  </div>
</template>

<script>
  import Projects from './components/Projects';
  import Technos from './components/Technos';
  import LeftNav from './components/LeftNav.vue';
  import Home from './components/Home.vue';

  export default {
    name: 'app',
    components: {
      Projects,
      Technos,
      LeftNav,
      Home
    }
  }
</script>

<style lang="scss">
  @import './variables.scss';
  $icon-font-path: "~bootstrap-sass/assets/fonts/bootstrap/";
  $ionicons-font-path: "~ionicons/dist/fonts/";
  @import '~bootstrap-sass/assets/stylesheets/bootstrap';
  @import '~ionicons/dist/scss/ionicons';

  body {
    overflow-x:hidden;
    height:auto;
    width: 100%;
    font-family: $open;
    line-height:1.5;

    &.modal-open{
      height: 100%;
    }

  }

  .cursor{
    cursor:pointer;
  }

  .tooltip{
    &.right .tooltip-arrow {
      border-right-color: $orange;
    }

    .tooltip-inner {
      border-radius: 0px;
      background-color: $orange;
    }

  }

  ul, li {
    list-style-type: none !important;
  }

  app, #home, #technos {
    display:block;
  }
</style>
