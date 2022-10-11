import { NodePlopAPI } from 'plop'
import { componentGenerator } from './component'

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('component', componentGenerator)
}
