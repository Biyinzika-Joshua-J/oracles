import { useState } from "react";
import './modal.css';
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "../../context/reducers/modal";


export const Modal = ({children}) =>{
   
    const openStatus = useSelector(state => state.modal.value);
    const dispatch = useDispatch();

    const styles = {
        opacity:openStatus,
        zIndex:openStatus===0?'-20':'20',
    }

    function openOrCloseModal(){
        dispatch(updateModal(0));
    }

   


    return (
        <div id='overlay' style={styles} >
            <div><button onClick={openOrCloseModal}>close</button></div>
            <div className='modal-content' style={{zIndex:openStatus===0?'-30':'30'}}>
                {children}
            </div>
        </div>
    )
}

