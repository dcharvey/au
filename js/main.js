Vue.component('header-component', {
  template: `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <a class="navbar-brand" href="#">Algorithms & Urbanism</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  `
})

Vue.component('image-grid', {
  props: {
    category: String,
    tutorials: Array,
    info: Object
  },
  template: `
    <div class="row">
      <div class="col-lg-12">
        <h2 class="my-4">{{category}}</h2>
      </div>
      <image-cell
        v-for="tutorial in tutorials"
        :name="tutorial"
        :info="info[tutorial]">
      </image-cell>
    </div>
  `,
  mounted: function () {
  },
})

Vue.component('image-cell', {
  props: {
    name: String,
    info: Object
  },
  template: `
    <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 portfolio-item">
      <div class="card h-100">
        <div class="image-container">
          <img class="card-img-top" v-bind:src="info.image" alt="">
        </div>
        <div class="card-body p-2">
          <a href="#"><h5 class="card-title text-dark">{{name}}</h5></a>
          <!--<button v-for="keyword in info.keywords" type="button" class="btn btn-warning btn-sm mr-1 py-0 disabled">{{keyword}}</button>-->
          <p class="card-text">{{info.text}}</p>
          <a v-for="value,key in info.links" role="button" target="_blank" class="btn btn-primary btn-sm mr-1 py-0" :href="value">{{key}}</a>
          <p>required software:</p>
          <button v-for="software in info.software" type="button" class="btn btn-info btn-sm mr-1 py-0 disabled">{{software}}</button>
          <p>required skills:</p>
          <button v-for="skill in info.skills" type="button" class="btn btn-dark btn-sm mr-1 py-0 disabled">{{skill}}</button>
        </div>
      </div>
    </div>
  `
})

// ROUTER
const router = new VueRouter({
  routes: [
    // { path: '/map', component: mapLarge, props: true },
    // { path: '/grid', component: mapGrid, props: true }
  ]
})

const app = new Vue({
  router,
  data: {
    categories: DATA.categories,
    info: DATA.info,
    filter: [0,1,2]
  },
}).$mount('#app')
