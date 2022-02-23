

const Show_Article_Comments = ({ comments }) => {
    return (
        <div className="article-comment-content">
            <div className="comment-detail">
                <img src={comments.netizenImg} alt="" />
                <div className="detail-text">
                    <h1>{comments.netizen}</h1>
                    <h6>{comments.commentDate}</h6>
                </div>
            </div>
            <div className="comment-main-text">
                <p>
                    { comments.commentContent }
                </p>
            </div>
        </div>
    )
}

export default Show_Article_Comments;