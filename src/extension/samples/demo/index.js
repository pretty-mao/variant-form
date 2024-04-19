import { addContainerWidgetSchema } from '@/extension/extension-helper'
import Demo from './demo-widget.vue'
import DemoItem from './demo-item.vue'
import cutomProperty from './property-editor/cutomProperty-editer.vue'
import * as PERegister from '@/components/form-designer/setting-panel/propertyRegister'
import * as PEFactory from '@/components/form-designer/setting-panel/property-editor-factory'
import { registerCWGenerator } from '@/utils/sfc-generator'

const schema = {
  type: 'demo',
  category: 'container',
  icon: 'title',
  widgetList: [],
  options: {
    name: 'demo-name',
    label: 'demo-label',
    customClass: '',
    cutomProperty: 'cutomProperty'
  }
}

const template = (cw, config) => {
  console.log(cw, config)
  return `<div class="card-container"></div>`
}

/**
 * @param {import('vue').VueConstructor} Vue
 */
export function loadDemo (Vue) {
  addContainerWidgetSchema(schema)

  Vue.component(Demo.name, Demo)
  Vue.component(DemoItem.name, DemoItem)

  PERegister.registerCPEditor(
    'demo-folded',
    'demo-folded-editor',
    PEFactory.createBooleanEditor('folded', 'demo属性'),
    Vue
  )

  PERegister.registerCPEditor(
    'demo-cutomProperty',
    'demo-cutomProperty-editor',
    cutomProperty,
    Vue
  )

  registerCWGenerator('demo', template)
}
