<template>
<div class="row-wrapper">
    <div class="row-inner">
    <div class="headEditBtn">
        <h2>About You</h2>
        <button @click="isEditing = false">Edit</button>
    </div>
    <form @submit.prevent="profileEdit">
      <div class="row">
          <label>Name</label>
          <input type="text" class="input" :disabled="isEditing" v-model="user.name" placeholder="Name" />
      </div>

      <div class="row">
          <label>Password</label>
          <input type="text" class="input" :disabled="isEditing" v-model="user.password" placeholder="User Name" />
      </div>

      <div class="row">
          <label>Email</label>
          <input type="email" class="input" v-model="user.emailId" placeholder="Email" disabled/>
      </div>
        <br>
        <div class="btn">
            <button>Save Changes</button>
            <router-link to='/myBlogs' tag="button">My Blogs</router-link>
            <router-link to='/addBlog' tag="button">Create Blog</router-link>
        </div>
  </form><br>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'profile',
  data: function () {
    return {
      isEditing: true,
      user: {
      }
    }
  },
  created () {
    this.getUser()
  },
  methods: {
    getUser () {
      const selfProfile = this
      axios.get('http://localhost:3000/users/' + localStorage.getItem('userId'))
        .then(function (response) {
          console.log(response.data)
          selfProfile.user = response.data
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('Error Occured!!')
        })
    },
    profileEdit () {
      const self = this
      axios.put('http://localhost:3000/users/' + localStorage.getItem('userId'), {
        name: this.user.name,
        emailId: this.user.emailId,
        password: this.user.password
      })
        .then(function (response) {
          alert('Profile Edited Successfully')
          self.getUser()
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('Error Occured!!')
        })
    }
  }

}
</script>

<style scoped>
.row-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  height: 100%;
  /* background: radial-gradient(rgb(91, 152, 221), rgb(49, 113, 211)); */
  font-family:  sans-serif;
}

.row-inner{
  width: 900px;
  margin: auto;
  background: white;
  box-shadow: 0px 14px 80px rgba(34,35,58,0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
  box-shadow: 5px 5px 15px rgb(0,0,0,.3);
}

.row-wrapper .input:focus{
  border-color: white;
  box-shadow: none;
}

.row-wrapper h3{
  text-align: center;
  font-weight: 500;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-label{
  font-weight: 400;
}

.row{
  display: flex;
  flex-direction: column;
  margin: 12px 0;
}

.row label{
  font-weight: bold;
  margin-bottom: 8px;
}

.input{
  padding: 8px 8px;
  border: 1px solid #ced4da;
  border-radius: 3px;
}
.headEditBtn{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.btn{
    border: none;
    background-color:white;
    color: white;
    /* padding: 12px 20px; */
    border-radius: 3px;
    /* cursor: pointer; */
    text-decoration: none;
    display: flex;
    justify-content: space-evenly;
}
button{
color: white;
background-color: black;
border: none;
padding: 15px 32px;
display: flex;
justify-content: space-evenly;
border-radius: 5px;
cursor: pointer;
}

</style>
