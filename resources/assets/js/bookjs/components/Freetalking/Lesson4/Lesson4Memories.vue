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
        <v-card-media class="white--text" height="170px" src="/images/FreetalkingImages/4.jpg">
            <div id="textcontainer">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                    </v-layout>
                </v-container>
            </div>
        </v-card-media>
        <div class="py-3 ">

        <v-flex xs12 align-bottom flexbox>
            <h1><span class="display-1">Memories</span></h1>
        </v-flex>

      </div>
         <div class="title pt-2 py-3 pink--text">Reading Practice</div>
          <v-card>
            <p class="subheading py-2 mx-3">Although I live in California now, I grew up in Gwangju. As a kid, I played in the fields and drew the mountains with my friends. My mother cooked very well and she ran a small cafe for tourists.  She brewed very delicious tea everyday. My father was a History professor at Chosun University. He told me a lot of stories about the world. He toured me often to the magnificent historical temples there. I had a happy childhood. It feels nostalgic to think about it sometimes.</p>
          </v-card>
          <div class="title pt-2 py-3 pink--text">Vocabulary Review</div>
             <v-list subheader class="">

                   <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Brew - to boil leaves and other ingredients in water to make tea or beer</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Memory - something that is remembered</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Magnificent - beautiful and impressive</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Nostalgia - bittersweet feelings when thinking of the past; a longing</h1>
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
                                <h1 class="subheading px-2"> When I feel sad, I think about our happy ________ during vacation and I feel better.</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> How do they ___________ this beer? It’s so delicious.</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">The clear night sky looks very _____________.</h1>
                            </li>
                        </v-card>

                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> It feels __________ visiting my hometown after ten years.</h1>
                            </li>
                        </v-card>
                    </ol>
                </v-list>
                 <div class="title pr-2 pt-2 mb-2 font-weight-regular">Can you make your own sentences?</div>
                <v-list subheader class="">

                   <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Where did the writer grow up?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">What did he do as a child?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">What did his mother do?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">How about his father?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">How does he feel about his childhood?</h1>
                      </li>
                    </v-card>
                     <div id="divider">
                      <v-divider></v-divider>
                   </div>
                   <v-card color="" class="px-3 my-2" height="auto" flat>
                      <li>
                         <h1 class="subheading px-2">Where does he live now?</h1>
                      </li>
                    </v-card>

                </v-list>
        </v-card>
      </v-card>
    </v-card>
    <div style="position: fixed;
  margin-left: 70%;
  padding-left: 11%;
  margin-right: 1%;
  margin-bottom: 1%;
  bottom: 0;
  left: 0;
  right: 0;" class="subheading">Page 10
    </div>
       <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/Lesson3Samples">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/Lesson4Vocabulary">
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
