<template>
  <div class="board">
      <ul class="board-nav">
            <li>
                <!-- ${$route.params.typeid?$route.params.typeid:0} -->
                <nuxt-link tag="a" to="/board/1">热映口碑榜</nuxt-link>
            </li>
            <li>
                <nuxt-link  tag="a" to="/board/2">国内票房榜</nuxt-link>
            </li>
            <li>
                <nuxt-link  tag="a" to="/board/3">最受欢迎榜</nuxt-link>
            </li>
            <li>
                <nuxt-link  tag="a" to="/board/4">TOP100榜</nuxt-link>
            </li>
      </ul>
  </div>
</template>

<script>
export default {
  asyncData(e) {
        // console.log(e.params.typeid);  获取url上的参数
        // console.log(e,process.server); 判断是否在服务端或者客户端执行
      return {
        looplist:[]
      }
    }
}
</script>

<style lang="scss" scoped>
    .board{
        width: 100%;
        &-nav{
            background-color: #47464a;
            height: 60px;
            line-height: 60px;
            min-width: 1200px;
            text-align: center;
            margin: 0 auto;
            display: flex;
            text-align: center;
            li{
                flex: 1;
                color: #ccc;
            }
            a:hover{
                color: #fff;
            }
        }
    }
</style>