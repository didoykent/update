<style lang="css">

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
          <v-card-media class="white--text" height="250px" src="/images/Jkols/Unit3Context.jpg">
                <div id="textcontainer">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        </v-layout>
                    </v-container>
                </div>
            </v-card-media>
            <div class="py-3 ">
            <v-flex xs12 align-bottom flexbox>
                <h1><span class="display-1">Problem Solving</span></h1>
            </v-flex>
          </div>

    <ol class = "mr-4">
      <div class="title pr-2 py-2 pink--text font-weight-regular font-italic">
        Consolidation
      </div>

                <div class="title pt-4 px-2 pb-2">
                    <li>
                    If you were the leader of a problem-solving meeting,. how would you deal with each situation?
                    </li>
                </div>
                <v-list subheader class="">
                  <ol style="list-style-type: lower-alpha">
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                        <h1 class="subheading px-2"> One of the participants isn't contributing anything to the discussion.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>  <li>
                        <h1 class="subheading px-2"> One of the participants is dominating the discussion, and you can see all the other people in the room are getting frustrated.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> One of the participants is making a lot of suggestions, but they are all very unrealistic.

                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> One of the participants just agrees with everyone else's suggestions. He never makes any contributions of his own.


                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">No one seems to have any good ideas.

                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">The group is having a fascinating discussion, but you are running short of time and you haven't got any workable ideas yet.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">Two of the participants seem to have got together before the meeting and keep arguing very strongly for the same point.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">Everyone seems to want to make their own points, so that no one seems to be listening to anyone else.
                </h1></li>
                    </v-card>
                  </ol>

                </v-list>

                <div class="title pt-2 py-3">
                    <li>
                      When you are next in the position of presenting information at a meeting, try out this strategy. Afterwards, think about: how it went. Use the following checklist to help you.
                    </li>
                </div>

                <v-list subheader class="">
                  <div class="title">
                    <h1 class="title pl-2 pb-1 pt-2 font-weight-medium">Skill</h1>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          value="Making suggestions"
                          height="80px"
                          >
                        </v-textarea>
                      </div>
                  </div>
                  <div class="title">
                    <h1 class="title pl-2 pb-1 pt-2 font-weight-medium">Possible Language</h1>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          height="100px"
                          value="What if ...?"
                          >
                        </v-textarea>
                      </div>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          height="100px"
                          value="How about ...?"
                          >
                        </v-textarea>
                      </div>
                  </div>
                  <div class="title">
                    <h1 class="title pl-2 pb-1 pt-2 font-weight-medium">Skill</h1>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          value="Building on suggestions"
                          height="80px"
                          >
                        </v-textarea>
                      </div>
                  </div>
                  <div class="title">
                    <h1 class="title pl-2 pb-1 pt-2 font-weight-medium">Possible Language</h1>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          height="100px"
                          value="Picking up on ..."
                          >
                        </v-textarea>
                      </div>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          height="100px"
                          value="We could ..."
                          >
                        </v-textarea>
                      </div>
                  </div><div class="title">
                    <h1 class="title pl-2 pb-1 pt-2 font-weight-medium">Skill</h1>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          value="Responding to suggestions"
                          height="80px"
                          >
                        </v-textarea>
                      </div>
                  </div>
                  <div class="title">
                    <h1 class="title pl-2 pb-1 pt-2 font-weight-medium">Possible Language</h1>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          height="100px"
                          value="That's a real possibility."
                          >
                        </v-textarea>
                      </div>
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          height="100px"
                          value="Can you expand on that?"
                          >
                        </v-textarea>
                      </div>
                  </div>
                </v-list>

            </ol>

        </v-card>








        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/BooksU3Practice">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/BooksU3Reference">
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
        right: 0;" class="subheading">Page 19
        </div>
    </v-content>
</v-app>

</template>

<script>

export default {
    data: () => ({

    })
}

</script>
