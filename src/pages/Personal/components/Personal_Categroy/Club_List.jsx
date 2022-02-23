import { useState } from "react";

import Personal_CLub from "./Personal_Club";

const Club_List = () => {
 
    const clubData = [{
        clubId: 3143214314,
        clubName: '桌遊社',
        clubImg: 'https://picsum.photos/id/134/300/300'
    }, {
        clubId: 313314315,
        clubName: '廣場舞社',
        clubImg: 'https://picsum.photos/id/135/300/300'
    }, {
        clubId: 314312324,
        clubName: '前端工程師討論社',
        clubImg: 'https://picsum.photos/id/124/300/300'
    }, {
        clubId: 314314124,
        clubName: '前端工程師討論社',
        clubImg: 'https://picsum.photos/id/122/300/300'

    },{
        clubId: 314354124,
        clubName: '前端工程師討論社',
        clubImg: 'https://picsum.photos/id/322/300/300'   
    },{
        clubId: 312354124,
        clubName: '前端工程師討論社',
        clubImg: 'https://picsum.photos/id/522/300/300'
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