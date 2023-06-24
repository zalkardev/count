import React, {useState} from 'react';

const Modal = () => {
    const [modal,setModal]= useState(false)
    return (
        <div className="container">
                <div className="btn">
            <button onClick={()=>{
                setModal(true)
            }}>Click</button></div>
            <center>
                <div className="modal" style={{
                display:modal ? "block" : "none"
            }}>
                    <div className="modal-close" onClick={()=>{
                        setModal(false)
                    }}>X</div>
                <h1>Modal state</h1>
                <input type="text" placeholder="message"/>
            </div>
            </center>

        </div>

    );
};

export default Modal;