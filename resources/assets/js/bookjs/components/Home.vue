<template>

<div>
    <v-app>

        <v-toolbar permanent class="deep-purple lighten-3">

            <v-toolbar-title>Winison Company</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
            </v-toolbar-items>
        </v-toolbar>

        <router-view></router-view>
    </v-app>
</div>

</template>

<script>

export default {
    data() {

            return {

            }
        },

        beforeMount() {
            var vm = this
            vm.$router.push('/SignIn')

        },
        methods: {
            SignInClick() {
                var vm = this
                vm.$router.push('/Home')
            }
        }

}

</script>
