import React from "react";
import ReactDOM from 'react-dom';


const Modal = (props)=>{
return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
        <div className="ui standard modal visible active">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet beatae debitis eos, eveniet illum iusto nulla, provident quisquam quos sint ut. Aut obcaecati officia perferendis praesentium quis rem sunt.
        </div>
    </div>
    ,
    document.querySelector("#modal")
)
}


export default Modal
