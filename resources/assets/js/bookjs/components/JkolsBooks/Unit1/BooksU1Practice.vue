<style lang="css">

#textcontainer {
    position: absolute;
    bottom: 1px;
}

#BIcontent {
    /*  background-color: green;*/
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
              <div class="title pr-2 pt-2 pink--text font-weight-regular font-italic">
                  Practice
              </div>
                <ol class="mr-4">
                <div class="title pt-2 py-2">
                    <li>
                        Choose the correct options.
                    </li>
                </div>
                <v-btn dark block @click.stop="dialog1 = !dialog1" @click="e1 = 1" class="
                my-2 mx-2">
                    click here to view activity
                </v-btn>


                <v-dialog v-model="dialog1" full-width height="90%">
                    <v-card class="px-1 py-1 my-1 mx-1">
                        <div>
                            <v-card-title primary-title>
                                <div>
                                    <div class="title font-italic grey--text">Choose the correct options.</div>
                                </div>
                            </v-card-title>
                        </div>
                        <div class="title px-3 py-2 py-2">
                            <p>
                                Hi, everyone, thanks for coming and
                                <b class="pink lighten-4"><i>welcome/welcoming</i></b>. First, I’ll go
                                <b class="pink lighten-4"><i>under/go</i></b> over what we hope to
                                <b class="pink lighten-4"><i>achieve/like</i></b>  to achieve in this morning's session, Right, how you know
                                <b class="pink lighten-4"><i>I/as you know</i></b>, we are discussing ideas
                                <b class="pink lighten-4"><i>to/ideas</i></b> for improving quality control. We'll start
                                <b class="pink lighten-4"><i>in/start</i></b> by brainstorming ideas for 15 minutes in small groups of
                                <b class="pink lighten-4"><i>three/small</i></b> groups of threes. After that, each group will show its
                                <b class="pink lighten-4"><i>ideas/present</i></b>  its ideas, and then I'll ask you
                                <b class="pink lighten-4"><i>vote/you</i></b> to vote for the best three. Finally, we'll draw up a plan of action/draw on a plan action. Is that clear? OK, we'll get
                                <b class="pink lighten-4"><i>starting/get</i></b>                                started.
                            </p>
                        </div>
                        <v-btn dark block @click.native="dialog1 = false">Close</v-btn>
                    </v-card>
                </v-dialog>



                <div class="title pt-2 py-2">
                    <li>
                        Complete the sentences with the words given. Then put the sentences in the correct order.
                    </li>
                </div>
                <v-btn dark block @click.stop="dialog2 = !dialog2" @click="e1 = 1" class="
                my-2 mx-2">
                    click here to view activity
                </v-btn>


                <v-dialog v-model="dialog2" width="750px" height="600px">
                    <v-card <v-card class="px-1 py-1 my-1 mx-1">
                        <div class="title px-3 py-2 py-2">
                            <v-card color="" class="px-3 mt-2" height="auto" flat>
                                <v-container fluid grid-list-sm>
                                    <v-layout row wrap class="font-italic body-2 text-xs-center">
                                        <v-flex xs6 sm4 md3>
                                            <v-card tile flat color="pink lighten-4">
                                                <v-card-text>after</v-card-text>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs6 sm4 md3>
                                            <v-card tile flat color="pink lighten-4">
                                                <v-card-text>before</v-card-text>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs6 sm4 md3>
                                            <v-card tile flat color="pink lighten-4">
                                                <v-card-text>finally</v-card-text>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs6 sm4 md3>
                                            <v-card tile flat color="pink lighten-4">
                                                <v-card-text>first</v-card-text>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs6 sm4 md3>
                                            <v-card tile flat color="pink lighten-4">
                                                <v-card-text>so</v-card-text>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs6 sm4 md3>
                                            <v-card tile flat color="pink lighten-4">
                                                <v-card-text>then</v-card-text>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </div>

                        <v-list subheader class="">
                            <ol class="a">
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">   But <b style="text-decoration: underline">before</b> all that, I suggest we introduce ourselves round the table.
                        </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">   __________, hello, everyone, and welcome. I'm going to outline this morning's programme.
                        </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">    __________, I'll ask you to organize yourselves into small groups to discuss the concerns you've raised until coffee.

                        </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">   __________, we'Il decide where to go from here on the basis of the morning's session.


                        </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">  __________, let's get started. I'm Paul Johnson and you are ...?

                        </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">  __________, to get the ball rolling, I want you to write down your three main concerns.
                        </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">  __________, the break, we'll hear what you've decided in your small groups.
                        </h1></li>
                                </v-card>
                            </ol>
                        </v-list>

                        <v-btn dark block @click.native="dialog2 = false">Close</v-btn>
                    </v-card>
                </v-dialog>

                <div class="title pr-2 pt-2 pink--text font-weight-regular font-italic">
                    Stating the purpose and aims
                </div>
                <div class="title pt-4 px-2 pb-2">
                    <li>
                        Rewrite the sentences using <b>to-</b> clause of purpose.
                    </li>
                </div>

                <v-btn dark block @click.stop="dialog3 = !dialog3" @click="e1 = 1" class="
                my-2 mx-2">
                    click here to view activity
                </v-btn>

                <v-dialog v-model="dialog3" width="750px" height="600px">
                    <v-card class="px-1 py-1 my-1 mx-1">
                        <v-list subheader class="">
                            <ol class="a">
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">   At this meeting, we will
                                          consider the proposals to cut costs. The aim
                                          <b style="text-decoration: underline"><i>of this meeting is to consider</i></b> the proposals to cut costs.

                </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">  The meeting today is about agreeing on a strategy for the next 12 months.
