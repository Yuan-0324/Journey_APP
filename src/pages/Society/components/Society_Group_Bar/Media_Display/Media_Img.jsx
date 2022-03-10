import axios from 'axios';
import React from 'react';

const Media_Img = ({mediaPic}) => {

    return (  
        <div className='clearfix mx-auto pl-3'>
            {mediaPic.map((elm,idx)=>
            <div className='media-img-frame mt-3 float-left ml-3 cursor-pointer'>
                <a className='d-flex justify-content-center overflow-hidden'>
                    <img src={elm.media} alt="" /> 
                </a>
            </div>
            )}
        </div>
    );
}
 
export default Media_Img;