<template>
  <div>
    <header>客服案列</header>

    <!--导航区域-->
    <nav>
      <div v-for="item,index in navList">
        <strong>{{item.name}}</strong>
      </div>
    </nav>

    <!--图片展示区-->
    <section>
      <div class="content">
        <div class="contentImg">
          <img src="../assets/img/case/bg.png" alt="">
        </div>
      </div>
    </section>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        navList:[
          {
            className:'simplicity',
            name:'现代简约',
            routerName:''
          },
          {
            className:'classical ',
            name:'欧式古典',
            routerName:''
          },
          {
            className:'japanese ',
            name:'现代日式',
            routerName:''
          },
          {
            className:'chineseStyle ',
            name:'新中式',
            routerName:''
          },
          {
            className:'french ',
            name:'法式',
            routerName:''
          },
        ]
      }
    }
  }
</script>

<style scoped type="text/less" lang="less">
  @r:30rem;


  /*头部导航*/
  header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 88/@r;
    font-size: 34/@r;
    line-height: 88/@r;
    font-family: "微软雅黑";
    text-align: center;
    color: #010101;
    font-weight: bold;
  }
  nav{
    position:fixed;
    left:0;
    top:88/@r;
    height:110/@r;
    padding-top:13/@r;
    width:100%;
    line-height:71/@r;
    font-size:24/@r;
    font-family:"微软雅黑";
    color:#333333;
  }
  nav div{
    width:20%;
    float:left;
    text-align:center;
    position:relative;
  }
  nav div:before{
    position:absolute;
    bottom:-6/@r;
    left:30%;
    content:'';
    width:60/@r;
    height:6/@r;
    background-color:#e60012;
  }
  .active{
    font-size:30/@r;
    color:#e60012;
    font-weight:bold;
  }

  /*图片展示区*/
  section{
    position:fixed;
    top:198/@r;
    bottom:110/@r;
    right:0;
    left:0;
    overflow:hidden;
    -webkit-overflow-scrolling: touch;
  }
  .contentImg>img{
    width:100%;
    height:460/@r;
    display:block;
  }
</style>
