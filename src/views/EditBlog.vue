<template>
  <div class="editBlog">
      <h2 class="editBlogHeading">Edit your own Blog</h2>
      <form class="editFormStyle">
          <label>Blog Title : </label>
          <br><br>
          <input type="text" class="inputEditText" v-model="blogTitle" required />
          <br><br>
          <label> Blog Content : </label>
          <br><br>
          <quill-editor v-model="blogContent" ref="myQuillEditor" :options="editorOption" required />
          <br><br>
          <label> Blog Summary : </label>
          <br><br>
          <textarea class="textareaEditSummary" v-model="blogSummary" required ></textarea>
          <br><br><br>
          <button class="blogSave" @click="onSaveClickk">Save Changes</button>
      </form>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import axios from 'axios'
// import { uuid } from 'vue-uuid'
export default {
  name: 'EditBlog',
  components: {
    quillEditor
  },
  data () {
    return {
      blogTitle: '',
      blogContent: '',
      editorOption: {
        debug: 'info',
        placeholder: 'Type the content ',
        readOnly: true,
        theme: 'snow'
      },
      blogSummary: '',
      blog: {

      }
    }
  },
  created () {
    console.log('editblog created')
    this.getBlogDetails()
  },
  methods: {
    getBlogDetails () {
      const self = this
      console.log('editmethod checking')
      axios.get('http://localhost:3000/blogs/' + self.$route.params.blogId)
        .then(function (response) {
          console.log(response.data)
          self.blogTitle = response.data.title
          self.blogContent = response.data.body
          self.blogSummary = response.data.summary
          self.blog = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('Error Occured!!')
        })
    },
    onSaveClickk (e) {
      const selfSave = this
      e.preventDefault()
      console.log('Save Changes Click')
      if (this.blogTitle.trim() === '') {
        alert('Blog Title is Empty')
        return
      }
      if (this.blogContent.trim() === '') {
        alert('Blog Content is Empty')
        return
      }
      if (this.blogSummary.trim() === '') {
        alert('Blog Summary is Empty')
        return
      }
      axios.put('http://localhost:3000/blogs/' + selfSave.$route.params.blogId, {
        title: this.blogTitle,
        body: this.blogContent,
        summary: this.blogSummary,
        userId: localStorage.getItem('userId'),
        date: new Date(),
        id: this.blog.id
      })
        .then(function (response) {
          console.log('Changes Saved')
          alert('Blog Changes Saved')
          selfSave.$router.push({ path: '/myBlogs' })
        })
    }
  }
}
</script>

<style >
.ql-editor{
    height: 25vh;
}
.editBlog{
    border-radius: 20px;
    /* background-color:#f2f2f2; */
    padding: 35px;
}
.editBlogHeading{
    text-align: center;
}
.editFormStyle{
    border-radius: 10px;
    background-color:#f2f2f2;
    padding: 35px;
}
.inputEditText{
    width: 97%;
    padding: 12px 20px;
    border-width: 1px;
}
.textareaEditSummary{
    width: 97%;
    padding: 12px 20px;
    border-width: 1px;
}
</style>
