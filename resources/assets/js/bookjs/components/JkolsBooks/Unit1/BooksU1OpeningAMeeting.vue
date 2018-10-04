<style lang="css">

#textcontainer {
    position: absolute;
    bottom: 1px;
}

#container1 {
    text-align: justify;
    text-justify: inter-character;
    padding-left: 11%;
    padding-right: 11%;
    padding-bottom: 3%;
    background-color: purple;
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
          <v-card-media class="white--text"  height="250px" src="/images/Jkols/OpeningaMeeting.jpg">
              <div id="textcontainer">
                  <v-container fill-height fluid>
                      <v-layout fill-height>
                      </v-layout>
                  </v-container>
              </div>
          </v-card-media>
          <div class="py-3 ">
          <v-flex xs12 align-bottom flexbox>
              <h1><span class="display-1">Opening A Meeting</span></h1>
          </v-flex>
        </div>
            <v-card class="px-2 pt-4 my-2" height="auto" flat>
                <div class="subheading">
                    <div class="font-italic">
                        <v-textarea outline name="input-7-4"
                        readonly
                          height="80px"
                        label="Useful Language:">
                      </v-textarea>
                    </div>
                </div>
                <div class="">
                    <v-divider></v-divider>
                </div>
                <div class="subheading">
                    <div class="font-italic">
                        <v-textarea outline name="input-7-4"
                        readonly
                          height="80px"
                        label="Useful Tips:">
                      </v-textarea>
                    </div>
                </div>
            </v-card>

<div class="pb-4">
            <v-list subheader>
                <v-subheader class="pb-3 pt-3">This unit looks at:</v-subheader>
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading">Welcoming Participants</h1>
                </v-card>

                    <v-divider></v-divider>
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading"> Stating the purpose and aims</h1>
                </v-card>

                    <v-divider></v-divider>
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading">Outlining the agenda</h1>
                </v-card>

                    <v-divider></v-divider>

                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading"> Checking understanding</h1>
                </v-card>
            </v-list>

            </div>


        <v-card-media class="white--text" height="80px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
            <div id="textcontainer">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-bottom flexbox>
                            <h1><span class="display-1">Context</span></h1>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
        </v-card-media>
        <v-card>

          <ol>
            <div class="title pt-3 px-2">
            <li>
              Here are some of the elements that might be included in the opening to a meeting.
  Rank them in the order you think they should be introduced <b>(1-8)</b>
            </li>
          </div>
      <v-list subheader class="mr-4">

          <v-card color="" class="px-2 pt-3" height="auto" flat>
              <h1 class="subheading">Making sure all the participants know each other
</h1>   </v-card>
              <v-divider></v-divider>

          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading"> Saying how long the meeting is going to take
</h1>
          </v-card>
              <v-divider></v-divider>
          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading">Saying how the meeting will be organized</h1>
          </v-card>

              <v-divider></v-divider>
          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading">Introducing everyone by name and role</h1>
          </v-card>


              <v-divider></v-divider>

          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading">Inviting questions from participants</h1>
          </v-card>


              <v-divider></v-divider>

          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading">Giving background information about the reason for the meeting</h1>
          </v-card>


              <v-divider></v-divider>

          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading">Outlining the expected outcomes of the meeting</h1>
          </v-card>


              <v-divider></v-divider>

          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading">Going through the agenda for the meeting</h1>
          </v-card>

              <v-divider></v-divider>

      </v-list>

      <div class="title pt-3 px-2">
      <li>
         What qualities do you think are necessary for a good chairperson? How important would you rate the following <b>(1 = unimportant, 5 = very important)</b>?
      </li>
    </div>
<v-list subheader class="mr-4">

    <v-card color="" class="px-2 pt-3" height="auto" flat>
        <h1 class="subheading">listening to people

</h1>   </v-card>
        <v-divider></v-divider>

    <v-card color="" class="px-2 my-2" height="auto" flat>
        <h1 class="subheading">being decisive
</h1>
    </v-card>
        <v-divider></v-divider>
    <v-card color="" class="px-2 my-2" height="auto" flat>
        <h1 class="subheading">managing time well</h1>
    </v-card>

        <v-divider></v-divider>
    <v-card color="" class="px-2 my-2" height="auto" flat>
        <h1 class="subheading">being creative</h1>
    </v-card>


        <v-divider></v-divider>

    <v-card color="" class="px-2 my-2" height="auto" flat>
        <h1 class="subheading">having good summarizing skills</h1>
    </v-card>


        <v-divider></v-divider>

    <v-card color="" class="px-2 my-2" height="auto" flat>
        <h1 class="subheading">making people feel comfortable</h1>
    </v-card>


        <v-divider></v-divider>

    <v-card color="" class="px-2 my-2" height="auto" flat>
        <h1 class="subheading">being flexible</h1>
    </v-card>


        <v-divider></v-divider>

    <v-card color="" class="px-2 my-2" height="auto" flat>
        <h1 class="subheading">having a loud voice</h1>
    </v-card>

</v-list>

    </ol>
        </v-card>
        <!--
        <div class="py-4 mx-3">
          <span class="title font-italic font-weight-medium">Presentation</span>
        </div>
        <div class="">
      <v-card>
        <p class="py-2 mx-3">
        Veracity is a multinational publishing group with its headquarters in New York. Jane Wang, the CEO, is welcoming the Centre
        Managers from branches around the world to the company's annual review and strategic planning conference.
      </p>
      </v-card>
    </div>


<div class = "pt-2">
        <v-card-media class="white--text" height="180px" src="https://cdn.vuetifyjs.com/images/lists/ali.png">
        </v-card-media>
</div>
<v-card>
  <p class="subheading py-2 mx-3">
  <b>Jane Wang: </b><i>Well, good morning. everyone, and welcome. I must say it's great to see you all again, and I'm really looking forward to our time together
  over the next two days. This is a terrific opportunity for us to share our ideas and concerns, and for you to give your input into the
  planning process which is going to shape the future of this company. I don't expect us all to agree on everything, but I want our discussions
  to be conducted in a spirit of openness and honesty.</i>
  </p>
<p class="subheading py-2 mx-3"><i>
This morning, we're going to review the past year in terms of how far we have achieved targets set. The purpose is to evaluate our results
and to hear about both the successes and the difficulties you've experienced. So, by the end of this morning's session, we'll be in a
position to make a realistic assessment of last year's results so that we can use it to inform our planning going forward.
First things first, though. Do you all know each other? I’m going to ask you to say a few words about yourselves by way of introduction.
 Shall we go round the table?</i>
</p>
<p class="subheading py-2 mx-3">
<b>Juanita Garcia: </b><i>Me first? OK, well, for those who don’t know me, my name's Juanita Garcia and I've been working as Center Manager,
in Madrid, for the past two years. I’m responsible for….
</i>
</p>
</v-card> -->
  </v-card>



        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/BooksJournal">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/BooksU1WelcomingParticipants">
                    <v-icon x-large>keyboard_arrow_right</v-icon>
                </v-btn>

            </div>
        </div>
        <div style="position: fixed;
        margin-left: 70%;
        padding-left: 11%;
        margin-right: 1%;
        margin-bottom: 1%;
        bottom: 0;
        left: 0;
        right: 0;" class="subheading">Page 5
        </div>

    </v-content>
    <router-view></router-view>
</v-app>

</template>

<script>

export default {
    data() {
        return {

        }
    }
}

</script>
