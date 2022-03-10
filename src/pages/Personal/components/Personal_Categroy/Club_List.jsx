import { useState } from "react";
import Personal_CLub from "./Personal_Club";
import picA from '../../../../images/background/喝茶.jfif';
import picB from '../../../../images/background/hiking.jpg';
import picC from '../../../../images/background/outside.png';
import picD from '../../../../images/background/photo.jpg';
import picE from '../../../../images/background/tea.jpg';



const Club_List = () => {
 
    const clubData = [{
        clubId: 3143214314,
        clubName: '桌遊社',
        clubImg: picA
    }, {
        clubId: 313314315,
        clubName: '廣場舞社',
        clubImg: picB
    }, {
        clubId: 314312324,
        clubName: '前端工程師討論社',
        clubImg: picC
    }, {
        clubId: 314314124,
        clubName: '前端工程師討論社',
        clubImg: picD

    },{
        clubId: 314354124,
        clubName: '前端工程師討論社',
        clubImg: picE   
    }]
    
    const [clubList, setClubList] = useState(clubData);

    return (
        <div className='personal-club'>
            <div className='club-container'>
                <h3>我參加的社團</h3>
                <div className="club-list">
                    {
                        clubList.map(club => <Personal_CLub key={club.clubId} club={club} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Club_List;