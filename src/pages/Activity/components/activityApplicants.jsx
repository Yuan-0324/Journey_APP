import { useState, useEffect } from 'react';
import '../StyleSheet/activityApplicants.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ActivityApplicants = () => {
    const activityPagePath = useParams();
    const eventID = activityPagePath.id;

    const [toggled, setToggled] = useState(false);
    const selfOrNot = toggled ? { visibility: "visible" } : { visibility: "hidden" };

    //撈取報名資料
    const [results, setResults] = useState([]);
    useEffect(async () => {
        let result = await axios.get(`http://localhost:8000/activity/applicants/${eventID}`);
        setResults(result.data[1]);

        //判斷本人進入
        const userID = result.data[0][0].user_ID;
        const memberID = localStorage.getItem('id');
        if (userID == memberID) {
            setToggled(true);
        }
    }, []);

    const number = results.length;

    return (
        <div className='applicantsArea' style={selfOrNot}>
            <div className='applicantsNum'>
                <span>報名人數： {number} 人</span>
            </div>
            <div className='applicants'>
                <span>報名人員：</span>
                <div className='applicantsPeople'>
                    {results.map(item =>
                        <div className='applicant' key={item.id} onClick={() => { window.location = `/personal/${item.id}` }}>
                            <img className='memberImg' src={item.api_selfie} />
                            <span className='memberName'> {item.name}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )

}
export default ActivityApplicants;