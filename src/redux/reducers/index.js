import {combineReducers} from 'redux'

import championsReducer from './championsReducer'

const reducers = combineReducers({
  champions: championsReducer
})

export default reducers