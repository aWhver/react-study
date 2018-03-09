/**
 * Created by zhaojuntong on 2018/3/8.
 */
import {combineReducers} from 'redux'
const initialState = {
  quality: {},
  productIds: []
}
const counts = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS_COUNT':
      if (state.productIds.indexOf(action.id) > -1) {
        return {
          quality: {
            ...state.quality,
            [action.id]: state.quality[action.id] + 1
          },
          productIds: [...state.productIds]
        }
      } else {
        return {
          quality: {
            ...state.quality,
            [action.id]: 1
          },
          productIds: [...state.productIds, action.id]
        }
      }
    case 'MINUS_COUNT':
      if (state.productIds.indexOf(action.id) > -1) {
        return {
          quality: {
            ...state.quality,
            [action.id]: Math.max(state.quality[action.id] - 1, 0)
          },
          productIds: [...state.productIds]
        }
      }
    default:
      return state
  }
}

const Shopcar = combineReducers({
  counts
})

export default Shopcar