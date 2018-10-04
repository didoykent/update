<style lang="css">

#textcontainer {
    position: absolute;
    bottom: 1px;
}

#BIcontent {
    /*  background-color: green;*/
}
ol.a{
  list-style-type: lower-alpha;
}
#BIcard {
    margin: 3%;
    padding: 4%;
    margin-bottom: 3%;
    background-color: #EEEEEE;
}
#divider{
  padding-left:4%;
  padding-right:4%;
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
            <v-card-media class="white--text"  height="250px" src="/images/Jkols/OpeningaMeeting.jpg">
                <div id="textcontainer">
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        </v-layout>
                    </v-container>
                </div>
            </v-card-media>
            <div class="py-3 ">
            <v-flex xs12 align-bottom flexbox>
                <h1><span class="display-1">Opening A Meeting</span></h1>
            </v-flex>
          </div>
            <div class="title pr-2 pt-3 pb-2 pink--text font-weight-regular font-italic">
              Chairing a meeting checklist
            </div>
            <v-card class="px-2 pt-4 my-2" height="auto" flat>
                <div class="title">
                    <div class="font-italic">
                        <v-textarea outline name="input-7-4"
                        readonly
                        label="Skill"
                        value="Welcoming participants"
                        height="80px"
                        >
                      </v-textarea>
                    </div>
                </div>
                <div class="title">
                    <div class="font-italic">
                        <v-textarea outline name="input-7-4"
                        readonly
                        height="100px"
                        label="Possible Language"
                        value="It’s great to see you again. I'm really looking forward to our time together."
                        >
                      </v-textarea>
                    </div>
                </div>

                <div class="title">
                    <div class="font-italic">
                        <v-textarea outline name="input-7-4"
                        readonly
                        label="Skill"
                        value="Introducing yourself and participants"
                        height="80px"
                        >
                      </v-textarea>
                    </div>
                </div>
                <div class="">
                    <v-divider></v-divider>
                </div>
                <div class="title">
                    <div class="font-italic">
                        <v-textarea outline name="input-7-4"
                        readonly
                        height="100px"
                        label="Possible Language"
                        value="Do you all know each other?My name's..."
                        >
                      </v-textarea>
                    </div>
                </div>
                  <div class="title">
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          label="Skill"
                          value="Outlining the agenda and organization of the meeting (sequencing)"
                          height="auto"
                          >
                        </v-textarea>
                      </div>
                  </div>
                  <div class="">
                      <v-divider></v-divider>
                  </div>
                  <div class="title">
                      <div class="font-italic">
                          <v-textarea outline name="input-7-4"
                          readonly
                          height="100px"
                          label="Possible Language"
                          value="I'll go over the outline.We need to start by..."
                          >
                        </v-textarea>
                      </div>
                  </div>

                    <div class="title">
                        <div class="font-italic">
                            <v-textarea outline name="input-7-4"
                            readonly
                            label="Skill"
                            value="Stating aims and purpose"
                            height="80px"
                            >
                          </v-textarea>
                        </div>
                    </div>
                    <div class="">
                        <v-divider></v-divider>
                    </div>
                    <div class="title">
                        <div class="font-italic">
                            <v-textarea outline name="input-7-4"
                            readonly
                            height="100px"
                            label="Possible Language"
                            value="This is to...The purpose is to..."
                            >
                          </v-textarea>
                        </div>
                    </div>

                      <div class="title">
                          <div class="font-italic">
                              <v-textarea outline name="input-7-4"
                              readonly
                              label="Skill"
                              value="Checking understanding and inviting questions"
                              height="80px"
                              >
                            </v-textarea>
                          </div>
                      </div>
                      <div class="">
                          <v-divider></v-divider>
                      </div>
                      <div class="title">
                          <div class="font-italic">
                              <v-textarea outline name="input-7-4"
                              readonly
                              height="100px"
                              label="Possible Language"
                              value="Is that clear? Are there any questions?"
                              >
                            </v-textarea>
                          </div>
                      </div>
                  </v-card>
                  <div class="headline font-weight-bold">
                  Reference
                </div>
                  <div class="title pr-2 pt-3 pb-2 pink--text font-weight-regular font-italic">
                    Useful phrases
                  </div>
                  <v-list subheader>
                    <v-card color="" class="px-3 my-2 pt-2 pb-2 font-italic font-weight-bold" height="auto" flat>
                        <h1 class="title">Welcoming participants
          </h1>
                    </v-card>
                    <div id="divider">
                        <v-divider></v-divider>
                    </div>
                      <v-card color="" class="px-3 my-2 pt-2" height="auto" flat>
                          <h1 class="subheading">Thanks for coming and welcome.
            </h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> It's great to see you (all again).</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> I'm really looking forward to our time together.</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> This is a terrific opportunity for us to share our ideas and concerns.</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> First things first.</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> Do you all know each other?</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> I'm going to ask you to say a few words...</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> ... by way of introduction</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> My name's...</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> .... and I've been working as ... for the past ... years.</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> This is to enable you to (get to know ... your colleagues a little better).</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                          <h1 class="subheading"> So, now we all know who we are</h1>
                      </v-card>
                  </v-list>

  <v-list subheader>
                      <v-card color="" class="px-3 my-2 pt-2 pb-2 font-italic font-weight-bold" height="auto" flat>
                          <h1 class="title">Stating the Purpose and Aims
            </h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> We are going to ...</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> ... in terms of ...</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> The purpose is to.</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> So, by the end of…, we will be in a position to…</h1>
                      </v-card>
                      <div id="divider">
                          <v-divider></v-divider>
                      </div>
                      <v-card color="" class="px-3 my-2" height="auto" flat>
                          <h1 class="subheading"> ... so that we can ...</h1>
                      </v-card>

                  </v-list>

                  <v-list subheader>
                                      <v-card color="" class="px-3 my-2 pt-2 pb-2 font-italic font-weight-bold" height="auto" flat>
                                          <h1 class="title">Outlining the agenda
                            </h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">We've got a lot to get through.
