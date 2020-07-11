<template>
  <div class="container">
    <video
      ref="video"
      src="./assets/music/chunfengshili.mp3"
      controls="controls"
      hidden="hidden"
      autoplay="autoplay"
      loop="loop"
    ></video>
    <!-- <h1>董 妮 <==========> 贾 峰</h1> -->
    <!-- <h1 class="now">{{ fromLove }}</h1> -->
    <div class="headpic">
      <img
        src="./assets/images/xgg.jpg"
        class="wow bounceInLeft our_headpic"
        alt=""
      />
      <img
        src="./assets/images/donni.jpg"
        class="wow bounceInRight our_headpic"
        alt=""
      />
    </div>
    <img
      src="./assets/images/ourseleves.jpg"
      class="wow fadeInLeftBig our_ourselves"
      alt="我们"
    />

    <h1 class="wow bounceIn">
      我们相爱<span class="loveday">{{ loveDay }}</span
      >天啦
    </h1>
    <img
      src="./assets/images/ourhands.jpg"
      class="wow fadeInRight our_hands"
      alt="我们"
    />
    <br />
    <p class="wow fadeInLeft our_desc">
      两情若是久长时，
    </p>
    <p class="wow fadeInRight our_desc">
      又岂是朝朝暮暮。
    </p>
    <img src="./assets/images/tou.png" alt="" class="wow  our_note" />
    <img src="./assets/images/tome.png" alt="" class="wow  our_note" />
    <p class="wow fadeInUp our_detail">生命不止，爱情继续...</p>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      fromLove: "",
      loveDay: "",
      // ourpic: require("assets/images/ourseleves.jpg"),
    };
  },
  created() {
    this.transTime();
    setInterval(() => {
      this.transTime();
    }, 1000);
  },
  mounted() {
  setTimeout(() => {
    this.$refs.video.play();
  }, 2000);
    
  },
  methods: {
    transTime() {
      let year = "";
      let month = "";
      let day = "";
      let hour = "";
      let minite = "";
      let second = "";
      year = new Date().getFullYear();
      month = new Date().getMonth() + 1 + "";
      day = new Date().getDate() + "";
      month = month.length < 2 ? "0" + month : month;
      day = day.length < 2 ? "0" + day : day;
      hour = new Date().getHours() + ""; //获取系统时，
      minite = new Date().getMinutes() + ""; //分
      second = new Date().getSeconds() + ""; //秒
      hour = hour.length < 2 ? "0" + hour : hour;
      minite = minite.length < 2 ? "0" + minite : minite;
      second = second.length < 2 ? "0" + second : second;
      this.fromLove =
        // year +
        // "-" +
        // month +
        // "-" +
        // day +
        // "   " +
        hour + ":" + minite + ":" + second;
      //获取当前时间
      let m1 = moment();
      //获取需要对比的时间
      let m2 = moment("20200502");
      //计算相差多少天 day可以是second minute
      this.loveDay = m1.diff(m2, "day");
    },
  },
};
</script>
<style lang="scss" scoped>
.loveday {
  color: red;
  margin: 0 20px;
  font-size: 35px;
}
// @media (min-width: 800px) {
//   .container {
//     width: 100vw;
//     height: 100vh;
//     background-image: url("./assets/images/loveBgg.png");
//     background-size: cover;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     h1 {
//       color: #393e46;
//       margin: 10px 0 10px 200px;
//       -moz-user-select: none;
//       -khtml-user-select: none;
//       user-select: none;
//     }
//   }
// }
// @media (max-width: 799px) {
//   .container {
//     width: 100vw;
//     height: 100vh;
//     background-image: url("./assets/images/l.jpg");
//     background-size: 100% 100%;
//     h1 {
//       color: #393e46;
//       -moz-user-select: none;
//       -khtml-user-select: none;
//       user-select: none;
//     }
//   }
// }
// @media (min-width: 601px) {
//   .container {
//     width: 100vw;
//     height: 100vh;
//     background-image: url("./assets/images/l.jpg");
//     background-size: 100% 100%;
//     h1 {
//       color: #393e46;
//       -moz-user-select: none;
//       -khtml-user-select: none;
//       user-select: none;
//     }
//   }
// }
@media (max-width: 600px) {
  .container {
    // width: 100vw;
    // height: 100vh;
    // background-image: url("./assets/images/smalllove.jpg");
    background: #99b898;
    // background-size: 100% 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    // justify-content: center;
    position: relative;
    h1 {
      color: #e84a5f;
      -moz-user-select: none;
      -khtml-user-select: none;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      user-select: none;
      font-size: 25px;
      padding: 20px 20px;
    }
    .now {
      position: absolute;
      top: 5px;
      right: 5px;
      color: #204051;
    }
    .our_ourselves {
      width: 60%;
      height: auto;
      margin-top: 50px;
      border-radius: 10px;
      border: 3px solid #faf0af;
      transform: rotateZ(5deg);
    }
    .our_hands {
      width: 50%;
      height: auto;
      transform: rotateZ(-5deg);
      border-radius: 10px;
      border: 3px solid #f1c5c5;
    }
    .our_desc {
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 18px;
      width: 60%;
      display: flex;
      justify-content: center;
      padding: 10px;
      color: #383e56;
    }
    .headpic {
      margin-top: 50px;
      .our_headpic {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1.5px solid white;
      }
    }
    .our_note {
      width: 60%;
      margin: 10px;
      border-radius: 10px;
      border: 3px solid #c7e2b2;
    }
    .our_detail {
      font-family: "Times New Roman", Times, serif;
      color: #383e56;
      font-size: 20px;
      padding: 5px 0 20px;
    }
  }
}
</style>
