
<template>
  <container-wrapper
    :designer="designer"
    :widget="widget"
    :parent-widget="parentWidget"
    :parent-list="parentList"
    :index-of-parent-list="indexOfParentList"
  >
    <div
      :key="widget.id"
      class="tab-container"
      style="margin: 5px"
      :class="{ selected: selected }"
      :style="{
        padding: '10px 0',
        borderRadius: '2px',
      }"
      @click="onHeadlineClick"
    >
      <el-input
        :class="customClass"
        @focus="selectWidget(widget)"
        v-model.trim="widget.options.label"
      >
      </el-input>
    </div>
  </container-wrapper>
</template>

<script>
import i18n from "@/utils/i18n";
import containerMixin from "@/components/form-designer/form-widget/container-widget/containerMixin";
import ContainerWrapper from "@/components/form-designer/form-widget/container-widget/container-wrapper";
import FieldComponents from "@/components/form-designer/form-widget/field-widget/index";
import refMixinDesign from "@/components/form-designer/refMixinDesign";

export default {
  name: "headline-widget",
  componentName: "ContainerWidget",
  mixins: [i18n, containerMixin, refMixinDesign],
  inject: ["refList"],
  components: {
    ContainerWrapper,
    ...FieldComponents,
  },
  props: {
    widget: Object,
    parentWidget: Object,
    parentList: Array,
    indexOfParentList: Number,
    designer: Object,
  },
  data() {
    return {
      activeHeadline: "",
      //
    };
  },
  computed: {
    selected() {
      return this.widget.id === this.designer.selectedId;
    },

    customClass() {
    let alignmentClass = '';
    if (this.widget.options.textAlign === 'center') {
      alignmentClass = 'center';
    } else if (this.widget.options.textAlign === 'right') {
      alignmentClass = 'end';
    } else {
      alignmentClass = 'start';
    }
    let customClass = this.widget.options.customClass || '';

    return `${alignmentClass} ${customClass}`.trim();
  }
  },
  watch: {
    //
  },
  created() {
    this.initRefList();
  },
  mounted() {
    //
  },
  methods: {
    onHeadlineClick(evt) {
      let paneName = evt.paneName;
      console.log(evt, paneName, "点击");
      // this.widget.tabs.forEach((tp) => {
      //   tp.options.active = tp.options.name === paneName;
      // });
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  .center .el-input__inner,
  .end .el-input__inner,
  .start .el-input__inner {
    font-weight: 800;
    color: rgb(30, 30, 30);
    font-size: 22px;
  }
  .center .el-input__inner {
    text-align: center;
  }
  .end .el-input__inner {
    text-align: right;
  }
  .start .el-input__inner {
    text-align: left;
  }
}
.tab-container {
  margin: 2px;

  .form-widget-list {
    min-height: 28px;
  }
}

.tab-container.selected {
  outline: 2px solid $--color-primary !important;
}
</style>
