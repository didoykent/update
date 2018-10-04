

<template>
<v-app>
  <v-navigation-drawer id="nav">
    <div class="divnav">
    <v-list>
          <v-list-tile avatar>
            <v-list-tile-avatar>
            <!--  <img src="https://randomuser.me/api/portraits/men/85.jpg" > -->
            </v-list-tile-avatar>
            <v-list-tile-content>
            <v-list-tile-title>Name</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
      <v-list-tile v-for="(item, index) in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.id }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </div>
  </v-navigation-drawer>
</v-app>
</template>

<style>
#nav{

}
.divnav{
  max-height: inherit;
}

</style>

<script>

export default {
   data () {
     return {
       items: [
         { title: 'Personal Information', icon : 'person' },
         { title: 'Summary',icon : 'description'},
         { title: 'Skills', icon : 'build'},
         { title: 'Experience', icon : 'work'},
        { title: 'Education',icon : 'school' }
       ]
     }
   },
}
</script>
