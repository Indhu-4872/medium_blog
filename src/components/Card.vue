<template>
    <div class="card">
        <div class="cardContent" @click="onClickkk()">
            <div class="blog">{{blog.title}}</div><br>
            <div class="blogSummary">{{blog.summary}}</div><br>
        </div>
        <div class="dateUserDisplay" v-if="dateUserDisplay">
            <span class="dateDisplay">{{datePrint}}</span>
            <span class="userDisplay">By {{blog.userId}}</span>
        </div>
        <div class="cardButton" v-if="editDelete">
            <button class="blogEdit" @click="onEditClickk" style='margin-right:16px'>Edit</button>
            <button class="blogDelete" @click="onDeleteClickk">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
  blog: 'Card',
  props: {
    blog: Object,
    editDelete: Boolean,
    dateUserDisplay: Boolean
  },
  methods: {
    onClickkk () {
      console.log('clickingggg')
      this.$emit('onClick')
    },
    onEditClickk () {
      console.log('Edit Click')
      this.$emit('onEditClick')
    },
    onDeleteClickk () {
      console.log('Delete Click')
      this.$emit('onDeleteClick')
    //   let date = new Date(blog.date)
    //   let dateString = ''+date.getFullYear() +''+
    }
  },
  computed: {
    datePrint () {
      const date = new Date(this.blog.date)
      const dateString = '' + date.getFullYear() + '/' + date.getMonth() + '/' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
      return dateString
    }
  }
}
</script>

<style scoped>
.card {
    width: 60%;
    height: 150px;
    padding: 25px 50px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    box-shadow: 5px 5px 15px rgb(0,0,0,.3);
    overflow: hidden;
}
.cardContent{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.blog{
    font-size: 20px;
    font-weight: 800;
}
.blogSummary{
    height: 65px;
    font-size: 15px;
    overflow: hidden;
    color: #706a6a;
}
.blogEdit{
    border: none;
    background-color:black;
    color: white;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.blogDelete{
    border: none;
    background-color:black;
    color: white;
    padding: 8px 20px;
    border-radius: 5px;
    cursor: pointer;
}
.dateUserDisplay{
    /* text-align: left; */
    /* justify-content: left; */
    display: flex;
    justify-content: space-between;
    width: 100%;
}

</style>
