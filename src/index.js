// import { getmethods, postmethods } from "./api/api_request";
// getmethods("/", "GET").then(
//   function (json) {
//     console.log("Data: ", json.data.data);
//   },
//   function (error) {
//     console.error("err", error);
//   }
// );
// postmethods("/getData", "POST", { key: "hhh" }).then(
//   function (json) {
//     console.log("Data: ", json);
//   },
//   function (error) {
//     console.error("err", error);
//   }
// );
import Vue from "vue";
import './index.scss'
import App from "./App.vue";
import './assets/js/click_love'
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");