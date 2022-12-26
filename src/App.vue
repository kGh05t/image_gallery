<template> 
  <gridCompVue :cards=final />
</template>

<script>

import gridCompVue from './components/gridComp.vue';
import axios from 'axios'
export default {
  name: 'App',
  components: {
   
    gridCompVue
  },
  data(){    
    return {
      listimg:'',
      final:''
    }
  },
  methods:{
      arrayslice(){       
        this.listimg.pop()  
        this.final=this.listimg.slice(-9);
        this.final.reverse()
      }
  },
   async mounted(){        
    var p=await JSON.parse(JSON.stringify(await axios.get('https://picsum.photos/v2/list?limit=96'))); 
    this.listimg= p.data
    this.final=this.listimg.slice(-9)
    this.final.reverse()
    console.log(this.listimg)
    setInterval(() => {
      this.arrayslice();      
    }, 4000);
  },
  setup() {
    console.log("this is setup")

    // expose to template and other options API hooks
    return {
      
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
