import React, {useEffect,useRef} from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import $ from 'jquery/dist/jquery';
import Article_Addition from './Article_Addition';
import { ref, uploadBytesResumable, uploadBytes, getDownloadURL } from 'firebase/storage';
import {storage} from '../../../../../firebase';
import axios from 'axios';
import { useParams } from "react-router-dom";

let place = 3;//預設段落有三個
const Edit_Article = ({articleList, toSetPost, userImg, userLastName, userFirstName, setEditArticle}) => {
    let societyID = useParams();
    //----- 初始文章預設，抓localstorage -----  

    let orignArticle = [
        {
            "place": "1", "content":"","type":"h3",
            "html": "<textarea class='num1 h3 in-bg border-0' rows='1' cols='50' placeholder='Story Title...'></textarea>"
        },{
            "place": "2", "content":"","type":"img",
            "html":`<div class='in-bg'><input class='num2 pt-1' type='file'/></div>`
        },{ 
            "place": "3", "content":"","type":"p",
            "html":"<textarea class='num3 in-bg border-0 mt-2' rows='1' cols='80' style='font-size:18px' placeholder='What Happen...'></textarea>"
        }
    ];

    let oldArticle = JSON.parse(localStorage.getItem('oldArticle')) || orignArticle;
    const [addArticle, setAddArticle]=React.useState(oldArticle)

    //----- 新增段落 -----
    const addBrick = (e) => {
        let firstClass = (e.target.className == "")? e.target.parentElement.className.split(' ') : e.target.className.split(' '); 
        place += 1;
        let newArrayData = {};
        switch(firstClass[0]){
            case 'title':
                newArrayData={
                    "place": place.toString(), "content":"","type":"h3",
                    "html": `<textarea class='num${place.toString()} h3 in-bg border-0 w-100' rows='1' cols='50' placeholder='Story Title...'></textarea>`
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
                    "html":`<textarea class='num${place.toString()} in-bg border-0 mt-2 w-100' rows='1' cols='80' style='font-size:18px' placeholder='What Happen...'></textarea>`
                }
                break;
            }
            // console.log(addArticle);
        setAddArticle(addArticle => [...addArticle, newArrayData]);
    }

    //----- 刪除段落 -----

    const deleteBrick = (place) => {
        let newAddArticle = addArticle.filter(elm => elm.place !== place);
        // console.log(addArticle);
        setAddArticle(newAddArticle);
    }

      
    //-----已輸入內容到站存到localstorage-----
    let picWantToSave=useRef([]);
    let img='';
    const setInputData = (e) =>  {
        let num = e.target.className.split(' ')[0].slice(3);
        if(e.target.value.trim() == ""){
            addArticle.map((elm,idx)=>{
                if(elm.place == num){
                    elm.content = "";
                }
            })

        }else if(e.target.files) {
            // forFirebase
            
            picWantToSave.current =[...picWantToSave.current, e];

            img = URL.createObjectURL(e.target.files[0]);

            e.target.parentElement.innerHTML = `<img class='w-75 d-block' src=${img} alt="" /><input class='num${num} ml-3 pt-1' type='file'/>`;
            addArticle.map((elm,idx)=>{
                if(elm.place == num){
                    elm.html = `<div class='in-bg'><img class='w-75 d-block' src=${img} alt="" /><input class='num${num} pt-1' type='file'/></div>`;
                    elm.content =`<img class='w-75 d-block' src=${img} alt="" />`;
                }
            })

        }else{
            //-----textarea自動調整高度-----

            e.target.style.height = 'auto';
            e.target.style.height = e.target.scrollHeight+'px'; 
            e.target.innerHTML=e.target.value;

            addArticle.map((elm,idx)=>{
                if(elm.place == num){
                    elm.html = e.target.outerHTML;
                }
            })

            let theType = '';
            addArticle.map((elm,idx)=>{
                if(elm.place == num){
                    theType = elm.type;
                }
            })
            switch(theType){
                case "h3":
                    addArticle.map((elm,idx)=>{
                        if(elm.place == num){
                            elm.content = `<pre class="h3">${e.target.value}</pre>`;
                        }
                    })
                    break;
                case "p":
                    addArticle.map((elm,idx)=>{
                        if(elm.place == num){
                            elm.content = `<pre class="mt-3">${e.target.value}</pre>`;
                        }
                    })
                    break;
            }
        }       

        //-----輸入內容存到陣列中-----
        localStorage.setItem('oldArticle', JSON.stringify(addArticle))
        // console.log(addArticle);
        setAddArticle(addArticle);
    }

    //-----關閉Po文彈跳視窗，儲存localstorage-----
    
    const setClose = ()=>{
        setEditArticle(false)
        let textLen = "";
        addArticle.forEach(elm => {
            textLen += elm.content;
        })
        if(textLen.trim() == ""){
            $('#postBtn').text('建立文章...');//(有改:加上jquery)
            localStorage.removeItem('oldArtice');
            // console.log(addArticle);
            setAddArticle(orignArticle);  
        }else{
            $('#postBtn').text('有文章建立中...');//(有改:加上jquery 有文章建立中...)
            // localStorage.setItem('oldArticle', JSON.stringify(addArticle));
            // console.log(addArticle);
            setAddArticle(addArticle);
        }
    }

    //-----同時讓兩的set執行-----
    const cleen = async (data) =>{

    // 存照片到firebase
    let picNum ='';
    await axios.get('http://localhost:8000/article/num')
        .then((res)=>{picNum = res.data[0].articleNum+1;
            
        // 存照片到firebase
        picWantToSave.current.forEach((elm, idx) => {
            const storageRef = ref(storage, `societyGroup/article/${picNum}/${elm.target.className.substr(3, 1)}.jpg`);
            const metadata = {
                contentType: 'image/jpg'
            };
            const upadateTask = uploadBytesResumable(storageRef, elm.target.files[0], metadata);
            console.log('ok');

            upadateTask.on('state_changed',
                async () => {
                let url = await getDownloadURL(upadateTask.snapshot.ref);
                console.log(url);
                await axios.post('http://localhost:8000/society/media', { societyID: societyID.id, url})
                }
            )
        })
    })


        toSetPost(data);
    }
    useEffect(() => {
        setAddArticle(oldArticle);
    }, [toSetPost]);

    return (
        <div id='test' className='society-article-edit'>

            <div className='article-edit-container'>
                <div className='article-edit-head'><h1>新增</h1></div>
                <div className='title' onClick={addBrick}><h1>標題</h1></div>
                <div className='paragragh' onClick={addBrick}><h1>內文</h1></div>
                <div className='pic' onClick={addBrick}><h1>照片</h1></div>
            </div>

            <div onClick={(evt) => { evt.stopPropagation() }} className='edit-main-container'>

                <h1>編輯文章<span onClick={setClose} ><AiOutlineCloseCircle /></span></h1>

                <div className='edit-title-container'>
                    <img className='img-fluid' src={userImg}/>
                    <div className='edit-title-name h3'>{userLastName} {userFirstName}</div>
                </div>

                <div className='edit-main-place'>
                    {addArticle.map((elm,idx)=>
                        <Article_Addition key={idx}
                        data={elm}
                        onDeleteBrick={deleteBrick}
                        onSetInput = {setInputData}
                    />)}
                </div>

                <button className='' onClick={()=>cleen(addArticle)}>確認</button>
                
            </div>

        </div>
    )
}

export default Edit_Article;