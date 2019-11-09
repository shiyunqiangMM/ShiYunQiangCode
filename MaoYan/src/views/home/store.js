import axios from 'axios'
const GET_MOVIES = 'GET_MOVIES'
export default {
  state: {
    movies: null,
    name: '' 
  },
  actions: {
    getMovies ({ commit }) {
      // 数据请求
      axios({
        url: '/ajax/movieOnInfoList',
        params: {
          token: ''
        }
      }).then( res => {
        commit({
          type: GET_MOVIES,
          payload: res.data 
        })
      })
    },
    getComingMovies ( {commit} ) {

    }
  },
  mutations: {
    GET_MOVIES ( state,action ) {
      state.movies = action.payload
    }
  }
}