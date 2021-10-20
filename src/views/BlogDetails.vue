<template>
    <div class="blogDetails">
        <div class="blogTitle">
            <h1>{{blog.title}}</h1>
        </div>
        <div class="blogContent" v-html="blog.body"></div>
        <br>
        <div class="blogSummary">
            <h3>Summary</h3>
            {{blog.summary}}
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BlogDetails',
  components: {
  },
  data () {
    return {
      blog:
        {
        }
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
      axios.get('http://localhost:3000/blogs/' + self.$route.params.blogId)
        .then(function (response) {
          console.log(response.data)
          self.blog = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('Error Occured!!!')
        })
    }
  }
}
</script>

<style >
.blogDetails{
    padding: 20px;
    margin:20px;
}
.blogTitle{
    font-size: 24px;
    text-align: center;
}
</style>
