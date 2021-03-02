<template>
  <div>
        <h1> {{ isLogin }} </h1>
      <div class="list">  
          <div class="item" v-for="(item,index) in list" :key="index" 
                @click="handleClick(item,index)"
             :style="{ backgroundImage: `url(${item.url})` }" >
             <button>{{item.seriesInfo.name}}购买</button>
          </div>
          
      </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    asyncData(){
        return {
            list:[{
                    "barValue":377.6681871491735,
                    "currHeat":2605.4,
                    "currHeatDesc":"2605.40",
                    "seriesInfo":{
                        "name":"刑警之海外行动",
                        "newSeries":false,
                        "platformDesc":"爱奇艺独播",
                        "platformTxt":1,
                        "releaseInfo":"上线38天",
                        "seriesId":1301633
                    },
                    "url":"https://p0.meituan.net/movie/72291e1cbc83311656e01e828ca79ddd2106074.jpg@160w_220h_1e_1c"
                },
                {
                    "barValue":348.2237766461026,
                    "currHeat":2603.58,
                    "currHeatDesc":"2603.58",
                    "playCountSplitUnit":{
                        "num":221.8,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"不可思议的爱情",
                        "newSeries":false,
                        "platformDesc":"芒果TV独播",
                        "platformTxt":-1,
                        "releaseInfo":"上线31天",
                        "seriesId":1334794
                    },
                        "url":"https://p0.meituan.net/moviemachine/6766681dc599e1964e9acbf86391207377187.jpg@160w_220h_1e_1c"
                    },
                {
                    "barValue":320.2307022098815,
                    "currHeat":2594.92,
                    "currHeatDesc":"2594.92",
                    "playCountSplitUnit":{
                        "num":69.8,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"如梦令",
                        "newSeries":false,
                        "platformDesc":"腾讯视频独播",
                        "platformTxt":-1,
                        "releaseInfo":"上线25天",
                        "seriesId":1375565
                    },
                "url":"https://p0.meituan.net/movie/9ef2f7d8d6f11c55723d7be5fa77218d1022103.jpg@160w_220h_1e_1c"
                },
                {
                    "barValue":295.41038309268447,
                    "currHeat":2594.39,
                    "currHeatDesc":"2594.39",
                    "seriesInfo":{
                        "name":"扑通扑通喜欢你",
                        "newSeries":false,
                        "platformDesc":"爱奇艺独播",
                        "platformTxt":1,
                        "releaseInfo":"上线25天",
                        "seriesId":1326291
                    },
                    "url":"https://p1.meituan.net/movie/ece9ff81e6f0af2c859aa151e42a33312706648.jpg@160w_220h_1e_1c"
                },
                {
                    "barValue":272.2196453151369,
                    "currHeat":2591.06,
                    "currHeatDesc":"2591.06",
                    "playCountSplitUnit":{
                        "num":293.7,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"我曾记得那男孩",
                        "newSeries":false,
                        "platformDesc":"多平台播放",
                        "platformTxt":-1,
                        "releaseInfo":"上线9天",
                        "seriesId":1285493
                    },
                    "url":"https://p0.meituan.net/movie/8a1ad4ec0d81f240e4d8c2d1b10c2ec53475644.jpg@160w_220h_1e_1c"
                },
                {
                    "barValue":248.72707633225536,
                    "currHeat":2565.84,
                    "currHeatDesc":"2565.84",
                    "playCountSplitUnit":{
                        "num":5.6,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"重生只为追影帝",
                        "newSeries":false,
                        "platformDesc":"腾讯视频独播",
                        "platformTxt":-1,
                        "releaseInfo":"上线23天",
                        "seriesId":1405293
                    },
                     "url":"https://p0.meituan.net/movie/48774506dc0e68805bc25d2cd087d1024316392.jpg@160w_220h_1e_1c"
                }]
        }
    },
      computed: {
    ...mapGetters('filter', [
      'include'
    ]),
    ...mapState({
      isLogin: state => state.filter.isLogin
    })
  },
  methods:{
      handleClick(item,index){
          console.log(item,"item",index);
          if (this.isLogin) {
            //   去购买页
            this.$router.push(`/films/${index}`)
          }else{
            this.$router.push({
                path:'login',
                query:{
                    id:index
                }
            })
          }
      }
  }
}
</script>

<style lang='scss' scoped>
    .list{
        width: 600px;
        border: 1px solid red;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0 auto;
    }
    .item{
        width: 260px;
        height: 260px;
        border: 1px solid rgb(98, 0, 255);
        margin: 10px 0;
    }
</style>