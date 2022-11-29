import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {fetchScriptures} from '../../context/reducers/scriptures'

function NavigationBtns(props) {
    const [book ,currentChapter] = useSelector(state => state.scripture.value.chapter.split('.'));
    const chapters = useSelector(state => state.chapters.value.chapters.length);
    const dispatch = useDispatch();
    //const [current, setCurrent] = useState(parseInt(currentChapter));
    let current = 1;

    
    function next(){
        if (book === 'GEN' && currentChapter <= 50){
            current++;
        }

        if (book !== 'GEN' && chapters>=1 ){
            if (current <= chapters){
                current++;
            }
        }
        dispatch(fetchScriptures(`${book}.${current}`))
    }
   

    return (
        <div>
            <button>previous</button>
            <button onClick={()=>{next()}}>next</button>
        </div>
    );
}

export default NavigationBtns;