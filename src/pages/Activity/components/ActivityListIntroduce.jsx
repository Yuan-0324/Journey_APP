import React, { Component } from 'react';

const  ActivityListIntroduce =({data})=>  {
    
    return (
        <>
            <div className="introduce">
                <h2>活動內容</h2>
                <pre>
                    {data.content}
                </pre>
            </div>
            <hr />
            {/* <!-- 注意事項 --> */}
            <div className="introduce">
                <h2>注意事項</h2>
                <pre>
                    {data.precaution}
                </pre>
            </div>
        </>
    )

}
export default ActivityListIntroduce;