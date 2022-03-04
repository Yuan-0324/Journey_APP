import { useState } from 'react';
import { TreeSelect } from 'antd';
import { TiDeleteOutline } from "react-icons/ti";


const Set_Recommend = ({ guideForm, setGuideForm }) => {

	//城市選擇
    const { TreeNode } = TreeSelect;

    //推薦景點
    const [recommendPlace, setPlace] = useState('');
	const [placeArr, setplaceArr] = useState([]);
	const recommendPlaceChange = (evts) => {
        setPlace(evts.target.value);
    }
    const setPlaceBtnClick = () => {
        if (recommendPlace && placeArr.length < 3) {
            placeArr.push(recommendPlace);
			setplaceArr(placeArr);
			const viewpoint = placeArr.join('/');
			setGuideForm({ ...guideForm, ['viewpoint']: viewpoint });
            setPlace('');
        }
	}
    const placeDeleteBtnClick = (evt) => {
        const deleteItem = evt.target.parentNode.dataset.place;
        setplaceArr(placeArr.filter(evts => evts !== deleteItem));
		const viewpoint = placeArr.join('/')
        setGuideForm({ ...guideForm, ['viewpoint']: viewpoint });
    }

    //推薦餐廳
    const [recommendRestaurant, setRestaurant] = useState('');
	const [restaurantArr, setRestaurantArr] = useState([]);
	const recommendRestaurantChange = (evts) => {
        setRestaurant(evts.target.value);
    }
    const setRestaurantBtnClick = () => {
        if (recommendRestaurant && restaurantArr.length < 3) {
            restaurantArr.push(recommendRestaurant);
			setRestaurantArr(restaurantArr);
			const restaurant = restaurantArr.join('/');
            setGuideForm({ ...guideForm, ['restaurant']: restaurant});
            setRestaurant('');
        }
    }
    const restaurantDeleteBtnClick = (evt) => {
        const deleteItem = evt.target.parentNode.dataset.restaurant;
        setRestaurantArr(restaurantArr.filter(evts => evts !== deleteItem));
        const restaurant = restaurantArr.join('/')
		setGuideForm({ ...guideForm, ['restaurant']: restaurant });
    }

	return (
		<div className="section02Area">
			<div className="leftTitle">
				<div className="pageTitle"> <span>●</span> 地點/推薦</div>
			</div>
			<div className="section02Content">
				<div className="setCity">
					<p>嚮導城市</p>
					<TreeSelect className="guideCityInput"
						showSearch
						style={{ width: "220px" }}
						value={guideForm.cityValue}
						dropdownStyle={{ overflow: "auto" }}
						placeholder="擔任嚮導的城市"
						onChange={ e =>setGuideForm({ ...guideForm, ['cityValue']: e })}
						size='large'
						notFoundContent='無搜尋結果'
					>
						<TreeNode value="北部" title={<b style={{ fontSize: '20px' }}>北部</b>} selectable={false} >
							<TreeNode value="台北" title="台北" style={{ fontSize: '17px' }} />
							<TreeNode value="新北" title="新北" style={{ fontSize: '17px' }} />
							<TreeNode value="基隆" title="基隆" style={{ fontSize: '17px' }} />
							<TreeNode value="新竹" title="新竹" style={{ fontSize: '17px' }} />
							<TreeNode value="桃園" title="桃園" style={{ fontSize: '17px' }} />
							<TreeNode value="宜蘭" title="宜蘭" style={{ fontSize: '17px' }} />
						</TreeNode>
						<TreeNode value="中部" title={<b style={{ fontSize: '20px' }}>中部</b>} selectable={false} >
							<TreeNode value="台中" title="台中" style={{ fontSize: '17px' }} />
							<TreeNode value="苗栗" title="苗栗" style={{ fontSize: '17px' }} />
							<TreeNode value="彰化" title="彰化" style={{ fontSize: '17px' }} />
							<TreeNode value="南投" title="南投" style={{ fontSize: '17px' }} />
							<TreeNode value="雲林" title="雲林" style={{ fontSize: '17px' }} />
						</TreeNode>
						<TreeNode value="南部" title={<b style={{ fontSize: '20px' }}>南部</b>} selectable={false} >
							<TreeNode value="高雄" title="高雄" style={{ fontSize: '17px' }} />
							<TreeNode value="台南" title="台南" style={{ fontSize: '17px' }} />
							<TreeNode value="嘉義" title="嘉義" style={{ fontSize: '17px' }} />
							<TreeNode value="屏東" title="屏東" style={{ fontSize: '17px' }} />
						</TreeNode>
						<TreeNode value="東部" title={<b style={{ fontSize: '20px' }}>東部</b>} selectable={false} >
							<TreeNode value="花蓮" title="花蓮" style={{ fontSize: '17px' }} />
							<TreeNode value="台東" title="台東" style={{ fontSize: '17px' }} />
						</TreeNode>
						<TreeNode value="離島" title={<b style={{ fontSize: '20px' }}>離島</b>} selectable={false} isLeaf={false} >
							<TreeNode value="澎湖" title="澎湖" style={{ fontSize: '17px' }} />
							<TreeNode value="金門" title="金門" style={{ fontSize: '17px' }} />
							<TreeNode value="馬祖" title="馬祖" style={{ fontSize: '17px' }} />
							<TreeNode value="綠島" title="綠島" style={{ fontSize: '17px' }} />
							<TreeNode value="蘭嶼" title="蘭嶼" style={{ fontSize: '17px' }} />
							<TreeNode value="小琉球" title="小琉球" style={{ fontSize: '17px' }} />
						</TreeNode>
					</TreeSelect>
				</div>
				<div className="recommendPlace">
					<p>推薦景點</p>
					<input type="text" placeholder="請輸入推薦的景點" value={recommendPlace} onChange={recommendPlaceChange} id='placeInput' />
					<input type="button" defaultValue="加入" onClick={setPlaceBtnClick} className="placeBtn" />
					<span>(請推薦三個景點)</span>
					<div id="placeInputContainer">
						{placeArr.map((item, index) => (
							<span className="placeInputSpan" key={index} >
								<input type="text" className="placeContent" style={{ width: item.length * 20 + 10 + `px` }} disabled value={item} />
								<button onClick={placeDeleteBtnClick} className="placeDelete" data-place={item} ><TiDeleteOutline /></button>
							</span>
						))}
					</div>
				</div>
				<div className="recommendRestaurant">
					<p>推薦餐廳</p>
					<input type="text" placeholder="請輸入推薦的餐廳" value={recommendRestaurant} onChange={recommendRestaurantChange} id='restaurantInput' />
					<input type="button" defaultValue="加入" onClick={setRestaurantBtnClick} className="restaurantBtn" />
					<span>(請推薦三間餐廳)</span>
					<div id="restaurantInputContainer">
						{restaurantArr.map((item, index) => (
							<span className="restaurantInputSpan" key={index} >
								<input type="text" className="restaurantContent" style={{ width: item.length * 20 + 10 + `px` }} disabled value={item} />
								<button onClick={restaurantDeleteBtnClick} className="restaurantDelete" data-restaurant={item} ><TiDeleteOutline /></button>
							</span>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Set_Recommend;
