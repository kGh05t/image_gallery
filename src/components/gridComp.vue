<template>
  
   <v-btn variant="tonal" @click="action">
  Button
</v-btn>
<div class="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>

    <v-card
    class="mx-auto"
    max-width="1300"
  > 
  
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        ><Transition>
          <v-card><Transition>
            <v-img
              :src="card.download_url"
              class="align-end"
              gradient="to bottom, rgba(0,0,142,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            ><template v-slot:placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <v-progress-circular
            indeterminate
            color="grey-lighten-4"
          ></v-progress-circular>
        </div>
      </template>
            <v-card-title class="text-white" v-text="card.author"></v-card-title>
            </v-img></Transition>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>

              <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"><v-icon large color="green darken-2">mdi-domain </v-icon></v-btn>
            </v-card-actions>
          </v-card></Transition>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>
    
<script>
  export default {
    data: () => ({
      
    }),
    props:{
        cards:Object
    },
    methods:{
        action(){
            console.log(this.cards)
        }
    }
  }
  
</script>
<style>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease-in;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>