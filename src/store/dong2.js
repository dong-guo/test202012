export default {
    namespaced: true,
    state:{
        donNum2:null,
    },
    getters:{
        donNum2: state => state.donNum2
    },
    mutations:{
      setDonNum2(state,number){
        state.donNum2 = number
      }
    },
    actions: {
      updateDongNum2(context,date){
        if(date>=5){
            context.dispatch('setDonNum2',date)
        }
      }
    }
}