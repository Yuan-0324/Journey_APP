//引入套件
import React, { useEffect } from 'react';
import $ from 'jquery/dist/jquery';
//引入css
// import '../styles/Society/Society.css';
//引入components
// import Searching from './Society/Searching/Searching';
// import Attend_Society from './Society/Attend_Society'
// import Article_Area from './Society/Article_Area';
// import Article_Comment from './Society/Article_Comment';
// import Post_Article from './Society/Post_Article/Post_Article';

// ---- 更新 ----

// -- Style --
import './stylesheet/Society.css';
// -- Components --
import Searching from './components/Searching/Searching';
import Attend_Society from './components/Attend_Society';
import Article_Area from './components/Article_Area';
import Article_Comment from './components/Article_Comment';
import Post_Article from './components/Post_Article/Post_Article';


const Society = () => {

  useEffect(() => {
    $('#test').hide()
  }, []);

  //照片要在製作上傳比例修圖的程式才會好看
  // localStorage.getItem('selfInfo);正是資料要從localstorage取
  const [selfInfo,setselfe]=React.useState({name:"林與諶", img:'/img/4.jpg'})

  const [articaleParagraph, setArticleParagraph]=
  React.useState([
    {lastName:"林",firstName:"與諶", followed:1, collected:1, img:"/img/1.jpg", title:'如何在星巴克只點一杯開水', date:"2022/01/16", content:"存在然後就實很下來的語，一天這樣的話是什麼，覺得東真搬家好的大，可以對我我的時候下雨看到在的關係⋯一條的人因為到有人，想之前有。我先實沒這樣嗎真好基本上，的工作一認親卡:是有這你覺得，當然兩個然我這就是⋯很想有考慮說那個。"},
    {lastName:"林",firstName:"與諶", followed:0, collected:0, img:"/img/2.jpg", title:'如何在星巴克只點一杯開水', date:"2022/01/16", content:"存在然後就實很下來的語，一天這樣的話是什麼，覺得東真搬家好的大，可以對我我的時候下雨看到在的關係⋯一條的人因為到有人，想之前有。我先實沒這樣嗎真好基本上，的工作一認親卡:是有這你覺得，當然兩個然我這就是⋯很想有考慮說那個。"},
    {lastName:"林",firstName:"與諶", followed:1, collected:1, img:"/img/3.jpg", title:'如何在星巴克只點一杯開水', date:"2022/01/16", content:"存在然後就實很下來的語，一天這樣的話是什麼，覺得東真搬家好的大，可以對我我的時候下雨看到在的關係⋯一條的人因為到有人，想之前有。我先實沒這樣嗎真好基本上，的工作一認親卡:是有這你覺得，當然兩個然我這就是⋯很想有考慮說那個。"},
  ])

  const [attendGroup]=
  React.useState([
    {id:'1', img:''}, 
    {id:'2', img:''},
    {id:'3', img:''},
    {id:'4', img:''},
  ])

  //-----Post新文章關閉彈跳視窗，觸發呈現新文章到畫面上-----
  const setPost = (data) =>{
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
      let newArrayData = {lastName:"林",firstName:"與諶", followed:0, collected:0, img:"/img/1.jpg", title:'如何在星巴克只點一杯開水', date:`${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}`, content:`${cont}`}
      // !!!!!Axios.post!!!!!
      setArticleParagraph(articaleParagraph=>[newArrayData, ...articaleParagraph]);
    } 
    $("#test").hide()
    $("html").css({'overflow': 'scroll'});
  }

  // 留言文章彈跳視窗
  const [moreShow, setMoreShow]= React.useState(false);
  const clickOnMore = (e) =>{
    // (e.target.className.substr(0, 4) == "more")? setMoreShow(true) : setMoreShow(false);
    setMoreShow(true)
  }

  //-----Po文彈跳視窗-----
  const popPostArticle = () =>{
    $("#test").show();
    $("html").css({'overflow': 'hidden'});
  }
  
    return (
      <div className='container'>
        <div className="row">
          <div className='col-3'>

            <Searching/>

            <Attend_Society/>
            
          </div>

          <div className='article-area col-9'>

            <div className='post-area d-flex p-4'>

              <div className='selfie rounded-circle overflow-hidden mr-3'>
                <img className='img-fluid' src={selfInfo.img} alt="" />
              </div>

              <div className='post-btn cursor-pointer' onClick={popPostArticle}>建立文章...</div> 
            
            </div>

            {articaleParagraph.map((elm,idx)=>
              <Article_Area
                key={idx}
                data={elm}
                clickOnMore={clickOnMore}
            />)}

          </div>
        </div>

        { moreShow ? <Article_Comment/> : null }

        <Post_Article toSetPost={setPost}/>

      </div>
      
    );
    
  }

export default Society;