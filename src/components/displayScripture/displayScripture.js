import './displayScripture.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {fetchScriptures} from '../../context/reducers/scriptures';
import {useFetchChapterVerses} from '../../hooks/useFetchChapterVerses';
import { useState, useEffect } from 'react';
import Verse from './verse';
import NavigationBtns from './navigationBtns';

const DisplayScripture = () => {
    const scriptures = useSelector(state => state.scripture.value);
    const dispatch = useDispatch();
    

    useEffect(()=>{
        dispatch(fetchScriptures());
    }, [])

   
   


    return (
        <div>
            <NavigationBtns/>

            {scriptures.loading && <div>loading</div>}
            
            {!scriptures.loading && scriptures.scriptures.map((verse, index)=>{
                return (
                    <Verse key={index} number={verse.number} text={verse.text}/>
                )
          })}
        
        </div>
    )
}

export default DisplayScripture;