<template>
  <div class="nav">
    <div
      class="nav-item"
      :class="{ select :name === 'index' }"
      @click="to('index')"
    >
      <div class="icon">
        <i class="iconfont icon-shouye"> </i>
      </div>
      <div class="take">首页</div>
    </div>
    <div
      class="nav-item"
      :class="{ select :name === 'message' }"
      @click="to('message')"
    >
      <div class="icon">
        <i class="iconfont icon-xiaoxi"> </i>
      </div>
      <div class="take">消息</div>
    </div>
    <div
      class="nav-item"
      :class="{ select :name === 'sos' }"
      @click="to('sos')"
    >
      <div class="icon">
        <i class="iconfont icon-safe"> </i>
      </div>
      <div class="take">求救</div>
    </div>

    <div
      class="nav-item"
      :class="{ select :name === 'square' }"
      @click="to('square')"
    >
      <div class="icon">
        <i class="iconfont icon-shequ"> </i>
      </div>
      <div class="take">社区</div>
    </div>

    <div
      class="nav-item"
      :class="{ select :name === 'mine' }"
      @click="to('mine')"
    >
      <div class="icon">
        <i class="iconfont icon-wode"> </i>
      </div>
      <div class="take">我的</div>
    </div>

  </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$route.name
    }
  },
  methods: {
    to (name) {
      if (name === this.name) return false
      this.$router.replace({
        name
      })
    }
  }
}
</script>

<style>

.nav {
  font-size: 0.6rem;
  position: fixed;
  /* margin: 10px; */
  bottom: 0;
  /* 高度可以根据个人页面显示情况进行适当调整 */
  height: 1.5rem;
  display: flex;
  width: 100%;
  background: white;
  border-top: 1px solid rgb(95, 93, 93);
}
.nav .nav-item {
  flex-grow: 1;
  color: rgb(155, 143, 143);
  display: flex;
  /* 水平居中 */
  justify-content: center;
  /* 垂直居中 */
  align-items: center;
  flex-direction: column;
}
/* 被选中之后的样式 */
.nav .nav-item.select {
  color: rgb(74, 176, 235);
}

.nav .nav-item .icon .iconfont {
  font-size: 0.68rem;
}
.nav .nav-item .take {
  font-size: 0.40rem;
}
</style>
