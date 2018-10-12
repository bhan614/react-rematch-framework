import common from './common'
import home from './home'
import { init } from '@rematch/core'
import immerPlugin from '@rematch/immer'

const config = {
  models: {
    common,
    home,
  },
  redux: {

  },
  plugin: [immerPlugin]
}

export default init(config)
