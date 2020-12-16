<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <div>{{msg}}</div> -->
    <!-- <div>{{list.name}}</div>
    <headerSlot ref="child">
      <template v-slot:headerSlot="{age}">
        <h1>Here might be a page title--{{age}}</h1>
      </template>
      <template v-slot:foot={age}>
        <h1>冻结{{age}}</h1>
      </template>
    </headerSlot>
    <button @click="chang">那妞</button> -->
     <button @click="add">加</button> 
     <span>{{dongNum1}}</span>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import myMin from '@/utils/commin.js'
import {list,fly} from '@/utils/deta'
import headerSlot from '@/components/headerSlot'
import { mapActions, mapGetters,mapState } from 'vuex'

export default {
  name: 'Home',
  mixins: [myMin],
  components:{
    headerSlot
  },
  data(){
     return {
       list:{...list},
       num:0
     }
  },
  computed:{
    // ...mapGetters('dong1',['dongNum1'])
    
    ...mapGetters(['dongNum1'])
  },
  mounted(){
    console.log('dongNum1',this.dongNum1)
    // console.log(1)
    // setTimeout(()=>console.log(2))
    // console.log(3)
    // console.log(this.com(2550))
    this.fn()
  },
  methods:{
    ...mapActions(['updateDongNum1']),
    add(){
      this.num+=1
      this.updateDongNum1(this.num)
      // this.$store.dispatch("updateDongNum1", this.num)
    },
    chang(){
      this.$refs.child.pick.age +=1 
      // console.log('1111',this.$refs.child.pick.age)
    },
    com(num){
      return new Promise(resolve=>{
        resolve(num)
      })
    },
    fn(){
      let com = new Promise(resolve=>{
					resolve()
			}).then(()=>{
        console.log('222')
        this.dropKey = false
      })
    }
  }
}
</script>
