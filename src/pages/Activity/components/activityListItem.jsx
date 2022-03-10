import React, { useState } from 'react';
// import teaCanva73 from '../../images/activity/teaActivity/teaCanva73.jpg'
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';


import { useHistory } from "react-router-dom"
// import ActivityListImageFirst from '../components/activityListImage/activityListImageFirst';


//firebase專區
import { useEffect, useContext, createRef, useRef, useLayoutEffect } from 'react';
import { ref, uploadBytesResumable, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../firebase';








const ActivityListItem = ({ data }) => {

    //firebase專區
  
    const submitStatue = useRef(false);
  
    let eventIDdata=data.eventID;
    let user_ID=data.user_ID
    // console.log(user_ID);   
    // console.log(state.eventID);
    let getImg = async () => {
        const forsetRef = ref(storage, `/event/${user_ID}/${eventIDdata}/activity${user_ID}.png`);
        let url = await getDownloadURL(forsetRef);
        setImg(url)
    }
    useEffect(() => {

        getImg()
        
    }, [eventIDdata,user_ID]);

    // let eventIDdata=data.eventID;
    // let user_ID=data.user_ID

    const [img, setImg] = useState('')
   

    // console.log(img);
    //firebase底部
    //點擊後前往對應ID的分頁
    const history = useHistory()
    const moveActivityIntroduce = (e) => {
        let activityID = e.target.dataset.club;
        // console.log(activityID);
        history.push(`activityIntroduce/${activityID}`)
    }


    return (
        <>
            <div className="list" id="FirstList">
                <div className="img">
                    {/* <div className='header-banner' style={{ backgroundImage: `url('${img}')` }} ></div> */}
                    {/* <div className='header-banner1' style={{ backgroundImage:  `url('${img}')` }} ></div> */}
                    <img className='header-banner' src={`${img}`} alt="各活動列表照片" />
                </div>
                <div className="listIntroduction">
                    <div className="information">
                        <div className="activityTime">
                            <div className='activityTimeDate'>
                                <div className='activityTimeDateLeft'>{data.date}</div>
                                <div>{data.time}</div>
                                <div></div>
                            </div>
                            <div className='activityTimeDatePlace'> <div className='activityTimeDatePlaceIcon'><IoLocationSharp /></div>{data.location}</div>
                        </div>
                        <h1>{data.title}</h1>
                        <p>{data.introduction}</p>



                    </div>
                    <div className="listButton">
                        <a onClick={moveActivityIntroduce} data-club={data.eventID} >詳細內容</a>

                    </div>
                    <div className="summary">

                    </div>
                </div>

            </div>
        </>
    )

}
export default ActivityListItem;





// 給amber
// 1.後端activity
// router.get('/event/show', function (req, res) {
//     conn.query('select * from event ', [],
//         function (err, rows) {
//             console.log("what");
//             // console.log(rows[0]);
//             res.send(JSON.stringify(rows))

//         })
// })



// 2. 前端父階取得eventID
// const [activityTitle, setEve] = React.useState(
//     [{
//         // 假資料
//         eventID: '',
//         post_email: '',
//         title: ''
//     }, {
//         eventID: '',
//         post_email: '',
//         title: ''
//     }, {
//         eventID: '',
//         post_email: '',
//         title: ''
//     }]
// )



// useEffect(async () => {
//     await axios.get('http://localhost:8000/event/show')
//         .then(res => { setEve(res.data) })
//     // console.log(res.data);
// }, []);

//2.data傳入子階
//2-1子階導入
//import { useHistory } from "react-router-dom"


//2-2函式
// const history = useHistory()
//     const moveActivityIntroduce = (e) => {
//         let activityID = e.target.dataset.club;
//         // console.log(activityID);
//         history.push(`activityIntroduce/${activityID}`)
//     }


//2-3按鈕
{/* <div className="listButton">
                        <a onClick={moveActivityIntroduce} data-club={data.eventID} >詳細內容</a>

                    </div> */}
