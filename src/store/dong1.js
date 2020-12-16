export default {
    // namespaced: true,
    state:{
        dongNum1:0,
    },
    getters:{
        dongNum1: state=>state.dongNum1
    },
    mutations:{
        setDongNum1(state,number){
        state.dongNum1 = number
      }
    },
    actions: {
      updateDongNum1(context,date){
          console.log('date',date)
        if(date%5==0){
          context.commit('setDongNum1',date)
        }
      }
    }
}