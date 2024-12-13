export const cardSchema = {
  type: 'card',
  category: 'container',
  icon: 'card',
  widgetList: [],
  options: {
    name: '',
    label: 'card',
    hidden: false,
    folded: false,
    showFold: true,
    cardWidth: '100%',
    shadow: 'never',
    customClass: ''
  }
}

export const headlineSchema = {
  type: 'headline',
  category: 'container',
  icon: 'title',
  widgetList: [],
  options: {
    name: '',
    label: '我是大标题',
    hidden: false,
    folded: false,
    showFold: true,
    cardWidth: '100%',
    shadow: 'never',
    customClass: 't-danger'
  }
}

export const treeSchema = {
  type: 'tree',
  icon: 'tree',
  widgetList: [],
  formItemFlag: false,
  options: {
    name: '',
    label: '树形选择',
    title: '树形结构',
    hidden: false,
    data: [
      {
        label: '一级 1',
        children: [
          {
            label: '二级 1-1',
            children: [
              {
                label: '三级 1-1-1'
              }
            ]
          }
        ]
      },
      {
        label: '一级 2',
        children: [
          {
            label: '二级 2-1',
            children: [
              {
                label: '三级 2-1-1'
              }
            ]
          },
          {
            label: '二级 2-2',
            children: [
              {
                label: '三级 2-2-1'
              }
            ]
          }
        ]
      },
      {
        label: '一级 3',
        children: [
          {
            label: '二级 3-1',
            children: [
              {
                label: '三级 3-1-1'
              }
            ]
          },
          {
            label: '二级 3-2',
            children: [
              {
                label: '三级 3-2-1'
              }
            ]
          }
        ]
      }
    ],
    folded: false,
    showFold: true,
    cardWidth: '100%',
    shadow: 'never',
    customClass: ''
  }
}

export const staffSchema = {
  type: 'staff',
  icon: 'staff',
  formItemFlag: true, // 是否可以作为表单项收集数据
  options: {
    name: '',
    label:'人员选择',
    type: 'info',
    description: '选择人员.......',
    requiredHint: "",
    required: true,
    closable: true,
    closeText: '',
    center: true,
    showIcon: false,
    effect: 'light',
    hidden: false,
    onDelete: '',
    customClass: ''
  }
}
export const teamSchema = {
  type: 'team',
  icon: 'team',
  formItemFlag: true, // 是否可以作为表单项收集数据
  options: {
    name: '',
    label:'团队选择',
    type: 'info',
    description: '',
    requiredHint: "",
    required: true,
    closable: true,
    closeText: '',
    center: true,
    showIcon: false,
    effect: 'light',
    hidden: false,
    onDelete: '',
    customClass: ''
  }
}
export const orgSchema = {
  type: 'org',
  icon: 'org',
  formItemFlag: true, // 是否可以作为表单项收集数据
  options: {
    name: '',
    label:'部门选择',
    type: 'info',
    description: '',
    requiredHint: "",
    required: true,
    closable: true,
    closeText: '',
    center: true,
    showIcon: false,
    effect: 'light',
    hidden: false,
    onDelete: '',
    customClass: ''
  }
}
export const postSchema = {
  type: 'post',
  icon: 'post',
  formItemFlag: true, // 是否可以作为表单项收集数据
  options: {
    name: '',
    label:'岗位选择',
    type: 'info',
    required: true,
    requiredHint: "",
    description: '',
    closable: true,
    closeText: '',
    center: true,
    showIcon: false,
    effect: 'light',
    hidden: false,
    onDelete: '',
    customClass: ''
  }
}