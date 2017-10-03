import { connect } from 'react-redux'

import Jedi from '../components/jedi/component'
import fetchJedi from '../redux/actions/jedi/fetch'

const mapStateToProps = (state) => ({
  ...state.jedi.list
})

const mapDispatchToProps = (dispatch) => {
  return {
    fetchJedi: () => {
      dispatch(fetchJedi())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jedi)
