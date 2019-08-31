<template>
  <div class="container">
    <div>
      <van-sticky>
  <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/>
</van-sticky>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="van-ellipsis">这是一段宽度限制 250px 的文字，后面的内容会省略</div>
      <!-- 上边框 -->
<div class="van-hairline--top"></div>
123
<!-- 下边框 -->
<div class="van-hairline--bottom"></div>
<transition name="van-fade">
  <div v-show="visible">Fade</div>
</transition>
<van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>

<van-icon name="close" />
<van-icon name="https://b.yzcdn.cn/vant/icon-demo-1126.png" />

<van-icon name="chat" info="9" />
<van-icon name="chat" info="99+" />

<van-loading type="spinner" />

<van-button
  type="primary"
  text="显示遮罩层"
  @click="show = true"
/>

<van-overlay
  :show="show"
  @click="show = false"
/>

<van-count-down :time="time" format="mm:ss" />

<van-tabs>
  <van-tab title="标签 1">内容 1</van-tab>
  <van-tab title="标签 2">内容 2</van-tab>
  <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab>
</van-tabs>

  <p>刷新次数: {{ count }}</p>
</van-pull-refresh>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      visible: 1,
      show: false,
      count: 0,
      isLoading: false,
      time: 30 * 60 * 1000
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    },
    onClickLeft() {
      this.$toast('返回')
    },
    onClickRight() {
      this.$toast('按钮')
    }
  }
}
</script>

<style>
</style>
