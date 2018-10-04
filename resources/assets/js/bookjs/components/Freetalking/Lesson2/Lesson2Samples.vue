<style lang="css">

#textcontainer {
    position: absolute;
    bottom: 1px;
}

#BIcontent {
    /*  background-color: green;*/
}

ol.a {
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
        <v-card-media class="white--text" height="170px" src="/images/FreetalkingImages/2.jpg">
            <div id="textcontainer">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                    </v-layout>
                </v-container>
            </div>
        </v-card-media>
        <div class="py-3 ">

        <v-flex xs12 align-bottom flexbox>
            <h1><span class="display-1">Travelling</span></h1>
        </v-flex>

      </div>
      <div class="title pt-2 py-3 pink--text">
        Conversation Samples
      </div>
         <div class="title pt-2 py-3">A.</div>
          <v-card>
             <p class="subheading py-2 mx-3">
               <b> F: </b>Good afternoon! l thought  you're in France now!<br/><br/>
               <b> M: </b>Hello! We have just arrived this morning. We decided to go home earlier than planned because we were all homesick.<br/><br/>
               <b> F: </b>How long did you stay there?<br/><br/>
               <b> M: </b>We stayed for almost two months! It was a wonderful vacation.<br/><br/>
               <b> F: </b>What did you do there? Did you see the Eiffel tower?<br/><br/>
               <b> M: </b>Oh yes! We saw it for maybe ten or more times. We were mostly touring and taking pictures. My favorite place was Paris because it was filled with beautiful buildings and cafes.<br/><br/>
               <b> F: </b>Did you bring any souvenir for me?<br/><br/>
               <b> M: </b>Haha! Sure! Here, I brought you a replica of the Eiffel tower!</p>
          </v-card>
           <v-card>
             <p class="subheading py-2 mx-3">
                <b> M: </b>I'm planning to have a winter vacation abroad.<br/><br/>
                <b>F: </b>That's great! Where do you want to go?<br/><br/>
                <b>M: </b>I would really like to go to Italy but I also want to go to Japan.<br/><br/>
                <b>F: </b>Those are great choices! Italian food is delicious. There are so many nice places to go in Italy. Japan is also beautiful.  You should see the cherry blossoms!<br/><br/>
                <b>M: </b>Wow! Really?<br/><br/>
                <b>F: </b>Yes! Maybe you can go to one country this winter and to another on your next vacation.<br/><br/>
                <b>M: </b>That's a good idea.<br/><br/>
                <b>F: </b>So where will you go this winter?<br/><br/>
                <b>M: </b>I think I will go to Japan first!</p>
          </v-card>
          <div class="title pr-2 pt-2 mb-2 font-weight-regular">
                You’re on the limelight!
          </div>
          <v-list subheader class="mr-4">
                    <ul>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Have you been abroad?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> What countries have you visited?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">What was your favorite trip? Why?</h1>
                            </li>
                        </v-card>

                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">What food from other countries did you like most?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">What country do you still want to visit? Why?</h1>
                            </li>
                        </v-card>
                         <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Will you bring someone with you? Who?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Have you travelled alone? Where?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">  Do you prefer to travel alone or with friends?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Can you recommend a place in Korea for tourists?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">Why did you choose that place?</h1>
                            </li>
                        </v-card>
                    </ul>
                </v-list>
      </v-card>

      <div style="position: fixed;
    margin-left: 70%;
    padding-left: 11%;
    margin-right: 1%;
    margin-bottom: 1%;
    bottom: 0;
    left: 0;
    right: 0;" class="subheading">Page 6
      </div>
      <div class="buttoncontainer">
          <div class="bottomleft">

              <v-btn round depressed flat icon large to="/Lesson2Vocabulary">
                  <v-icon x-large>keyboard_arrow_left</v-icon>
              </v-btn>

          </div>
          <div class="bottomright">

              <v-btn round depressed flat icon large to="/Lesson3Colors">
                  <v-icon x-large>keyboard_arrow_right</v-icon>
              </v-btn>

          </div>
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
