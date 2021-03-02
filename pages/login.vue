<template>
  <div>
      <div class="content">
          <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名" >
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" >
            <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">登录</el-button>
            <el-button  @click="onReset">取消</el-button>
        </el-form-item>
        </el-form>
      </div>
</div>
</template>

<script>
 import { mapState, mapMutations, mapActions, mapGetters } from 'vuex';
export default {
    layout:"login",
    data() {
      return {
        form: {
          name: '',
          password:""
        }
      }
    },
      methods: {
        ...mapMutations('login', [
        'SET_LOGIN'
        ]),
      onSubmit() {
         if ((this.form.name==123)&&(this.form.password==123)) {
              this.$store.commit('filter/setlogin',true)
             this.$router.push({
                 path:`/films/${this.$route.query.id?this.$route.query.id:0}`
             })
         }
      },
      onReset(){
        this.form = {
            name: '',
            password:""
        }
      }
    }
}
</script>
<style lang="scss" scoped>
    .content{
        width: 400px;
        height: 200px;
        margin: 300px auto;
    }
</style>