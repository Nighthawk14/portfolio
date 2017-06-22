<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="home">
    <div id="line">
      <object class="logo-object" data="/static/images/logo.svg" aria-label="logo" id="logo" type="image/svg+xml"></object>
    </div>
    <div id="mask"></div>
    <div class="scroll cursor" v-on:click="moveToProject()"></div>
    </div>
</template>
<script>
  import $ from 'jquery';
  import 'jquery.scrollto';
  import 'jquery-ui/ui/effect';

  const lineDrawing = {
    triggerAnimation() {
      $('#mask').animate(
        {
          left: $(window).width()*3,
          top: -$(window).height()*3+100
        },
        {
          duration: 3000,
          specialEasing: {
            left: 'easeInOutCubic',
            top: 'easeInOutCubic'
          },
          complete: () => {
            $('#mask').css('display', 'none');
          }
        }
      );
    },

    calculateDiagonale() {
      let scrW = $(window).width();
      let scrH = $(window).height();
      this.angle = (Math.atan(scrH / scrW)) * (180/Math.PI);
      let lineElement = $('#line,#mask');
      let length = Math.sqrt(( scrW * scrW) + (scrH * scrH ))+10;
      lineElement.css('left', ( -1 ) * ((length - scrW) / 2) );
      lineElement.css('width', length);
      lineElement.css('top', (scrH / 2));
      this.setAngle(lineElement);
      $('#mask').css('top',(scrH / 2)-2000);
    },

    setAngle(element) {
      let cssProperties = 'scale(1) rotate(' + (-1) * this.angle + 'deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg)';
      element.css('-webkit-transform', cssProperties);
      element.css('-moz-transform', cssProperties);
      element.css('-o-transform', cssProperties);
      element.css('-ms-transform', cssProperties);
      element.css('transform', cssProperties);
    }
  };

  export default {
    name: 'home',
    methods: {
      moveToProject() {
        $(document).scrollTo('#projects', {offset:0, duration:800});
      }
    },
    mounted() {
      $('#home').css({
        height:$(window).height()
      });
      $(window).bind('resize', () => {
        lineDrawing.calculateDiagonale();
      });

      lineDrawing.calculateDiagonale();
      lineDrawing.triggerAnimation();
    }
  }
</script>
<style lang="scss">
  @import "../variables";

  .borderBottom{
    width: 50%;
    left: 7px;
    height: 9px;
    bottom: 0px;
    background-color: #e95a2d;
    position: absolute;
  }

  #home{
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  #line{
    position:relative;
    top:0;
    height:9px;
    width:0;
    background:$orange;
    left:0;
    -moz-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -webkit-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -o-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -ms-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
  }

  #mask{
    position:relative;
    top:0px;
    height:4000px;
    background:#ffffff;
    left:0;
    -moz-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -webkit-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -o-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -ms-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
  }

  .logo-object{
    position: absolute;
    left: 34%;
    top: -116px;
    width: 500px;
    height: 150px;
  }

  .line
  {
    position:absolute;
    top:0;
    height:2px;
    width:0;
    background:$orange;
    left:0;
    -moz-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -webkit-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -o-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    -ms-transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
    transform: scale(1) rotate(-45deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);
  }

  .scroll{
    background: url('../assets/images/arrow-intro.svg') no-repeat 50%;
    background-color: $orange;
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50px;
    -moz-border-radius: 50px;
    border-radius: 50px;
    left: 49%;
    top:80%;
    position: absolute;
    -webkit-transition: top 1s ease, -webkit-transform 1s ease;
    -moz-transition: top 1s ease, -moz-transform 1s ease;
    -ms-transition: top 1s ease, -ms-transform 1s ease;
    -o-transition: top 1s ease, -o-transform 1s ease;
    transition: top 1s ease, transform 1s ease;
    z-index: 1;

    &.top{
      -webkit-transform: rotate(-180deg);
      -moz-transform: rotate(-180deg);
      -ms-transform: rotate(-180deg);
      -o-transform: rotate(-180deg);
      transform: rotate(-180deg);

    }

    &:hover{
      background: url('../assets/images/arrow-intro_o.svg') no-repeat 50%;
      border: 1px solid $orange;
      background-color: #FFFFFF;
    }
  }


  @media screen and (max-width: 800px) {
    #home {
      display: none;
    }
  }
  @media screen and (min-width: 800px) {
    #mobile-home {
      display:none;
    }
  }

</style>
