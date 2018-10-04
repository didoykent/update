<style>

.flex {
    padding-top: 1%;
}

.card {
    padding: 40px;
}

</style>

<template>

<div>
    <v-app>
        <v-flex xs6 offset-xs3>
            <v-card id='card'>
                <v-layout row>
                    <v-text-field name="username" label="Enter your Username"></v-text-field>
                </v-layout>
                <v-layout row>
                    <v-text-field :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" name="password" label="Enter your password" hint="At least 8 characters" min="8" counter></v-text-field>
                </v-layout>
                <v-btn block color="secondary" dark router-link to="/newhome">Sign In</v-btn>
                </router-link>
                <v-btn block flat small color="primary" router-link to="/SignUp">Sign Up</v-btn>
                </router-link>
                   <form @submit.prevent = "create()">
                    <input type="text" v-model="username" value="">
                    <input type="text" v-model="myPassword" value="">
                    <button type="submit" name="create">create</button>
                  </form> 
            </v-card>
        </v-flex>
        <router-view></router-view>
    </v-app>
</div>

</template>

<script>

import axios from 'axios'
export default {
    data() {
            return {
                e1: true,
                password: 'Password',
                username: '',
                myPassword: '',
            }
        },
        methods: {
            create() {
                console.log('create')
                var vm = this
                console.log(vm.username)
                console.log(vm.myPassword)
                const form = new FormData()
                form.append('username', vm.username)
                form.append('password', vm.myPassword)
                axios.post('api/createData', form).then(function(data) {
                    console.log(data);
                })
            }
        }
}
/*data(){

  return {

  }
},
methods:{
  SignInClick(){
      var vm = this
      vm.$router.push('/Home')
  }
}

}*/

</script>
