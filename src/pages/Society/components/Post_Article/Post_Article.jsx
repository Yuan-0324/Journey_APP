//引入套件
import React, { useEffect } from 'react';
import '../../stylesheet/Society.css';
import $ from 'jquery/dist/jquery';
//引入components
import Article_Addition from './Article_Addition';

let place = 3;//預設段落有三個
const Post_Article = ({toSetPost}) =>{

    //----- 初始文章預設，抓localstorage -----
    let orignArticle = [
        {
            "place": "1", "content":"","type":"h3",
            "html": "<textarea class='num1 h3 in-bg border-0' rows='1' placeholder='Story Title...'></textarea>"
        },{
            "place": "2", "content":"","type":"img",
            "html":"<div class='w-100'><input class='num2 ml-3 pt-1' type='file'/></div>"
        },{ 
            "place": "3", "content":"","type":"p",
            "html":"<textarea class='num3 in-bg border-0' rows='1' placeholder='What Happen...'></textarea>"
        }
    ];
    let oldArticle = JSON.parse(localStorage.getItem('oldArticle')) || orignArticle;
    const [addArticle, setAddArticle]=React.useState(oldArticle)

    //----- 新增段落 -----
    const addBrick = (e) => {
        let firstClass = e.target.className.split(' ');
        place += 1;
        let newArrayData = {};
            switch(firstClass[0]){
                case 'title':
                    newArrayData={
                        "place": place.toString(), "content":"","type":"h3",
                        "html": `<textarea class='num${addArticle.length+1} h3 in-bg border-0' rows='1' placeholder='Story Title...'></textarea>`
                    }
                    break;
                case 'pic':
                    newArrayData={
                        "place": place.toString(),"content":"","type":"img",
                        "html":`<div class='w-100'><input class='num${addArticle.length+1} ml-3 pt-1' type='file'/></div>`
                    }
                    break;
                case 'paragraph':
                    newArrayData={
                        "place": place.toString(),"content":"","type":"p",
                        "html":`<textarea class='num${addArticle.length+1} in-bg border-0' rows='1' placeholder='What Happen...'></textarea>`
                    }
                    break;
            }
        setAddArticle(addArticle => [...addArticle, newArrayData]);
    }

    //----- 刪除段落 -----
    const deleteBrick = (place) => {
        let newAddArticle = addArticle.filter(elm => elm.place !== place);
        setAddArticle(newAddArticle);
    }

    //-----已輸入內容到站存到localstorage-----
    const setInputData = (e) =>  {
        
        //-----textarea自動調整高度-----
        e.target.style.height = 'auto';
        e.target.style.height = e.target.scrollHeight+'px'; 

        //-----輸入內容存到陣列中-----
        let num = e.target.className.split(' ')[0].slice(3);
        if(e.target.value.trim() == ""){
            addArticle[num-1].content = "";
        }else{
            switch(addArticle[num-1].type){
                case "h3":
                    addArticle[num-1].content = `<pre class='h3'>${e.target.value}</pre>`;
                    break;
                case "img":
                    addArticle[num-1].content = `<div>${e.target.value}</div>`;
                    break;
                case "p":
                    addArticle[num-1].content = `<pre>${e.target.value}</pre>`;
                    break;
            }
        }
        e.target.innerHTML=e.target.value;
        addArticle[num-1].html = e.target.outerHTML;
        localStorage.setItem('oldArticle', JSON.stringify(addArticle))
        setAddArticle(addArticle);       
    }

    //-----關閉Po文彈跳視窗，儲存localstorage-----
    const setClose = ()=>{
        $("#test").hide()
        $("html").css({'overflow': 'scroll'});
        let textLen = "";
        let placeAll = "";
        addArticle.forEach(elm => {
            textLen += elm.content;
            placeAll += elm.place;
        })
        if(textLen.trim() == "" && placeAll!=="123"){
            localStorage.clear('oldArtice');
            setAddArticle(orignArticle);
        }else{
            localStorage.setItem('oldArticle', JSON.stringify(addArticle));
            setAddArticle(addArticle);
        }
    }

    //-----同時讓兩的set執行-----
    const cleen = (data) =>{
        toSetPost(data);
    }
    useEffect(() => {
        setAddArticle(orignArticle);
    }, [toSetPost]);

    return (

        <div id='test'>
            <div className="block w-100 h-100 fixed-top"></div>
            <div className="add-article-area row mx-auto fixed-top">
                <div className="col-3 d-flex flex-column">

                    <div onClick={addBrick} className="title addition-btn d-flex btn w-100 justify-content-between align-items-center">
                        <div className='title'>Title</div>
                        <div className="title btn btn-outline-pink">+</div>
                    </div>

                    <div onClick={addBrick} className="pic addition-btn d-flex btn w-100 justify-content-between align-items-center">
                        <div className='pic'>Picture</div>
                        <div className="pic btn btn-outline-pink">+</div>
                    </div>

                    <div onClick={addBrick} className="paragraph addition-btn d-flex btn w-100 justify-content-between align-items-center">
                        <div className='paragraph'>paragraph</div>
                        <div className="paragraph btn btn-outline-pink">+</div>
                    </div>

                </div>

                <div className="col-9">
                    <div className="article-content mt-2 p-1">
                        {addArticle.map((elm,idx)=>
                         <Article_Addition key={idx}
                            data={elm}
                            onDeleteBrick={deleteBrick}
                            onSetInput = {setInputData}
                            />)}
                    </div>
                </div>

                <div className="post-cancel btn  d-flex justify-content-center align-items-center" onClick={setClose}>
                    <div className='h5'>x</div>
                </div>

                <div className="article-post btn fixed-bottom m-4" onClick={()=>cleen(addArticle)}>Post</div>

            </div>
      
        </div>

    );

}

export default Post_Article;