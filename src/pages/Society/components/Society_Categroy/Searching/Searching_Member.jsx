//引入套件
import React, { useEffect } from 'react';
// import Axios from 'axios'

const Searching_Member = () =>{

    //!!!假資料!!! 照片要在製作上傳比例修圖的程式才會好看
    const [followedMember,setFollowedMember] = 
    React.useState([
     {img:"/img/1.jpg", lastName:"林", firstName:"與諶", followed:1},
     {img:"/img/2.jpg", lastName:"林", firstName:"與諶", followed:1},
     {img:"/img/3.jpg", lastName:"林", firstName:"與諶", followed:1},
     {img:"/img/4.jpg", lastName:"林", firstName:"與諶", followed:0},
     {img:"/img/5.jpg", lastName:"林", firstName:"與諶", followed:0},
     {img:"/img/6.jpg", lastName:"林", firstName:"與諶", followed:1},
     {img:"/img/7.jpg", lastName:"林", firstName:"與諶", followed:1},
     {img:"/img/8.jpg", lastName:"林", firstName:"與諶", followed:1}
    ])

    //!!!!!! Axios.get !!!!! 
    // useEffect(() => {
    //     Axios.get('http://localhost:8000/test')  
    //     .then((res) => {
    //         console.log(JSON.stringify(res));
    //         setFollowedMember(res.data);
    //     })
    //     },[followedMember.data]
    // );

    return (
        <div className='searching-list'>
            {followedMember.map((elm,idx)=>
            
            <div className='d-flex align-items-center m-2 cursor-pointer' key={idx} onClick={()=>window.location="/Login"}>
            {/* 要放上個人頁面路徑 */}
                <div className='selfie rounded-circle overflow-hidden mr-3'>
                    <img className='img-fluid' src={elm.img} alt="" />
                </div>

                <div className='d-flex flex-column'>

                    <div className='a-black'>{elm.lastName+elm.firstName} {elm.followed? '已追蹤': ""}</div>

                    <div>
                        <a className='text-decoration-none' href='/'>訊息</a>
                        {/* a herf要開啟聊天功能 */}
                    </div>

                </div>
            </div>
            )}
            <hr />
            <div className='d-flex justify-content-center'><p>沒有其他結果</p></div>
         </div>
    );

}

export default Searching_Member ;