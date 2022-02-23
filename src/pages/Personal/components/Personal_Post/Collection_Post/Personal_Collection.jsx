import { BsBookmarkStarFill } from 'react-icons/bs';

const Personal_Collection = ({ collection }) => {
    return (
        <div className='my-collection'>
            <div className="collection-title">
                <img src={ collection.collectionImg } alt=""></img>
                <div className='title-content'>
                    <h1>{collection.collectionTitle}</h1>
                    <h5>Post By { collection.collectionPostBy }</h5>
                </div>
            </div>
            <div className="collection-body">
                { collection.collectionType === '文章'? <h6 style={{color: '#f08a12'}}><BsBookmarkStarFill /> 文章。收藏</h6>:<h6><BsBookmarkStarFill /> 活動。收藏</h6>  }

                
                <p>{ collection.collectionContent }</p>
            </div>
        </div>
    )
}

export default Personal_Collection;