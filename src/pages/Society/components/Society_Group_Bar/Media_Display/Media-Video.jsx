import React from 'react';

const Media_Video = () => {
    return (  
        <div>
            <div className='media-img-frame mt-3 float-left ml-3'>
                <a className='d-flex justify-content-center align-items-end overflow-hidden'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/KrgJp7Z1Hv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </a>
            </div>
        </div>
    );
}
 
export default Media_Video;