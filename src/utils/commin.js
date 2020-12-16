const myMin = {
    data(){
        return {
            msg:'12342456',
        }
    },
    created(){
        console.log('minx')
    },

    methods:{
        jum:function(){
            console.log('jum',this.msg)
        }
    }
}

export default myMin