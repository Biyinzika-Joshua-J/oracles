import {configureStore} from '@reduxjs/toolkit';
import scripturesReducer from './reducers/scriptures';
import chapters from './reducers/chapters';
import modal from './reducers/modal';

export const Store = configureStore({
    reducer:{
        modal:modal,
        scripture:scripturesReducer,
        chapters:chapters,
    }
});