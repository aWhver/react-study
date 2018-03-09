/**
 * Created by zhaojuntong on 2018/3/8.
 */
import Count from 'components/count/Count'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => ({
  counts: state.counts,
  foodId: ownProps.foodId,
  foodPrice: ownProps.foodPrice
})

const CountContainer = connect(mapStateToProps)(Count)
export default CountContainer