<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="nav-link" :class="title">
    <a href="#" class="link" :title="title" v-on:mouseenter="displayTooltip()" v-on:mouseleave="hideTooltip()"></a>
    <div class="tooltip right" v-if="isTooltipVisible" role="tooltip">
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">{{title}}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'linkTooltip',
    props: ['title'],
    data() {
      return {
        isTooltipVisible: false
      }
    },
    methods: {
      displayTooltip() {
        this.isTooltipVisible = true;
      },

      hideTooltip() {
        this.isTooltipVisible = false;
      }
    }
  }
</script>
<style lang="scss">
  .tooltip {
    right: 0;
    transform: translateX(100%) translateY(-50%);
    top: 50%;
    opacity: 1;
  }

  .link {
    display: block;
    width: 100%;
    height: 100%;
  }

</style>
