import React, { useState, useContext } from 'react';
import context from '../../../../context';
import Axios from 'axios';
import { TiDeleteOutline } from 'react-icons/ti';

const Setting_Guide_RecommandationInput = ({ setRecommanSwitch, guideData }) => {

    const { userInfo } = useContext(context);
    let userEmail = userInfo.email
    let CatchRecomman = guideData.Recomman;
    let myRecomman = CatchRecomman.split('/');
    const [recommendPlace, setPlace] = useState('');
    const [placeArr, setplaceArr] = useState(myRecomman);
    const [guideForm, setGuideForm] = useState({
        guideEmail: userEmail,
        introduction: '',
        countNum: 1,
        acceptGender: '男',
        transportation: '汽車',
        cityValue: null,
        viewpoint: '',
        restaurant: '',
        dateArray: []
    });
    // console.log(recommendPlace);
    // console.log(placeArr);

    const recommendPlaceChange = (evts) => {
        setPlace(evts.target.value);
    }

    let viewpoint = placeArr.join('/')
    const setPlaceBtnClick = () => {
        if (recommendPlace && placeArr.length < 3) {
            placeArr.push(recommendPlace);
            setplaceArr(placeArr);
            // viewpoint = placeArr.join('/');
            setGuideForm({ ...guideForm, ['viewpoint']: viewpoint });
            setPlace('');
        }
    }
    const placeDeleteBtnClick = async (evt) => {
        let deleteItem = evt.target.dataset.place;
        setplaceArr(placeArr.filter(evts => evts !== deleteItem));

    }
    // console.log(guideForm.viewpoint);
    let totalRecomman = {
        recomman: viewpoint,
        email: userEmail
    }
    // console.log(placeArr);
    // console.log(viewpoint);
    // console.log(guideForm);

    async function RecommanOnClick() {
        if (placeArr.length == 0) {
            alert('請輸入至少一項推薦景點');
        }
        else {
            await Axios.put('http://localhost:8000/guide/setRecomman', totalRecomman)
                .then((res) => {
                    // console.log(res);
                    guideData.Recomman = viewpoint
                    setRecommanSwitch(0);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    return (
        <>
            {/* <div className="recommendPlace"> */}
            <input type="text" placeholder="請輸入推薦的景點" value={recommendPlace} onChange={recommendPlaceChange} id='placeInput' />
            <input type="button" defaultValue="加入" onClick={setPlaceBtnClick} className="placeBtn" />
            <span className='recommendText'>(請推薦三個景點)</span>
            <div id="placeInputContainer">
                {placeArr.map((item, index) => (
                    <span className="placeInputSpan" key={index} >
                        <input type="text" className="placeContent" style={{ width: item.length * 20 + 14 + 'px' }} disabled value={item} />
                        <button onClick={placeDeleteBtnClick} className="placeDelete" data-place={item} >x</button>
                        {/* <TiDeleteOutline onClick={placeDeleteBtnClick} className="placeDelete" data-place={item} /> */}
                    </span>
                ))}
            </div>
            <button className='mybutton'
                onClick={RecommanOnClick}
            >修改</button>
            <button className='mybutton'
                onClick={() => {

                    setRecommanSwitch(0);
                }}>取消</button>
            {/* </div> */}
        </>
    )
}

export default Setting_Guide_RecommandationInput;