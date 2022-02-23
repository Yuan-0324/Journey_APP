import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"

const Setting_Privacy = () => {
    return (
        <div className="Privacy_Content">
            <p>隱私設定</p>
            <div className="Content_Shadow">
                <div className="Privacy_item">
                    <span>封鎖名單</span>
                    <AiOutlinePlusCircle />
                    <span>新增用戶到封鎖名單</span>
                    <br />
                    <input type="text" placeholder="用戶名稱" />
                    <button>確認</button>
                    <button>取消</button>
                    <hr />
                </div>
                <div className="Privacy_item_list">
                    <div className="Privacy_item_list_flexbox">
                        <span>吉娃娃</span>
                        <button>取消封鎖</button>
                    </div>

                    <div className="Privacy_item_list_flexbox">
                        <span>博美</span>
                        <button>取消封鎖</button>
                    </div>

                    <div className="Privacy_item_list_flexbox">
                        <span>冠緯Cat</span>
                        <button>取消封鎖</button>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Setting_Privacy;