</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">  I'll go over the outline.
</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">  I suggest that we...
</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading"> This is to...</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">This will be done (in new groupings).</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">So, let's get going.</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">We need to start by (getting ...).</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">Right, let's (get the ball rolling).</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">First, we are going to…</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">Then, we will...
</h1>
                                      </v-card>
                                      <div id="divider">
                                          <v-divider></v-divider>
                                      </div>
                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                          <h1 class="subheading">Finally, you will…
</h1>
                                      </v-card>


                                  </v-list>

                                  <v-list subheader>
                                                      <v-card color="" class="px-3 my-2 pt-2 pb-2 font-italic font-weight-bold" height="auto" flat>
                                                          <h1 class="title">Checking understanding
                                            </h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">Is that clear?
                </h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">  Are there any questions?
                </h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">  Is there anything anyone would like to add or comment on?
                </h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading"> Is there anything you don't understand?</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">Do you follow me?</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">Is there anything you want to raise?</h1>
                                                      </v-card>



                                                  </v-list>

                                                  <div class="title pr-2 pt-3 pb-2 pink--text font-weight-regular font-italic">
                                                    Vocabulary
                                                  </div>
                                                  <v-list subheader>
                                                    <v-card color="" class="px-3 my-2 pt-2 pb-2 font-italic font-weight-bold" height="auto" flat>
                                                        <h1 class="title">Strategic planning
                                          </h1>
                                                    </v-card>
                                                    <div id="divider">
                                                        <v-divider></v-divider>
                                                    </div>
                                                      <v-card color="" class="px-3 my-2 pt-2" height="auto" flat>
                                                          <h1 class="subheading">assessment
                                            </h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading"> concerns</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">  to conduct (a discussion)
</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading"> costs</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">to draw up (a plan)</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading"> to enable</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">to evaluate</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading">groupings</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading"> honesty</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading"> input</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2" height="auto" flat>
                                                          <h1 class="subheading"> openness</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading"> priorities</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading"> proposal</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading"> purpose</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading">to raise (e.g. a concern)</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading">to reconvene</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading">to set (targets)</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading">to shape</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading">to share</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading"> strategy</h1>
                                                      </v-card>
                                                      <div id="divider">
                                                          <v-divider></v-divider>
                                                      </div>
                                                      <v-card color="" class="px-3 my-2 pb-2" height="auto" flat>
                                                          <h1 class="subheading">successes</h1>
                                                      </v-card>
                                                  </v-list>



        </v-card>








        <div class="buttoncontainer">
            <div class="bottomleft">

                <v-btn round depressed flat icon large to="/BooksU1Practice">
                    <v-icon x-large>keyboard_arrow_left</v-icon>
                </v-btn>

            </div>
            <div class="bottomright">

                <v-btn round depressed flat icon large to="/BooksU1StudySuggestion">
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
        right: 0;" class="subheading">Page 8
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
