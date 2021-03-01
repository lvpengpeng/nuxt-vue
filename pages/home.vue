<template>
    <div class="home">
        <div class="home-banner">
            banner
        </div>
        <div class="home-center">
            <div>正在热映（{{looplist.length}}部）</div>
            <div class="home-news">
                <div  class="home-news__item" v-for="(item ,index) in looplist" :key="index" @click="handleClick(index)">
                    <img :src="item.url" >
                    <p>{{item.title}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  asyncData() {
      return {
        looplist:[
            {
                "title":"那一夜，我给你开过车",
                "url":"https://p0.meituan.net/movie/48774506dc0e68805bc25d2cd087d1024316392.jpg@160w_220h_1e_1c"
            },
            {
                "title":"拿摩一等",
                "url":"https://p0.meituan.net/movie/8a1ad4ec0d81f240e4d8c2d1b10c2ec53475644.jpg@160w_220h_1e_1c"
            },
            {
                "title":"桌球少女",
                "url":"https://p1.meituan.net/movie/ece9ff81e6f0af2c859aa151e42a33312706648.jpg@160w_220h_1e_1c"
            },
            {
                "title":"反贪风暴4",
                "url":"https://p0.meituan.net/movie/9ef2f7d8d6f11c55723d7be5fa77218d1022103.jpg@160w_220h_1e_1c"
            },
            {
                "title":"雪暴",
                "url":"https://p0.meituan.net/moviemachine/778ef027d0fe90fd27448d8369d4cf9e2820477.jpg@160w_220h_1e_1c"
            },
            {
                "title":"中国机长",
                "url":"https://p0.meituan.net/moviemachine/6766681dc599e1964e9acbf86391207377187.jpg@160w_220h_1e_1c"
            },
            {
                "title":"那年八岁",
                "url":"https://p0.meituan.net/movie/72291e1cbc83311656e01e828ca79ddd2106074.jpg@160w_220h_1e_1c"
            },
            {
                "title":"大约在冬季",
                "url":"https://p0.meituan.net/movie/12b0e9d3c645cda41a9c787066d52279388947.jpg@160w_220h_1e_1c"
            }
        ]
      }
    // return axios({
    //   url:"https://m.maizuo.com/gateway?type=2&cityId=110100&k=4562288",
    //   headers:{
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146"}',
    //     'X-Host': 'mall.cfg.common-banner'
    //   }
    // }).then(res=>{
    //   return {
    //     looplist:res.data.data
    //   }
    // })
  },
  methods:{
      handleClick(id){
          alert(id)
      }
  }
}
</script>

<style lang='scss' scoped>
.home{
    &-banner{
        width: 100%;
        height: 200px;
        background: #ccc;
    }
    &-center{
        padding:0 100px;
    }
    &-news{
        width: 640px;
        display: flex;
        // background: blue;
        flex-wrap: wrap;
        &__item{
            width: 100px;
            min-width: 160px;
            height: 300px;
            box-sizing: border-box;
            border: 1px solid red;
        }
    }
}
</style>