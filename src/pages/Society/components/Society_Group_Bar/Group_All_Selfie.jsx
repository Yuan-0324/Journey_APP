import React , {useEffect} from 'react';

const Group_All_Selfie = ({memberPer}) => {
    

    return ( 

        <div className='float-left d-flex align-items-center m-2 cursor-pointer' onClick={()=>window.location="/Login"}>
            <div className='selfie rounded-circle overflow-hidden mr-3 d-flex justify-content-center'>
                <img className='img-fluid' src={memberPer.selfie} alt=""/>
            </div>

            <div>
                <div>
                    <div className='a-black'>{memberPer.lastName} {memberPer.firstName}</div>
                </div>

                <div className='d-flex justify-content-between'>
                    <a className='text-decoration-none mr-2' href='/'>訊息</a>
                    <div>{memberPer.appellation}</div>
                </div>

            </div>

        </div>
     );
}
 
export default Group_All_Selfie;