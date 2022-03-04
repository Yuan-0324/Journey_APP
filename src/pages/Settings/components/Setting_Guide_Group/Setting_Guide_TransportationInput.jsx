import React, { useState, useContext } from 'react';
import context from '../../../../context';
import Axios from 'axios';

const Setting_Guide_TransportationInput = ({ setTransSwitch, guideData, setGuideData }) => {
    //暫存值
    const [myTrans, setMyTrans] = useState(guideData.Tran)

    const { userInfo } = useContext(context);
    let userEmail = userInfo.email;

    function onChange(e) {
        setMyTrans(e.target.name);
    }

    async function TransOnClick() {
        guideData.Tran = myTrans
        //存進物件 準備丟進put
        let totolTrans = {
            trans: guideData.Tran,
            email: userEmail
        }
        setGuideData(guideData);
        await Axios.put('http://localhost:8000/guide/setTrans', totolTrans)
            .then((res) => {
                console.log(res);
                setTransSwitch(0);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // console.log(myTrans);

    return (
        <>
            <input type="radio" id='car' name='汽車'
                onChange={onChange}
                checked={myTrans === '汽車'}
            />
            <label htmlFor='car'>汽車</label>

            <input type="radio" id='scooter' name='機車'
                onChange={onChange}
                checked={myTrans === '機車'}
            />
            <label htmlFor='scooter'>機車</label>

            <input type="radio" id='public' name='大眾交通'
                onChange={onChange}
                checked={myTrans === '大眾交通'}
            />
            <label htmlFor='public'>大眾交通</label>
            <button onClick={TransOnClick}>修改</button>
            <button onClick={() => {
                setTransSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Guide_TransportationInput;