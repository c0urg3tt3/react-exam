import { connect } from 'react-redux'

import Jedi from '../components/jedi/component'
import addJedi from '../redux/actions/jedi/add'
import fetchJedi from '../redux/actions/jedi/fetch'

const mapStateToProps = (state) => ({
  ...state.jedi.list,
  ...state.jedi.form
})

const mapDispatchToProps = (dispatch) => {
  return {
    addJedi: (name) => {
      dispatch(addJedi(name))
    },
    fetchJedi: () => {
      dispatch(fetchJedi())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Jedi)
