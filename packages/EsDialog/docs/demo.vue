<template>
  <EsContainer title="EsDialog组件">
    <el-button type="text" @click="show = true"
      >点击打开 Dialog</el-button
    >
    <EsDialog
      :show="show"
      :title="dialogTit"
      :destroy-on-close="true"
      @update="update"
    >
      <span>这是一段话。</span>
    </EsDialog>
  </EsContainer>
</template>

<script lang="ts">
import EsDialog from "@/components/Essential/EsDialog.vue";
import { reactive, ref } from "vue";
export default {
  components: { EsDialog },
  setup() {
    const show = ref(false);
    const dialogTit = ref("提示");
    return {
      show,
      dialogTit
    };
  },
  methods: {
    update(data) {
      for(var key in data) {
        setTimeout(() => {
          this[key] = data[key]
        }, 0);
      }
    }
  }
};
</script>

<style>
</style>