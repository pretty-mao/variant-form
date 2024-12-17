<template>
    <container-wrapper :designer="designer" :widget="widget" :parent-widget="parentWidget" :parent-list="parentList"
        :index-of-parent-list="indexOfParentList">
        <div :key="widget.id" style="margin: 5px" :class="{ selected: selected }" :style="{
            padding: '10px 0',
            borderRadius: '2px',
        }" @click="onSubfieldClick">
            <div @click="selectWidget(widget)" class="t-bottom"  :style="{ padding:selected ? '0px' : '0 2px 5px 2px' }">
                <el-input v-if="selected"  v-model.trim="widget.options.label">
                </el-input>
                <span v-else class="t-mark subfield">{{ widget.options.label }}</span>
            </div>
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
    name: "subfield-widget",
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
            console.log(this.widget.id === this.designer.selectedId, '选中和没选中------')
            return this.widget.id === this.designer.selectedId;
        },


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
        onSubfieldClick(evt) {
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
    .el-input__inner {
        font-weight: 600;
        font-size: 16px;
        padding: 5px 2px;
        border: none !important;
        display: inline-block !important;
        border: 1px solid #dfdfdf;
    }
}
.subfield{
    padding: 0px 2px 5px 2px;
    font-weight: 600;
    font-size: 16px;
    white-space: pre-wrap;
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