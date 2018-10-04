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
            <v-card-media class="white--text" height="170px" src="/images/FreetalkingImages/1.jpg">
                <div id="textcontainer">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        </v-layout>
                    </v-container>
                </div>
            </v-card-media>
            <div class="py-3 ">
                <v-flex xs12 align-bottom flexbox>
                    <h1><span class="display-1">Introducing One's Self</span></h1>
                </v-flex>
            </div>
            <div class="title pt-2 py-3 pink--text">Grammar Stop!</div>
            <div class="subheading pr-2 pt-2 mb-2 font-weight-regular">TO is followed by the base form of the verb (no -ing).
                <br/>
                <br/> TO + PLAYING basketball
                <br/> TO + PLAY basketball
                <br/>
                <br/> TO + SINGING songs
                <br/> TO + SING songs
            </div>

            <div class="title pt-4 pb-1">
                Tell your hobbies in two ways.
            </div>
            <v-list subheader class="">

                <v-card color="" class="px-2 pt-3" height="auto" flat>
                    <h1 class="subheading">Your hobbies are watching TV and listening to music.
        </h1>
                    <h1 class="subheading">My hobbies are _______________.
        </h1>
                    <h1 class="subheading">I like to ______________________.
</h1>
                </v-card>
                <div id="divider">
                    <v-divider></v-divider>
                </div>

                <v-card color="" class="px-2 my-2" height="auto" flat>
                    <h1 class="subheading">Your hobbies are belly dancing and playing the piano.
        </h1>
                    <h1 class="subheading">My hobbies are ________________.
        </h1>
                    <h1 class="subheading">I like to _______________________.
</h1>
                </v-card>
            </v-list>

            <div class="title pt-4 pb-1">
                Make an introduction using these information:
            </div>
            <v-list subheader class="">
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading px-2">Student
</h1>
                    <h1 class="subheading px-2">Stella Park
</h1>
                    <h1 class="subheading px-2">25 years old
</h1>
                    <h1 class="subheading px-2">Australia for two years
</h1>
                    <h1 class="subheading px-2">Baking cakes
</h1>
                    <h1 class="subheading px-2">Playing the violin
</h1>
                </v-card>
            </v-list>
            <v-list subheader class="">
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading px-2">Jeremy Santos
</h1>
                    <h1 class="subheading px-2">17years old
</h1>
                    <h1 class="subheading px-2">High School Student
</h1>
                    <h1 class="subheading px-2">Mexico City, Mexico
</h1>
                    <h1 class="subheading px-2">Play guitar
</h1>
                    <h1 class="subheading px-2">Write songs
</h1>
                </v-card>
            </v-list>
            <v-list subheader class="">
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading px-2">James Allen
</h1>
                    <h1 class="subheading px-2">28 years old
</h1>
                    <h1 class="subheading px-2">Miami, Florida, USA
</h1>
                    <h1 class="subheading px-2">Read novels
</h1>
                    <h1 class="subheading px-2">Dance hip-hop
</h1>
                </v-card>
            </v-list>
            <v-list subheader class="">
                <v-card color="" class="px-3 my-2" height="auto" flat>
                    <h1 class="subheading px-2">Lucy Cruz
</h1>
                    <h1 class="subheading px-2">29 years old
</h1>
                    <h1 class="subheading px-2">Medical student
</h1>
                    <h1 class="subheading px-2">Cebu City, Philippines
</h1>
                    <h1 class="subheading px-2">Swimming in the beach
