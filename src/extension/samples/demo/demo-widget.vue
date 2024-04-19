<template>
  <container-wrapper
    :designer="designer"
    :widget="widget"
    :parent-widget="parentWidget"
    :parent-list="parentList"
    :index-of-parent-list="indexOfParentList"
  >
    <el-input
      :key="widget.id"
      @click.native.stop="selectWidget(widget)"
      :shadow="widget.options.shadow"
      class="demo"
      :class="[
        selected ? 'selected' : '',
        !!widget.options.folded ? 'folded' : '',
      ]"
      v-model="widget.options.label"
      placeholder="请输入标题名称"
    ></el-input>
  </container-wrapper>
</template>
<script>
import emitter from "@/utils/emitter";
import i18n from "@/utils/i18n";
import containerMixin from "@/components/form-designer/form-widget/container-widget/containerMixin";
import ContainerWrapper from "@/components/form-designer/form-widget/container-widget/container-wrapper";

export default {
  name: "demo-widget",
  componentName: "ContainerWidget",
  mixins: [emitter, containerMixin, i18n],
  components: {
    ContainerWrapper,
  },
  props: {
    widget: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
  },
  computed: {
    selected() {
      return this.widget.id === this.designer.selectedId;
    },
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
      height: 46px;
      padding: 10px 5px;
    }
  }
}
</style>
