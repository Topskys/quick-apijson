<!--
 * @Author: Topskys
 * @Date: 2022-08-22 19:00:39
 * @LastEditTime: 2022-08-22 21:46:08
 * @LastEditors: Topskys
 * @Description: 主页
 * @FilePath: \quick-apijson\src\views\Home.vue
-->
<template>
  <div class="home">
    <div class="nav r-flex-2">
      <div class="logo r-flex-1">
        <div class="logo-img"></div>
        <div class="logo-text">数据平台展示系统</div>
      </div>
      <div class="right-btn r-flex-1">
        <div class="btn">关系谱图</div>
        <div class="btn">个人信息</div>
      </div>
    </div>
    <div class="group-card">
      <div class="card">
        <div class="card-title fs12">访客数</div>
        <div class="card-content fs20">88</div>
        <div class="card-foot r-flex-1 fs12">
          <div class="compare">较昨日</div>
          <div class="number"><i class="el-icon-caret-top"></i><span>12%</span></div>
        </div>
      </div>

    </div>
    <div class="search-box">
      <input type="text">
    </div>
    <div class="foot-right">
      <span class="fs12">Copyright @福州汇泉信网络科技公司</span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {

  }
}
</script>

<style lang="scss" scoped>
$bg-card: #fff;
// $bg-linear-blue: linear();
$color-white: #fff;
$color-black: #000;


.home {
  color: $color-white;
  min-width: 768px;
  height: 100vh;
  background: url('@/assets/bg_theme.png') no-repeat center center;
  position: relative;

  .nav {
    font-size: 14px;
    padding: 10px 32px;
    // background-color: #000;

    .logo {
      background: transparent;

      .logo-img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background-image: url('@/assets/logo(1).png');
        background-position: center;
        background-size: cover;
      }

      .logo-text {
        color: $color-white;
        // font-size: 16px;
        font-weight: bold;
        letter-spacing: 1px;
      }
    }

    .right-btn {
      background: transparent;

      .btn {
        &:first-child {
          margin-right: 15px;
        }
      }
    }
  }

  .group-card {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 3% 32px 0 32px;

    .card {
      width: 100%;
      height: 100%;
      padding: .625rem .9375rem;
      border-radius: .3125rem;
      background-color: $bg-card;
      color: $color-white;

      .card-content {
        padding: .625rem 0;
        font-weight: bold;
      }

      .card-foot {

        .number {
          position: relative;

          .el-icon {
            position: absolute;
            left: 0;
            top: 2px;
            font-size: 8px;
            padding: 0 .625rem;
          }
        }

      }

      &:first-child {
        background-image: -moz-linear-gradient(45deg, rgb(30, 144, 255), rgba(0, 225, 255, 0.32));
        background-image: -webkit-linear-gradient(45deg, rgb(30, 144, 255), rgba(0, 225, 255, 0.32));
        background-image: linear-gradient(45deg, rgb(30, 144, 255), rgba(0, 225, 255, 0.32));
      }

      &:nth-child(2) {
        background-image: -moz-linear-gradient(45deg, rgb(50, 205, 50), rgba(0, 255, 25, 0.74));
        background-image: -webkit-linear-gradient(45deg, rgb(50, 205, 50), rgba(0, 255, 25, 0.74));
        background-image: linear-gradient(45deg, rgb(50, 205, 50), rgba(0, 255, 25, 0.74));
      }

      &:nth-child(3) {
        background-image: -moz-linear-gradient(45deg, rgba(255, 157, 0, 0.89), rgba(255, 208, 0, 0.95));
        background-image: -webkit-linear-gradient(45deg, rgba(255, 157, 0, 0.89), rgba(255, 208, 0, 0.95));
        background-image: linear-gradient(45deg, rgba(255, 157, 0, 0.89), rgba(255, 208, 0, 0.95));
      }

      &:nth-child(4) {
        background-image: -moz-linear-gradient(45deg, rgba(119, 0, 255, 0.83), rgba(0, 38, 255, 0.47));
        background-image: -webkit-linear-gradient(45deg, rgba(119, 0, 255, 0.83), rgba(0, 38, 255, 0.47));
        background-image: linear-gradient(45deg, rgba(119, 0, 255, 0.83), rgba(0, 38, 255, 0.47));
      }


    }
  }


  .search-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 60%;
    min-width: 152px;
    margin: 0 auto;

    input {
      width: 100%;
      height: 52px;
      padding-left: .9375rem;
    }
  }

  .foot-right {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    color: $color-white;
    padding: .625rem 0;
  }

  .r-flex-1 {
    display: flex;
    align-items: center;
  }

  .r-flex-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  img {
    display: block;
    width: 100%;
  }





  .fs10 {
    font-size: 10px;
  }

  .fs12 {
    font-size: 12px;
  }

  .fs14 {
    font-size: 14px;
  }

  .fs16 {
    font-size: 16px;
  }

  .fs18 {
    font-size: 18px;
  }

  .fs20 {
    font-size: 20px;
  }
}
</style>
