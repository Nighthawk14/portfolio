<template>
  <div id="projects" class="timelineContainer">
    <div class="container">
      <div class="page-header text-center">
        <h1 id="timeline">Projects</h1>
      </div>
      <ul class="timeline">
        <li v-for="project in projects" :class="{'timeline-inverted': project.inverted}">
          <project :project="project"></project>
        </li>
        <li class="clearfix"></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import projectsData from 'json-loader!yaml-loader!../assets/projects.yml';
  import Project from './Project';

  const projects = projectsData.map((project, index) => {
    project.inverted = (index % 2 === 1 && index);
    return project;
  });

  export default {
    name: 'projects',
    data() {
      return {
        projects
      }
    },
    components: {
      Project
    }
  }
</script>
<style lang="scss">
  @import "../variables";
  /** TIMELINE **/

  .timelineContainer{
    background-color: $grey;
  }

  #timeline{
    font-family: $open;
    font-weight: 300;
    color: $orange;
  }

  .timeline {
    list-style: none;
    padding: 20px 0 20px;
    position: relative;
    display: inline-block;
  }
  .timeline:before {
    top: 0;
    bottom: 0;
    position: absolute;
    content: " ";
    width: 3px;
    background-color: #eeeeee;
    left: 50%;
    margin-left: -1.5px;
  }
  .timeline > li {
    margin-bottom: 20px;
    position: relative;
    width: 50%;
    float: left;
    clear: left;
  }
  .timeline > li:before,
  .timeline > li:after {
    content: " ";
    display: table;
  }
  .timeline > li:after {
    clear: both;
  }
  .timeline > li:before,
  .timeline > li:after {
    content: " ";
    display: table;
  }
  .timeline > li:after {
    clear: both;
  }

  .timeline > li.timeline-inverted{
    float: right;
    clear: right;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .timeline > li:nth-child(2){
    margin-top: 60px;
  }

  .page-header {
    margin-top: 20px;
  }

  @media (max-width: 767px) {
    ul.timeline:before {
      display: none;
    }

    ul.timeline > li {
      margin-bottom: 20px;
      position: relative;
      width:100%;
      max-width: 541px;
      margin-right: auto;
      margin-left: auto;
      float: none;
    }

    .timeline > li.timeline-inverted{
      margin-top: 30px;
      margin-bottom: 30px;
      float: none;
    }

    .timeline {
      display:block;
    }
  }

  /** END TIMELINE **/

  #kariboo-modal{
    .modal-body{
      background-color: #F9F9F9;
      font-family: $open;

      img{
        max-width: 100%;
        border:1px solid #999999;
        margin-bottom: 10px;
      }
    }
  }

  #feux-modal{
    .submit{
      width: 49%;
      display: inline-block;
      text-decoration: none;
    }
  }

  #mobiles-yummy-modal{
    .submit{
      width: 32%;
      display: inline-block;
      text-decoration: none;
    }
  }

</style>
