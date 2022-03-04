import React, {useEffect} from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Article_Addition from '../Society_Right/Society_Post/Article_Addition';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Edit_About = ({groupAboutData, setGroupPageData , closeEdit, setEditPost}) => {
    if(groupAboutData.about_society==null){
        groupAboutData.about_society = '<pre class="h3"> <pre>'
        setGroupPageData(groupAboutData);
    }
    // 文章字串轉html
    const [personalArticle, setPersonalArticle] = React.useState([]) 
    useEffect(() => {
        console.log(groupAboutData);
        let result = [];
        let perArticle = groupAboutData.about_society.split('><')  
        perArticle.forEach((elm, idx) => {
            if(perArticle.length == 1){
                elm = elm;
            }else if(idx/perArticle.length == 0 && perArticle.length > 1){
                elm = elm+">";
            }else if((idx+1)/perArticle.length == 1 && perArticle.length > 1){
                elm = "<"+elm;
            }else{
                elm = "<"+elm+">";
            }
            result.push(elm)
        });

        // 文章寫入輸入方框，得到初始陣列
        let newResult = [];
        result.forEach((elm, idx) =>{
            let newElm =''
            if(elm.substring(0, 16) == '<pre class="h3">' || elm.substring(0, 16) == "<pre class='h3'>" || elm.substring(0, 16) == "<pre class=`h3`>"){
                newElm = elm.substring(16, elm.length-6)
                newResult.push({
                    "place": `${idx}`,"content":`${elm}`,"type":"h3",
                    "html":`<textarea class='num${idx} h3 in-bg border-0' rows='1' placeholder='Story Title...'>${newElm}</textarea>`})
            }else if(elm.substring(0, 18) == `<pre class="mt-3">` || elm.substring(0, 18) == `<pre class='mt-3'>` || elm.substring(0, 18) == '<pre class=`mt-3`>'){
                newElm = elm.substring(18, elm.length-6)
                newResult.push({
                    "place": `${idx}`,"content":`${elm}`,"type":"p",
                    "html":`<textarea class='num${idx} in-bg border-0 mt-2' rows='1' placeholder='What Happen...'>${newElm}</textarea>`})
            }else{
                newResult.push({
                    "place": `${idx}`, "content":`${elm}`,"type":"img", 
                    "html":`<div class='in-bg'>${elm}<input class='num${idx} pt-1' type='file'/></div>`
                })
            }
        })
        setPersonalArticle(newResult);
    }, []);

    //----- 新增段落 -----
    const addBrick = (e) => {
        let place = personalArticle.length; 
        let firstClass = (e.target.className == "")? e.target.parentElement.className.split(' ') : e.target.className.split(' '); 
        place += 1;
        let newArrayData = {};
        switch(firstClass[0]){
            case 'title':
                newArrayData={
                    "place": place.toString(), "content":"","type":"h3",
                    "html": `<textarea class='num${place.toString()} h3 in-bg border-0' rows='1' placeholder='Story Title...'></textarea>`
                }
                break;
            case 'pic':
                newArrayData={
                    "place": place.toString(),"content":"","type":"img",
                    "html":`<div class='in-bg'><input class='num${place.toString()} pt-1' type='file'/></div>`
                }
                break;
            case 'paragragh':
                newArrayData={
                    "place": place.toString(),"content":"","type":"p",
                    "html":`<textarea class='num${place.toString()} in-bg border-0 mt-2' rows='1' placeholder='What Happen...'></textarea>`
                }
                break;
            }  
        setPersonalArticle(personalArticle => [...personalArticle, newArrayData]);
    }

    //----- 刪除段落 -----
    const deleteBrick = (place) => {
        let newAddArticle = personalArticle.filter(elm => elm.place !== place); 
        setPersonalArticle(newAddArticle);
    }

    //-----修改文章暫存到陣列中-----
    const setInputData = (e) =>  {
        let num = e.target.className.split(' ')[0].slice(3);
        if(e.target.value.trim() == ""){
            personalArticle.map((elm,idx)=>{
                if(elm.place == num){
                    elm.content = "";
                }
            })

        }else if(e.target.files) {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = function(){
                e.target.parentElement.innerHTML = `<img class='w-75 d-block' src=${reader.result} alt="" /><input class='num${num} ml-3 pt-1' type='file'/>`;
                personalArticle.map((elm,idx)=>{
                    if(elm.place == num){
                        elm.html = `<div class='in-bg'><img class='w-75 d-block' src=${reader.result} alt="" /><input class='num${num} ml-3 pt-1' type='file'/></div>`;
                        elm.content =`<img class='w-75 d-block' src=${reader.result} alt="" />`;
                    }
                })
            };
        }else{
            //-----textarea自動調整高度-----
            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight+'px'; 
            e.target.innerHTML=e.target.value;

            personalArticle.map((elm,idx)=>{
                if(elm.place == num){
                    elm.html = e.target.outerHTML;
                }
            })

            let theType = '';
            personalArticle.map((elm,idx)=>{
                if(elm.place == num){
                    theType = elm.type;
                }
            })
            switch(theType){
                case "h3":
                    personalArticle.map((elm,idx)=>{
                        if(elm.place == num){
                            elm.content = `<pre class="h3">${e.target.value}</pre>`;
                        }
                    })
                    break;
                case "p":
                    personalArticle.map((elm,idx)=>{
                    if(elm.place == num){
                        elm.content = `<pre class="mt-3">${e.target.value}</pre>`;
                    }
                })
                break;
            }
        }        
        setPersonalArticle(personalArticle);
    }  

    //確定編輯完成
    const okEditArticle = (e) => {
        setEditPost(e)
    }

    //取消編輯，直接關閉即可
    
    return (
        <div id='editPost'>
            <div className='personal-article-edit'>
                <div className='article-edit-container'>
                    <div className='article-edit-head'><h1>新增</h1></div>
                    <div className='title' onClick={addBrick}><h1>標題</h1></div>
                    <div className='paragragh' onClick={addBrick}><h1>內文</h1></div>
                    <div className='pic' onClick={addBrick}><h1>照片</h1></div>
                </div>
                <div onClick={(evt) => { evt.stopPropagation() }} className='edit-main-container'>
                    <h1>編輯文章<span onClick={closeEdit}><AiOutlineCloseCircle /></span></h1>
                    
                    <div>
                    {personalArticle.map((elm,idx)=>
                        <Article_Addition key={idx}
                            data={elm}
                            onDeleteBrick={deleteBrick}
                            onSetInput = {setInputData}
                        />)}
                    </div>
                    <button onClick={()=>okEditArticle(personalArticle)}>確認</button>
                </div>
            </div>
        </div>
    )
}

export default Edit_About;