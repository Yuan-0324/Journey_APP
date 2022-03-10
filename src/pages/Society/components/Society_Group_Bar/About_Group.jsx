import axios from 'axios';
import React,{useEffect} from 'react';
import Edit_About from './Edit_About';
import { useParams } from 'react-router-dom';
import { FiEdit } from "react-icons/fi";

const About_Group = () => {
    let userId = localStorage.getItem('id');
    const [groupRight, setGroupRight] = React.useState({right:""})
    let societyID = useParams();
    let id = societyID.id;
    useEffect(() => {
        
        axios.post('http://localhost:8000/soceity/right',{societyID: id , userId:userId})
        .then(res=>{
        setGroupRight(res.data[0])
    })       
    }, []);

    useEffect(() => {
        axios.post('http://localhost:8000/group/about', {id:id})
            .then(res=>setGroupPageData(res.data[0]))
    }, []);

    // 接收資料
    const [groupAboutData, setGroupPageData] = React.useState({})

    const [editPostArticle, setEditPostArticle] = React.useState(false);
    const closeEdit = () =>{
        setEditPostArticle(!editPostArticle);
    }

     //-----關閉編輯文章彈跳視窗，觸發呈現新文章到畫面上-----
     const setEditPost = (data) =>{
        let cont = ""  
        data.forEach(elm => {
            cont += elm.content
        });
        if(cont == ""){
            alert('未輸入任何值');
            return;
        }else{

        data.content = cont;

        // console.log(data.content);
        
        // !!!!!Axios.put!!!!!修改文章
          axios.put(`http://localhost:8000/newabout/group/${id}`, {about_society:data.content})
            .then()

        groupAboutData.about_society = cont;

        setGroupPageData(groupAboutData);
        } 
        setEditPostArticle(false)
    }

    return ( 
        <>
            {editPostArticle && <Edit_About groupAboutData={groupAboutData} setGroupPageData={setGroupPageData}  closeEdit={closeEdit} setEditPost={setEditPost}/>}
            <div className='about-group-set p-4'>
                <div>
                    <div dangerouslySetInnerHTML={{__html: groupAboutData.about_society}}/>
                </div>
                {groupRight.right!=0 && <div className='about-group-set-btn btn m-4' onClick={closeEdit}><FiEdit /></div>}
            </div>
        </>
     );
}
 
export default About_Group;