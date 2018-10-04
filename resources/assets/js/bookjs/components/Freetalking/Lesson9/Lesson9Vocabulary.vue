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
        <v-card-media class="white--text" height="170px" src="/images/Freetalkingimages/9.jpg">
            <div id="textcontainer">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                    </v-layout>
                </v-container>
            </div>
        </v-card-media>
        <div class="py-3 ">

        <v-flex xs12 align-bottom flexbox>
            <h1><span class="display-1">The Weather</span></h1>
        </v-flex>

      </div>
            <v-card>
                    <p class="subheading py-2 mx-3">Sunny days are bright and fun! Scientists said sunlight can help people feel happier and healthier as it helps the body produce Vitamin D which helps form strong bones. However, do you know that staying too long in the sun can damage the skin? Fair­skinned people can get severe sunburns if they don’t use enough protection.  Aside from sunburns, excessive sun can also damage the eyes. This is why people should wear hats and use umbrellas and sunscreen lotions.  Because we sweat a lot on a sunny day, we can get dehydrated so drinking a lot of water is also highly recommended.</p>
                </v-card>
                <div class="title pt-2 py-3 pink--text">Vocabulary Review</div>
                 <v-list subheader class="">

                   <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Fair (adj) - pale or light colored</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Severe (adj) - serious</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Excessive (adj) - too much</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Sweat (v) - to excrete salty fluid from the skin</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Dehydrate (v) - lose water</h1>
                      </li>
                    </v-card>

                </v-list>
                <div class="title pt-2 py-3 pink--text">Vocabulary Stop</div>
                <v-list subheader class="">
                    <ol>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> Pastel colors look good on _____________ skinned people.</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">That’s an ___________ amount of food! Can you eat all of it?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> I really ________ a lot. I have to bring an extra t-shirt.</h1>
                            </li>
                        </v-card>

                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">That looks like a ______________ injury. We should bring her to the hospital!</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> In the desert, you get ___________ easily.</h1>
                            </li>
                        </v-card>
                    </ol>
                </v-list>
                  <div class="title pr-2 pt-2 mb-2 font-weight-regular">Can you make sentences?</div>
                    <v-list subheader class="">

                   <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">How can sunlight help people?</h1>
                      </li>
                    </v-card>

                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">What is the use of Vitamin D?</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">What can too long in the sun do? What can too much sun do to the eyes?</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">What should people do to protect themselves?</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">What should we do to avoid getting dehydrated?</h1>
                      </li>
                    </v-card>

                </v-list>

      </v-card>
      <div style="position: fixed;
    margin-left: 70%;
    padding-left: 11%;
    margin-right: 1%;
    margin-bottom: 1%;
    bottom: 0;
    left: 0;
    right: 0;" class="subheading">Page 26
      </div>
       <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/Lesson9TheWeather">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/Lesson9Samples">
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
