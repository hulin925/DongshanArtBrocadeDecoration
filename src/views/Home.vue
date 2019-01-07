<template>
  <div>
    <header>东山艺锦装饰</header>
    <section>
      <div class="imgBox">
        <img src="../assets/img/home/img.png" alt="">
      </div>
      <nav class="clearfix">
        <div v-for="item,index in navList" :class="item.className" @click.stop="junpPage(item)">
          <i></i>
          <strong>{{item.name}}</strong>
        </div>
      </nav>

      <div class="changeNav">
        <div class="clearfix">
          <a href="javascript:;"
             v-for="item,index in changeList"
             :class="{active: index == indexActive}"
             @click.stop="changeNav(item,index)"
          >{{item.name}}</a>
        </div>
      </div>

      <div class="wrapper">
        <ul class="content clearfix" ref="content">
          <li v-for="item,index in 100">{{item}}</li>
        </ul>
      </div>

    </section>
     
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        navList: [
          {
            className: 'anLi',
            name: '客户案例',
            routerName: 'HelloWorld',
          },
          {
            className: 'design',
            name: '设计师',
            routerName: 'HelloWorld',
          },
          {
            className: 'core',
            name: '核心优势',
            routerName: 'HelloWorld',
          },
          {
            className: 'aboutMe',
            name: '关于我们',
            routerName: 'HelloWorld',
          },
        ],
        changeList: [
          {
            name: '风格',
            routerName: ''
          }, {
            name: '户型',
            routerName: ''
          }
        ],
        indexActive: 0,
      }
    },
    methods: {
      junpPage (item) {
        this.$router.push({name: item.routerName})
      },
      changeNav (item, index) {
        console.log(item)
        // this.$router.push({name: item.routerName})
        this.indexActive = index
      }
    },
    mounted(){
      this.$nextTick(() => {
        this.$refs.content.style.width =
          this.$refs.content.children[0].getBoundingClientRect().width*this.$refs.content.children.length+'px';
        let scroll = new BScroll('.wrapper',{
          startX:0,
          click:true,
          scrollX:true,
          scrollY:false,
          eventPassthrough:'vertical'
        })
      });
    }
  }
</script>

<style scoped type="text/less" lang="less">
  @r: 30rem;


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
  }

  section {
    position: fixed;
    top: 88/@r;
    bottom: 110/@r;
    right: 0;
    left: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .imgBox > img {
    width: 100%;
    height: 400/@r;
  }

  nav {
    margin-top: 60/@r;
    font-size: 25/@r;
    line-height: 65/@r;
    font-family: "微软雅黑";
    color: #3e3a39;
    padding-bottom: 39/@r;
    border-bottom: 20/@r solid #f8f8f8;
  }

  nav div {
    float: left;
    width: 25%;
    text-align: center;
    position: relative;
  }

  nav div:before {
    position: absolute;
    right: 0;
    top: 6/@r;
    content: '';
    height: 100/@r;
    width: 1px;
    background-color: #eaeaea;
  }

  nav div:last-of-type:before {
    display: none;
  }

  nav div i {
    display: block;
    margin: 0 auto;
  }

  .anLi > i {
    width: 61/@r;
    height: 65/@r;
    background: url("../assets/img/home/anLi.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
  }

  .design > i {
    width: 81/@r;
    height: 47/@r;
    background: url("../assets/img/home/design.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 10/@r auto 8/@r;
  }

  .core > i {
    width: 59/@r;
    height: 55/@r;
    background: url("../assets/img/home/core.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 7/@r auto 3/@r;
  }

  .aboutMe > i {
    width: 26/@r;
    height: 58/@r;
    background: url("../assets/img/home/aboutWe.png") no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;
    margin: 4/@r auto 3/@r;
  }

  .changeNav > div {
    width: 456/@r;
    height: 72/@r;
    background-color: #eaeaea;
    -webkit-border-radius: 36/@r;
    -moz-border-radius: 36/@r;
    border-radius: 36/@r;
    margin: 100/@r auto 0;
  }

  .changeNav a {
    float: left;
    width: 50%;
    text-align: center;
    font-size: 30/@r;
    line-height: 72/@r;
    font-family: "微软雅黑";
    color: #444;
    font-weight: bold;
    -webkit-border-radius: 36/@r;
    -moz-border-radius: 36/@r;
    border-radius: 36/@r;
  }

  .changeNav a.active {
    background-color: #e60012;
    color: #fff;
  }

  .wrapper {
    width: 100%;
    overflow: hidden;
  }

  .content > li {
    float: left;
    width: 100px;
  }


</style>
