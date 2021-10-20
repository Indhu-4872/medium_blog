<template>
  <div class="home">
    <div class="card-wrapper">
          <Card  v-for="blog in blogs" :key="blog.id"  :blog='blog' :dateUserDisplay=true @onClick="onCardClick(blog.id)"/>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Card
  },
  data () {
    return {
      blogs: [
      ]
    }
  },
  created () {
    console.log('created checking')
    this.blogg()
  },
  methods: {
    blogg () {
      const self = this
      console.log('method checkin')
      axios.get('http://localhost:3000/blogs')
        .then(function (response) {
          console.log(response.data)
          response.data.sort(self.compare)
          console.log(response.data)
          self.blogs = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('Error Occured!!')
        })
    },
    onCardClick (blogId) {
      console.log('clickkkkkkk')
      this.$router.push({ path: '/blogDetails/' + blogId })
    },
    compare (a, b) {
      if (new Date(a.date) < new Date(b.date)) {
        return 1
      }
      if (new Date(a.date) > new Date(b.date)) {
        return -1
      }
      return 0
    }
  }
}
</script>

<style >
.card-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
