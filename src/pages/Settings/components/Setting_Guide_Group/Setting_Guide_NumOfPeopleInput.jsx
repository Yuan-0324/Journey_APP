import React, { useState, useContext } from 'react';
import context from '../../../../context';
import Axios from 'axios';

const Setting_Guide_NumOfPeopleInput = ({ setNumSwitch, guideData, setGuideData }) => {

    const { userInfo } = useContext(context);
    let userEmail = userInfo.email;
    // console.log(userEmail);

    //暫存
    const [num, setNum] = useState(guideData.Num)

    async function NumOnClick() {
        guideData.Num = num;
        //存進物件 準備丟進put
        let totolNum = {
            num: guideData.Num,
            email: userEmail
        }
        setGuideData(guideData);
        await Axios.put('http://localhost:8000/guide/setNum', totolNum)
            .then((res) => {
                console.log(res);
                setNumSwitch(0);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <button onClick={() => {
                setNum(num - 1)
            }}>
                -
            </button>
            {num}人
            <button onClick={() => {
                setNum(num + 1)
            }}>
                +
            </button>
            <button onClick={NumOnClick}>修改</button>
            <button onClick={() => {
                setNumSwitch(0);
            }}>取消</button>



        </>
    )
}

export default Setting_Guide_NumOfPeopleInput;