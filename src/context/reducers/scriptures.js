import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {extractVerses} from '../../utils/bible/extractversesfromchapters'


let initialState = {
    loading:false,
    scriptures:[],
    error:'error occured',
};

const bibleVersion='de4e12af7f28f599-02';
const chapter='GEN.1';
const apiKey = '097f4b188d76be6149494abdaf2c5253';

export const fetchScriptures =  createAsyncThunk('scriptures/fetchScriptures', ()=>{
    return fetch(`https://api.scripture.api.bible/v1/bibles/${bibleVersion}/chapters/${chapter}?content-type=json`, {
        method:'GET',
        headers:{
            'api-key': apiKey
        }
    })
            .then(response => response.json())
            .then(data => extractVerses(data['data']['content']))
            .catch(err => console.log(err.message))
})

export const scripturesSlice = createSlice({
    name:'scriptures',
    initialState:{value:initialState},
    extraReducers:(builder) => {
        builder.addCase(fetchScriptures.pending, (state)=>{
            state.loading = true;
        })

        builder.addCase(fetchScriptures.fulfilled, (state, action)=>{
            state.loading = false;
            state.value.scriptures = action.payload;
        })

        builder.addCase(fetchScriptures.rejected, (state)=>{
            state.loading = false;
            state.error = 'We having trouble fetching the verses, please try again later!'
        })
    }
});



export default scripturesSlice.reducer;