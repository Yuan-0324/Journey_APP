import { IoChatbubblesOutline, IoLocationSharp } from 'react-icons/io5';
import Personal_Activity from './Personal_Activities';

const Activities_List = () => {
    return (
        <div className='activities'>
            <h2 className="head-topic">我辦的活動</h2>
            {/* -----------------Container------------------- */}
            <Personal_Activity />
            {/* --------------------------------------------- */}
        </div>
    )
}

export default Activities_List;