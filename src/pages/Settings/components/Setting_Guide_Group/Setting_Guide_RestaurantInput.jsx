import React, { useState, useContext } from 'react';
import context from '../../../../context';
import Axios from 'axios';
import { TiDeleteOutline } from 'react-icons/ti';

const Setting_Guide_RestaurantInput = ({ setRestaurantSwitch, guideData }) => {

    const { userInfo } = useContext(context);
    let userEmail = userInfo.email
    let CatchRestaurant = guideData.Restaurant
    let myRestaurant = CatchRestaurant.split('/')
    // console.log(myRestaurant);
    const [restaurant, setRestaurant] = useState('');
    const [restaurantArr, setRestaurantArr] = useState(myRestaurant);
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

    const restaurantChange = (evts) => {
        setRestaurant(evts.target.value);
    }

    let viewpoint = restaurantArr.join('/')
    const setRestaurantBtnClick = () => {
        if (restaurant && restaurantArr.length < 3) {
            restaurantArr.push(restaurant);
            setRestaurantArr(restaurantArr);
            // viewpoint = restaurantArr.join('/');
            setGuideForm({ ...guideForm, ['viewpoint']: viewpoint });
            setRestaurant('');
        }
    }

    const placeDeleteBtnClick = async (evt) => {
        let deleteItem = evt.target.dataset.place;
        setRestaurantArr(restaurantArr.filter(evts => evts !== deleteItem));

    }
    // console.log(guideForm.viewpoint);
    let totalRestaurant = {
        restaurant: viewpoint,
        email: userEmail
    }
    // console.log(placeArr);
    // console.log(viewpoint);
    // console.log(guideForm);

    async function RestaurantOnClick() {
        if (restaurantArr.length == 0) {
            alert('請輸入至少一項推薦餐廳');
        }
        else {
            await Axios.put('http://localhost:8000/guide/setRestaurant', totalRestaurant)
                .then((res) => {
                    // console.log(res);
                    guideData.Restaurant = viewpoint
                    setRestaurantSwitch(0);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }


    return (
        <>
            {/* <div className="restaurant"> */}
            <input type="text" placeholder="請輸入推薦的餐廳" value={restaurant} onChange={restaurantChange} id='placeInput' />
            <input type="button" defaultValue="加入" onClick={setRestaurantBtnClick} className="placeBtn" />
            <span className='recommendText'>(請推薦三間餐廳)</span>
            <div id="placeInputContainer">
                {restaurantArr.map((item, index) => (
                    <span className="placeInputSpan" key={index} >
                        <input type="text" className="placeContent" style={{ width: item.length * 20 + 10 + 'px' }} disabled value={item} />
                        {/* <button onClick={placeDeleteBtnClick} className="placeDelete" data-place={item} ><TiDeleteOutline /></button> */}
                        <button onClick={placeDeleteBtnClick} className="placeDelete" data-place={item} >x</button>
                        {/* <TiDeleteOutline onClick={placeDeleteBtnClick} className="placeDelete" data-place={item} /> */}
                    </span>
                ))}
            </div>
            <button className='mybutton'
                onClick={RestaurantOnClick}
            >修改</button>
            <button className='mybutton'
                onClick={() => {
                    setRestaurantSwitch(0);
                }}>取消</button>
            {/* </div> */}
        </>
    )
}

export default Setting_Guide_RestaurantInput;