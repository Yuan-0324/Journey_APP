// import hiking from '../../../images/activity/teaActivity/teaCanva73.jpg';
import $ from 'jquery';
import React from 'react';



//firebase專區
import { useEffect, useContext, createRef, useRef, useLayoutEffect, useState } from 'react';
import { ref, uploadBytesResumable, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase';


const ActivityIntroduceImageSecond = ({data}) => {
     //firebase專區

     let eventIDdata=data.eventID;
     let user_ID=data.user_ID
      
      const [img, setImg] = useState('')
      let getImg = async () => {
          const forsetRef = ref(storage, `/event/${user_ID}/${eventIDdata}/activity${user_ID}2.png`);
          let url = await getDownloadURL(forsetRef);
          setImg(url)
      }
     //  console.log(img);
     useEffect(() => {

        getImg()
        
    }, [eventIDdata,user_ID]);
    //firebase底部


    return (
        <>
            <div  className="option o2" id='d2' style={{ backgroundImage: `url(${img})` }} 
                onClick={(e) => {
                    $('.option').removeClass("active")
                    $(`#${e.target.id}`).addClass("active")
                    // console.log(e);
                }}
            >
                <div className="shadow">
                    
                </div>
                <div className="label">

                </div>
            </div>
        </>
    )

}

export default ActivityIntroduceImageSecond;