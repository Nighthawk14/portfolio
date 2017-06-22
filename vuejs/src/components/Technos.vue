<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div id="technos">
    <div class="wrapper">
      <div class="filters">
        <i class="glyphicon glyphicon-th-list"></i>
        <span v-for="(filter, index) in filters">
          <span class="filter" v-on:click="filterTech(filter)" :class="{ active: activeFilter === filter.value }">
            {{filter.label}}
          </span> <span v-if="index !== filters.length - 1">/</span>
        </span>
      </div>
      <div class="techs">
        <techno v-for="(techno, index) in technos"
                :key="index"
                :id="`techno-${index}`"
                class="tech"
                :class="[{disabled: techno.disabled}, (techno.position.base === 6) ? 'even' : 'odd']"
                :techno="techno"></techno>
      </div>
    </div>
  </div>
</template>
<script>
  import technos from 'json-loader!yaml-loader!../assets/technos.yml';
  import Techno from './Techno.vue';

  class TechnoPosition {
    constructor() {
      this.row = 0;
      this.base = 6;
      this.loopIndex = -1;
    }

    getBase() {
      let addClear = false;
      this.loopIndex++;
      if(this.loopIndex === this.base) {
        this.base = (this.base === 6) ? 5 : 6;
        addClear = true;
        this.row++;
        this.loopIndex = 0;
      }

      return {
        base:this.base,
        row: this.row,
        addClear: addClear
      };
    }
  }

  const filters = [
    { value: 'js', label: 'Javascript', tags: new Set(['js']) },
    { value: 'dev', label: 'Development', tags: new Set(['dev']) },
    { value: 'data', label: 'Data', tags: new Set(['data']) },
    { value: 'inte', label: 'Integration', tags: new Set(['inte', 'mobile']) },
  ];

  export default {
    name: 'technos',
    components: {
      Techno
    },
    data() {
      return {
        filters,
        activeFilter: null,
        technoPosition: new TechnoPosition()
      }
    },
    computed: {
      technos: function() {
        return technos.map((techno, index) => {
          techno.position = this.technoPosition.getBase();
          techno.last = index === technos.length - 1;
          return techno;
        });
      }
    },
    methods: {
      filterTech(filter) {
        if(!this.isSameFilter(filter.value)) {
          this.activeFilter = filter.value;
          this.setTechnosState(filter.tags);
        }
      },
      isSameFilter(filter) {
        const isSameFilter = this.activeFilter === filter;
        if (isSameFilter) {
          this.technos.map(techno => {
            techno.disabled = false;
          });
          this.activeFilter = null;
        }
        return isSameFilter;
      },
      setTechnosState(tags) {
        this.technos.map(techno => {
          const commonTags = [...techno.tags].filter(x => tags.has(x));
          techno.disabled = !commonTags.length;
        });
      }
    }
  };
</script>
<style lang="scss">
  @import "../variables";

  #technos {
    width: 100%;
    overflow-y: hidden;
  }

  .wrapper{
    padding: 40px 20px;
    width: 904px;
    margin: 0 auto;
  }

  .filters{
    font-size: 20px;
    text-transform: uppercase;
    color: #DDDDDD;
    text-align: center;
    font-family: $open;
    margin-bottom: 20px;
    i{
      color: $orange;
      font-size: 30px;
      position: relative;
      top: 7px;
      margin-right: 20px;
    }
    .filter{
      &.caption{
        color: #333;
      }
      transition: all .3s ease 0s;
      &.active,&:hover{
        color: $orange;
      }
      cursor: pointer;
    }
  }

  .techs{
    position: relative;
    top: 20px;

    .tech{

      width: $techW;
      height: $techH;
      margin: 0px 6px;
      display: inline-block;
      vertical-align: top;
      font-weight: 300;
      position: relative;
      transition: all .2s;

      &.disabled{
        opacity: .2;
      }

      &.odd{
        left:($techW/2)+6;
      }
    }
  }

  @media screen and (max-width: 1000px){
    .wrapper {
      display: none;
    }
  }

</style>
