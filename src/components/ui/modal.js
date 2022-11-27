import { useState } from "react";
import './modal.css';


export const Modal = ({children}) =>{

    const styles = {
        opacity:.8,
    }

    return (
        <div id='overlay' >
            <div className='modal-content'>
                {children}
            </div>
        </div>
    )
}

