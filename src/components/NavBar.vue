<template>
<section class="nav-wrapper">
    <!-- <span class="nav">Medium</span> -->
    <div class="nav">
    <router-link to='/'>Medium</router-link>
    </div>
    <div>
        <div v-if="!isLoggedIn" class="links">
            <router-link to='/register'>SignUp</router-link>
            <router-link to='/login'>SignIn</router-link>
        </div>
        <div v-if="isLoggedIn" class="links">
            <router-link to='/profile'>My Profile</router-link>
            <span class="lgClick" @click="logoutClick">Logout</span>
        </div>
    </div>
</section>

</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['logout']),
    logoutClick () {
      this.logout()
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style scoped>
    .nav-wrapper {
        background-color:black;
        display: flex;
        padding: 0 20px;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        color: white;
        margin:0;
    }
    .links a{
        text-decoration: none;
        color: white;
        padding: 20px 30px;
        cursor: pointer;
    }
    .lgClick{
        cursor: pointer;
        padding: 20px 30px;
    }
    .nav a{
        text-decoration: none;
        color: white;
        padding: 20px 8px;
        cursor: pointer;
    }
    .nav{
        cursor: pointer;
        font-size: 20px;
    }
</style>
