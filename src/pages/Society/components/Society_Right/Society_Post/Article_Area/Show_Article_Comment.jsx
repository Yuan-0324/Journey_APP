//引入套件
import React from 'react';

const Show_Article_Comment = () => {

    let [articleTitle]=React.useState('帳篷購買攻略');
    let [articleContent]=React.useState('的最佳展師講述美麗的故事，您的團隊將被邀請展出他們的天賦，並加入團隊1小時。 我們也會提供一些有趣的破冰活動，讓每個人都感覺參與。您將沉浸式馬戲團，我們的魅力體驗達人將教您一些神奇的');
    let [societyGroupName]=React.useState('露營討論社');

    return (
        <div className="box w-100 h-100">
            <div className='articlePop row p-5 m-3 fixed-top mx-auto'>
                <div className="articlePopLeft col-8 pr-5">
                    <h2>{articleTitle}</h2>
                    <p className='ArticleContent mt-3'>{articleContent}</p>
                    <div>
                        <div className='float-left'>like share</div>
                        <div className='float-right'>coellet</div>
                    </div>
                </div>
                <div className="articlePopRight col-4">
                    <div className='d-flex'>
                    {/* <Selfie/> */}
                        <div className='ml-3'>
                            <h3>{societyGroupName}</h3>
                            <div>Post by Jack</div>
                        </div>
                    </div>

                    <div className='commentList mt-4'>
                        {/* <Selfie/> */}
                        <div className='part d-flex'>
                            <div className='d-flex align-items-center'>
                        
                            </div>

                            <div className='ml-3'>
                                <div className='d-flex'>
                                    <div className='mr-2'>吉娃娃</div> 
                                    <p>很ㄅㄧㄤ的文章</p>
                                </div>
                                <div className="timePart d-flex">
                                    <div>19h</div><div className='ml-3'>4 like</div><div className='ml-3'>Reply</div>
                                </div>
                            </div>
                            <div className='ml-3'>like</div>
                        </div>

                    </div>

                    <form action="">
                        <div className='inputComment d-flex'>
                        {/* <Selfie/> */}
                            <input className='mr-2' type="text" placeholder='   留下評論' />
                            <input type="submit" value='傳送' />
                        </div>
                    </form>
                    

                </div>
            </div>
        </div>
    );

}

export default Show_Article_Comment;