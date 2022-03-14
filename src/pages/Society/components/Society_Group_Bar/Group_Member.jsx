import React,{useEffect,useContext,useState,useRef} from 'react';
import Group_Selfie from './Group_Selfie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import Searching_Group_Member from './Searching_Group_Member';
import axios from 'axios';
import context from '../../../../context';

import { FiEdit } from "react-icons/fi";
import { MdCancel} from 'react-icons/md';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { DndProvider } from 'react-dnd';

const Group_Member = () => {

    const currentUser = useContext(context);
   let userId = currentUser.userInfo.id;

    // 個人權限
    const [groupRight, setGroupRight] = React.useState({right:""})
    let societyID = useParams();
    let id = societyID.id;
    useEffect(async() => {
        
      await  axios.post('http://localhost:8000/soceity/right',{societyID: id , userId:userId})
        .then(res=>{
        setGroupRight(res.data[0])
    }) 
    }, []);


    //  社團人員名單
    // groupMemberList right
    const [groupMemberList, setGroupMemberList] = React.useState([])

    useEffect(async() => {
       await axios.post('http://localhost:8000/group/memberlist', {societyID : societyID.id})
        .then(res=>{setGroupMemberList(res.data)
            // let wantArr = [
            //     {name:'管理員', dropId:'0', did:0 ,member:[]},
            //     {name:'社團成員',dropId:'1', did:1 ,member:[]}
            // ]
            //     res.dara.foreach((elm,idx)=>{
            //         if(elm.right==1){
            //             wantArr[0].member.push(elm)
            //         }else{
            //             wantArr[1].member.push(elm)
            //         }
            //     })
            //     console.log(wantArr);
            // setCola(wantArr)
        });
    }, []);



// 搜尋人員
let seachNow = '';
  const [seachResult, setSeachResult] = React.useState([]);
     const doTheSearch = async(e) =>{
         seachNow = e;
        if(e.target.value.trim()!==""){
           await axios.post('http://localhost:8000/searchin/scoiety',{societyID: societyID.id, typeInto:`%${e.target.value}%`})
            .then(res=>{
                setSeachResult(res.data);
            });
        }
     }

// 邀請加入社團
const invitperson =async(e)=>{
    //be_invited = 1
    seachResult[e.idx].be_invited=1;
    let invitedPerson = e.id;
    await axios.post('http://localhost:8000/invit/person',{societyID:societyID.id,invitedPerson:invitedPerson})
    setSeachResult([...seachResult])       
}
useEffect(async() => {
    await axios.post('http://localhost:8000/group/memberlist', {societyID : societyID.id})
     .then(res=>{setGroupMemberList(res.data)
     });
 }, [seachResult]);

// 取消邀請
const cencelInvited =async (e)=>{    
    await axios.post('http://localhost:8000/cancel/groupinvited',{giveNum: e})
        .then(res=>{

        let newgroupList = groupMemberList.filter((elm,idx)=>{
            return elm.number != e;
        });
        setGroupMemberList(newgroupList);
        })     
}

const kickMember =async(e)=>{
    await axios.post('http://localhost:8000/kickout/member',{giveNum: e})
        .then(res=>{

        let newgroupList = groupMemberList.filter((elm,idx)=>{
            return elm.number != e;
        });
        setGroupMemberList(newgroupList);
        })     
}

// 陣列數量
const [cola,setCola] = React.useState([
    {name:'管理員', dropId:'0', did:0 ,member:[
        {id:1, number:1, api_selfie:"https://firebasestorage.googleapis.com/v0/b/genuine-wall-311416.appspot.com/o/member%2F19%2FheadShot19.png?alt=media&token=9b7d4114-460b-413f-bc93-2afbf84d0247", lastName:"林", firstName:"爸爸", appellation:"會長", right:1, confirmed_join:1, be_invited:0},

    ]},
    {name:'社團成員',dropId:'1', did:1 ,member:[
        {id:3, number:3, api_selfie:"https://firebasestorage.googleapis.com/v0/b/genuine-wall-311416.appspot.com/o/member%2F5%2FheadShot5.png?alt=media&token=2c51389a-736d-4a07-8ded-56e710e74ca9", lastName:"王", firstName:"美秀", appellation:"", right:0, confirmed_join:1, be_invited:0},
        {id:4, number:4,api_selfie:"https://firebasestorage.googleapis.com/v0/b/genuine-wall-311416.appspot.com/o/member%2F3%2FheadShot3.png?alt=media&token=b6f4b071-9aee-4c5c-9b43-6d642726e17e", lastName:"邱", firstName:"正立", appellation:"", right:0, confirmed_join:1, be_invited:0},
        {id:2, number:4,api_selfie:"https://firebasestorage.googleapis.com/v0/b/genuine-wall-311416.appspot.com/o/member%2F6%2FheadShot6.png?alt=media&token=d4f7b485-6dc7-43cc-a677-8c685b508769", lastName:"李", firstName:"晶晶", appellation:"副會長", right:0, confirmed_join:1, be_invited:0},
    ]}
])


const handleDropEnd = (res)=>{
    const {source, destination} =res;
    // console.log(source);
    // console.log(destination);

    if(source.droppableId !== destination.droppableId){
        console.log(res);
        const sourceCol = cola[source.droppableId];
        const destCol = cola[destination.droppableId];
        const sourceItem = [...sourceCol.member];
        const destItem = [...destCol.member];
        // console.log(res.draggableId);
        // let getId = res.draggableId;
        const [remove] = sourceItem.splice(source.index,1);
        destItem.splice(destination.index,0,remove);
        cola[source.droppableId].member = sourceItem
        cola[destination.droppableId].member = destItem;
        setCola(cola)
        // let getId = sourceCol.member[res.draggableId-1].id;
        // let getId = res.draggableId;
        // 增到新陣列中
       

        
        // const [Item]= destItem.splice(source.index,1)
        // destItem.splice(destination.index, 0, Item)

        // cola[sourceCol.dropId].member.splice(destItem.index ,1);
        

        // cola[sourceCol.dropId].member = newcola;
        // const [removeItem] = sourceItem.splice(sourceItem.index, 0);
        
        // setCola(cola)
        
    }else{
        const coll = cola[source.droppableId];   
        const copiedItem = [...coll.member];
        const [removeItem]= copiedItem.splice(source.index,1)
        copiedItem.splice(destination.index, 0, removeItem)
        cola[destination.droppableId].member = copiedItem;
        setCola(cola)
    }
}

let toggleAppellation = useRef(false )
const editAppellation = ()=>{
    toggleAppellation.current = !toggleAppellation.current
    // alert('ok');
}



    return ( 
        <div className='group-member pt-4 pl-4 pr-4'>
            {groupRight.right!=0 && <div className="group-member-search d-flex mx-auto">
                <div className='group-member-search-icon pl-2 pt-2 d-flex align-item-center'><FontAwesomeIcon icon={faSearch} /></div>
                <input className='group-member-input' type="text" placeholder='搜尋社員' onChange={doTheSearch} onInput={doTheSearch} onPaste={doTheSearch} onKeyDown={doTheSearch}/>
            </div>
            }

            <div className='search-area w-100'>
                {seachResult.length!==0 && <Searching_Group_Member followedMember={seachResult} userId={userId} invitperson={invitperson}/>}

            </div>
            
            <div className='manage-member mt-3'>
                

                {/* <div className='manage-title'>管理員</div> */}
                <div>
                    <DragDropContext onDragEnd={handleDropEnd}>
                        <div className='clearfix'>
                        {cola.map((elm,idx)=>{
                            return(
                                <div key={elm.did}>
                                    <div className='manage-title'>{elm.name}</div> 
                                    <div className='clearfix'>  
                                    <Droppable droppableId={elm.dropId} direction="horizontal">
                                        {(provider)=>(
                                            <ul {...provider.droppableProps} ref={provider.innerRef}>
                                                {/* {console.log(provider)} */}
                                            {elm.member.map((elm,idx)=>{
                                                    return(
                                                        <Draggable key={elm.id} draggableId={elm.id.toString()} index={idx}>
                                                            {(provider)=>(
                                                            <div className='group-selfie float-left d-flex align-items-center mr-3' ref={provider.innerRef} {...provider.draggableProps} {...provider.dragHandleProps}>
                                                            <div className='selfie rounded-circle overflow-hidden mr-3 d-flex justify-content-center'>
                                                                <img className='img-fluid' src={elm.api_selfie} alt=""/>
                                                            </div>
                                                
                                                            <div>
                                                                <div>
                                                                    <div className='a-black'>{elm.lastName} {elm.firstName}</div>
                                                                </div>
                                                
                                                                <div className='d-flex'>
                                                                    {elm.appellation && <div className='mr-2'>{elm.appellation}</div>}
                                                                    {userId!=id && <a className='text-decoration-none mr-2' >訊息</a>}
                                                                    {elm.be_invited==1 ? <div onClick={()=>cencelInvited(elm.number)} ><MdCancel/></div> : <div className='d-flex'><div onClick={editAppellation}><FiEdit/></div>{(elm.id==userId ? null :<div className='ml-2' onClick={()=>kickMember(elm.number)}><MdCancel/></div>)}</div> }
                                                                </div>
                                                
                                                            </div>
                                                
                                                            </div>
                                                            
                                                            )}
                                                        </Draggable>
                                                    )
                                                })
                                            }
                                            {provider.placeholder}
                                            </ul>
                                        )}
                    
                                    </Droppable>
                                    </div>
                                </div>
                            )
                        })}
                        
                        </div>

                    </DragDropContext>
                </div>
        
                {/* <div className='manage-title'>社團成員</div>

                <div className='clearfix h-100'>
                    {groupMemberList.filter((elm,idx)=>{
                        return elm.be_invited != 1 && (elm.right == 0 || elm.right == 1) && elm.confirmed_join==1;
                    }).map((elm,idx)=>
                    <Group_Selfie key={elm.id} idx={idx} memberPer={elm} userId={userId} societyId={societyID.id} kickMember={kickMember} />
                    )}
                </div> */}

                <div className='manage-title'>邀請中對象</div>

                <div className='clearfix h-100'>
                {groupMemberList.filter((elm,idx)=>{
                        return  elm.right == 0 && (elm.confirmed_join==0 || elm.confirmed_join==null) && elm.be_invited == 1;
                    }).map((elm,idx)=>
                    <Group_Selfie key={idx} memberPer={elm} userId={userId} societyId={societyID.id} cencelInvited={cencelInvited}/>
                    )}
                </div>

            </div>
        </div>
     );
}
 
export default Group_Member;