<template>
  <div class="addBlog">
      <h2 class="blogHeading">Add a New Blog</h2>
      <form class="addFormStyle" >
          <label>Blog Title : </label>
          <br><br>
          <input class="inputText" type="text" v-model="blogTitle" placeholder="Type the Title" required /><br><br><br>
          <label > Blog Content : </label>
          <br><br>
          <quill-editor v-model="blogContent" ref="myQuillEditor" :options="editorOption" required />
          <!-- <textarea v-model="blogContent"></textarea> --><br><br>
          <label> Blog Summary : </label><br><br>
          <textarea class="textareaSummary" v-model="blogSummary" placeholder="Type the Summary" required ></textarea>
          <br><br><br>
          <!-- <input type="text" v-model="blogSummary" required /><br><br> -->
          <button class="blogSave" @click="onSaveClickk">Save</button>
      </form>
  </div>
</template>

<script>
import 'quill/dist/quill.snow.css'
import { quillEditor } from 'vue-quill-editor'
import axios from 'axios'
import { uuid } from 'vue-uuid'

export default {
  name: 'AddBlog',
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
      blogSummary: ''
    }
  },
  methods: {
    onSaveClickk (e) {
      const selfSave = this
      e.preventDefault()
      console.log('Save Click')
      if (this.blogTitle.trim() === '') {
        alert('Blog Title is empty')
        return
      }
      if (this.blogContent.trim() === '') {
        alert('Blog Content is Empty')
        return
      }
      if (this.blogSummary.trim() === '') {
        alert('Summary is Empty')
        return
      }
      axios.post('http://localhost:3000/blogs', {
        title: this.blogTitle,
        body: this.blogContent,
        summary: this.blogSummary,
        userId: localStorage.getItem('userId'),
        date: new Date(),
        id: uuid.v4()
      })
        .then(function (response) {
          console.log('Saved')
          alert('Blog Saved')
          selfSave.$router.push({ path: '/myBlogs' })
        })
    }
  }

}
</script>

<style>
.ql-editor{
    height: 25vh;
}
.addBlog{
    border-radius: 20px;
    /* background-color:#f2f2f2; */
    padding: 25px;
}
.addFormStyle{
    border-radius: 10px;
    background-color:#f2f2f2;
    padding: 35px;
}
.inputText{
    width:97%;
    padding: 12px 20px;
    /* border-radius: 5px; */
    border-width: 1px;
}
.textareaSummary{
    width: 97%;
    padding:12px 20px;
    border-width: 1px;

}
.blogSave{
    border: none;
    background-color:black;
    color: white;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.blogHeading{
    text-align: center;
}

</style>
