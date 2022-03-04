import React, { useEffect, useState } from "react";
import Axios from "axios";

const Community_Group = () => {
  const [Res, setRes] = useState();

  useEffect(() => {
    async function getTrendingGroup() {
      await Axios.get("http://localhost:8000/home/society")
        .then((res) => {
          setRes(res.data);
          // console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTrendingGroup();
  }, []);

  return (
    <div className="communityGroup">
      <h3 className="CardHeader">熱門社團</h3>
      <div className="biggroup">
        <div className="group1">
          <div className="box1">
            <img
              src="https://source.unsplash.com/600x400/?taiwan,hike"
              alt=""
            />
            <p className="texthide">
              {Array.isArray(Res) && Res[0].society_name}
            </p>
          </div>
          <div className="box1">
            <img
              src="https://source.unsplash.com/600x400/?taiwan,foods"
              alt=""
            />
            <p className="texthide">
              {Array.isArray(Res) && Res[1].society_name}
            </p>
          </div>
        </div>
        <div className="box2">
          <img
            src="https://source.unsplash.com/600x400/?taiwan,senior"
            alt=""
          />
          <p className="texthide">
            {Array.isArray(Res) && Res[2].society_name}
          </p>
        </div>
        <div className="group2">
          <div className="group3">
            <div className="box3">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,fishing"
                alt=""
              />
              <p className="texthide">
                {Array.isArray(Res) && Res[3].society_name}
              </p>
            </div>
            <div className="box3">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,boardgame"
                alt=""
              />
              <p className="texthide">
                {Array.isArray(Res) && Res[4].society_name}
              </p>
            </div>
            <div className="box3">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,karaoke"
                alt=""
              />
              <p className="texthide">
                {Array.isArray(Res) && Res[5].society_name}
              </p>
            </div>
          </div>
          <div className="group4">
            <div className="box4">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,views"
                alt=""
              />
              <p className="texthide">
                {Array.isArray(Res) && Res[6].society_name}
              </p>
            </div>
            <div className="box4">
              <img
                src="https://source.unsplash.com/600x400/?taiwan,building"
                alt=""
              />
              <p className="texthide">
                {Array.isArray(Res) && Res[7].society_name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community_Group;
