<template>
  <div class="my-kit-doc">
    <aside>
      <div class="logo">
        <img src="@/assets/logo-long.png" alt="">
      </div>
      <div class="menu">
        <div v-for="(link, index) in data.links" @click.native="scollTop">
          <div class="meauTitle" v-if="link.path == '/components/Meau'">{{ link.name }}</div>
          <router-link :class="{active: link.path === $route.path }" v-else :key="index" :to="link.path">{{ link.name }}</router-link>
        </div>
      </div>
    </aside>
    <main id="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import ComponentList from 'packages/list.json';
import { reactive } from 'vue'

const data = reactive({
  links: ComponentList.map(item => (
    {
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})

function scollTop() {
  document.getElementById("main").scrollTop = 0;
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.my-kit-doc {
  display: flex;
  min-height: 100vh;
  width: 1140px;
  margin: 0 auto;
  .logo {
    width: 100%;
    img {
      width: 100%;
      margin-top: -20px;
    }
  }
  aside {
    width: 230px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    .menu {
      height: calc(100vh - 100px);
      overflow: scroll;
      padding-bottom: 30px;
      padding-right: 10px;
      box-sizing: border-box;
    }
    .menu::-webkit-scrollbar { width: 0 !important }
    .meauTitle {
      font-size: 16px;
      font-weight: bold;
      line-height: 50px;
      color: #333;
      padding-left: 30px;
    }
    .active{
      color: #53a8ff;
      font-weight: bold;
      padding: 5px 2rem 5px 1.5rem;
      font-size: .9rem;
      margin: 0 8px;
      border-radius: 8px;
      background: #ecf5ff;
    }
  }
  main {
    width: 100%;
    flex: 1;
    padding: 0 30px;
    height: 100vh;
    overflow: scroll;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
  main::-webkit-scrollbar { width: 0 !important }
}
</style>