import React, { useContext, useState } from 'react';
import context from '../../../../context';
import Axios from 'axios';

const Setting_Guide_GenderInput = ({ setGenderSwitch, guideData, setGuideData }) => {
    //暫存值
    const [myGender, setMyGender] = useState(guideData.Gender)

    const { userInfo } = useContext(context);
    let userEmail = userInfo.email;

    function onChange(e) {
        setMyGender(e.target.name);
    }

    async function GenderOnClick() {
        guideData.Gender = myGender
        //存進物件 準備丟進put
        let totolGender = {
            gender: guideData.Gender,
            email: userEmail
        }
        setGuideData(guideData);
        await Axios.put('http://localhost:8000/guide/setGender', totolGender)
            .then((res) => {
                console.log(res);
                setGenderSwitch(0);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // console.log(myGender);

    return (
        <>
            <input type="radio" id='man' name='男'
                onChange={onChange}
                checked={myGender === '男'}
            />
            <label htmlFor='man'>男</label>

            <input type="radio" id='woman' name='女'
                onChange={onChange}
                checked={myGender === '女'}
            />
            <label htmlFor='woman'>女</label>

            <input type="radio" id='ok' name='不限'
                onChange={onChange}
                checked={myGender === '不限'}
            />
            <label htmlFor='ok'>不限</label>
            <button onClick={GenderOnClick}>修改</button>
            <button onClick={() => {
                setGenderSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Guide_GenderInput;