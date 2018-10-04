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

#divider {
    padding-left: 5%;
    padding-right: 5%;
}

#container1 {
    text-align: justify;
    text-justify: inter-character;
    padding-left: 11%;
    padding-right: 11%;
    padding-bottom: 3%;
    background-color: purple;
}

.about_the_author {
    padding-top: 1%;
    background-color: purple;
}

.about_the_author_para {
    text-align: justify;
    text-justify: inter-character;
    padding-left: 8%;
    padding-right: 9%;
}

#divMeeting {
    /*  background-color: white;*/
    text-align: justify;
    text-justify: inter-character;
    padding-left: 8%;
    padding-right: 8%;
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

.divDialogCardlist {
    text-align: justify;
    text-justify: inter-character;
    padding-left: 7%;
    padding-right: 7%;
}

.divDialogCard {
    text-align: justify;
    text-justify: inter-character;
    padding: 5%;
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
            <ol style="list-style-type: upper-alpha;">
                <div class="title pt-3 px-2">
                    <li>
                      There are two ways to state your name.
                    </li>
                </div>
                <v-list subheader class="mr-4">

                    <v-card color="" class="px-2 pt-3" height="auto" flat>
                        <h1 class="subheading">The first way is:
              </h1>
                        </h1>
                        <h1 class="subheading">"My name" + "name".
              </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">The second way is:
              </h1>
                        </h1>
                        <h1 class="subheading">"I am" + "name."
              </h1>
                        </h1>
                    </v-card>


                </v-list>
                <div class="title pt-3 px-2">
                    <li>
                    There are two ways to say your address.
                    </li>
                </div>
                <v-list subheader class="mr-4">

                    <v-card color="" class="px-2 pt-3" height="auto" flat>
                        <h1 class="subheading">The first way is:
                </h1>
                        </h1>
                        <h1 class="subheading">"I live in” + "address."
                </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">The second way is:
                </h1>
                        </h1>
                        <h1 class="subheading">"My address is” + "address."
                </h1>
                        </h1>
                    </v-card>

                </v-list>

                <div class="title pt-3 px-2">
                    <li>
                    There are two ways to tell your hobby.
                    </li>
                </div>
                <v-list subheader class="mr-4">

                    <v-card color="" class="px-2 pt-3" height="auto" flat>
                        <h1 class="subheading">The first way is:
                </h1>
                        </h1>
                        <h1 class="subheading">"My hobby is" + "one hobby."
                </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">The second way is:
                </h1>
                        </h1>
                        <h1 class="subheading">"My hobbies are + "two or more hobbies."
                </h1>
                <h1 class="subheading"> "I like to  +  "hobbies."
        </h1>
                        </h1>
                    </v-card>
                </v-list>
            </ol>
            </div>
        </v-card>
        </div>


        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/IntroducingOnesSelf">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/Lesson1Grammar">
                    <v-icon x-large>keyboard_arrow_right</v-icon>
                </v-btn>

            </div>
        </div>
        <div id="parent4" class="subheading">Page 2
        </div>
    </v-content>
    <router-view></router-view>
</v-app>

</template>

<script>

export default {
    data() {
        return {}
    }
}

</script>
