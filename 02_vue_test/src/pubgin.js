export default {
    install(Vue) {

        Vue.filter('MySplice', function (val) {
            return val.slice(0, 5)
        })

        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            }
        })
    }
}