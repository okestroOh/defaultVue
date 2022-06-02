// import Vue from "vue";
import {createStore} from "vuex";

// Vue.use(Vuex);

const store = createStore({
    state: {
        alert : false,
        alert_data: {
            type: 'primary', //type은 success, info, warning, error 이렇게 4가지를 쓸 수 있음
            title:'',
            text: ''
        },
    },

    mutations: {
        SET_ALERT(state, payload) {
                state.alert = payload.alert;
                state.alert_data.type = payload.type;
                state.alert_data.title = payload.title;
                state.alert_data.text = payload.text;
        },
    },

    getters: {
        GET_ALERT(state) {
            return state.alert;
        },
        GET_ALERT_DATA(state) {
            return state.alert_data;
        },
    },

    actions: {

        updateAlert({commit}, params) {
                commit('SET_ALERT', params);
        },
    }

});

export default store;






// export const state = () => ({
//
//     //경고창
//     alert : false,
//     alert_data: {
//         type: 'primary', //type은 success, info, warning, error 이렇게 4가지를 쓸 수 있음
//         title:'',
//         text: ''
//     },
//
// });
//
// export const mutations = {
//     //여기서 아이디 비번 체크하고 역할 부여
//     // loginSave(state, res) {
//     //     this.$cookies.set("token",state.token);
//     //     if (res.role % 7){
//     //         this.$cookies.set("role","guest");
//     //     } else {
//     //         this.$cookies.set("role","admin");
//     //     }
//     // },
//
//     //경고창
//     SET_ALERT(state, payload) {
//         state.alert = payload.alert;
//         state.alert_data.type = payload.type;
//         state.alert_data.title = payload.title;
//         state.alert_data.text = payload.text;
//     },
//
// }
//
// export const getters = {
//     GET_ALERT(state) {
//         return state.alert;
//     },
//     GET_ALERT_DATA(state) {
//         return state.alert_data;
//     },
//
// }
//
// //비동기 아닌데 여기쓰는 이유는 store에서 이거 부를때 대비하여
// export const actions = {
//     // async loginAttempt({commit}, [id,pass]){
//     //     await this.$axios.post("/auth", {
//     //         "userName": id,
//     //         "password": pass,
//     //     }).then(r=> commit("loginSave",r.data))
//     //         .catch(e=>console.log(e))
//     // },
//
//     updateAlert({commit}, params) {
//         commit('SET_ALERT', params);
//     },
//
// }
//경고창
//경고창
// async loginAttempt({commit}, [id,pass]){
//     await this.$axios.post("/auth", {
//         "userName": id,
//         "password": pass,
//     }).then(r=> commit("loginSave",r.data))
//         .catch(e=>console.log(e))
// },
