const Recieve_Activity = () => {
    return (<div className="notice-recieve-activities-content">

    <h1 className="activities-name">空幹舞大賽<span><i className="fas fa-caret-down"></i></span></h1>
    <div className="activities-main">


        <div className="activities-container">
            <img src="https://picsum.photos/id/33/300/300" alt=""></img>
            <div className="activities-content">
                <h3 className="content-name"><span>羅志祥</span> 已向您發出參加活動申請！</h3>
            </div>

            <h5 className="content-date">23小時前</h5>

            <div className="apply-reply-btn">
                <button className="accept-apply">接受</button>
                <button className="cancel-apply">婉拒</button>
            </div>
        </div>

        
        <div className="activities-container">
            <img src="https://picsum.photos/id/3/300/300" alt=""></img>
            <div className="activities-content">
                <h3 className="content-name"><span>亞洲舞王</span> 已向您發出參加活動申請！</h3>
            </div>

            <h5 className="content-date">2天前</h5>

            <div className="apply-reply-btn">
                <button className="accept-apply">接受</button>
                <button className="cancel-apply">婉拒</button>
            </div>
        </div>


        <div className="activities-container">
            <img src="https://picsum.photos/id/7/300/300" alt=""></img>
            <div className="activities-content">
                <h3 className="content-name"><span>Show Lo</span> 已向您發出參加活動申請！</h3>
            </div>

            <h5 className="content-date">2天前</h5>

            <div className="apply-reply-btn">
                <button className="accept-apply">接受</button>
                <button className="cancel-apply">婉拒</button>
            </div>
        </div>

        
    </div>
</div>)
}

export default Recieve_Activity;