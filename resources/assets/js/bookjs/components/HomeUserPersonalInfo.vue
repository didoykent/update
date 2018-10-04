<style>

#cardPersonalInfo {
    padding: 5%;
    margin-bottom: 2%;
}

</style>

<template>

<v-app>
    <v-flex xs12 sm8 offset-sm2>

        <div>
            <v-alert v-model="alert" type="info" dismissible>
                Fill in only the information you would like to show on your Persoal Information. Leave other fields empty.
            </v-alert>
        </div>
        <v-card id="cardPersonalInfo">
            <h3 class="headline mb-2 px-6 "> <v-icon large>person</v-icon>Personal Information{{id}}</h3>
            <v-form ref="form" v-model="valid" method="post" enctype="multi/form-data">

                <v-flex xs12 class="px-3">
                    <input type="file" name="user_image">
                    <v-btn flat color="primary" @click="saveimage()">OK</v-btn>
                </v-flex>

                <v-layout row>
                    <v-flex xs6 class="px-3">
                        <v-text-field v-model="firstname" label="Firstname">
                        </v-text-field>
                    </v-flex>
                    <v-flex xs6 class="px-3">
                        <v-text-field v-model="lastname" label="Lastname">
                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-flex xs12 class="px-3">
                    <v-text-field label="Profession" prepend-icon="work"> </v-text-field>
                </v-flex>
                <v-flex xs12 sm8 class="px-3">
                    <v-text-field label="address" prepend-icon="location_on" value=""></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 class="px-3">
                    <v-text-field label="Phone Number" prepend-icon="phone" value=""></v-text-field>
                </v-flex>
                <v-flex xs12 sm8 class="px-3">
                    <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent lazy full-width width="370px">
                        <v-text-field slot="activator" v-model="date" label="Birthday" prepend-icon="event" readonly></v-text-field>
                        <v-date-picker v-model="date" scrollable>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                        </v-date-picker>
                    </v-dialog>
                </v-flex>
                <v-flex xs12 sm8 class="px-3">
                    <v-text-field label="Email Addtress" prepend-icon="email" value=""></v-text-field>
                </v-flex>

                <v-flex xs12 class="px-3">
                    <v-btn color="secondary" block type="submit" router-link to="/Summary">Continue to Summary
                        <v-icon light right>keyboard_arrow_right</v-icon>
                    </v-btn>
                    </router-link>
                </v-flex>
            </v-form>


        </v-card>
    </v-flex>
    <router-view></router-view>
</v-app>

</template>

<script>

import axios from 'axios'
export default {
    data() {
            return {
                id: this.$route.params.userID,
                alert: true,
                valid: false,
                firstname: 'waaa',
                lastname: 'weeee',
                date: null,
                modal: false,
            }

        },
        beforeMount() {
            this.showlastUsers()

        },
        methods: {
            clear() {
                    this.$refs.form.reset()
                },
                events() {
                    var vm = this
                    vm.$router.push('/HomeUserPersonalInfo')
                },
                saveimage() {
                    var vm = this
                    const form = new FormData()
                    form.append('user_image', vm.user_image)
                    axios.post('api/store').then(function(data) {
                        console.log(data);
                    })
                },
                showlastUsers() {
                    var vm = this
                    axios.get('api/showlastUsers').then(function(data) {
                        console.log(data);
                    })

                },
        }


}

</script>
