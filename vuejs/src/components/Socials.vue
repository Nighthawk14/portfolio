<template>
  <div class="socials">
    <a href="https://www.facebook.com/asavignac1" class="nav-link facebook" rel="noopener" title="facebook" target="_blank"></a>
    <a href="https://twitter.com/AntoineSavignac" class="nav-link twitter" rel="noopener" target="_blank" title="twitter"></a>
    <a href="https://github.com/Nighthawk14" class="nav-link github" rel="noopener" target="_blank" title="github"></a>
    <a href="http://fr.linkedin.com/pub/antoine-savignac/3b/884/613/" rel="noopener" class="nav-link linkedin" title="linkedin" target="_blank"></a>
    <a href="https://drive.google.com/file/d/0ByTZqMiGXKIAaFBOLVJRdG5GdTg/view?usp=sharing" rel="noopener" class="nav-link cv" title="cv" target="_blank"></a>
  </div>
</template>
<script>
  export default {
    name: 'socials'
  }
</script>
<style lang="scss">
  .socials{
    display: inline-block;
    width: 40px;
    position: fixed;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .facebook{
    background-position: 0px top;
    &:hover
    {
      background-position:0px bottom;
    }
  }
  .twitter{
    background-position: -38px top;
    &:hover
    {
      background-position:-38px bottom;
    }
  }
  .linkedin{
    background-position: -112px top;
    &:hover
    {
      background-position:-112px bottom;
    }
  }
  .github{
    background-position: -75px top;
    &:hover
    {
      background-position:-75px bottom;
    }
  }
  .cv{
    background-position: -149px top;
    &:hover
    {
      background-position:-148px bottom;
    }
  }
  .coderbits{
    background-position: -186px top;
    &:hover
    {
      background-position:-186px bottom;
    }
  }

  @media screen and (max-width:800px) {
    .socials{
      top:0;
      width: 201px;
      margin: 40px auto 30px;
      position:inherit;
      display: flex;
      justify-content: space-between;
    }
  }

</style>
