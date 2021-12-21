<template>
  <div
    :class="isPC ? 'EssentialContainer' : 'EssentialContainer-m'"
  >
    <div class="title">
      <span>{{ title }}<span class="border" /></span>
      <slot name="rightBox" />
    </div>
    <div :class="md ? 'context_d' : 'context'">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "EssentialContainer",
  props: {
    title: null,
    md: null
  },
  data() {
    return {
      isPC: true  
    }
  },
  mounted() {
    this.isPC = this.isPc()
  },
  methods: {
    isPc() {
      // return SettingsModule.isPC
      return true
    },
  }
};
</script>

<style lang="scss">
.EssentialContainer{
    width: 100%;
    background: #FFFFFF;
    box-shadow: 4px 4px 10px 0 rgba(218,218,218,0.50);
    margin-bottom: 6px;
    .el-row{
      list-style-type: none;
    }
    [class*=el-col-]{
      display: inline-block;
      vertical-align: top;
      float: none;
    }
    .title{
        width:100%;
        height: 58px;
        line-height: 58px;
        font-size: 16px;
        color: #4A4A4A;
        font-weight: 500;
        border-bottom: 2px solid #F8F9FA;
        position: relative;
        padding:0 30px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .border{
            width:5px;
            height: 17px;
            position: absolute;
            left: 16px;
            top: 0;
            bottom: 0;
            margin: auto;
            background-image: linear-gradient(270deg, #79BAF8 0%, #1695FA 100%);
            border-radius: 2.5px;
            border-radius: 2.5px;
            display: inline-block;
        }
    }
    .context, .context_d{
        width:100%;
        padding: 30px;
        box-sizing: border-box;
    }
}
</style>

<style lang="scss" scope>
.EssentialContainer-m{
    width: 100%;
    background: #FFFFFF;
    margin-bottom: 4px;
    box-shadow: 4px 4px 10px 0 rgba(218,218,218,0.50);
    .title{
        height: 45px;
        line-height: 40px;
        font-size: 15px;
        color: #4A4A4A;
        font-weight: 500;
        border: 2px solid #F8F9FA;
        position: relative;
        padding:0 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .border{
            width: 4px;
            height: 14px;
            position: absolute;
            left: 10px;
            top: -1px;
            bottom: 0;
            margin: auto;
            background-image: linear-gradient(270deg, #FF9600 0%, #FFB400 100%);
            border-radius: 2.5px;
            border-radius: 2.5px;
            display: inline-block;
        }
    }
    .context{
        width:100%;
        padding: 20px 30px;
        box-sizing: border-box;
    }
    .context_d{
        width:100%;
    }
}
</style>
