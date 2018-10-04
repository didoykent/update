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
<!--
<template>

<v-app>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card id="BIcard">
              <v-card-media class="white--text" height="170px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
                  <div id="textcontainer">
                      <v-container fill-height fluid>
                          <v-layout fill-height>
                          </v-layout>
                      </v-container>
                  </div>
              </v-card-media>
              <div class="py-3 ">
              <v-flex xs12 align-bottom flexbox>
                  <h1><span class="display-1">Introduction</span></h1>
              </v-flex>
            </div>
                <v-list subheader>
                    <v-subheader class="pt-5">Feature of the series include</v-subheader>

                    <v-list-tile v-for="item in items">
                        <v-list-tile-content>
                            <v-list-tile-title v-text="item.title"></v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>

            </v-card>
        </v-flex>
    </v-layout>
</v-app>
</template> -->

<template>

    <v-app>
        <v-content id="BIcontent">
            <v-card id="BIcard">
              <v-card-media class="white--text" height="170px" src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg">
                  <div id="textcontainer">
                      <v-container fill-height fluid>
                          <v-layout fill-height>
                          </v-layout>
                      </v-container>
                  </div>
              </v-card-media>
              <div class="py-3 ">
              <v-flex xs12 align-bottom flexbox>
                  <h1><span class="display-1">Introduction</span></h1>
              </v-flex>
            </div>
                <v-list subheader>
                    <v-subheader class="pb-3 pt-5">Feature of the series include</v-subheader>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading">Individual Needs analysis and Learning journal</h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading"> Awareness-raising activities</h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading"> Extensive personalized exercises</h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading"> Tips for effective performance in business
</h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading"> Helpful suggestions for language study</h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading"> Regular language reference and review sections
</h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading"> Photocopiable resources</h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading"> An integrated audio CD
</h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                    <v-card color="" class="px-3 my-2" height="auto" flat>
                        <h1 class="subheading"> Full transcripts and answer keys </h1>
                    </v-card>
                </v-list>

                </div>
            </v-card>
          </div>


            <div class="buttoncontainer">
                <div class="bottomleft">

                    <v-btn round depressed flat icon large to="/BooksMain">
                        <v-icon x-large>keyboard_arrow_left</v-icon>
                    </v-btn>

                </div>
                <div class="bottomright">

                    <v-btn round depressed flat icon large to="/BooksMeetings">
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
        return {
            dialog: false,
            e1: 0,
            items: [{
                title: ' Individual Needs analysis and Learning journal'
            }, {
                title: ' Awareness-raising activities'
            }, {
                title: 'Extensive personalized exercises'
            }, {
                title: 'Tips for effective performance in business'
            }, {
                title: 'Helpful suggestions for language study'
            }, {
                title: 'Regular language reference and review sections'
            }, {
                title: 'An integrated audio CD'
            }, {
                title: 'Full transcripts and answer keys'
            }, ]
        }
    }
}

</script>
