import {combineReducers} from 'redux';
import vehicleReducer from './reducers.js/VehicleReducer';
import searchReducer from './reducers.js/SearchReducer';

const rootReducer = combineReducers({vehicleReducer,searchReducer});

export default rootReducer;