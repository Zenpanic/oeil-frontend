import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className="f3">
                {'This Magic Eye can recognize faces in pictures. Give it a try!'}
            </p>
            <div className="centered">
                <div className="form centered pa4 br2 shadow-5">
                    <input type="text" className="f4 pa2 w-70 center" onChange={onInputChange} />
                    <button className="w-30 grow f4 ph3 link pv2 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}


export default ImageLinkForm;