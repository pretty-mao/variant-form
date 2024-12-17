<template>
    <form-item-wrapper :designer="designer" :field="field" :rules="rules" :design-state="designState"
                     :parent-widget="parentWidget" :parent-list="parentList" :index-of-parent-list="indexOfParentList"
                     :sub-form-row-index="subFormRowIndex" :sub-form-col-index="subFormColIndex" :sub-form-row-id="subFormRowId">
      <div class="flex-start">
       <el-input :readonly="true" :placeholder="field.options.label" class="mr5">
        <svg-icon slot="append" :icon-class="field.icon" @click="handleSelectStaff"></svg-icon>
       </el-input>
       <el-button type="danger" icon="el-icon-delete" @click="handleDelete"></el-button>
    </div>
  </form-item-wrapper>
  </template>
  
  <script>
    import FormItemWrapper from '@/components/form-designer/form-widget/field-widget/form-item-wrapper.vue'
    import emitter from '@/utils/emitter'
    import i18n from "@/utils/i18n"
    import fieldMixin from "@/components/form-designer/form-widget/field-widget/fieldMixin"
    import SvgIcon from "@/components/svg-icon";
    export default {
      name: "staff-widget",
      componentName: 'FieldWidget',  //必须固定为FieldWidget，用于接收父级组件的broadcast事件
      mixins: [emitter, fieldMixin, i18n],
      props: {
        field: Object,
        parentWidget: Object,
        parentList: Array,
        indexOfParentList: Number,
        designer: Object,
  
        designState: {
          type: Boolean,
          default: false
        },
  
        subFormRowIndex: { /* 子表单组件行索引，从0开始计数 */
          type: Number,
          default: -1
        },
        subFormColIndex: { /* 子表单组件列索引，从0开始计数 */
          type: Number,
          default: -1
        },
        subFormRowId: { /* 子表单组件行Id，唯一id且不可变 */
          type: String,
          default: ''
        },
  
      },
      data() {
        return {
          oldFieldValue: null, //field组件change之前的值
          fieldModel: null,
          rules: [],
        }
      },
      components: {
        FormItemWrapper,
        SvgIcon
      },
      computed: {
      //   layoutType() {
      //   return this.designer.getLayoutType()
      // },
      },
      created() {
        this.registerToRefList()
        this.initEventHandler()
      },
      beforeDestroy() {
        this.unregisterFromRefList()
      },
      methods: {
        handleDelete(){
            if (this.field.options.onDelete) {
            let changeFn = new Function(this.field.options.onDelete)
            changeFn.call(this)
          }
            console.log('删除')
            this.$emit('handleExternal','DELETE', this.field)
        },
        handleSelectStaff(){
            console.log('选择员工')
            this.$emit('handleExternal','staff', this.field)
        }
  
      }
    }
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  