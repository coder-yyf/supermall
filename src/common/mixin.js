import {debounce} from './utils'

import BackTop from 'components/content/backTop/BackTop'
import {BACK_POSITION} from './const'

export const itemImgListenerMixin = {
  data(){
    return {
      itemImgListener:null,
      newRefresh:null
    }
  },
  mounted(){
    this.newRefresh = debounce(this.$refs.scroll.refresh,100)
    this.itemImgListener = () =>{
      this.newRefresh()
      // console.log('我是监听的函数')
    }
    this.$bus.$on('itemImgLoad',this.itemImgListener)
    // console.log('我是混入的内容')
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return {
      isShowBackTop: false
    }
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0,300)
    },
    listenShowBackTop(position){
      this.isShowBackTop = -position.y > BACK_POSITION
    }
  }
}
