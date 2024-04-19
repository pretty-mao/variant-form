<template>
  <container-item-wrapper :widget="widget">
    <el-input
      class="demo"
      :key="widget.id"
      :shadow="widget.options.shadow"
      :class="[!!widget.options.folded ? 'folded' : '']"
      v-model="widget.options.label"
      placeholder="请输入组件名称"
    ></el-input>
  </container-item-wrapper>
</template>
<script>
import emitter from "@/utils/emitter";
import i18n from "@/utils/i18n";
import refMixin from "@/components/form-render/refMixin";
import ContainerItemWrapper from "@/components/form-render/container-item/container-item-wrapper";
import containerItemMixin from "@/components/form-render/container-item/containerItemMixin";
import FieldComponents from "@/components/form-designer/form-widget/field-widget/index";

export default {
  name: "demo-item",
  componentName: "ContainerItem",
  mixins: [emitter, i18n, refMixin, containerItemMixin],
  components: {
    ContainerItemWrapper,
    ...FieldComponents,
  },
  props: {
    widget: Object,
  },
  inject: ["refList", "sfRefList", "globalModel"],
  computed: {
    customClass() {
      return this.widget.options.customClass || "";
    },
  },
  created() {
    this.initRefList();
  },
  beforeDestroy() {
    this.unregisterFromRefList();
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .demo {
    .el-input__inner {
      text-align: center;
      font-size: 22px;
      font-weight: 800;
      margin: 5px 0;
      color: #333;
    }
  }
}
</style>
