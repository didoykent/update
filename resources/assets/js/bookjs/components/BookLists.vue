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
    margin: 1%;
    padding: 1%;
    height: 98%;
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
              <v-flex xs12 sm6 offset-sm3>
      <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
        <v-layout row wrap>

          <v-flex xs6>
              <div class = "px-1">
            <v-card flat tile to="/BooksMain">
              <v-card-media
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
              ></v-card-media>
              <div style="text-align: center" class="title py-1 font-weight-medium">
              Jkols
              </div>
            </v-card>
            </div>
            </v-flex>
            <v-flex xs6>
                <div class = "px-1">
            <v-card flat tile to ="/Contents">
              <v-card-media
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="250px"
              ></v-card-media>
              <div style="text-align: center" class="title py-1 font-weight-medium">
              Megatalking
              </div>
            </v-card>
                      </div>
            </v-flex>
        </v-layout>
      </v-container>
  </v-flex>
            </section>
        </v-card>
    </v-content>
</v-app>

</template>

<script>
  export default {
    data: () => ({
      size: 'xs',
    })
  }
</script>
