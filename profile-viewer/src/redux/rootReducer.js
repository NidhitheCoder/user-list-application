import {combineReducers} from 'redux';
import {persistReducer} from'redux-persist';
import storage from 'redux-persist/lib/storage';

import UsersDataReducer from './usersData/users-data.reducer';

const persistConfig = {
    key:"root",
    storage,
    whitelist:["usersData"]
};

const rootReducer = combineReducers({
    userData:UsersDataReducer
});

export default persistReducer(persistConfig,rootReducer);