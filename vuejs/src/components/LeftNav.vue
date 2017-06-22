<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <nav>
      <ul>
        <li v-for="link in links" v-on:click="moveTo($event, link)">
          <link-tooltip :title="link"></link-tooltip>
        </li>
      </ul>
    </nav>
    <div id="nav-logo">
      <object data="/static/images/logo-mobile.svg" aria-label="logo-mobile" type="image/svg+xml"></object>
    </div>
    <socials></socials>
  </div>
</template>
<script>
  import $ from 'jquery';
  import 'jquery.scrollto';
  import LinkTooltip from './LinkTooltip.vue';
  import Socials from './Socials.vue';

  export default {
    name: 'leftNav',
    data() {
      return {
        links: ['home', 'projects', 'technos']
      }
    },
    components: {
      LinkTooltip,
      Socials
    },
    methods: {
      moveTo(event, tag) {
        event.preventDefault();
        const elem = `#${tag}`;
        $(document).scrollTo(elem, {offset: 0, duration:800, onAfter: () => {
          history.pushState({}, '', elem);
        }});
      }
    }
  }
</script>
<style lang="scss">
  .nav-link{
    background-image: url('../assets/images/sprite-rs.svg');
    width: 37px;
    height: 35px;
    display: inline-block;
    cursor: pointer;
    position: relative;
  }

  nav{
    position: fixed;
    left: 10px;
    width: 40px;
    display: none;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    ul{
      list-style-type: none;
      padding: 0;
    }
  }

  .home{
    background-position: -261px top;
    &:hover
    {
      background-position: -261px bottom;
    }
  }
  .technos{
    background-position: -224px top;
    &:hover
    {
      background-position:-224px bottom;
    }
  }
  .projects{
    background-position: -299px top;
    &:hover
    {
      background-position:-299px bottom;
    }
  }
  .fr{
    background-position: -336px bottom;
  }
  .en{
    background-position: -373px bottom;
  }

  #nav-logo {
    margin-top: 50px;
    object {
      margin: 0 auto;
      display: block;
    }
  }

  @media screen and (min-width: 800px) {
    #nav-logo {
      display: none;
    }
    nav {
      display: inline-block;
    }
  }

</style>
