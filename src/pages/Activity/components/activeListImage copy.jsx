import React, { useState } from 'react';
import $ from 'jquery'

// import people from "../../images/people.png"
import hiking from '../../../images/background/hiking.jpg'
import outside from '../../../images/background/outside.png'
import photo from '../../../images/background/photo.jpg'
import Piece from '../../../images/background/Piece.jpg'
import tea from '../../../images/background/tea.jpg'
import ActivityIntroduceImageFirst from './activityIntroduceImage/activityIntroduceImageFirst'

const ActiveListImage = ({data})=>{
    const imageID={
        eventID:data.eventID,
        user_ID:data.user_ID
    }
    console.log(imageID.user_ID);
    return(
        <>
        <div className="activeImage">
                        <div className="options" >
                            <div className="option active" style={{ backgroundImage: `url(${hiking})` }} id='d1'
                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}
                            >
                                <div className="shadow">

                                </div>
                                <div className="label">

                                </div>
                            </div>
                            <div className="option" id="d2"
                                style={{ backgroundImage: `url(${outside})` }}

                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}>
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fas fa-snowflake"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main"><ActivityIntroduceImageFirst /></div>
                                        <div className="sub">Omuke trughte a otufta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option o3" id='d3'
                                style={{ backgroundImage: `url(${photo})` }}
                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}>

                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fas fa-tree"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">Iteresuselle</div>
                                        <div className="sub">Omuke trughte a otufta</div>
                                    </div>
                                </div>
                            </div>
                            <div className="option o4" id='d4'
                                style={{ backgroundImage: `url(${Piece})` }}
                                onClick={(e) => {
                                    $('.option').removeClass("active")
                                    $(`#${e.target.id}`).addClass("active")
                                    console.log(e);
                                }}>
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon">
                                        <i className="fas fa-tint"></i>
                                    </div>
                                    <div className="info">
                                        <div className="main">{data.eventID}</div>
                                        <div className="sub">{data.user_ID}</div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>

                    </div>
        </>
    )
}
export default ActiveListImage;