<template>
  <div class="board" v-if="list">
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
      <div class="board-list">
          <div class="board-item" v-for="(item,index) in list" :key="index">
              <div> 
                    <h3>{{item.seriesInfo.name}}</h3>
                    <div>播放量{{item.barValue}}万</div>
                    <div>来源：{{item.seriesInfo.platformDesc}}</div>
              </div>
                <div>
                    {{item.seriesInfo.releaseInfo}}
                </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  asyncData(e) {
        // console.log(e.params.typeid);  获取url上的参数
        // console.log(e,process.server); 判断是否在服务端或者客户端执行
        let params = e.params.typeid;
        console.log(params,typeof params);
        if (params==='2') {
            return {
                list:[ {
                    "barValue":1052.263751164589,
                    "currHeat":2763.8,
                    "currHeatDesc":"2763.80",
                    "playCountSplitUnit":{
                        "num":206.3,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"你好，安怡",
                        "newSeries":false,
                        "platformDesc":"多平台播放",
                        "platformTxt":-1,
                        "releaseInfo":"上线12天",
                        "seriesId":1218716
                    }
                },
                {
                    "barValue":968.6342433475759,
                    "currHeat":2757.34,
                    "currHeatDesc":"2757.34",
                    "playCountSplitUnit":{
                        "num":121.8,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"暗恋·橘生淮南",
                        "newSeries":false,
                        "platformDesc":"多平台播放",
                        "platformTxt":-1,
                        "releaseInfo":"上线42天",
                        "seriesId":1247533
                    }
                },
                {
                    "barValue":892.0418039516302,
                    "currHeat":2752.1,
                    "currHeatDesc":"2752.10",
                    "playCountSplitUnit":{
                        "num":98.6,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"有翡",
                        "newSeries":false,
                        "platformDesc":"腾讯视频独播",
                        "platformTxt":-1,
                        "releaseInfo":"上线78天",
                        "seriesId":1248955
                    }
                },
                {
                    "barValue":814.5703136873227,
                    "currHeat":2723.68,
                    "currHeatDesc":"2723.68",
                    "playCountSplitUnit":{
                        "num":12.5,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"风声",
                        "newSeries":false,
                        "platformDesc":"腾讯视频独播",
                        "platformTxt":-1,
                        "releaseInfo":"上线69天",
                        "seriesId":1206986
                    }
                },
                {
                    "barValue":750.53430340438,
                    "currHeat":2719.86,
                    "currHeatDesc":"2719.86",
                    "playCountSplitUnit":{
                        "num":11.5,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"约定",
                        "newSeries":false,
                        "platformDesc":"爱奇艺独播",
                        "platformTxt":1,
                        "releaseInfo":"上线23天",
                        "seriesId":1358911
                    }
                }]
            }
        }else if (params==='3') {
            return {
                list:[
                
                {
                    "barValue":2234.771119390533,
                    "currHeat":3083.38,
                    "currHeatDesc":"3083.38",
                    "seriesInfo":{
                        "name":"风起霓裳",
                        "newSeries":false,
                        "platformDesc":"优酷独播",
                        "platformTxt":0,
                        "releaseInfo":"上线35天",
                        "seriesId":1203942
                    }
                },
                {
                    "barValue":2018.9269807238181,
                    "currHeat":3019,
                    "currHeatDesc":"3019.00",
                    "playCountSplitUnit":{
                        "num":368.2,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"爱的理想生活",
                        "newSeries":false,
                        "platformDesc":"多平台播放",
                        "platformTxt":-1,
                        "releaseInfo":"上线2天",
                        "seriesId":1247050
                    }
                },
                {
                    "barValue":1840.772441298096,
                    "currHeat":2983.26,
                    "currHeatDesc":"2983.26",
                    "seriesInfo":{
                        "name":"上阳赋",
                        "newSeries":false,
                        "platformDesc":"优酷独播",
                        "platformTxt":0,
                        "releaseInfo":"上线53天",
                        "seriesId":405656
                    }
                },
                {
                    "barValue":1691.7615731782305,
                    "currHeat":2971.52,
                    "currHeatDesc":"2971.52",
                    "seriesInfo":{
                        "name":"乡村爱情13",
                        "newSeries":false,
                        "platformDesc":"优酷独播",
                        "platformTxt":0,
                        "releaseInfo":"上线15天",
                        "seriesId":1382954
                    }
                },
                {
                    "barValue":1543.3792562013064,
                    "currHeat":2938.06,
                    "currHeatDesc":"2938.06",
                    "seriesInfo":{
                        "name":"我的时代，你的时代",
                        "newSeries":false,
                        "platformDesc":"爱奇艺独播",
                        "platformTxt":1,
                        "releaseInfo":"上线27天",
                        "seriesId":1318698
                    }
                },
                {
                    "barValue":1399.298220799468,
                    "currHeat":2887,
                    "currHeatDesc":"2887.00",
                    "playCountSplitUnit":{
                        "num":457.3,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"暴风眼",
                        "newSeries":false,
                        "platformDesc":"多平台播放",
                        "platformTxt":-1,
                        "releaseInfo":"上线8天",
                        "seriesId":1285921
                    }
                },
                {
                    "barValue":1283.6908487949893,
                    "currHeat":2870.42,
                    "currHeatDesc":"2870.42",
                    "playCountSplitUnit":{
                        "num":489.5,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"甜蜜",
                        "newSeries":false,
                        "platformDesc":"多平台播放",
                        "platformTxt":-1,
                        "releaseInfo":"上线13天",
                        "seriesId":1282505
                    }
                },
                {
                    "barValue":1179.4729396976213,
                    "currHeat":2858.39,
                    "currHeatDesc":"2858.39",
                    "seriesInfo":{
                        "name":"正青春",
                        "newSeries":false,
                        "platformDesc":"优酷独播",
                        "platformTxt":0,
                        "releaseInfo":"上线38天",
                        "seriesId":1252450
                    }
                }]
            }
        }else if (params==='4') {
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
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
                    }
                }]
            }
        }else  {
            return {
                list:[
                {
                    "barValue":686.3751541977784,
                    "currHeat":2695.79,
                    "currHeatDesc":"2695.79",
                    "seriesInfo":{
                        "name":"终极笔记",
                        "newSeries":false,
                        "platformDesc":"爱奇艺独播",
                        "platformTxt":1,
                        "releaseInfo":"上线83天",
                        "seriesId":1297964
                    }
                },
                {
                    "barValue":632.7249383595647,
                    "currHeat":2693.32,
                    "currHeatDesc":"2693.32",
                    "playCountSplitUnit":{
                        "num":203.7,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"我就是这般女子",
                        "newSeries":false,
                        "platformDesc":"腾讯视频独播",
                        "platformTxt":-1,
                        "releaseInfo":"上线44天",
                        "seriesId":1301443
                    }
                },
                {
                    "barValue":582.0951079343882,
                    "currHeat":2685.44,
                    "currHeatDesc":"2685.44",
                    "playCountSplitUnit":{
                        "num":16,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"小风暴之时间的玫瑰",
                        "newSeries":false,
                        "platformDesc":"腾讯视频独播",
                        "platformTxt":-1,
                        "releaseInfo":"上线91天",
                        "seriesId":1301389
                    }
                },
                {
                    "barValue":535.566,
                    "currHeat":2677.83,
                    "currHeatDesc":"2677.83",
                    "playCountSplitUnit":{
                        "num":121.5,
                        "unit":"万"
                    },
                    "seriesInfo":{
                        "name":"玲珑",
                        "newSeries":false,
                        "platformDesc":"多平台播放",
                        "platformTxt":-1,
                        "releaseInfo":"上线33天",
                        "seriesId":1297307
                    }
                }]
            }
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
        &-list{
            width: 800px;
            margin: 0 auto;
        }
        &-item{
            height: 200px;
            width: 100%;
            background:#ccc;
            border: 1px solid red;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 100px;
        }
    }
</style>