import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import houseReducer from '../feature/Home/reducer';

const rootReducer = combineReducers({
    house: houseReducer //calling the reducer file
    });
    
const middleware = composeWithDevTools(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);

    

