import {
  AdnyBar,
  AdnyLine,
  AdnyPie,
  AdnyEchart,
  AdnyRadar
} from '../echarts'
import {
  AdnyTable,
  AdnySearch,
  AdnyModal
} from '../page'
const componentsAutoRegister = require.context('@/adny-ui', true, /index.js$/)
console.log(componentsAutoRegister.keys())
const components = [AdnyBar, AdnyLine, AdnyPie, AdnyTable, AdnySearch, AdnyModal, AdnyEchart, AdnyRadar]

export default function (app) {
  for (const component of components) {
    app.component(component.name, component)
  }
}
