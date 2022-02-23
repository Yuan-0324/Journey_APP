import React from 'react';
import Media_Img from './Media_Display/Media_Img';
import Media_Video from './Media_Display/Media-Video';
import Media_Album from './Media_Display/Media_Album';

const Group_Media = () => {

    const [mediaWhichShow, setMediaWhichShow]=React.useState('media-img');

    const swicher = (e) =>{
        switch(e.target.className.split(' ')[0]){
            case 'media-img':
                setMediaWhichShow('media-img');
                break;
            case 'media-video':
                setMediaWhichShow('media-video');
                break;
            case 'media-album':
                setMediaWhichShow('media-album');
                break;
        }
    }

    return ( 
        <div>
            <div className='d-flex justify-content-between'>
                <div className='d-flex justify-content-around'>
                    <div className='media-img btn btn-media' onClick={swicher}>照片</div>
                    <div className='media-video btn ml-3 btn-media' onClick={swicher}>影片</div>
                    <div className='media-album btn ml-3 btn-media' onClick={swicher}>相簿</div>
                </div>
                <div className='d-flex justify-content-between'>
                    <div className='btn btn-media'>+建立相簿</div>
                    <div className='btn ml-3 btn-media'>+新增照片/影片</div>
                </div>
            </div>

            {mediaWhichShow=="media-img" ? <Media_Img/> :null}
            {mediaWhichShow=="media-video" ? <Media_Video/> :null}
            {mediaWhichShow=="media-album" ? <Media_Album/> :null}

        </div>
     );
}
 
export default Group_Media;