import React from 'react';
import './facerecognition.css';

const BoundingBox = ({ faceBox }) => {
    return (
        <div className="bounding-box" style={{ top: faceBox.topRow, right: faceBox.rightCol, bottom: faceBox.bottomRow, left: faceBox.leftCol }}></div>
    )
}

const FaceRecognition = ({ imageURL, box }) => {

    return (
        <div className="centered ma">
            <div className="absolute mt2">
                <img id="inputimage" alt="" src={imageURL} width="500px" height="auto" />
                <div>
                    {
                        box.map((faceBox, i) => {
                            return (
                                <BoundingBox faceBox={box[i]} key={i} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default FaceRecognition;