<template>
  <div class="myBlogs">
      <h2>My Blogs</h2>
    <div class="card-wrapper">
        <Card  v-for="blog in blogs" :key="blog.id"  :blog='blog' :editDelete=true @onClick="onCardClick(blog.id)" @onEditClick="onEdittClick(blog.id)" @onDeleteClick="onDeleteeClick(blog.id)" />
      </div>
           <div class="floatbtn" @click="createNewBlogClick">
            <div>+</div>
      </div>
  </div>
</template>

<script>

import Card from '@/components/Card.vue'
import axios from 'axios'

export default {
  name: 'MyBlogs',
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
      axios.get('http://localhost:3000/blogs?userId=' + localStorage.getItem('userId'))
        .then(function (response) {
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
    onEdittClick (blogId) {
      console.log('Editttttt')
      this.$router.push({ path: '/editBlog/' + blogId })
    },
    onDeleteeClick (blogId) {
      const selff = this
      console.log('Deleteeeeeee')
      axios.delete('http://localhost:3000/blogs/' + blogId)
        .then(function () {
          alert('Blog will be Deleted')
          selff.blogg()
        })
    },
    createNewBlogClick (blogId) {
      const selfNewBlog = this
      console.log('Floating Button to create new blog')
      selfNewBlog.$router.push({ path: '/addBlog' })
    }
  }
}
</script>

<style >
.card-wrapper{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .heading{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .floatbtn{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:black;
    color:white;
    position: fixed;
    bottom: 40px;
    right: 50px;
    cursor: pointer;
 }
</style>
