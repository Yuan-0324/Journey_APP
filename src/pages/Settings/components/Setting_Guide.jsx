import React from "react";
import { FiEdit } from "react-icons/fi"

const Setting_Guide = () => {
    return (
        <div className="Guide_Content">
            <p>嚮導設定</p>
            <div className="Content_Shadow">
                <div className="Guide_item">

                    <div className="Guide_Photo">
                        <span>嚮導照片</span>
                        <FiEdit />
                    </div>

                    <div className="Guide_NumOfPeople">
                        <span>可接待人數</span>
                        <FiEdit />
                    </div>

                    <div className="Guide_Gender">
                        <span>可接待性別</span>
                        <FiEdit />
                    </div>

                    <div className="Guide_Transportation">
                        <span>交通工具</span>
                        <FiEdit />
                    </div>

                    <div className="Guide_Interested">
                        <span>興趣</span>
                        <FiEdit />
                    </div>

                    <div className="Guide_Recommandation">
                        <span>推薦景點</span>
                        <FiEdit />
                    </div>

                    <div className="Guide_Introdution">
                        <span>自我介紹</span>
                        <FiEdit />
                    </div>

                    <div className="Guide_Available">
                        <span>可接待時段</span>
                        <FiEdit />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Setting_Guide;