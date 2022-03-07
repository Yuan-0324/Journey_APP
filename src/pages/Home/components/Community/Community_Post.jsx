import React, { useState, useEffect } from "react";
import Axios from "axios";

const Community_Post = () => {
  const [data, setData] = useState([
    {
      img: "https://source.unsplash.com/600x400/?taiwan,mountain",
      groupname: "台中登山社",
      title: "台中大坑東東芋圓一日遊",
      desc: "東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐，東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐東東芋圓好吃歐",
      userpic: "https://i.pravatar.cc/40?img=1",
      username: "吉娃娃",
      posttime: "兩小時前",
    },
  ]);

  const [Res, setRes] = useState();

  useEffect(() => {
    async function getTrendingGroupPost() {
      await Axios.get("http://localhost:8000/home/society_article")
        .then((res) => {
          setRes(res.data);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTrendingGroupPost();
  }, []);

  return (
    <div className="communityPost">
      <h3 className="CardHeader">熱門貼文</h3>
      <div className="container">
        <div className="container">
          {Array.isArray(Res) &&
            Res.map((elm, idx) => (
              <div className="card" key={idx}>
                <div className="card__header">
                  {/* <img
                    src="https://source.unsplash.com/600x400/?taiwan,mountain"
                    alt="card__image"
                    className="card__image"
                    width="600"
                  /> */}
                </div>
                <div className="card__body">
                  <span className="tag tag-blue">{elm.society_name}</span>
                  {/* <h4>{elm.posttitle}</h4> */}
                  <div dangerouslySetInnerHTML={{__html:elm.content}}/>
                </div>
                <div className="card__footer">
                  <div className="user">
                    <img
                      src={elm.api_selfie}
                      alt="user__image"
                      className="user__image"
                    />
                    <div className="user__info">
                      <h5>
                        {elm.lastName}
                        {elm.firstName}
                      </h5>
                      <small>{elm.datetime.slice(0, 10)}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))} 
        </div>
      </div>
    </div>
  );
};

export default Community_Post;
