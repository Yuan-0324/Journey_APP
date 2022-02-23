import React from "react";
import { FiEdit } from "react-icons/fi"

const Setting_Safety = () => {
    return (
        <div className="Safety_Content">
            <p>用戶安全</p>
            <div className="Content_Shadow">
                <div className="Safety_item_password">
                    <span>更改密碼</span>
                    <FiEdit />
                    <input type="password" placeholder="輸入新密碼" />
                    <br />
                    <input type="password" placeholder="確認新密碼" />
                    <button>修改</button>
                    <button>取消</button>
                </div>
            </div>
        </div>
    )
}

export default Setting_Safety;