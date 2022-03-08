import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import Axios from 'axios';

const Personal_Activity = ({ activity }) => {

  
    return (
        <div className='my-activities'>
            <div style={{backgroundImage: `url('${activity.api_pic}')`}} className='activities-pic'>
                {/* <img src={ activity.api_pic } alt=""></img> */}
            </div>
            <div className='activities-content'>
                <h6 className="evt-time">{ activity.eventDate } { activity.eventTime }</h6>
                <h4 className='evt-name'>{ activity.title }</h4>
                <p className='evt-content'>{ activity.introduction }</p>
                <h6 className='evt-location'><IoLocationSharp /><span>{ activity.location }</span></h6>
                <div className='evt-state'><span>{ new Date(activity.eventDate).toLocaleDateString() < new Date().toLocaleDateString()? '即將舉辦':'活動結束' }</span></div>
            </div>
        </div>
    )
}

export default Personal_Activity;