The purpose of today's meeting __________ a strategy for the next 12 months.

                </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">  We are doing this because we need to review our company policy.
This __________ our company policy.


                </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2"> This morning, we are considering the priorities and drawing up a plan of action.
Our goals this morning __________ the priorities and __________ a plan of action.

                </h1></li>
                                </v-card>
                                <div id="divider">
                                    <v-divider></v-divider>
                                </div>
                                <v-card color="" class="px-3 my-2" height="auto" flat>
                                    <li>
                                        <h1 class="subheading px-2">  We are meeting today because we need to deal with this crisis quickly.
The reason for meeting today __________ this crisis quickly.


                </h1></li>
                                </v-card>

                            </ol>
                        </v-list>
                        <v-btn dark block @click.native="dialog3 = false">Close</v-btn>
                    </v-card>
                </v-dialog>

                <div class="title pt-4 px-2 pb-2">
                    <li>
                         a. Listen to the sentences and underline the words that are stressed. Notice how quickly the unstressed word are said.<b>(1.3 Ω)</b>
                    </li>
                </div>

                <v-btn dark block @click.stop="dialog4 = !dialog4" @click="e1 = 1" class="
                my-2 mx-2">
                    click here to view activity
                </v-btn>
                <v-dialog v-model="dialog4" width="750px" height="600px">
                    <v-card class="px-1 py-1 my-1 mx-1">
                <v-list subheader class="">
                    <ol class="a">
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">  Is there anything you don't understand?
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Right, good morning everyone, and welcome.
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">  I must say it’s great to see you again.
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> This morning, we’re going to review the past year.
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> First, I suggest that we divide our results.
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Are there any questions?
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Is there anything anyone would like to add?
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">  First things first, though.
                </h1></li>
                        </v-card>
                    </ol>
                </v-list>
                  <v-btn dark block @click.native="dialog4 = false">Close</v-btn>
              </v-card>
            </v-dialog>


                <div class="title pt-4 px-2 pb-2">
                  b. Listen to the same sentences broken down into smaller parts and repeat them.<b>1.4Ω</b>
                </div>
                <v-btn dark block @click.stop="dialog5 = !dialog5" @click="e1 = 1" class="
                my-2 mx-2">
                    click here to view activity
                </v-btn>
                <v-dialog v-model="dialog5" width="750px" height="600px">
                    <v-card class="px-1 py-1 my-1 mx-1">
                <v-list subheader class="">
                    <ol>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">  Is there anything you don't understand?
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Right, good morning everyone, and welcome.
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">  I must say it’s great to see you again.
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> This morning, we’re going to review the past year.
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> First, I suggest that we divide our results.
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Are there any questions?
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Is there anything anyone would like to add?
                </h1></li>
                        </v-card>
                        <div id="divider">
                            <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">  First things first, though.
                </h1></li>
                        </v-card>
                    </ol>
                </v-list>
                  <v-btn dark block @click.native="dialog5 = false">Close</v-btn>
              </v-card>
            </v-dialog>
            </ol>

            <div class="title pr-2 pl-3 pt-2 pink--text font-weight-regular font-italic">
              Consolidation
            </div>
            <ol class="mr-4">
              <div class="title pt-4 px-2 pb-1">
                  <li>
                    Practice what you might say at the opening of a meeting.
                  </li>
              </div>

              <v-list subheader class="pt-2">
                  <ol style="list-style-type: lower-alpha">
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <li>
                              <h1 class="subheading px-2">  Introduce yourself at a meeting of managers more senior to you.
              </h1></li>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <li>
                              <h1 class="subheading px-2"> Introduce yourself at a meeting of colleagues.
              </h1></li>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <li>
                              <h1 class="subheading px-2">  You are chairing an important meeting. State the expected outcomes and check the participants' understanding.
              </h1></li>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <li>
                              <h1 class="subheading px-2"> Welcome a number of participants to a meeting, none of whom have met before.
              </h1></li>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <li>
                              <h1 class="subheading px-2"> You are chairing a meeting. Tell he participants what you are going to do,
                                including timings. Use sequencing words. Check the participants' understanding.
              </h1></li>
                      </v-card>
                  </ol>
              </v-list>

              <div class="title pt-4 px-2 pb-2">
                  <li>
                  If you have to chair a meeting at work. Prepare for your next meeting by completing the following
                  checklist with useful language and phrases. When you next attend the opening of a meeting, look
                  back at the checklist. After the meeting, reflect on how well the opening was handled.
                  </li>
              </div>
            </ol>


        </v-card>








        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/BooksU1WelcomingParticipants">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/BooksU1Chairing">
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
        right: 0;" class="subheading">Page 7
        </div>
    </v-content>
</v-app>

</template>

<script>

export default {
    data() {
        return {
            dialog1: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            dialog5: false,
            e1: 0,
        }
    }
}

</script>