</h1>
                </v-card>
            </v-list>

            <div class="title pr-2 pt-2 mb-2 font-weight-regular">A.</div>
            <v-card>
                <p class="subheading py-2 mx-3">
                    <b>M:</b> __________________
                    <br/>
                    <b>F:</b> I am Alissa Oh
                    <br/>
                    <b>M:</b> __________________
                    <br/>
                    <b>F:</b>  I am Korean.
                    <br/>
                    <b>M:</b> __________________
                    <br/>
                    <b> F:</b> I live in Busan City, Korea.
                    <br/>
                    <b>M:</b> __________________.
                    <br/>
                    <b>F:</b>  I like to cook and play tennis.
                    <br/>
                    <b>M:</b> __________________
                    <br/>
                    <b>F:</b>  I like to cook and play tennis.
                    <br/>
                    <b>M:</b> __________________
                    <br/>
                    <b>F:</b> I am a waitress.
                    <br/>
                    <b>M:</b> __________________
                    <br/>
                    <b>F:</b> My major is Hotel Management.
                </p>
            </v-card>
            <div class="title pr-2 pt-2 mb-2 font-weight-regular">B.</div>
            <v-card>
                <p class="subheading py-2 mx-3">
                    <b>F:</b> __________________
                    <br/>
                    <b>M:</b> My name is John Jackson.
                    <br/>
                    <b>F:</b> __________________
                    <br/>
                    <b>M:</b>   I am an American.
                    <br/>
                    <b>F:</b> __________________
                    <br/>
                    <b>M:</b> I am 32 years old.
                    <br/>
                    <b>F:</b> __________________.
                    <br/>
                    <b>M:</b>  I am an architect.
                    <br/>
                    <b>F:</b> __________________
                    <br/>
                    <b>M:</b>  I live in Dallas, Texas.
                    <br/>
                    <b>F:</b> __________________
                    <br/>
                    <b>M:</b> My hobbies are drawing, painting and taking beautiful pictures.
                </p>
            </v-card>

            <h1 class="title py-1">You’re on the limelight!
        </h1>
            <h1 class="title py-1">Introduce yourself this time!
        </h1>
            <h1 class="title py-1">Follow the guide questions below
        </h1>

              <v-list subheader class="">

                  <v-card color="" class="px-2 pt-3" height="auto" flat>
                      <h1 class="subheading">What is your name?
            </h1>
                      </h1>
                  </v-card>
                  <div id="divider">
                      <v-divider></v-divider>
                  </div>

                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading">Where do you live?
                      </h1>
                  </v-card>
                  <div id="divider">
                      <v-divider></v-divider>
                  </div>
                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading">How old are you?
            </h1>
                  </v-card>

                  <div id="divider">
                      <v-divider></v-divider>
                  </div>
                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading">Are you an employee or a student?
            </h1>
                  </v-card>


                  <div id="divider">
                      <v-divider></v-divider>
                  </div>

                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading">What is your job?
            </h1>
                  </v-card>
                  <div id="divider">
                      <v-divider></v-divider>
                  </div>

                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading">What is your major?
            </h1>
                  </v-card>
                  <div id="divider">
                      <v-divider></v-divider>
                  </div>

                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading"> What are your hobbies?
            </h1>
                  </v-card>
                  <div id="divider">
                      <v-divider></v-divider>
                  </div>

                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading">What is your favorite food?
            </h1>
                  </v-card>
                  <div id="divider">
                      <v-divider></v-divider>
                  </div>

                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading">What is your favorite color?
            </h1>
                  </v-card>
                  <div id="divider">
                      <v-divider></v-divider>
                  </div>

                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading">How many people are there in your family?
            </h1>
                  </v-card>
                  <div id="divider">
                      <v-divider></v-divider>
                  </div>

                  <v-card color="" class="px-2 my-2" height="auto" flat>
                      <h1 class="subheading"> How many siblings do you have?
            </h1>
                  </v-card>


              </v-list>

        </v-card>

        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/SetB">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/Lesson2Travelling">
                    <v-icon x-large>keyboard_arrow_right</v-icon>
                </v-btn>

            </div>
        </div>

        </div>
        <div style="position: fixed;
      margin-left: 70%;
      padding-left: 11%;
      margin-right: 1%;
      margin-bottom: 1%;
      bottom: 0;
      left: 0;
      right: 0;" class="subheading">Page 3
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
