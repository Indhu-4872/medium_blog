<template>
<div class="row-wrapper">
<div class="row-inner">
  <form @submit.prevent="signUp">
      <h2>Sign Up</h2>
      <div class="row">
          <label>Name</label>
          <input type="text" class="input" v-model="name" placeholder="Name" />
      </div>

      <div class="row">
          <label>Email</label>
          <input type="email" class="input" v-model="email" placeholder="Email" />
      </div>

      <div class="row">
          <label>Password</label>
          <input type="password" class="input" v-model="password" placeholder="Password" />
      </div>

      <div class="row">
          <label>Confirm Password</label>
          <input type="password" class="input" v-model="password_confirm" placeholder="Confirm Password" />
      </div>
        <br><br>
      <button class="btn">Sign Up</button>
  </form>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirm: ''
    }
  },
  methods: {
    signUp () {
      console.log('signupcreatingggg')
      const self = this
      if (this.name.trim() === '') {
        alert('Name is required')
        return
      }
      if (this.email.trim() === '') {
        alert('Email is required')
        return
      }
      if (this.password.trim() === '') {
        alert('Password is required')
        return
      }
      if (this.password_confirm.trim() === '') {
        alert('Confirm Password is required')
        return
      }
      if (this.password !== this.password_confirm) {
        alert('Password and Confirm Password not same')
        return false
      }
      axios.post('http://localhost:3000/users', {
        name: this.name,
        emailId: this.email,
        password: this.password,
        id: this.email
      })
        .then(function (response) {
          alert('SignUp Succesfully')
          self.$router.push({ path: '/login' })
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('Already Existing User!!')
        })
    }
  }
}
</script>

<style scoped>
*{
    box-sizing: border-box;
}
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
  width: 500px;
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

.row-wrapper h2{
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

.btn{
  background-color: black;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
