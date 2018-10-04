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
        <v-card-media class="white--text" height="170px" src="/images/Freetalkingimages/6.jpg">
            <div id="textcontainer">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                    </v-layout>
                </v-container>
            </div>
        </v-card-media>
        <div class="py-3 ">

        <v-flex xs12 align-bottom flexbox>
            <h1><span class="display-1">Food</span></h1>
        </v-flex>

      </div>
            <div class="title pt-2 py-3 pink--text">Reading Practice</div>
             <v-card>
                    <p class="subheading py-2 mx-3">Every morning, I eat pancakes before going to work. I like them because I have a tight schedule and they are very easy to cook. First, I prepare the ingredients. I just need a cup of flour, a teaspoon of butter, a cup of water and a fresh egg. Second, I mix them all together in a bowl. Third, I pour a sufficient quantity in my small frying pan. After about two minutes, I flip it over to heat the other side. Lastly, I put fresh butter and sweet syrup on the top. Sometimes, I eat the pancakes with sweet strawberries or slices of fresh bananas.</p>
                </v-card>
                 <div class="title pt-2 py-3 pink--text">Vocabulary Review</div>
                  <v-list subheader class="">

                   <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Ingredient - an element required for something</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Sufficient - enough</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Flip - turn something over</h1>
                      </li>
                    </v-card>
                    <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Tight schedule - not enough time</h1>
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
                                <h1 class="subheading px-2"> We don't have ________ sugar to make a cake.</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">Raw fish is an important __________ in making sushi.</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">___________ the cards. What is it?</h1>
                            </li>
                        </v-card>

                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">I'll be busy on Monday. I'll have a _____________.</h1>
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
                         <h1 class="subheading px-2">What does he eat in the morning?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Why does he prefer this food?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">What are the ingredients?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">According to the article, what are the steps in making pancakes?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">What does he add to his pan cakes sometimes?</h1>
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
    right: 0;" class="subheading">Page 16
      </div>
       <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/Lesson5Grammar">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/Lesson6Vocabulary">
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
