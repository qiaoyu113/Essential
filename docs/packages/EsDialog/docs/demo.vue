<template>
  <EsContainer title="EsDialog组件">
    <el-button type="text" @click="showDialog = true">点击</el-button>
    <EsDialog
      :visible.sync="showDialog"
      :title="dialogTit"
      :confirm="confirm"
      @closed="resetDialog"
    >
    </EsDialog>
  </EsContainer>
</template>

<script lang="ts">
import EsDialog from "@/components/Essential/EsDialog.vue";
import { reactive, ref, getCurrentInstance } from "vue";
export default {
  components: { EsDialog },
  setup() {
    const { proxy } = getCurrentInstance();
    const showDialog = ref(false);
    const dialogTit = ref("提示");
    return {
      showDialog,
      dialogTit,
    };
  },
};
</script>

<style>
</style>