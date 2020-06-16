import { combineReducers } from 'redux'
import postTMDBConfig from './postTMDBConfig'
import postMoviesUpcoming from './movieReducers/postMoviesUpcoming'
import setItemType from './setItemType'

const rootReducer = combineReducers({
    postTMDBConfig,
    postMoviesUpcoming,
    setItemType
});
  
  export default rootReducer