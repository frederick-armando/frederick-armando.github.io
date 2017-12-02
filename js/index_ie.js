// Devtools for development builds, set false for production builds
Vue.config.devtools = true

// Import VueMaterial
Vue.use(VueMaterial)

// Create Vue
var App = new Vue({
    el: '#main',
    data: {
        message: 'Hello Vue!',
        loading: true
    }
});