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
#divider{
  padding-left: 5%;
  padding-right: 5%;
}

#BIcard {
    margin: 3%;
    padding: 4%;
    margin-bottom: 3%;
    background-color: #EEEEEE;
    height: 100%;
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
            <v-card-media class="white--text" height="170px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                <div id="textcontainer">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        </v-layout>
                    </v-container>
                </div>
            </v-card-media>
            <div class="py-3 ">
            <v-flex xs12 align-bottom flexbox>
                <h1><span class="display-1">Meetings</span></h1>
            </v-flex>
          </div>

            <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
                <span class="subheading"><b><i>Meetings</i></b> aims to develop the skills and language needed to participate in
                  meetings where English is the medium of communication, whether listening to other participants,
                  making points or acting as chair. Meetings consists of six core units, each containing:</span>
            </v-card>
            <div class="title px-3 pink--text">
                Context
            </div>
            <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
                <span class="subheading">
  to raise awareness of the skills and issues (including cultural aspects) involved in various meeting scenarios, and to introduce different strategies for developing these skills
</span>
            </v-card>
            <div class="title px-3 pink--text">
                Presentation and Practice
            </div>
            <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
                <span class="subheading">
          of core language (vocabulary, functional phrases and pronunciation) linked to these skills

        </span>
            </v-card>
            <div class="title px-3 pink--text">
                Tips (cultural or language related)
            </div>
            <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
                <span class="subheading">
                  on how to be more effective in meetings

                </span>
            </v-card>


          <div class="title px-3 pink--text">
              Consolidation
          </div>
          <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
              <span class="subheading">
                to allow you to apply what you have learned to your own work situation


              </span>
          </v-card>
        <div class="title px-3 pink--text">
            Reference
        </div>
        <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
            <span class="subheading">
              useful phrases and vocabulary related to each unit
            </span>
        </v-card>

      <div class="title px-3 pink--text">
          Review
      </div>
      <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
          <span class="subheading">
            study suggestions and further practice (ideal for homework self-study)
          </span>
      </v-card>
    <div id ="divider" class="py-4"><v-divider></v-divider></div>
<div class="subheading pb-2">
  The book also contains:
</div>

<div class="title px-3 pink--text">
    Needs analysis
</div>
<v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
    <span class="subheading">
       This encourages you to consider what you need to focus on in order to get the most out of the book and your learning
    </span>
</v-card>

<div class="title px-3 pink--text">
     Learning journal
</div>
<v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
    <span class="subheading">
      This provides the opportunity to reflect and personalize what you have studied in the book
    </span>
</v-card>
    <div class="title px-3 pink--text">
        Resources section
    </div>
    <v-card color="" class="px-2 my-2 mx-2 py-2" height="auto" flat>
        <span class="subheading">
          This provides additional material such as photocopiable frameworks and cards
        </span>
    </v-card>
    <v-btn color="#212121" dark block @click.stop="dialog = !dialog" @click="e1 = 1" class="
    my-4">
        How To Use This Book
    </v-btn>
</v-card>



<v-dialog v-model="dialog" width="750px" height="600px">
    <v-card>
        <v-stepper v-model="e1">
            <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">Step 1</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="e1 > 2" step="2">Step 2</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">Step 3</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
                <v-stepper-content step="1">
                    <v-card color="grey lighten-2" class="mb-5" height="auto">
                        <div class="divDialogCard">
                            <p> It is recommended that you start by working through the
                                <router-link to="/BooksAnalysis"><b>Needs analysis</b></router-link>. This will help you to: </p>
                            <div class="divDialogCardlist">
                                <li>thing about your strengths and weaknesses in attending meetings in English;</li>
                                <li>identity and prioritize your immediate and future needs for meetings;</li>
                                <li>determine the order in which you work through the core units of this book.</li>
                            </div>
                        </div>
                    </v-card>
                    <v-btn color="primary" @click.native="e1 = 2">Continue</v-btn>
                </v-stepper-content>
                <v-stepper-content step="2">
                    <v-card color="grey lighten-2" class="mb-5" height="auto">
                        <div class="divDialogCard">
                            <p> You should then familiarize yourself with the
                                <router-link to="/BooksAnalysis"><b>Learning Journal</b></router-link>, to which you are asked to refer at then end of every core unit. </p>
                        </div>
                    </v-card>
                    <v-btn color="primary" @click.native="e1 = 3">Continue</v-btn>
                </v-stepper-content>
                <v-stepper-content step="3">
                    <v-card color="grey lighten-2" class="mb-5" height="auto">
                        <div class="divDialogCard">
                            <p> You should work through the units in the order they feel most appropriate to your needs and interests. </p>
                        </div>
                    </v-card>
                    <v-btn color="primary" @click.native="dialog = false">Close</v-btn>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-card>
</v-dialog>



        </v-card>

        </v-dialog>
    </v-content>
    <div class="buttoncontainer">
        <div class="bottomleft">

            <v-btn round depressed flat icon large to="/BooksIntroduction">
                <v-icon x-large>keyboard_arrow_left</v-icon>
            </v-btn>

        </div>
        <div class="bottomright">

            <v-btn round depressed flat icon large to="/BooksAnalysis">
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
    right: 0;" class="subheading">Page 2
    </div>
</v-app>

</template>

<script>

export default {
    data() {
        return {
          dialog: false,
          e1: 0 ,
        }
    }
}

</script>
