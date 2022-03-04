import React, { useContext } from 'react';
import context from '../../../../context';
import Axios from 'axios';

const Setting_Guide_IntrodutionInput = ({ setIntroSwitch, guideData, setGuideData }) => {

    const { userInfo } = useContext(context);
    let userEmail = userInfo.email;
    // console.log(userEmail);

    //定義暫存值，使用此值暫存欲修改的值
    let introBeforeValue = guideData.Intro
    const introFunc = (e) => {
        introBeforeValue = e.target.value;
        console.log(introBeforeValue);
    }

    async function IntroOnClick() {
        //將父階的使用者資訊=暫存值
        guideData.Intro = introBeforeValue;
        //存進物件 準備丟進put
        let totolIntro = {
            intro: guideData.Intro,
            email: userEmail
        }
        setGuideData(guideData);
        await Axios.put('http://localhost:8000/guide/setIntro', totolIntro)
            .then((res) => {
                // console.log(res);
                setIntroSwitch(0);
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <>
            <br />
            <textarea maxLength="60"
                placeholder="請簡短的用60字介紹自己"
                defaultValue={guideData.Intro}
                onChange={introFunc}
            ></textarea>
            <br />
            <button onClick={IntroOnClick}>修改</button>
            <button onClick={() => {
                setIntroSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Guide_IntrodutionInput;