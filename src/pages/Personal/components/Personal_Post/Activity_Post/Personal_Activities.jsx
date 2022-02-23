import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';

const Personal_Activity = ({ activity }) => {
    return (
        <div className='my-activities'>
            <div className='activities-pic'>
                <img src={ activity.evtImg } alt=""></img>
            </div>
            <div className='activities-content'>
                <h6 className="evt-time">{ activity.evtDate } { activity.evtDay } { activity.evtTime }</h6>
                <h4 className='evt-name'>{ activity.evtName }</h4>
                <p className='evt-content'>{ activity.evtContent }</p>
                <h6 className='evt-location'><IoLocationSharp /><span>{ activity.evtLocation }</span></h6>
                <div className='evt-state'><span>{ activity.evtState }</span></div>
            </div>
        </div>
    )
}

export default Personal_Activity;