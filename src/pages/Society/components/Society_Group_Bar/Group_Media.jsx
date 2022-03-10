import React,{useEffect} from 'react';
import Media_Img from './Media_Display/Media_Img';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { getDownloadURL } from 'firebase/storage';

const Group_Media = () => {

  let societyID = useParams();

  const [mediaPic, setMediaPic] = React.useState([])
  useEffect(async () => {
    await axios.post('http://localhost:8000/getsociety/media', {societyID: societyID.id})
      .then(res=>{setMediaPic(res.data)})

  }, []);

    return ( 
        <div className='group-media'>
                {/* <div className='btn btn-media ml-4'>+新增照片</div> */}
                <Media_Img mediaPic={mediaPic}/>
        </div>
     );
}
 
export default Group_Media;