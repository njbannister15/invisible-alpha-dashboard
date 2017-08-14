import s3reducer from './s3/reducers'
import {combineReducers} from 'redux'
export default combineReducers({s3: s3reducer});