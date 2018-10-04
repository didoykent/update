<style>



</style>

<template>

<v-app>
    <v-flex xs12 sm6 offset-sm3>
        <div>
            <v-alert v-model="alert" type="info" dismissible>
                Fill in only the information you would like to show on your Persoal Information. Don't leave the important fields empty.
            </v-alert>
        </div>
        <v-card>
            <v-form ref="form" @submit.prevent="createUsers()" method="post" enctype="multipart/form-data">

                <v-flex xs12 class="px-3">
                    <v-text-field v-model="firstname" :rules="firstnameRules" label="First Name" required>
                    </v-text-field>
                </v-flex>
                <v-flex xs12 class="px-3">
                    <v-text-field v-model="lastname" :rules="lastnameRules" label="Last Name" required>
                    </v-text-field>
                </v-flex>

                <v-flex xs12 class="px-3">
                    <v-text-field v-model="emailadd" prepend-icon="email" :rules="emailRules" label="E-mail">
                    </v-text-field>
                </v-flex>

                <v-flex xs12 class="px-3">
                    <v-text-field v-model="username" prepend-icon="account_circle" :rules="usernameRules" label="Username" required></v-text-field>
                </v-flex>

                <v-flex xs12 class="px-3">
                    <v-text-field prepend-icon="lock" :append-icon="e1 ? 'visibility' : 'visibility_off'" :append-icon-cb="() => (e1 = !e1)" :type="e1 ? 'password' : 'text'" v-model="password" :rules="passwordRules" label="Enter your password" hint="At least 8 characters"
                    min="8" counter required></v-text-field>
                </v-flex>


                <v-flex xs12 class="px-3">
                    <input type="file" @change="imageChanged">
                </v-flex>

                <!--    <v-layout row>
                    <v-flex xs6 class="px-3">
                        <v-text-field v-model="firstname" label="Firstname">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs6 class="px-3">
                        <v-text-field v-model="lastname" label="Lastname">
                        </v-text-field>
                    </v-flex>
                </v-layout> -->

                <v-flex xs12 class="px-3">
                    <v-text-field v-model="profession" label="Profession" prepend-icon="work"> </v-text-field>
                </v-flex>
                <v-flex xs12 class="px-3">
                    <v-text-field v-model="address" label="address" prepend-icon="location_on" value=""></v-text-field>
                </v-flex>
                <v-flex xs12 class="px-3">
                    <v-text-field v-model="phonenumber" label="Phone Number" prepend-icon="phone" value=""></v-text-field>
                </v-flex>
                <v-flex xs12 class="px-3">
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent lazy full-width width="370px">
                        <v-text-field slot="activator" v-model="date" label="Birthday" prepend-icon="event" readonly></v-text-field>
                        <v-date-picker v-model="date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-flex>





                <v-btn color="secondary" dark type="submit" @click="  createUsers() " router-link to="/summary">Submit</v-btn>
                </router-link>
                <v-btn flat small color="primary" @click="clear()">Clear</v-btn>

            </v-form>



            <v-list>
                <v-list-tile v-for="users in showListUsers" :key="users.id" avatar @click="edituser(users.id)">
                    <v-list-tile-content>
                        <v-list-tile-title v-text="users.emailadd"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-btn flat small color="primary" @click="deleteUser(users.id)">Delete</v-btn>
                </v-list-tile>
            </v-list>

        </v-card>

    </v-flex>
    <router-view></router-view>
</v-app>

</template>

<script>

import axios from 'axios'
import Vue from 'vue'
export default {

    data: () =>
        ({
            image: '',
            profession: '',
            address: '',
            phonenumber: '',
            alert: true,
            valid: false,
            firstname: 'waaa',
            lastname: 'weeee',
            date: null,
            modal: false,
            firstname: '',
            firstnameRules: [
                v => !!v || 'First Name is required',
            ],
            lastname: '',
            lastnameRules: [
                v => !!v || 'Last Name is required',
            ],
            emailadd: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            e1: true,
            password: '',
            passwordRules: [
                v => !!v || 'First Name is required',
            ],
            username: '',
            usernameRules: [
                v => !!v || 'Username is required',
            ],
            showListUsers: [],
            selectedfile: null,
            /*  myPassword: ''*/
        }),
    beforeMount() {
        this.showUsers();
    },
    methods: {
        imageChanged(e) {
                var files = e.target.files || e.dataTransfer.files;
                this.createImage(files[0]);

            },
            createImage(file) {
                var image = new Image;
                var reader = new FileReader;
                reader.onload = (e) => {
                    this.image = e.target.result;

                };
                reader.readAsDataURL(file);

            },
            clear() {
                this.$refs.form.reset()
            },
            createUsers() {
                console.log('createUsers')
                var vm = this
                console.log(vm.username)
                console.log(vm.password)
                console.log(vm.firstname)
                console.log(vm.lastname)
                console.log(vm.emailadd)
                console.log(vm.profession)
                console.log(vm.date)
                console.log(vm.address)
                console.log(vm.user_image)
                const form = new FormData()
                form.append('username', vm.username)
                form.append('password', vm.password)
                form.append('firstname', vm.firstname)
                form.append('lastname', vm.lastname)
                form.append('emailadd', vm.emailadd)
                form.append('birthday', vm.date)
                form.append('profession', vm.profession)
                form.append('address', vm.address)
                form.append('phonenumber', vm.phonenumber)
                form.append('user_image', vm.user_image)
                    //    form.append('birthday', vm.date)
                axios.post('api/createUsers', form).then(function(data) {
                    console.log(data);

                })
            },
            showUsers() {
                var vm = this
                axios.get('api/showUsers').then(function(response) {
                    console.log(response.data.showUsers);
                    if (response.data.showUsers) {
                        Vue.set(vm.$data, 'showListUsers', response.data.showUsers)
                        console.log('showListUsers', vm.showListUsers);
                    }
                })

            },
            /*  showlastUsers()
              {
                var vm = this
                axios.get('api/showlastUsers').then(function(response){
                console.log(response.data.showUsers);
                  if(response.data.showUsers)
                  {
                    Vue.set(vm.$data,'showListUsers',response.data.showUsers)
                    console.log('showListUsers',vm.showListUsers);
                  }
                })
              },*/
            edituser(response) {
                console.log("user id response", response);
                var vm = this
                const form = new FormData()
                form.append('userid', response)
                form.append('firstname', vm.firstname)
                form.append('lastname', vm.lastname)
                axios.post('api/updateUser', form).then(function(response) {
                    console.log(response.data.showUsers);
                })
            },
            deleteUser(response) {
                var vm = this
                const form = new FormData()
                form.append('userid', response)
                axios.post('api/deleteUser', form).then(function(response) {
                    vm.showUsers();
                })
            }

    }
}

</script>
