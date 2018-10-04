<style lang="css">
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
#divider{
}

#textcontainer {
    position: absolute;
    bottom: 1px;
}
#BIcontent {
    /*  background-color: green;*/
}
ol.a{
  list-style-type: lower-alpha;
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


</style>

<template>

<v-app>
    <v-content id="BIcontent">
      <v-card id="BIcard">
          <v-card-media class="white--text" height="170px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
              <div id="textcontainer">
                  <v-container fill-height fluid>
                      <v-layout fill-height>
                      </v-layout>
                  </v-container>
              </div>
          </v-card-media>
          <div class="py-3">
          <v-flex xs12 align-bottom flexbox>
              <h1><span class="display-1">Learning Journal</span></h1>
          </v-flex>
        </div>
          <div class="title px-2 pt-3 pink--text font-weight-regular font-italic">
            During the Course
          </div>
          <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
              <span class="subheading">
                As you work through each unit, think about what you have done and whether you reel you have really understood and learnt the content.
                So, as you work through each unit, make a note of useful phrases, vocabulary and tips you might use in real life.
      </span>
          </v-card>
          <div class=" subheading font-weight-thin font-italic px-2 pt-2">
Example
         </div>

         <v-card class="px-2 my-2 mx-2 py-2" height="auto" flat>
           <div class="title my-1">Unit: 1</div>
           <div class="subheading">
            <div> Useful language:</div>
            <div  class="font-italic"> The purpose of.. is to ..
We've got a lot to get through.
Let's get going.</div>
</div>
<div class="my-2">
    <v-divider></v-divider>
</div>
<div class="subheading">
  <div>Useful tips:</div> <div  class="font-weight-regular font-italic">Give an indication of how long each stage of the meeting will take. </div>
</div>
         </v-card>



      </v-card>



        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/BooksAnalysis">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/BooksU1OpeningAMeeting">
                    <v-icon x-large>keyboard_arrow_right</v-icon>
                </v-btn>

            </div>
        </div>
        <div id="parent4" class="subheading">Page 4
        </div>
    </v-content>
</v-app>

</template>

<script>

export default {
  data () {
        return {
          panel: [],
          items: 5,
        }
      },
      methods: {
        // Create an array the length of our items
        // with all values as true
        all () {
          this.panel = [...Array(this.items).keys()].map(_ => true)
        },
        // Reset the panel
        none () {
          this.panel = []
        }
      }
}

</script>
