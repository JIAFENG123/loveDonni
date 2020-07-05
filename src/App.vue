<template>
  <div class="container">
    <h1>董 妮 <==========> 贾 峰</h1>
    <h1>2020-05-02 =====> {{ fromLove }}</h1>
    <h1>
      我们相爱<span class="loveday">{{ loveDay }}</span
      >天啦
    </h1>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      fromLove: "",
      loveDay: "",
    };
  },
  created() {
    this.transTime();
    setInterval(() => {
      this.transTime();
    }, 1000);
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
        year +
        "-" +
        month +
        "-" +
        day +
        "   " +
        hour +
        ":" +
        minite +
        ":" +
        second;
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
  font-size: 30px;
}
@media (min-width: 751px) {
  .container {
    width: 100vw;
    height: 100vh;
    background-image: url("./assets/images/loveBg.jpg");
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      color: #393e46;
      margin: 10px 0 10px 200px;
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;
    }
  }
}
@media (max-width: 750px) {
  .container {
    width: 100vw;
    height: 100vh;
    background-image: url("./assets/images/lovebgsmall.jpg");
    background-size: 100% 100%;
    h1 {
      color: #393e46;
      -moz-user-select: none;
      -khtml-user-select: none;
      user-select: none;
    }
  }
}
</style>
