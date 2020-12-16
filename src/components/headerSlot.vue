<template>
  <div class="lot">
    <slot name="headerSlot" :age="pick.age"></slot>
    <div>子子</div>
    <slot name="foot" :age="pick.age" v-if="pick.age<25||pick.age>30"></slot>
  </div>
</template>

<script>
export default {
  name: 'HeaderSlot',
  data(){
    return{
      msg: 0,
      pick:{
        name:'cai',
        age:18
      }
    }
  },
  watch:{
    // msg(newV,oldV){
    //   console.log('检测',newV)
    // },
    // 'pick.age'(newV,oldV){
    //   console.log('深度',newV)
    // },
    // 'piack.age':{
    //   deep:true,
    //   immediate:true,
    //   handler:function(newV,oldV){
    //     console.log('深度',newV)
    //   }
    // },
    // pick:{
    //   deep:true,
    //   immediate:true,
    //   handler:function(newV,oldV){
    //     console.log('深度',newV)
    //   }
    // }
  },
  methods:{
    chang(){
      this.msg="改变"
      console.log('1111')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
