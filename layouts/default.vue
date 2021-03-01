<template>
  <div>
      <div class="nav">
          <nuxt-link to="/home" tag="a" activeClass="active" class="nav-item">首页</nuxt-link>
          <nuxt-link to="/board" tag="a" activeClass="active" class="nav-item">榜单</nuxt-link>
          <nuxt-link to="/news" tag="a" activeClass="active" class="nav-item">热点</nuxt-link>
          <nuxt-link to="/edimall" tag="a" activeClass="active" class="nav-item">商场</nuxt-link>
      </div>
    <Nuxt />
  </div>
</template>

<style>
html {
    font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
ul,li{ padding:0;margin:0;list-style:none}
a{
    text-decoration: none;
    color: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-touch-callout: none;
    border-bottom: none;
    display: block;
   }
</style>
<style lang="scss" scoped>
    .nav{
        width: 100%;
        padding: 20px 40px;
        border-bottom: 1px solid #333;
        display: flex;
        &-item{
            padding: 10px 20px;
            display:inline-block;
        }
        :hover{
            color: red;
        }
        .active{
            background: #ef4238;
            color: #fff;
        }
    }
</style>
