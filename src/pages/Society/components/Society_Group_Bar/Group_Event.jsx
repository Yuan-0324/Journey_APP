import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
const Group_Event =()=>{

    const [groupRight, setGroupRight] = React.useState({right:""})
  let societyID = useParams();

  useEffect(() => {
    
    let id = societyID.id;
      axios.post('http://localhost:8000/soceity/right',{societyID: id})
          .then(res=>{
          setGroupRight(res.data[0])
        }) 
          
  }, []);

    return(
        <>
        <div className="list" id="FirstList">
                            <div className="img">
                                <img src='/img/1.jpg' alt="" />
                            </div>
                            <div className="listIntroduction">
                                <div className="information">

                                    <div className="activityTime">
                                        <div className='activityTimeDate'>
                                            <div>2022/02/02&emsp; </div>
                                            <div>禮拜二晚上18:00</div>
                                        </div>
                                        <div  className='activityTimeDatePlace'> <div className='activityTimeDatePlaceIcon'><IoLocationSharp /></div>台中市</div>
                                    </div>
                                    <h1>品茗午茶手作日</h1>

                                    <p>希望大家能發現話中之話。我以為我了解桌遊大戰，但我真的了解桌遊大戰嗎？仔細想想，我對桌遊大戰的理解只是皮毛而已。我們不得不相信</p>
                                </div>
                                <div className="listButton">
                                    <button><a href="http://localhost:3000/activityIntroduce">詳細內容</a></button>
                
                                </div>
                                <div className="summary">

                                </div>
                            </div>

                        </div>
        </>
    )

}
export default Group_Event;