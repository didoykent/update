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
          <v-card-media class="white--text"  height="250px" src="/images/Jkols/Unit2Context.jpg">
              <div id="textcontainer">
                  <v-container fill-height fluid>
                      <v-layout fill-height>
                      </v-layout>
                  </v-container>
              </div>
          </v-card-media>
          <div class="py-3 ">
          <v-flex xs12 align-bottom flexbox>
              <h1><span class="display-1">Presenting Information</span></h1>
          </v-flex>
        </div>




    <ol class = "mr-4">
      <div class="title pr-2 py-2 pink--text font-weight-regular font-italic">
      Stating facts and giving reasons
      </div>
                <div class="title pt-2 px-2 pb-2">
                    <li>
                        Choose the correct answers.
                    </li>
                </div>
                <v-list subheader class="">
                  <ol class="a">
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                        <h1 class="subheading px-2"> Matt says the project <b class="pink lighten-4"><i>is/isn’t</i></b> on schedule.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>  <li>
                        <h1 class="subheading px-2"> There is a problem with the <b class="pink lighten-4"><i>picture/project</i></b>.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> Matt <b class="pink lighten-4"><i>thinks/doesn’t think</i></b> the specifications will need to be modified.

                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> The client's original brief <b class="pink lighten-4"><i>asked/didn't ask</i></b> for a video component.


                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> There <b class="pink lighten-4"><i>is/isn’t</i></b> enough money to keep to the original specifications.

                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">  The expected production costs were <b class="pink lighten-4"><i>correct/incorrect</i></b>.
                </h1></li>
                    </v-card>
                  </ol>

                </v-list>



                <div class="title pt-2 py-2">
                    <li>
                        Complete the sentences
                    </li>
                </div>
                <v-list subheader class="">
                  <ol class="a">
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                        <h1 class="subheading px-2"> This call is _________ up to date on how things stand with the project so far.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>  <li>
                        <h1 class="subheading px-2"> Generally, things are going well, and we're on schedule, but I need to put you _______ on a problem we're facing ...
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">  It ___________ we’re going to have to make a few modifications.

                </h1></li>
                    </v-card>

                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">…but ________________ that the budget won't stretch to it.


                  </h1></li>
                    </v-card>


                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> …….and shoot, ________________ we're unlikely to meet the tight schedule ...


                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> Yes, I know, but we're ________________ we probably all underestimated ...


                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">   Looking at the situation realistically, _________________ we go over budget and behind schedule or we look for a way round it.
                </h1></li>
                    </v-card>
                  </ol>

                </v-list>

<div class = "my-2">
                <v-card>
              <p class="subheading py-1 mx-3">
              <b>Michael Oldman:</b><i>But Matt, the videos are key to the design of the package, and we costed them in when the budget was agreed.</i>
              </p>
              <p class="subheading py-1 mx-3">
              <b>Man Woffe: </b><i>Yes, I know, but we’re in this situation because we probably all
                underestimated the production costs at the time. Maybe we were just being overambitious...
                the number of actors needed, the scenarios you wanted, they all take time and money. Looking at the situation realistically.
                This means either we go over budget and behind schedule, or we look for a way round it.</i>
              </p>
            <p class="subheading py-1 mx-3">
            <b>Scott Myers:</b><i>I'm not very happy to hear this, Man. Have you 3 It got any suggestions?</i>
            </p>
                </v-card>
</div>

                <div class="title pr-2 pt-3 pink--text font-weight-regular font-italic">
                  Building an argument
                </div>
                <div class="title pt-2 py-3">
                    <li>
                      Answer the questions.
                    </li>
                </div>

                <v-list subheader class="">
                  <ol class="a">
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                        <h1 class="subheading px-2"> Does Matt suggest an alternative solution?
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>  <li>
                        <h1 class="subheading px-2">  How many reasons does Matt give to support his suggestion?
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">   How does Scott react to Matt's suggestion?

                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> What does Michael suggest?
                </h1></li>
                    </v-card>
                  </ol>
                </v-list>

                <div class="title pt-4 px-2 pb-2">
                    <li>
                      There is one mistake in each of these extracts from the second part of the conversation. Correct the mistakes.
                    </li>
                </div>

                <v-list subheader class="">
                  <ol class="a">
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                        <h1 class="subheading px-2"> Look, let me online an alternative which means we can stay in budget.

                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>  <li>
                        <h1 class="subheading px-2"> What could we do is instead of having videos for every unit, replace some with an audio sequence and photo stills.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">  I think I will be good to have the variety of approach...

                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> ... and however, research suggests that photo stills with audio support can be more effective than video when presenting information.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> Sure, Michael, no problem. I think you'll be pleasantly surprising.
                </h1></li>
                    </v-card>

                  </ol>
                </v-list>

                <div class="title pr-2 pt-3 pink--text font-weight-regular font-italic">
                Stating facts and giving reasons
                </div>

                <div class="title pt-2 px-2 pb-2">
                    <li>
                      Which of these ways of inviting responses are used in the conversation?
                    </li>
                </div>

                <v-list subheader class="">
                  <ol class="a">
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                        <h1 class="subheading px-2">What do you think?
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>  <li>
                        <h1 class="subheading px-2"> Have you got any suggestions?
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2">  How about you?
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> How will this impact on ...?
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> What are your feelings on this?
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> Any thoughts on this?
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> Get back to me with your reactions.
                </h1></li>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat><li>
                        <h1 class="subheading px-2"> What's your opinion?
                </h1></li>
                    </v-card>

                      </ol>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading px-2">Which words do we stress?
                </h1>
                    </v-card>


                </v-list>
            </ol>

        </v-card>








        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/BooksU2PresentingInformation">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/BooksU2Practice">
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
        right: 0;" class="subheading">Page 11
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
