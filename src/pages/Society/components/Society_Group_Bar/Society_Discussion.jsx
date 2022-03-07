//引入套件
import React, {useEffect, useContext, useLayoutEffect, useRef} from 'react';
import { useParams } from "react-router-dom";
import $ from 'jquery/dist/jquery';
import axios from 'axios';
import context from '../../../../context';

//引入component
import Article_Area from '../Society_Right/Society_Post/Article_Area/Article_Area';
import Edit_Article from '../Society_Right/Society_Post/Edit_Article';
// 整合 Po文內容

const Society_Discussion = () => {
  // 個人在此社團身分
  const currentUser = useContext(context).userInfo;
    let userId = currentUser.id;
    let userImg = currentUser.selfie;
    let userLastName = currentUser.lastName;
    let userFirstName = currentUser.firstName;
    let userEmail = currentUser.email;
    let userName = currentUser.name;

  const [groupRight, setGroupRight] = React.useState({right:""})
  let societyID = useParams();

  useEffect(() => {
    
    let id = societyID.id;
      axios.post('http://localhost:8000/soceity/right',{societyID: id})
          .then(res=>{
          setGroupRight(res.data[0])
        }) 
          
  }, []);


  //-----Edit_Article隱藏-----
  let  [editArticle, setEditArticle ]= React.useState(false);

  const callTime = useRef(0);//呼叫get文章次數
  let allArr = [];
  useEffect(() => {
    
    if(societyID.id){
      // !!!!!Axios.get!!!!!取得社團的文章
      
      axios.post('http://127.0.0.1:8000/eachgroup/article',{id : societyID.id, callTime: callTime.current})
      .then(res => {
        allArr = res.data;
        allArr.sort(function(a, b) {
          if(a.like_num < b.like_num){
            return 1; // 正數時，後面的數放在前面
          } else {
            return -1 // 負數時，前面的數放在前面
          }
        })
        callTime.current = callTime.current+1;
        setArticleList(allArr);
        }) 

    }else{
      // !!!!!Axios.get!!!!!取得follow個人及attend社團的文章
      
      
      axios.post('http://127.0.0.1:8000/followed/article',{id : `${userId}`, callTime: callTime.current})
      .then(res => {
        allArr = res.data;
        axios.post('http://127.0.0.1:8000/society/article',{id : `${userId}`, callTime: callTime.current})
        .then(res => {
          allArr = allArr.concat(res.data)
          allArr.sort(function(a, b) {
            if(a.like_num < b.like_num){
              return 1; // 正數時，後面的數放在前面
            } else {
              return -1 // 負數時，前面的數放在前面
            }
          });
          callTime.current = callTime.current+1;
          setArticleList(allArr);
          })
        })  
    }  
     
  }, []);
  const [articleList, setArticleList] = React.useState([]);

  //-----Post新文章關閉彈跳視窗，觸發呈現新文章到畫面上-----
  const setPost = async(data) =>{
    let cont = ""  
    data.forEach(elm => {
        cont += elm.content
      });
    if(cont == ""){
      alert('未輸入任何值');
      return;
    }else{
      localStorage.clear('oldArticle');
      let today = new Date();
      let yy = today.getFullYear();
      let month = today.getMonth()+1;
      let mm = (month.toString().length < 2) ? (month = '0' + month.toString()) : month.toString();
      let day = today.getDate();
      let dd= (day.toString().length < 2) ? (day = '0' + day.toString()) : day.toString();
      let todayDate = `${yy}-${mm}-${dd} ${today.getHours()}:${today.getMinutes()}:00`
      
      let newArrayData = {
        articleID: '',
        selfie: userImg,
        lastName: userLastName,
        firstName: userFirstName,
        datetime: todayDate,
        content: `${cont}`,
        like_num: 0
      }

      // !!!!!Axios.post!!!!! post新貼文
      await axios.post(`http://127.0.0.1:8000/newpost/article/${societyID.id}`, 
      {post_email:userEmail, datetime:todayDate, content:newArrayData.content})
        .then(res => {newArrayData.articleID = res.data.insertId;})
      setArticleList(articleList=>[newArrayData, ...articleList]);
    } 
    setEditArticle(false) 
  }

  //-----文章編輯彈跳視窗-----
  const [editPageToggle, setEditPageToggle] = React.useState(false);

  //-----Po文彈跳視窗-----  
  let showEditPage = () => {
    setEditArticle(true)
  }

  useEffect(() => {
    if (editPageToggle || editArticle) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'scroll';
    }
  }, [editPageToggle, editArticle])

  // 滾動叫出新文章
  const [renew, setRenew]=React.useState(0)

  window.addEventListener('scroll', function(e) {
    var scrollTop = $(this).scrollTop();
    var scrollHeight = $(document).height();
    var windowHeight = $(this).height();
    if (scrollTop + windowHeight == scrollHeight) {setRenew(renew+1)}
  })
  
  useEffect(() => {

    if(societyID.id){

      if(callTime.current>0){
        
        axios.post('http://127.0.0.1:8000/eachgroup/article',{id : societyID.id, callTime: callTime.current})
        .then(res => {
          allArr = res.data;
          allArr.sort(function(a, b) {
            if(a.like_num < b.like_num){
              return 1; // 正數時，後面的數放在前面
            } else {
              return -1 // 負數時，前面的數放在前面
            }
          })
            if(allArr.length==0){
              console.log('noData');
            }
            let newArr = articleList.concat(allArr)
            callTime.current = callTime.current+1;
            setArticleList(newArr);
          })   
      }

    }else{

      if(callTime.current>0){
        
        axios.post('http://127.0.0.1:8000/followed/article',{id : `${userId}`, callTime: callTime.current})
        .then(res => {
          allArr = res.data;
          axios.post('http://127.0.0.1:8000/society/article',{id : `${userId}`, callTime: callTime.current})
          .then(res => {
            allArr = allArr.concat(res.data)
            allArr.sort(function(a, b) {
              if(a.like_num < b.like_num){
                return 1; // 正數時，後面的數放在前面
              } else {
                return -1 // 負數時，前面的數放在前面
              }
            });
            if(allArr.length==0){
              console.log('noData');
            }
            let newArr = articleList.concat(allArr)
            callTime.current = callTime.current+1;
            setArticleList(newArr);
          })
        })  
      }
    }
  }, [renew]);


      
    return (

      <>
        {editArticle && <Edit_Article articleList={articleList} toSetPost={setPost} userImg={userImg} userName={userName} setEditArticle={setEditArticle}/>}
        <div>
        {groupRight.right!=0  &&
          <div className='post-area'>
            <img src='' alt=""></img>
            <div className='post-btn' onClick={showEditPage}>
                <h4>想說些什麼？</h4>
            </div>
          </div>
          }
        
 
          <div>
            <div id="content" >
              {articleList.map((elm,idx)=>
              <Article_Area
                key={idx}
                data={elm}
                societyID={societyID.id}
                articleListIdx={idx}
                showEditPage={showEditPage}
                setArticleList={setArticleList}
                articleList={articleList}
                userImg={userImg}
                userId ={userId}
              />)}
            </div>
            <div className='loading-img mx-auto' >
              <img src="/img/loading.gif" className='img-fluid' alt="" />
            </div>
          </div>

        </div>
      </>
    )
}

export default Society_Discussion;