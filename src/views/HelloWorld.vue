<template>
  <div class="box">
    <ul class="list">
      <li v-for="item in initDataList.chinaGroupList">{{item.ts_ss_Key}}</li>
    </ul>
    <p>
      <button @click="toHome">跳转</button>
    </p>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return{
        list:''
      }
    },
    computed:Object.assign({},
      mapGetters([
        'initDataList'
      ])),
    created(){
      this.initData();
    },
    methods:{
      toHome(){
        this.$router.push({name:'home'});
      },
      initData(){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "provice": "四川省",
          "flag": "1"
        };
        this.$store.dispatch('setData',options)
          .then(
            ()=>{
              console.log(this.initDataList)
            },
            err=>{
              console.log(err)
            }
          )
      }
    }
  }
</script>

<style scoped>
  .list{
    margin:0;
    padding:0;
    list-style:none;
    height:40px;
  }
  .list li{
    font:20px/35px "微软雅黑";
    float:left;
  }
</style>
