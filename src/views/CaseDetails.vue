<template>


  <!--案列详情页面-->


  <div>
    <header>
      <div><i></i></div>
      <span>案列详情</span>
    </header>

    <!--设计信息-->
    <div class="resume">
      <div class="resumeContent clearfix">
        <div class="right">
          <i></i>
          <div class="info">
            <p class="name">林岚</p>
            <P class="designer">中国室内注册设计师</P>
          </div>
        </div>
        <div class="left">
          <span class="leftContent">预约设计</span>
        </div>
      </div>
    </div>

    <!--轮播图-->
    <div class="imgScroll">
    </div>

    <!--内容信息-->
    <div class="contentInfo">
      <p class="infoTitle">THE NAME OF THE WORK</p>
      <p class="infoName">阳光花园</p>
      <p class="infoDetails">阳光花园位于四川省泸州市，风景秀丽
        ，是投资地产和休 闲养生度假酒店。
        阳光花园占地7.5万平方米建筑面积5.5 万平方米，率70%，容积率0.8建有12栋多层及别墅
        型产品，小区配有游泳池，温泉入户小区周围生活配套设
        施，大型超市一应俱全。
      </p>
    </div>

    <div class="free">
      <span>免费获取装修报价</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "case-details"
    }
</script>

<style scoped type="text/less" lang="less">
  @r:30rem;
  /*头部区域*/
  header {
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
    border-bottom: 1px solid #fbf8f4;
    background-color:#fff;
  }
  header span{
    width:100%;
    display:block;
    text-align:center;
  }
  header div{
    float:left;
    width:65/@r;
    height:100%;
    position:relative;
  }
  header i{
    float:left;
    display:block;
    width:19/@r;
    height:37/@r;
    background:url("../assets/img/back.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    position:absolute;
    left:0;
    top:0;
    margin:27/@r 24/@r 24/@r 24/@r;
  }


    /*设计信息*/
  .resume{
    margin-top:88/@r;
    height:181/@r;
    width:100%;
    padding:41/@r 24/@r;
  }
  .resumeContent{
    width:100%;
    height:100%;
  }
  .right{
    float:left;
    font-family: "微软雅黑";
  }
  .right i{
    float:left;
    display:block;
    width:100/@r;
    height:100/@r;
    background:url("../assets/img/caseDetails/info.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin-right:40/@r;
  }
  .name{
    margin-top:5/@r;
    font-size: 30/@r;
    line-height:49/@r;
    color:#333333;
  }
  .designer{
    font-size:22/@r;
    color:#666666;
    line-height: 42/@r;
  }
  .info{
    float:left;
  }
  .left{
    float:right;
  }
  .leftContent{
    display:block;
    width:147/@r;
    height:57/@r;
    background-color:#e60012;
    border-radius:30/@r;
    color:#fff;
    font-size:22/@r;
    text-align:center;
    line-height:57/@r;
    margin-top:17/@r;
  }

  /*图片滚动*/
  .imgScroll{
    width:100%;
    height:500/@r;
    background:url("../assets/img/caseDetails/imgScroll.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }


  /*详细内容*/
  .contentInfo{
    width:100%;
    padding:45/@r 24/@r 0 24/@r;
    font-size: 32/@r;
    font-family: "微软雅黑";
    color:#333333;
    line-height:56/@r;
    font-weight:bold;
  }
  .contentInfo .infoDetails{
    font-size:26/@r;
    color:#666666;
    line-height:60/@r;
    font-weight: normal;
    padding-top:36/@r;
  }
  .free{
    width:702/@r;
    height:100/@r;
    background-color:#d61204;
    color:#fff;
    -webkit-border-radius: 20/@r;
    -moz-border-radius: 20/@r;
    border-radius: 20/@r;
    text-align:center;
    line-height:100/@r;
    font-size:34/@r;
    margin:67/@r auto;
  }
</style>
