<template>
    <container-item-wrapper :widget="widget">
        <div @click="selectWidget(widget)" class="t-bottom mb10"  :style="{ padding: '0 2px 5px 2px' }">
                <span class="t-mark subfield">{{ widget.options.label }}</span>
        </div>
    </container-item-wrapper>
  </template>
  
  <script>
  import emitter from "@/utils/emitter";
  import i18n from "../../../utils/i18n";
  import refMixin from "../refMixin";
  import ContainerItemWrapper from "./container-item-wrapper";
  import containerItemMixin from "./containerItemMixin";
  import FieldComponents from "@/components/form-designer/form-widget/field-widget/index";
  
  export default {
    name: "subfield-item",
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
      customClass() {
              let alignmentClass = '';
              if (this.widget.options.textAlign === 'center') {
                  alignmentClass = 'flex-center';
              } else if (this.widget.options.textAlign === 'right') {
                  alignmentClass = 'flex-end';
              } else {
                  alignmentClass = 'flex-start';
              }
              let customClass = this.widget.options.customClass || '';
  
              return `${alignmentClass} ${customClass}`.trim();
          }
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
.subfield{
    padding: 0px 2px 5px 2px;
    font-weight: 600;
    font-size: 16px;
    white-space: pre-wrap;
}
  </style>
  