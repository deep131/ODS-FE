import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import CategoryTypeReducer from '../redux/Reducers/CategoryTypeReducer/CategoryTypeReducer';
import authReducers from './Reducers/AuthanticationReducer/AuthReducer';
const rootReducer = combineReducers({
    CategoryTypeReducer: CategoryTypeReducer,
    authReducers:authReducers
});
export default createStore(rootReducer,applyMiddleware(thunk));