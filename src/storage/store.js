import Vue from 'vue'
import Vuex from 'vuex'
import router from '../Routes'
import { db } from './../main'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoading: false,
        isLoggedIn: !!localStorage.getItem('token'),
        channelData: null,
        allChannelData: null,
        error: null
    },
    mutations: {
        setData(state, {type, items}) {
            state[type] = items
        },
    },
    actions: {
        logouted({commit}) {
            commit('setData', {type: 'isLoggedIn', items: false})
        },
        logged({commit}, {data: form}) {
            commit('setData', {type: 'isLoading', items: true})
            setTimeout(()=> {
                localStorage.setItem("token", form.password)
                commit('setData', {type: 'isLoggedIn', items: true})
                commit('setData', {type: 'isLoading', items: false})
                router.push('/')
            }, 1000)
        },
        async getAllChannelData ({commit}) {
            commit('setData', {type: 'isLoading', items: true});
            commit('setData', {type: 'error', items: null});
            try {
                const data = []
                const collection = await db.collection("channels").orderBy("timestamp", 'asc').get()
                collection.forEach((doc) => {
                    data.push({...doc.data(), id: doc.id})
                });

    /*            db.collection("channels").get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        data.push(doc.data())
                    });
                    console.log("channel", data)
                });*/
                commit('setData', {type: 'allChannelData', items: data})
            }
            catch (error) {
                commit('setData', {type: 'error', items: error});
                console.log('error', error)
            }
            commit('setData', {type: 'isLoading', items: false});

        },
        async getChannelData ({commit, state}, id) {
            if (state.isLoading === false) {
                commit('setData', {type: 'isLoading', items: true});
            }
            commit('setData', {type: 'error', items: null});
            try {
/*              const collection = await db.collection("channels").where("id", "==", id).get()
                console.log(collection)
                collection.forEach((doc) => {
                    commit('setData', {type: 'channelData', items: doc.data()})
                });*/
                const doc = await db.collection("channels").doc(id).get()
                commit('setData', {type: 'channelData', items: {...doc.data(), id: doc.id}})
            }
            catch (error) {
                commit('setData', {type: 'error', items: error});
                console.log('error', error)
            }
            commit('setData', {type: 'isLoading', items: false})
        },
        async deleteChannelData ({commit, dispatch}, id) {
            commit('setData', {type: 'isLoading', items: true});
            commit('setData', {type: 'error', items: null});
            try {
                await db.collection("channels").doc(id).delete()
                commit('setData', {type: 'channelData', items: null});
                await dispatch('getAllChannelData');
            }
            catch (error) {
                commit('setData', {type: 'error', items: error});
                console.log('error', error)
            }
            commit('setData', {type: 'isLoading', items: false});
        },
        async editChannelData ({commit}, data) {
            commit('setData', {type: 'isLoading', items: true});
            commit('setData', {type: 'error', items: null});
            try {
                const {id} = data
                delete data.id
                await db.collection("channels").doc(id).update(data);
                router.push('/channel')

            }
            catch (error) {
                commit('setData', {type: 'error', items: error});
                console.log('error', error)
                commit('setData', {type: 'isLoading', items: false})
            }
        },
        resetChannelData({commit}) {
            commit('setData', {type: 'channelData', items: {}})
        },
        async addChannel ({commit}, channelData) {
            commit('setData', {type: 'isLoading', items: true});
            commit('setData', {type: 'error', items: null});
            try {
                channelData.timestamp = Date.now()
                await db.collection("channels").add(channelData);
                router.push('/channel')
            }
            catch (error) {
                commit('setData', {type: 'error', items: error});
                console.log('error', error)
                commit('setData', {type: 'isLoading', items: false})
            }
        },
    }
})

export default store