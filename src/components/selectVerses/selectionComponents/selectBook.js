import React, { useEffect, useState } from 'react';
import Book from './book';
import './selectBook.css'



const apiKey = '097f4b188d76be6149494abdaf2c5253';
const bibleVersion='de4e12af7f28f599-02';

function SelectBook(props) {
  
    const [books, setBooks] = useState(null);

    useEffect(()=>{
        const url =  `https://api.scripture.api.bible/v1/bibles/${bibleVersion}/books?include-chapters=true`;
        console.log('fetching')
        fetch(url, {
            method:"GET",
            headers:{
              "api-key":apiKey,
            }})
            .then(response => response.json())
            .then(data => setBooks(data.data))
    }, [])

  

    console.log(books)

    return (
        <div className='select-book'>
            {books && books.map((book, index) => {
                return <Book  key={index} name={book.name} id={book.id} chapters={book.chapters}/>
            })}
        </div>
    );
}

export default SelectBook;