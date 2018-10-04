<style>

#divH {
    font-weight: 400;
    padding-top: 3%;
    padding-left: 4%;
}

#BMlayout {
    /*  background-color: red;*/
    padding-top: 8%;
}

#h1 {
    font-weight: 500;
}

#BMsection {
    margin: auto;
}

#BMcard {
    background-color: #EEEEEE;
    margin: 3%;
    padding: 4%;
    height: 95%;
}


/*.container{
  background-color: red;
}
.layout{
  background-color: blue;
}
.content{
  background-color: yellow;
}*/

</style>

<template>

<v-app>
    <v-content id="BMcontent">
        <v-card id="BMcard">
            <section id="BMsection">
                <div id="divH" class="black--text text-xs-left">
                    Delta Business Communcation Skills
                </div>
                <v-divider>
                </v-divider>
                <v-layout id="BMlayout" column align-center justify-center class="white--text">
                    <h1 class="pink--text mb-2 display-3 text-xl-center" id="h1">Meetings</h1>
                    <div class="black--text subheading mb-3 text-md-center">by Davin King</div>
                    <router-link to="/BooksIntroduction" tag="span" style="cursor: pointer">
                        <v-btn class="pink darken-1" dark large round>
                            Get Started
                        </v-btn>
                    </router-link>
                </v-layout>
            </section>
        </v-card>
    </v-content>
</v-app>

</template>

<script>

export default {

}

</script>
