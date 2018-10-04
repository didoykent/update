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

<div class="pb-4">
            <v-list subheader>
                <v-subheader class="pb-3 pt-3">This unit looks at:</v-subheader>
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading">stating facts and giving reasons</h1>
                </v-card>

                    <v-divider></v-divider>
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading">building an argument
</h1>
                </v-card>

                    <v-divider></v-divider>
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading">Inviting responses</h1>
                </v-card>

            </v-list>

            </div>


            <div class="py-3 ">
            <v-flex xs12 align-bottom flexbox>
                <h1><span class="display-1">Context</span></h1>
            </v-flex>
          </div>
        <v-card>

          <ol>

            <div class="title pt-3 px-2">
            <li>
              Sometimes the information you have to present in a meeting is not going to please the other participants. What do you think is the best way of presenting unwelcome news?
            </li>
          </div>
      <v-list subheader class="mr-4">

          <v-card color="" class="px-2 pt-3" height="auto" flat>
              <h1 class="subheading"> Be direct and start with the bad news.</h1>
</h1>   </v-card>
              <v-divider></v-divider>

          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading">Begin with something positive and introduce the bad news later.</h1>
</h1>
          </v-card>
              <v-divider></v-divider>
          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading"> Only introduce the bad news if you have a possible solution to offer.</h1>
          </v-card>

              <v-divider></v-divider>
          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading"> Warn the participants by introducing the bad news indirectly by e-mail or letter before the meeting.</h1>
          </v-card>


              <v-divider></v-divider>

          <v-card color="" class="px-2 my-2" height="auto" flat>
              <h1 class="subheading"> Another approach (specify what!)</h1>
          </v-card>


      </v-list>

      <div class="title pt-3 px-2">
      <li>
        Have you ever participated in a meeting by phone or videolink?
      </li>
    </div>

<v-list subheader class="mr-4">

    <v-card color="" class="px-2 pt-3" height="auto" flat>
        <h1 class="subheading font-weight-regular font-italic">What difficulties could you experience in English when the meeting is not face to face?

</h1>   </v-card>

</v-list>

    </ol>
        </v-card>

        <v-card color="" class="px-2 pt-3 mt-2" height="auto">
          <v-card-media class="white--text" contain height="300px" src="/images/Jkols/mannwoffe.jpg">
          </v-card-media>
            <span class="subheading">
              <b>Matt Wolfe</b> works for an e-Iearning company in Brighton, England, which produces online training packages
              for a major client with offices in the USA and Australia. Matt is ringing Scott Myers in Chicago and
              Michael Oldman in Sydney to give them an account of the progress on a project.
    </span>
        </v-card>
        <h1 class="title py-2 mx-3 font-weight-medium"><b>1.1 Ω</b></h1>
        <v-card>
          <p class="subheading py-1 mx-3">
          <b>Man Woffe: </b><i>Hello, Scott. Hi, Michael.</i>
          </p>
        <p class="subheading py-1 mx-3">
        <b>Scott Myers:</b><i>Hi Matt, Hi Michael. </i>
        </p>
      <p class="subheading py-1 mx-3">
      <b>Michael Oldman:</b><i>G'day. both! </i>
      </p>
      <p class="subheading py-1 mx-3">
      <b>Man Woffe: </b><i>OK, so this call is to bring you up to date on how things stand with the project so far. Generally, things are going well and we're on schedule, but I need to put you in the picture on a problem we're facing with the original specifications. It looks as if we're going to have to make a few modifications.</i>
      </p>
    <p class="subheading py-1 mx-3">
    <b>Scott Myers:</b><i>Oh ...doesn't sound good!</i>
    </p>
  <p class="subheading py-1 mx-3">
  <b>Man Woffe: </b><i>Wen, the problem is that your original brief asked for a video component to introduce each training unit, but what we’re finding is that the budget won't stretch to it. Also, each video's taking time to set up and shoot, which means that we're unlikely to meet the tight schedule for delivery that you've asked for. </i>
  </p>
        </v-card>



  </v-card>



        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/BooksU1StudySuggestion">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="BooksU2Stating">
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
        right: 0;" class="subheading">Page 10
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
