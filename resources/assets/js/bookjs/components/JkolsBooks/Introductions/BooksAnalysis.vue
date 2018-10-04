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
          <div class="py-3 ">
          <v-flex xs12 align-bottom flexbox>
              <h1><span class="display-1">Needs Analysis</span></h1>
          </v-flex>
        </div>
          <ol>
            <div class="title pt-3 py-2">
            <li>
              a. Spend few minutes thinking about the different kinds of meetings or video conferences in English you have to attend.
            </li>
          </div>
      <v-list subheader>
          <div id="divider">
              <v-divider></v-divider>
          </div>
          <v-card color="" class="px-3 my-2" height="auto" flat>
              <h1 class="subheading">Who do you have meetings with: colleagues, clients, management?
</h1>
          </v-card>
          <div id="divider">
              <v-divider></v-divider>
          </div>
          <v-card color="" class="px-3 my-2" height="auto" flat>
              <h1 class="subheading"> Are the meetings large or small, long or short, formal or informal, inside or outside your company?</h1>
          </v-card>
          <div id="divider">
              <v-divider></v-divider>
          </div>
          <v-card color="" class="px-3 my-2" height="auto" flat>
              <h1 class="subheading"> Where and how do you meet: at your desk, in a special room. by phone or video conference?</h1>
          </v-card>
      </v-list>

      <div class="title pt-3 py-2">
         b. In what role do you have to attend meetings in English?
    </div>
<v-list subheader>
    <div id="divider">
        <v-divider></v-divider>
    </div>
    <v-card color="" class="px-3 my-2" height="auto" flat>
        <h1 class="subheading">chairperson
</h1>
    </v-card>
    <div id="divider">
        <v-divider></v-divider>
    </div>
    <v-card color="" class="px-3 my-2" height="auto" flat>
        <h1 class="subheading"> presenter
</h1>
    </v-card>
    <div id="divider">
        <v-divider></v-divider>
    </div>
    <v-card color="" class="px-3 my-2" height="auto" flat>
        <h1 class="subheading"> participant
</h1>
    </v-card>
    <div id="divider">
        <v-divider></v-divider>
    </div>
    <v-card color="" class="px-3 my-2" height="auto" flat>
        <h1 class="subheading">other (e.g. note-taker)
</h1>
    </v-card>
</v-list>
<div class="title pt-3 py-2">
<li>
    What do you find most difficult when attending meetings held in English?
</li>
</div>
<v-list subheader>
    <div id="divider">
        <v-divider></v-divider>
    </div>
    <v-card color="" class="px-3 my-2" height="auto" flat>
        <h1 class="subheading">Making your point clearly

</h1>
    </v-card>
    <div id="divider">
        <v-divider></v-divider>
    </div>
    <v-card color="" class="px-3 my-2" height="auto" flat>
        <h1 class="subheading">Understanding other participants
</h1>
    </v-card>
    <div id="divider">
        <v-divider></v-divider>
    </div>
    <v-card color="" class="px-3 my-2" height="auto" flat>
        <h1 class="subheading">Other aspects of the meeting
</h1>
    </v-card>
</v-list>

<div class="title pt-3 py-2">
<li>
  What skills and qualities do you think you need to participate effectively in meetings?
</li>
</div>
<v-card color="" class="px-3 my-2" height="auto" flat>
    <h1 class="subheading font-weight-thin font-italic">Listening to other people's viewpoints, good time management
</h1>
</v-card>

<!--
<div class="headline pt-5 py-2 ">
<li>
  Each unit of this book focuses on a different area. Look through the unit summaries at the beginning of
  Units 1-6 and think about which areas you need to develop. Developing your awareness of what you already
  do well and what you could do better will allow you to focus on improving those skills you really need.
  Note down the units you intend to work through in order of priority for
  you - in terms of the area in which you feel you are weakest, or which is currently of most importance to you.
</li>
</div> -->


    </ol>

      </v-card>



        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/BooksMeetings">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/BooksJournal">
                    <v-icon x-large>keyboard_arrow_right</v-icon>
                </v-btn>

            </div>
        </div>
        <div id="parent4" class="subheading">Page 3
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
