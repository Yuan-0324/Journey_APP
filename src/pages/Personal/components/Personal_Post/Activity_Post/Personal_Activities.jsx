import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';

const Personal_Activity = () => {
    return (
        <div className='my-activities'>
            <div className='activities-pic'>
                <img src="https://picsum.photos/id/145/300/230" alt=""></img>
            </div>
            <div className='activities-content'>
                <h6 className="evt-time">2022/01/11 禮拜二 晚上6:30 </h6>
                <h4>台中錢櫃夜唱</h4>
                <p>開超大包廂，爆點水餃跟熱炒</p>
                <h6 className='evt-location'><IoLocationSharp /><span>台東市</span></h6>
                <div className='evt-state'><span>活動已結束</span></div>
            </div>
        </div>
    )
}

export default Personal_Activity;