import axios from 'axios';
import React from 'react';

const Media_Img = () => {

    const [mediaImg, setMediaImg] = React.useState(
        [{img:"/img/1.jpg"},
        {img:"/img/2.jpg"},
        {img:"/img/3.jpg"},
        {img:"/img/4.jpg"},
        {img:"/img/5.jpg"},
        {img:"/img/6.jpg"},
        {img:"/img/7.jpg"},
        {img:"/img/8.jpg"}]
    )

    //接收此社團相關照片資料
    // useEffect(() => {
    //     axios.get('http://localhost:8000/test')
    //         .then(res => )
    // }, []);

    return (  
        <div>
            {mediaImg.map((elm,idx)=>
            <div className='media-img-frame mt-3 float-left ml-3 cursor-pointer'>
                <a className='d-flex justify-content-center align-items-end overflow-hidden'>
                    <img src={elm.img} alt="" /> 
                </a>
            </div>
            )}
        </div>
    );
}
 
export default Media_Img;