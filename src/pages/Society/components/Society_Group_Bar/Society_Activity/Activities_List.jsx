import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid'
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import axios from 'axios';
import Society_Activities from './Society_Activities';
import Context from '../../../../../context';

const Activities_List = () => {
    const { userInfo } = useContext(Context);
    const [ activityInfo, setActivityInfo ] = useState([]);
    const currentPath = useParams();

    useEffect(async()=>{
        await axios.post(`http://localhost:8000/society/event/${currentPath.id}` )
            .then(res=>{
                setActivityInfo(res.data)
                console.log(activityInfo);}) 
    },[])

    // 個人在此社團身分
    const [groupRight, setGroupRight] = React.useState({right:""})
    let societyID = useParams();

    useEffect(() => {
        
        let id = societyID.id;
        axios.post('http://localhost:8000/soceity/right',{societyID: id})
            .then(res=>{
            setGroupRight(res.data[0])
            }) 
            
    }, []);

    let showGroupEvent = ''
    if(activityInfo.length==0){
        showGroupEvent = <h3 className='no-event-handle text-center mt-3'>目前沒有舉辦活動</h3>
    }else{
        
        showGroupEvent = activityInfo.map(activity => <Society_Activities activity={activity} key={activity.eventID} />)
    }
    
    return (
        <div className='activities'>
            {groupRight.right!=0 &&
            <div className='clearfix creatActivity '>
                <div className="float-right">
                    <a href='http://localhost:3000/ActivityConduct'>來辦個活動吧→</a>
                </div>
            </div>
            }
            {/* -----------------Container------------------- */}

            {
                showGroupEvent
            }
                
            {/* --------------------------------------------- */}
        </div>
    )
}

export default Activities_List;