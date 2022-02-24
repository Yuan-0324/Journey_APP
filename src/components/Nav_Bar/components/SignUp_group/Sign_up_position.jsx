import React from 'react';
import Axios from 'axios';
import logo from '../../../../images/logo.png';
import arrowRight from '../../../../images/login_setting/login/arrow-right.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { TreeSelect } from 'antd';
import 'antd/dist/antd.css';

const { TreeNode } = TreeSelect;

function Sign_up_position({ positionModal, phoneModal, interestedModal, setTotalData, totalData }) {

    async function signUpFunc() {
        let result = await Axios.post("http://localhost:8000/member/signup", totalData);
        positionModal(false)
        interestedModal(true)
        // console.log(totalData);
        console.log(result);
    }

    return (

        <>
            <div className='signUpModalBackground_Position'>
                <div className='signUpModalContainer_Position'>
                    <button className='signUpModalLastBtn_Position'
                        onClick={() => {
                            positionModal(false)
                            phoneModal(true)
                        }}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <div className='signUpModaltitle_Position'>
                        <img src={logo} alt="logo" />
                        <hr />
                        <p>註冊</p>

                    </div>

                    <div className='signUpModalBody_Position'>
                        <label id='title' htmlFor="userPhone">您的位置</label>
                        <br />
                        <TreeSelect
                            showSearch
                            style={{ width: '340px', height: '50px', lineHeight: '37px' }}
                            dropdownStyle={{ maxHeight: 400, overflow: 'auto', zIndex: 1300 }}
                            placeholder="請選擇居住地"
                            defaultValue='台北'
                            allowClear
                            treeDefaultExpandAll
                            onChange={function (value, label, extra) {
                                totalData.place = value
                                setTotalData(totalData)
                            }}
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
                        <div className='forMemRules'>
                            <input type="checkbox" value="" id="memRules" />
                            <span>我願意遵守<a href="">會員規定</a></span>
                        </div>

                        <button
                            onClick={signUpFunc}
                            className='submitBtn'>
                            <img src={arrowRight} alt="arrowRight" />
                        </button>

                    </div>
                </div>
            </div>

            <div className='modalShadow'>
            </div>
        </>



    )
}

export default Sign_up_position;