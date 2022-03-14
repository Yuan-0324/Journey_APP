//引入套件
import React, { useEffect } from 'react';
import $ from 'jquery/dist/jquery';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//引入componemts
import About_Group from './About_Group';
import Society_Discussion from './Society_Discussion';
import Society_Activity from './Society_Activity/Activities_List';
import Group_Member from './Group_Member';
import Group_Media from './Group_Media';
import Society_Pic from './Society_Pic';
import { IoIosAdd } from "react-icons/io";


import { ref, uploadBytesResumable, uploadBytes, getDownloadURL } from 'firebase/storage';
import {storage} from '../../../../firebase';

const Society_Group_Bar = ({justForGroup,setGroupPicsave,setGroupPicSit}) =>{
    let userId = localStorage.getItem('id');

    const [groupPageData, setGroupPageData] = React.useState({})

    const [groupRight, setGroupRight] = React.useState({right:""})
  let societyID = useParams();
  let id = societyID.id;
  useEffect(() => {
    if(id!=0){
      axios.post('http://localhost:8000/soceity/right',{societyID: id , userId: userId})
          .then(res=>{
              console.log(res.data);
          setGroupRight(res.data[0])
        }) 
    }else{setGroupRight({right:'1', confirmed_join: 1, be_invited: 0})}
          
  }, []);
    

    // 個別社團相關資料
    useEffect(async () => {    
        if(societyID.id == 0){
            let result = {societyID: 0, bg_pic: null, society_name: "", society_num: 1 }
            setGroupPageData(result);
            return;
        }else{
            // 從fireBase取照片
            axios.post('http://localhost:8000/eachsociety/group',{societyID: id})
                .then(res=>{
                    // console.log(res.data);
                    // let newres = res.data;
                    // newres.map(async (elm,idx)=>{
                    //     // console.log(elm);
                    //     elm.bg_pic.type = 'image/png';
                    //     let data = res.data[0].bg_pic;
                    //     var blob1 = new Blob([new Uint8Array(data.data)]); 
                    //     const imageUrl = URL.createObjectURL(blob1); 
                    //     // console.log(imageUrl);
                    //     elm.bg_pic = imageUrl;
                        // console.log(imageUrl);
                        setGroupPageData(res.data[0]);
                    })
                
            // })

        }
    }, []);


    const [whichShow, setWhichShow]=React.useState('g-discussion');
    
    const swicher = (e) =>{
        $('li').css('border-bottom', 'none');
        e.target.style.borderBottom = '';
        switch(e.target.className){
            case 'g-about':
                e.target.style.borderBottom = '2px solid #1697d5';
                setWhichShow('g-about');
                break;
            case 'g-discussion':
                e.target.style.borderBottom = '2px solid #1697d5';
                setWhichShow('g-discussion');
                break;  
            case 'g-event':
                e.target.style.borderBottom = '2px solid #1697d5';
                setWhichShow('g-event');
                break;
            case 'g-member':
                e.target.style.borderBottom = '2px solid #1697d5';
                setWhichShow('g-member');
                break;
            case 'g-media':
                e.target.style.borderBottom = '2px solid #1697d5';
                setWhichShow('g-media');
                break;
        }
    }

    // 加入新社團
    const attendNewGroup = () =>{
        alert(`已向社團管理員發出申請，\n請至「個人頁面」=> 「邀約通知」查看!`)
        axios.post('http://localhost:8000/attendnew/group',{societyID:societyID.id, userId:userId})
    }


    return (
            
        <div className='society_group_bar overflow-hidden'>
            <div>
                <Society_Pic groupPic={groupPageData.bg_pic} groupPageData={groupPageData.societyID} allData={groupPageData} setGroupPicsave={setGroupPicsave} setGroupPicSit={setGroupPicSit} groupRight={groupRight}/>

                <div className='d-flex justify-content-between mr-5'>
                    <div className='group_name d-flex align-item-center'>
                        <p className='h3 ml-5 pt-3' >{groupPageData.society_name ? groupPageData.society_name : ((justForGroup)? justForGroup : "<<< 請輸入社團名稱" )}</p>
                        <span className='ml-4 pt-4'>{groupPageData.society_num ? groupPageData.society_num : 0}成員</span>
                    </div>
                {((groupRight.confirmed_join==(0||null||undefined) && groupRight.be_invited==(0||undefined||null) && groupRight.right==("0"||undefined||null)) && societyID.id!=0) && <div className='attend-group d-flex justify-content-center align-items-center mt-3 cursor-pointer mr-5' onClick={attendNewGroup}><IoIosAdd />加入社團</div>}
                </div>
            </div>


        
            <div>
            <div className="society_group_lowerbar d-flex flex-column mx-auto">
                <ul className='d-flex list-unstyled text-center cursor-pointer'>
                    <li className='g-about' onClick={swicher}>關於</li>
                    <li className='g-discussion' onClick={swicher}>討論</li>
                    <li className='g-event' onClick={swicher}>活動</li>
                    <li className='g-member' onClick={swicher}>成員</li>
                    <li className='g-media' onClick={swicher}>照片</li>
                </ul>
            </div>
        {(societyID.id == 0) ? '': 
            <div>

            {whichShow=="g-about" ? <About_Group/> :null}
            {whichShow=="g-discussion" ? <Society_Discussion/> :null}
            {whichShow=="g-event" ? <Society_Activity userId={userId} /> :null}
            {whichShow=="g-member" ? <Group_Member /> :null}
            {whichShow=="g-media" ? <Group_Media /> :null}

            </div>
        }
            </div>
        </div>
  
    );

}

export default Society_Group_Bar;