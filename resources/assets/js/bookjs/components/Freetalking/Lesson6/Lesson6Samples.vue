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
         <div class="title pt-2 py-3 pink--text">Conversation Samples</div>
          <div class="title pr-2 pt-2 mb-2 font-weight-regular">A.</div>
          <v-card>
            <p class="subheading py-2 mx-3"><b>F:</b> What is the most exotic food you have eaten?<br/><br/>
                        <b>M:</b> Exotic? What does it mean?<br/><br/>
                        <b>F:</b> Oh, exotic means unusual or strange.<br/><br/>
                        <b>M:</b> Aha! Then it has to be the casu marzu from Italy.<br/><br/>
                       <b> F:</b> What is that?<br/><br/>
                        <b>M:</b> It's a special kind of cheese. It's made using maggots.<br/><br/>
                        <b>F:</b> Maggots? What are those?<br/><br/>
                        <b>M:</b> Maggots are insects that look like short white worms.<br/><br/>
                        <b>F:</b> Unbelievable! That’s terrible!<br/><br/>
                        <b>M:</b> Oh no, it's actually not.  We just ate the cheese, not the maggots. It was yummy!
</p>
                </v-card>
                <div class="title pr-2 pt-2 mb-2 font-weight-regular">B.</div>
                <v-card>
                    <p class="subheading py-2 mx-3"><b>M:</b> Do you know how to prepare a healthy but easy to make dish?<br/><br/>
                           <b>F:</b> Hmmm. I think so! I know how to make a vegetable salad.<br/><br/>
                            <b>M:</b> That’s great! Teach me how to!<br/><br/>
                           <b>F:</b> First, just prepare the ingredients: vegetables, mayonnaise, tuna, pepper and salt. Wash the vegetables, put them in a bowl and mix the rest of the ingredients.<br/><br/>
                            <b>M:</b> That's easy!<br/><br/>
                           <b>F:</b> Yes! You can also add other vegetables like tomatoes and carrots if you like. Instead of tuna, you can also use chicken strips.<br/><br/>
                            <b>M:</b> I think tuna is healthier. Gee, thanks for your advice.<br/><br/>
                           <b>F:</b> No problem. Just feel free to ask me anytime!<br/><br/>
                        </p>
                </v-card>
                <div class="title pr-2 pt-2 mb-2 font-weight-regular">You’re on the limelight!</div>
                <v-list subheader class="">
                    <ol>
                        <v-divider></v-divider>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">Do you know how to cook?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">What’s your favorite dish to cook? Why?</h1>
                            </li>
                        </v-card>

                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">What’s your favorite food?</h1>
                            </li>
                        </v-card>
                         <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">What are its ingredients?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">How is it prepared?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">What is the weirdest food you’ve tasted or heard of?</h1>
                            </li>
                        </v-card>

                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2">How do you feel about trying exotic foods?</h1>
                            </li>
                        </v-card>
                        <v-divider></v-divider>
                        </div>
                        <v-card color="" class="px-3 my-2" height="auto" flat>
                            <li>
                                <h1 class="subheading px-2"> What is the most popular food from your country?</h1>
                            </li>
                        </v-card>
                    </ol>
                </v-list>

      </v-card>
      <div style="position: fixed;
    margin-left: 70%;
    padding-left: 11%;
    margin-right: 1%;
    margin-bottom: 1%;
    bottom: 0;
    left: 0;
    right: 0;" class="subheading">Page 18
      </div>
       <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/Lesson6Vocabulary">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/Lesson8Friendship">
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
