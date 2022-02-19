//引入套件
import React,{ useEffect } from 'react';
// import Axios from 'axios';

const Searching_Group = () =>{

  //!!!假資料!!!照片要在製作上傳比例修圖的程式才會好看
  const [societyGroup,setSocietyGroup] = 
  React.useState([
    {img:"/img/1.jpg", name:"爬山", followed:1},
    {img:"/img/2.jpg", name:"爬山", followed:0},
    {img:"/img/3.jpg", name:"爬山", followed:1},
    {img:"/img/4.jpg", name:"爬山", followed:0},
    {img:"/img/5.jpg", name:"爬山", followed:1},
    {img:"/img/6.jpg", name:"爬山", followed:1},
    {img:"/img/7.jpg", name:"爬山", followed:1},
    {img:"/img/8.jpg", name:"爬山", followed:0}
  ])

  // !!!!!! Axios.get !!!!!
  // useEffect(() => {
  //   Axios.get('http://localhost:8000/test')  
  //   .then((res) => {
  //       console.log(JSON.stringify(res));
  //       setSocietyGroup(res.data);
  //   })
  //   },[societyGroup.data]
  // );

  return (
    <div className='searching-list' id='searchingListSociety'>
      {societyGroup.map((elm, idx)=>
      <a className='d-flex align-items-center m-2 a-black' key={idx} href="/Scoiety/group/disscussion">
      {/* herf要放到指定社團Disscussion */}
        <div className='selfie rounded-circle overflow-hidden mr-3'>
          <img className='img-fluid' src={elm.img} alt="" />
        </div>

        <div>
          <div>{elm.name}</div>
          <span>{elm.followed? '已加入':''}</span>
          <a className='text-decoration-none' href='/Scoiety/group/disscussion'>{elm.followed? '': '申請加入社團'}</a>
          {/* herf要放到指定社團Disscussion */}
        </div>
      </a>
      )}
      <hr />
      <div className='d-flex justify-content-center'><p>沒有其他結果</p></div>
    </div>
  );

}

export default Searching_Group ;