import React, { useState } from "react";
import './selectVerses.css';
import SelectBook from "./selectionComponents/selectBook";
import SelectChapter from "./selectionComponents/selectChapter";
import { useSelector } from "react-redux";

const SelectVerse = () =>{

    const next = useSelector(state => state.chapters.value.next);

    const SelectionCpmponents = [<SelectBook/>, <SelectChapter/>];

  
    return (
        <div className="select-verse">
           {SelectionCpmponents[next]}
        </div>
    )
}

export default SelectVerse;