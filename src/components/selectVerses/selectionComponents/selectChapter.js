import React from 'react';
import { useSelector } from 'react-redux';
import './selectChapter.css';
import {useDispatch} from 'react-redux'
import {updateNext} from '../../../context/reducers/chapters'
import {fetchScriptures} from '../../../context/reducers/scriptures'
import {updateModal} from '../../../context/reducers/modal'

function SelectChapter(props) {
    const chapters = useSelector(chapters => chapters.chapters.value.chapters);
    const dispatch = useDispatch();

    function fetchChapter(chapterId){
        // close model
        dispatch(updateModal(0));
        dispatch(fetchScriptures(chapterId));
    }


    return (
        <div>
            {chapters && chapters.map((chapter, index) =>{
                return <button onClick={()=>{fetchChapter(chapter.id)}} className='chapter-btn' key={index}>
                    {chapter.number}
                </button>
            })}

            <div>
                <button onClick={()=>{dispatch(updateNext())}}>Back</button>
            </div>
        </div>
    );
}

export default SelectChapter;