import React, { useRef, useEffect, useCallback, useState } from "react";
import "blueimp-canvas-to-blob/js/canvas-to-blob";

const Canvas = ({tempImgUrl, width, height, bannerPic,bannerDiv}) => {

  const canvas = useRef(null);

  let scale = 1.3;//照片比例
  let sizeOfLongImg = 720;  //圖片不大於最大邊長
  let sizeOfshortImg = 150;  //圖片不小於最小邊長
  let img;
  let ctx;
  let xSet = useRef(0);
  let ySet = useRef(0);
  
  useEffect(() => {
    
    ctx = canvas.current.getContext("2d");
    
    img = new Image();
    img.src = tempImgUrl;
    img.onload = function(){
      let imgWidth = img.width 
      let imgHeight = img.height
        //先讓長邊符合比例
        if (imgWidth > sizeOfLongImg ||  imgHeight > sizeOfLongImg) {
            if (imgWidth > imgHeight) {
                scale = sizeOfLongImg / imgWidth;
            }else {
                scale = sizeOfLongImg / imgHeight;
            }
        }
        imgWidth = imgWidth * scale;  // 計算等比縮小後圖片
        imgHeight  = imgHeight * scale;
        
        //先讓短編邊符合比例
        if(imgWidth < sizeOfshortImg || imgHeight < sizeOfshortImg){
                if (imgWidth > imgHeight) {
                    scale = sizeOfshortImg/imgHeight;
                }else {
                    scale = sizeOfshortImg/imgWidth;
                }
            }else{
                scale = 1;
            }
            ctx.width = imgWidth * scale;  // 計算等比縮小後圖片
            ctx.height = imgHeight * scale; 
            

      //圖片初始放置 x, y 
      xSet.current = (width - ctx.width) / 2;
      ySet.current = (height - ctx.height) / 2; 
      
      bannerDiv.current.mTop = (ySet.current); bannerDiv.current.mLeft = (xSet.current);
      bannerDiv.current.widthPer = ctx.width; bannerDiv.current.heightPer = ctx.height;


      ctx.drawImage(img, xSet.current, ySet.current, ctx.width, ctx.height);  // 圖片載入
      let uurl = canvas.current.toDataURL("image/jpg");
      bannerPic.current = uurl;
  
    }

  });

  //拖曳圖片
  let posx = useRef(0);
  let posy = useRef(0);
  const darg = useRef(false);//可否拖曳
  let posl = {};//新位置

  const mouseDown = (e) => {
    if(!img){return}
    let x = e.clientX - xSet.current;
    let y = e.clientY - ySet.current;
    posx.current = x;
    posy.current = y;
    darg.current = true;
  };
  

  const mouseMove = (e) => {
    if(darg.current){
    posl = {x:e.clientX, y:e.clientY};
      var x = posl.x - posx.current, y = posl.y - posy.current;

      xSet.current = x;
      ySet.current = y;
      ctx.clearRect(0,0, ctx.width, ctx.height);
      ctx.drawImage(img, xSet.current, ySet.current,ctx.width, ctx.height);  // 圖片載入

    }

  };

  const mouseLeave = () => {
    darg.current = false;
    imgNoOver();
    let uurl = canvas.current.toDataURL();
    bannerPic.current = uurl;

    bannerDiv.current.mTop = (ySet.current); bannerDiv.current.mLeft = (xSet.current);
    bannerDiv.current.widthPer = ctx.width; bannerDiv.current.heightPer = ctx.height;

    // setBannerPice(dataURl.current);
  }

  const mouseUp = () => {
    darg.current = false;
    imgNoOver();
    let uurl = canvas.current.toDataURL();
    bannerPic.current = uurl;
    
    bannerDiv.current.mTop = (ySet.current); bannerDiv.current.mLeft = (xSet.current);
    bannerDiv.current.widthPer = ctx.width; bannerDiv.current.heightPer = ctx.height;

    // setBannerPice(dataURl.current);
  }

  //讓圖片保持在範圍內 
function imgNoOver(){
  ctx.clearRect(0,0, ctx.width, ctx.height);
      if(xSet.current > 0 ){
          xSet.current = 0
      }else if(xSet.current < -(ctx.width-width)){
          xSet.current = -(ctx.width-width)
      }
      if(ySet.current > 0 ){
          ySet.current = 0
      }else if(ySet.current < -(ctx.height-height)){
          ySet.current = -(ctx.height-height)
      }
      ctx.drawImage(img,xSet.current,ySet.current,ctx.width,ctx.height);
  }

  return (
      <canvas ref={canvas} width={width} height={height} onMouseDown={mouseDown} onMouseMove={mouseMove} onMouseLeave={mouseLeave} onMouseUp={mouseUp}/>  
  );
};

export default Canvas;
