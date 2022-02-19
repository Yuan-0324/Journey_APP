//引入套件
import React, { useEffect } from 'react';
import { FiShare2 } from 'react-icons/fi';
import { BsBookmark, BsFillBookmarkCheckFill, BsHeart, BsThreeDotsVertical } from 'react-icons/bs';
import { IoChatbubblesOutline, IoEarthOutline } from 'react-icons/io5';
import { FaUserFriends} from 'react-icons/fa';

const Article_Area = ({data,clickOnMore}) =>{

    const [bookmark, setBookmark]=React.useState(data.collected);

    //文章增減收藏
    const collectArticle = () =>{
        // Axios.post('http://localhost:8000/test')  
        // .then((res) => {
        //     console.log(JSON.stringify(res));
        //     setFollowedMember(res.data);
        // })
        // },[followedMember.data]
        setBookmark(1);
    }

    return (
        <div className='article-list mt-4'>
            
            <div className='post-article'>
                <div className='d-flex justify-content-between p-4'>

                    <div className='d-flex'>
                        {/* 要放上個人頁面路徑 */}
                        <a href="/Login" className='d-flex a-black'>
                            <div className='selfie rounded-circle overflow-hidden mr-3'>    
                                <img className='img-fluid' src={data.img} alt="" />
                            </div>
                            
                            <div>
                                <div className='h4'>{data.lastName}{data.firstName}</div>
                                <div className='article-paragraph-date'>{data.date}</div>
                            </div>
                        </a>

                        <span className='ml-1'> {data.followed?<FaUserFriends/>:<IoEarthOutline/>}</span>

                    </div> 
                    
                    <div className='h4 float-right'>
                        <a className='a-black' href=""><FiShare2 className='mr-3'/></a>
                        <a className='a-black cursor-pointer' onClick={collectArticle}>{bookmark? <BsFillBookmarkCheckFill className='mr-3'/>:<BsBookmark className='mr-3'/>}</a>
                        <a className='a-black cursor-pointer'><BsThreeDotsVertical className='mr-3'/></a>
                    </div>

                </div>

                <div className="post-content pl-5 pr-5">
                    <div dangerouslySetInnerHTML={{__html: data.content}}/>
                </div>

                

                <div className="ml-5 mb-3">
                    <div className='h4 more cursor-pointer' onClick={clickOnMore}>......more</div>
                    <a href="" className='h3 ml-2 a-black'><BsHeart/></a>
                    <a href="" className='h3 ml-3 a-black'><IoChatbubblesOutline/></a>
                </div>

            </div>
        </div>   
    );
}

export default Article_Area;