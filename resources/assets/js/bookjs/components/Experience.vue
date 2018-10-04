<style>
#cardExperience{
  margin-bottom: 2%;
}


</style>

<template>

<v-app>
    <v-flex xs12 sm8 offset-sm2>
      <div>
          <v-alert v-model="alert" type="info" dismissible>
              List your work experience, add different positions you held and describe your responsibilites.
          </v-alert>
      </div>
        <v-card id="cardExperience">
            <h3 class="headline mb-4 px-0 ">Experience</h3>
            <v-form>
                <v-container grid-list-md>
                    <v-layout row wrap>
                        <v-flex xs12 sm6>
                            <v-text-field box label="Position"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-text-field box label="Company, Department"></v-text-field>
                        </v-flex>

                        <v-flex xs12 sm6>
                            <v-menu ref="menu" :close-on-content-click="false" v-model="menu" :nudge-right="40" :return-value.sync="date" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                <v-text-field slot="activator" v-model="date" label="Date From" prepend-icon="event" readonly></v-text-field>
                                <v-date-picker v-model="date" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-flex xs12 sm6>
                            <v-menu ref="menu2" :close-on-content-click="false" v-model="menu2" :nudge-right="40" :return-value.sync="date2" lazy transition="scale-transition" offset-y full-width min-width="290px">
                                <v-text-field slot="activator" v-model="date2" label="Date To" prepend-icon="event" readonly></v-text-field>
                                <v-date-picker v-model="date2" no-title scrollable>
                                    <v-spacer></v-spacer>
                                    <v-btn flat color="primary" @click="menu2 = false">Cancel</v-btn>
                                    <v-btn flat color="primary" @click="$refs.menu2.save(date2)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-flex>

                        <v-flex xs12>
                            <v-text-field box textarea label="Experience" no-resize></v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-form>
            <v-btn color="secondary" block type="submit" router-link to="/Education">Continue to Education
                <v-icon light right>keyboard_arrow_right</v-icon>
            </v-btn>
            </router-link>
        </v-card>
    </v-flex>
</v-app>

</template>

<script>

export default {
    data: () => ({
      alert: true,
        date: null,
        date2: null,
        menu: false,
        menu2: false,
    })
}

</script>
