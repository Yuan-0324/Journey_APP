import React,{useEffect,useContext} from 'react';
import Group_Selfie from './Group_Selfie';
import Group_All_Selfie from './Group_All_Selfie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import Searching_Group_Member from './Searching_Group_Member';
import axios from 'axios';
import context from '../../../../context';


const Group_Member = () => {
    const currentUser = useContext(context);
   let userId = currentUser.userInfo.id;

    // 個人權限
    const [groupRight, setGroupRight] = React.useState({right:""})
  let societyID = useParams();

  useEffect(() => {
    
    let id = societyID.id;
      axios.post('http://localhost:8000/soceity/right',{societyID: id})
          .then(res=>{
          setGroupRight(res.data[0])
        }) 
          
  }, []);


    //  社團人員名單
    const [groupMemberList, setGroupMemberList] = React.useState([])
    useEffect(() => {
        axios.post('http://localhost:8000/group/memberlist', {societyID : societyID.id})
        .then(res=>{setGroupMemberList(res.data)
            console.log(res.data);
        });
    }, []);



// 搜尋人員
  const [seachResult, setSeachResult] = React.useState([]);
     const doTheSearch = (e) =>{
        if(e.target.value.trim()!=''){
        axios.post('http://127.0.0.1:8000/search/member',{id: userId, typeInto:`%${e.target.value}%`})
           .then(res=>{
              let result = res.data;
              setSeachResult(result);
            //   console.log(seachResult);
           });
        }   
     }

    return ( 
        <div className='group-member pt-4 pl-4 pr-4'>
            <div className="group-member-search d-flex mx-auto">
                <div className='group-member-search-icon pl-2 pt-2 d-flex align-item-center'><FontAwesomeIcon icon={faSearch} /></div>
                <input className='group-member-input' type="text" placeholder='搜尋用戶/社團' onChange={doTheSearch} onInput={doTheSearch} onPaste={doTheSearch} onKeyDown={doTheSearch}/>
            </div>

            <div className='search-area w-100'>
                {seachResult.length!==0 && <Searching_Group_Member followedMember={seachResult}/>}

            </div>
            
            <div className='manage-member mt-3'>
                <div className='manage-title'>管理員</div>
 
                <div className='clearfix'>
                    {groupMemberList.filter((elm,idx)=>{
                        return elm.appellation != null;
                    }).map((elm,idx)=>
                    <Group_Selfie memberPer={elm}/>
                    )}
                </div>

                <div className='manage-title'>社團成員</div>

                <div className='clearfix h-100'>
                    {groupMemberList.map((elm,idx)=>
                    <Group_All_Selfie memberPer={elm}/>
                    )}
                </div>

            </div>
        </div>
     );
}
 
export default Group_Member;