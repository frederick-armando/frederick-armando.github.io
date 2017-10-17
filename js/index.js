// Devtools for development builds, set false for production builds
Vue.config.devtools = true

// Import VueMaterial
Vue.use(VueMaterial)

// Create Vue
var App = new Vue({
    el: '#main',
    created() {
        setTimeout(() => {
            this.loading = false;
        }, 100);
    },
    data: {
        message: 'Hello Vue!',
        loading: true
    }
});