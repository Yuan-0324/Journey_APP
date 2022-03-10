import React , {useEffect} from 'react';
import { FiEdit } from "react-icons/fi";
import { MdCancel} from 'react-icons/md';
import axios from 'axios';


const Group_Selfie = ({memberPer,userId, societyId, cencelInvited,kickMember ,idx}) => {
    
    return ( 
            <div className='group-selfie float-left mr-3 d-flex align-items-center'>
            <div className='selfie rounded-circle overflow-hidden mr-3 d-flex justify-content-center'>
                <img className='img-fluid' src={memberPer.api_selfie} alt=""/>
            </div>

            <div>
                <div>
                    <div className='a-black'>{memberPer.lastName} {memberPer.firstName}</div>
                </div>

                <div className='d-flex'>
                    {memberPer.appellation && <div className='mr-2'>{memberPer.appellation}</div>}
                    {userId!=memberPer.id && <a className='text-decoration-none mr-2' >訊息</a>}
                    {memberPer.be_invited==1 ? <div onClick={()=>cencelInvited(memberPer.number)} ><MdCancel/></div> : <div className='d-flex'><div><FiEdit/></div>{(memberPer.id==userId ? null :<div className='ml-2' onClick={()=>kickMember(memberPer.number)}><MdCancel/></div>)}</div> }
                </div>

            </div>

        </div>
        
     );
}
 
export default Group_Selfie;