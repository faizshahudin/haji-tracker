import { combineReducers } from 'redux';
import scan from './scan_reducer';
import profile from './profile_reducer';

export default combineReducers({
    scan,
    profile
});