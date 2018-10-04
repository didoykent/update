<style>

#tips {
    background-color: lightblue;
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
        <v-card>
            <h3 class="headline mb-4 px-0 ">Summary</h3>
            <v-form ref="form" @submit.prevent="createUsers()" method="post">
            <div>
                <v-flex xs12>
                    <v-text-field textarea box no-resize></v-text-field>
                </v-flex>
            </div>
          </v-form>
            <v-flex xs12>
                <v-btn color="secondary" block type="submit" router-link to="/Experience">Continue to Experience
                    <v-icon light right>keyboard_arrow_right</v-icon>
                </v-btn>
                </router-link>
            </v-flex>
        </v-card>
    </v-flex>
</v-app>

</template>

<script>

export default {
  data() {
          return {

              alert: true


          }

}
}
</script>
