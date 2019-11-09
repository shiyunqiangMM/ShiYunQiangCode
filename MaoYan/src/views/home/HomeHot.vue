<template>
  <div>
   <home-list :movies = "movies"></home-list>
  </div>
</template>

<script>
import HomeList from './HomeList'
import BScroll from 'better-scroll'
import { mapState,mapActions, mapMutations } from 'vuex'
// mapMutations
export default {
  components: {
    HomeList
  },
  mounted () {
    // 做数据请求
    this.getMovies()
    // this.$store.dispatch('getMovies')
  },
  methods: {
    ...mapActions(['getMovies','getComingMovies']),
    // ...mapMutations(['GET_MOVIES'])
  },
  computed: {
    movies () {
      return this.$store.state.home.movies && this.$store.state.home.movies
    },
    ...mapState({
      movies: state => state.home.movies,
      name: state => state.home.name 
    })
  }
}
</script>

<style lang="stylus" scoped>
  div
    flex 1 
    overflow hidden
</style>

