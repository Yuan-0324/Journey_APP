import React, { useState } from 'react';
import $ from 'jquery'

// import people from "../../images/people.png"
import hiking from '../../../images/background/hiking.jpg'
import outside from '../../../images/background/outside.png'
import photo from '../../../images/background/photo.jpg'
import Piece from '../../../images/background/Piece.jpg'
import tea from '../../../images/background/tea.jpg'
import ActivityIntroduceImageFirst from './activityIntroduceImage/activityIntroduceImageFirst'
// import FirstImage from './activityConductImages/FirstImage';
import ActivityIntroduceImageSecond from './activityIntroduceImage/activityIntroduceImageSecond'
import ActivityIntroduceImageThird from './activityIntroduceImage/activityIntroduceImageThird'
import ActivityIntroduceImageFourth from './activityIntroduceImage/activityIntroduceImageFourth'
const ActiveListImage = ({ data }) => {
    const imageID = {
        eventID: data.eventID,
        user_ID: data.user_ID
    }
    // console.log(imageID.user_ID);
    return (
        <>
            <div className="activeImage">
                <div className="options" >
                    <ActivityIntroduceImageFirst data={imageID} />
                    <ActivityIntroduceImageSecond data={imageID} />
                    <ActivityIntroduceImageThird data={imageID} />
                    <ActivityIntroduceImageFourth data={imageID} />
                </div>

            </div>
        </>
    )
}
export default ActiveListImage;