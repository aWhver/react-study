/**
 * Created by zhaojuntong on 2018/3/8.
 */
export const plusCount = (foodId, foodPrice) => ({
  type: 'PLUS_COUNT',
  id: foodId,
  price: foodPrice
})
export const minusCount = (foodId, foodPrice) => ({
  type: 'MINUS_COUNT',
  id: foodId,
  price: foodPrice
})
