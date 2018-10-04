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
            <div class="title pr-2 pt-3 pb-2 pink--text font-weight-regular font-italic">
                Reading Practice
            </div>
            <ol style="list-style-type: upper-alpha;">
                <div class="title pt-3 px-2">
                    <li>
                        My name is Jenny Kim. I am Korean. I live in Buk-gu, Busan. I am 24 years old. I am a university student. My major is Business Management. My hobbies are watching movies and reading books.
                    </li>
                </div>
                <v-list subheader class="mr-4">

                    <v-card color="" class="px-2 pt-3" height="auto" flat>
                        <h1 class="subheading">What is her name?
              </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What is her nationality?
              </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">Where does she live?
              </h1>
                    </v-card>

                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What is her major?
              </h1>
                    </v-card>


                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading"> What are her hobbies?
              </h1>
                    </v-card>


                </v-list>
                <div class="title pt-3 px-2">
                    <li>
                      I am Lucy Smith. I am an American. My address is 324 Bell St., Albany, New
York. I am 35 years old and I am a saleswoman. I work for a cosmetics company.
I have two sons who love to play soccer. I like to play sports like badminton and tennis during the weekends.

                    </li>
                </div>
                <v-list subheader class="mr-4">

                    <v-card color="" class="px-2 pt-3" height="auto" flat>
                        <h1 class="subheading">What is her name?
                </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What is her nationality?
                </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">How old is she?
                </h1>
                    </v-card>

                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What is her address?
                </h1>
                    </v-card>


                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">How many sons does she have?
                </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What do they like to do?
                </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What is her hobby?
                </h1>
                    </v-card>


                </v-list>
                <div class="title pt-3 px-2">
                    <li>
                      My name is Michael Adams. My address is 324 Bell St., Albany, New York. I am 17 years old. I am a high school student. My favorite subjects are English and History. My father is a pilot and my mother is a housewife. I want to be a famous singer someday. I like to sing and dance.
                    </li>
                </div>
                <v-list subheader class="mr-4">

                    <v-card color="" class="px-2 pt-3" height="auto" flat>
                        <h1 class="subheading">What is her name?
              </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">How old is he?
              </h1>
                        </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What are his favorite subjects?
              </h1>
                    </v-card>

                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What is his father's job?
              </h1>
                    </v-card>


                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">How about his mother?
              </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>

                    <v-card color="" class="px-2 my-2" height="auto" flat>
                        <h1 class="subheading">What are his hobbies?
              </h1>
                    </v-card>


                </v-list>



            </ol>
            </div>
        </v-card>
        </div>


        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/Contents">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/SetB">
                    <v-icon x-large>keyboard_arrow_right</v-icon>
                </v-btn>

            </div>
        </div>
        <div id="parent4" class="subheading">Page 1
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
