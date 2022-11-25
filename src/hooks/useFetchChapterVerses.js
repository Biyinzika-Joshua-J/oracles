import {useState, useEffect} from 'react';
import { extractVerses } from '../utils/bible/extractversesfromchapters';
import { useDispatch } from 'react-redux';
import { updateScriptures } from '../context/reducers/scriptures';

const apiKey = '097f4b188d76be6149494abdaf2c5253';

export const useFetchChapterVerses = (bibleVersion='de4e12af7f28f599-02', chapter='GEN.1') =>{
    const [data, setData] = useState(null);
    const url =  `https://api.scripture.api.bible/v1/bibles/${bibleVersion}/chapters/${chapter}?content-type=json`;

    useEffect(()=>{
        fetch(url, {
            method:"GET",
            headers:{
              "api-key":apiKey,
            }
          })
          .then((response)=>response.json())
          .then((data) =>  {setData(data['data']['content'])} )
          .catch((error) => {
            console.log('an error occured while fetching the resource');
          });
    }, [url])
    
   return data && extractVerses(data);
}