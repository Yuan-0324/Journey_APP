import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { v4 } from 'uuid'
import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import Axios from 'axios';

import Personal_Activity from './Personal_Activities';
import Context from '../../../../../context';

const Activities_List = () => {
    const { userInfo } = useContext(Context);
    const [ activityInfo, setActivityInfo ] = useState([]);
    const currentPath = useParams();

    useEffect(()=>{
        let fetchData = async () =>{
            let result = await Axios.get('http://localhost:8000/personal/activity/' + currentPath.id );
            setActivityInfo(result.data);
        }
        fetchData();
    },[])
    
    return (
        <div className='activities'>
            <h2 className="head-topic">我辦的活動</h2>
            {/* -----------------Container------------------- */}
            {
                activityInfo.map(activity => <Personal_Activity activity={activity} key={activity.eventID} />)
            }
            {/* --------------------------------------------- */}
        </div>
    )
}

export default Activities_List;