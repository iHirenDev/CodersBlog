import {configureStore} from '@reduxjs/toolkit'
import authSlice from '../features/authSlice';
import themeSlice from '../features/themeSlice';

const store = configureStore({
    reducer:{
        auth: authSlice,
        themeMode: themeSlice
    }
});


export default store;