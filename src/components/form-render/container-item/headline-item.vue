<template>
  <container-item-wrapper :widget="widget">
    <div class="headline">{{ widget.options.label }}</div>
  </container-item-wrapper>
</template>

<script>
import emitter from "@/utils/emitter";
import i18n from "../../../utils/i18n";
import refMixin from "../../../components/form-render/refMixin";
import ContainerItemWrapper from "./container-item-wrapper";
import containerItemMixin from "./containerItemMixin";
import FieldComponents from "@/components/form-designer/form-widget/field-widget/index";

export default {
  name: "headline-item",
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
  data() {
    return {
      activeTabName: "",
    };
  },
  computed: {
    visibleTabs() {
      return this.widget.tabs.filter((tp) => {
        return !tp.options.hidden;
      });
    },
  },
  created() {
    this.initRefList();
  },
  mounted() {
    this.initActiveTab();
  },
  beforeDestroy() {
    this.unregisterFromRefList();
  },
  methods: {
    initActiveTab() {
      if (this.widget.type === "tab" && this.widget.tabs.length > 0) {
        let activePanes = this.widget.tabs.filter((tp) => {
          return tp.options.active === true;
        });
        if (activePanes.length > 0) {
          this.activeTabName = activePanes[0].options.name;
        } else {
          this.activeTabName = this.widget.tabs[0].options.name;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.headline{
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #000;
}
</style>
