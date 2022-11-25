import {configureStore} from '@reduxjs/toolkit';
import scripturesReducer from './reducers/scriptures';

export const Store = configureStore({
    reducer:{
        scripture:scripturesReducer,
    }
});