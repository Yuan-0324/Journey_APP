import React from 'react';
import Axios from 'axios'
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';

const { TreeNode } = TreeSelect;

const Setting_Normal_PlaceInput = ({ setPlaceSwitch, userInfo, setUserInfo, email }) => {

    let placeBeforeValue = userInfo.place;
    function placeOnChange(value, label, extra) {
        placeBeforeValue = value;
    }

    async function PlaceOnClick() {
        //將父階的使用者資訊=暫存值
        userInfo.place = placeBeforeValue;
        //存進物件 準備丟進put
        let totolPlace = {
            place: userInfo.place,
            email: email
        }
        setUserInfo(userInfo);
        await Axios.put('http://localhost:8000/general/setPlace', totolPlace)
            .then((res) => {
                console.log(res);
                setPlaceSwitch(0);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            <TreeSelect
                showSearch
                style={{ width: '150px', height: '30px', marginRight: '10px' }}
                dropdownStyle={{ maxHeight: 400, overflow: 'auto', zIndex: 1300 }}
                defaultValue={placeBeforeValue}
                allowClear
                treeDefaultExpandAll
                onChange={placeOnChange}
            >

                <TreeNode value="parent 1-0" title={<b style={{ color: "gray" }}>北部</b>} disabled>
                    <TreeNode value="台北" title="台北" />
                    <TreeNode value="新北" title="新北" />
                    <TreeNode value="宜蘭" title="宜蘭" />
                    <TreeNode value="基隆" title="基隆" />
                    <TreeNode value="桃園" title="桃園" />
                    <TreeNode value="新竹" title="新竹" />
                </TreeNode>

                <TreeNode value="parent 1-2" title={<b style={{ color: "gray" }}>中部</b>} disabled>
                    <TreeNode value="台中" title="台中" />
                    <TreeNode value="苗栗" title="苗栗" />
                    <TreeNode value="彰化" title="彰化" />
                    <TreeNode value="雲林" title="雲林" />
                    <TreeNode value="南投" title="南投" />
                </TreeNode>

                <TreeNode value="parent 1-3" title={<b style={{ color: "gray" }}>南部</b>} disabled>
                    <TreeNode value="台南" title="台南" />
                    <TreeNode value="高雄" title="高雄" />
                    <TreeNode value="嘉義" title="嘉義" />
                    <TreeNode value="屏東" title="屏東" />
                </TreeNode>

                <TreeNode value="parent 1-4" title={<b style={{ color: "gray" }}>東部</b>} disabled>
                    <TreeNode value="台東" title="台東" />
                    <TreeNode value="花蓮" title="花蓮" />
                </TreeNode>

                <TreeNode value="parent 1-5" title={<b style={{ color: "gray" }}>離島</b>} disabled>
                    <TreeNode value="澎湖" title="澎湖" />
                    <TreeNode value="金門" title="金門" />
                    <TreeNode value="馬祖" title="馬祖" />
                    <TreeNode value="綠島" title="綠島" />
                    <TreeNode value="蘭嶼" title="蘭嶼" />
                    <TreeNode value="小琉球" title="小琉球" />
                </TreeNode>
            </TreeSelect>
            <button onClick={PlaceOnClick}>修改</button>
            <button onClick={() => {
                setPlaceSwitch(0);
            }}>取消</button>
        </>
    )
}

export default Setting_Normal_PlaceInput