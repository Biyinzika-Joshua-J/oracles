import './book.css'
import { useDispatch } from 'react-redux';
import { upDateChapters } from '../../../context/reducers/chapters';
import React from 'react';
import {updateNext} from '../../../context/reducers/chapters'

function Book({name, id, chapters}) {
    const dispatch = useDispatch();

    function processChapters(){
        dispatch(updateNext());
        if (chapters.length >= 1) dispatch(upDateChapters(chapters));
    }

  
    return (
        <button className='book' onClick={processChapters}>
            <div className='book-name'>
                {name}
            </div>
        </button>
    );
}

export default Book;