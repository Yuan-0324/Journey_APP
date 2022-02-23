import React from 'react';

const Group_Member = () => {
    return ( 
        <div>
            <div className='post-btn cursor-pointer'>建立文章...</div> 
            
            <div>管理員</div>

            <div className='d-flex align-items-center m-2 cursor-pointer' onClick={()=>window.location="/Login"}>
                <div className='selfie rounded-circle overflow-hidden mr-3'>
                    <img className='img-fluid' src='/img/4.jpg' alt="" />
                </div>

                <div className='d-flex'>

                    <div>
                        <div className='a-black'>林與諶</div>
                        <div>社長</div>
                    </div>

                    <div>
                        <a className='text-decoration-none' href='/'>訊息</a>
                    </div>

                    <div>...</div>
                </div>

            </div>

            <div>社團成員</div>

            <div className='d-flex align-items-center m-2 cursor-pointer' onClick={()=>window.location="/Login"}>
                <div className='selfie rounded-circle overflow-hidden mr-3'>
                    <img className='img-fluid' src='/img/5.jpg' alt="" />
                </div>

                <div className='d-flex'>

                    <div>
                        <div className='a-black'>林與諶</div>
                        <div>社長</div>
                    </div>

                    <div>
                        <a className='text-decoration-none' href='/'>訊息</a>
                    </div>

                    <div>...</div>
                </div>

                
            </div>

        </div>
     );
}
 
export default Group_Member;