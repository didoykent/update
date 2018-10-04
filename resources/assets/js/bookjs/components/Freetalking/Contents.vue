<style>

#parent4 {
    position: fixed;
    margin-left: 70%;
    padding-left: 11%;
    margin-right: 1%;
    margin-bottom: 1%;

    bottom: 0;
    left: 0;
    right: 0;
}
#textcontainer {
    position: absolute;
    bottom: 1px;
}

#divider {
    padding-left: 5%;
    padding-right: 5%;
}

#container1 {
    text-align: justify;
    text-justify: inter-character;
    padding-left: 11%;
    padding-right: 11%;
    padding-bottom: 3%;
    background-color: purple;
}

.about_the_author {
    padding-top: 1%;
    background-color: purple;
}

.about_the_author_para {
    text-align: justify;
    text-justify: inter-character;
    padding-left: 8%;
    padding-right: 9%;
}

#divMeeting {
    /*  background-color: white;*/
    text-align: justify;
    text-justify: inter-character;
    padding-left: 8%;
    padding-right: 8%;
}

#BIcard {
    margin: 3%;
    padding: 4%;
    margin-bottom: 3%;
    background-color: #EEEEEE;
}

.bottomright {
    position: fixed;
    right: 2px;
    top: 50%;
}

.bottomleft {
    position: fixed;
    left: 2px;
    top: 50%;
}

.divDialogCardlist {
    text-align: justify;
    text-justify: inter-character;
    padding-left: 7%;
    padding-right: 7%;
}

.divDialogCard {
    text-align: justify;
    text-justify: inter-character;
    padding: 5%;
}


/*.container{
  background-color: red;
}
.layout{
  background-color: blue;
}
.content{
  background-color: yellow;
}*/

</style>

<template>

<v-app>
    <v-content id="BIcontent">
        <v-card id="BIcard">
          <div class="title pr-2 pt-3 pb-2 pink--text font-weight-regular font-italic">
            Contents
          </div>
          <v-list subheader>
            <v-list-tile
              v-for="item in items"
              :key="item.title"
              avatar
              @click=""
              :to = "item.link">
            <v-list-tile-content>
            <v-list-tile-title class="px-3 my-2 subheading" height="auto" flat>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-action class ="pr-4">
              <v-icon color="grey lighten-1">arrow_forward</v-icon>
          </v-list-tile-action>
        </v-list-tile>

          </v-list>
        </v-card>
    </v-content>
</v-app>

</template>

<script>

export default {
  data () {
      return {
        items: [
          { title: 'Introducing One’s Self' ,link:'/IntroducingOnesSelf'},
          { title: 'Travelling' ,link:'/Lesson2Travelling' },
          { title: 'Colors' ,link:'/Lesson3Colors' },
          { title: 'Memories' ,link:'/Lesson4Memories' },
          { title: 'Music' ,link:'/Lesson5Music' },
          { title: 'Food' ,link:'/Lesson6Food' },
          { title: 'Family Members' ,link:'/Lesson7FamilyMembers' },
          { title: 'Friendship' ,link:'/Lesson8Friendship' },
          { title: 'The Weather' ,link:'/Lesson9TheWeather' },
          { title: 'Favorite Things' ,link:'/Lesson10FavoriteThings' },
          { title: 'Right Now' ,link:'/' },
          { title: 'Past Happenings' ,link:'/' },
          { title: 'The Future' ,link:'/' },
          { title: 'Nature' ,link:'/' },
          { title: 'The Fauna' ,link:'/' },
          { title: 'The Flora' ,link:'/' },
          { title: 'Time' ,link:'/' },
          { title: 'Movies' ,link:'/' },
          { title: 'Pets' ,link:'/' },
          { title: 'Inspiring People' ,link:'/' },
          { title: 'Superheroes' ,link:'/' },
          { title: 'Time Travel' ,link:'/' },
          { title: 'Hobbies' ,link:'/' },
          { title: 'Personal Habits' ,link:'/' },
          { title: 'Nations of the World' ,link:'/' },
          { title: 'Business' ,link:'/' },
          { title: 'Jobs and Occupation' ,link:'/' },
          { title: 'Relaxation' ,link:'/' },
          { title: 'Rights and Duties' ,link:'/' },
          { title: 'Laws' ,link:'/' },
          { title: 'Making Acquaintances' ,link:'/' },
          { title: 'Culture' ,link:'/' },
          { title: 'Neighborhood' ,link:'/' },
          { title: 'My City' ,link:'/' },
          { title: 'Superstitions' ,link:'/' },
          { title: 'Learning Foreign Languages' ,link:'/' },
          { title: 'Fashion' ,link:'/' },
          { title: 'Dreams' ,link:'/' },
          { title: 'Science and Technology' ,link:'/' },
          { title: 'Holidays' ,link:'/' },
        ],
      }
    }
}

</script>
