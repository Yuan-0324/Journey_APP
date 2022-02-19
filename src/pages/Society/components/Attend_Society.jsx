//引入套件
import React from 'react';

const Attend_Society = () =>{

    const [attendGroup, setAttendGroup]=
    React.useState([
      {id:'1', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'2', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'3', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'4', img:'', herf:'/Scoiety/group/disscussion'},
      {id:'5', img:'', herf:'/Scoiety/group/disscussion'},
    ])

    return (
        // 看能否沿用家原的component
        <div>

            <div className='h5 mt-5'>我的社團</div>

            <div className='society-area'>
                {attendGroup.map((elm,idx)=>
                    <div className='society-img rounded-circle float-left mt-3 ml-3' key={idx}>
                        <img src={elm.img} alt="" />
                    </div>
                )}  
            </div>

      </div> 
    );

}

export default Attend_Society;