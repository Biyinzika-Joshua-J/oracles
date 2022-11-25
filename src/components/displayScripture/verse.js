import React from 'react';
import PropTypes from 'prop-types';
import './verse.css';



const Verse = ({number, text}) =>{
    return (
        <div className='verse'>
            <div className='number'>
                {number}
            </div>
            <div className='text'>
                {text}
            </div>
        </div>
    );
}

Verse.propTypes = {
    
};

export default Verse;