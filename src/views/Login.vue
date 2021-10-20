<template>
<div class="row-wrapper">
    <div class="row-inner">
  <form @submit.prevent="loginClick">
      <h3>SignIn</h3>

      <div class="row">
          <label>Email</label>
          <input type="email" class="input" placeholder="Email" v-model="email"/>
      </div>

      <div class="row">
          <label>Password</label>
          <input type="password" class="input" placeholder="Password" v-model="password"/>
      </div>
    <br><br>
      <button class="btn">SignIn</button>
  </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    loginClick () {
      const self = this
      if (this.email.trim() === '') {
        alert('Email is required')
        return
      }
      if (this.password.trim() === '') {
        alert('Password is required')
        return
      }
      axios.get('http://localhost:3000/users?emailId=' + this.email + '&password=' + this.password)
        .then(
          res => {
            console.log(res.data)
            if (res.data.length === 0) {
              alert('Invalid Email or Password')
            } else {
              // console.log(res.data[0].emailId)
              self.login(res.data[0].emailId)
              //   localStorage.setItem('userId', res.data[0].emailId)
              self.$router.push({ path: '/' })
            }
          }
        )
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

.btn{
  background-color: black;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
}

</style>
