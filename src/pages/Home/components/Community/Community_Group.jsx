import React, { useEffect, useState } from "react";
import Axios from "axios";

const Community_Group = () => {
  const [Res, setRes] = useState([]);

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

  if (Res.length === 0) {
    return null;
  }

  return (
    <div className="communityGroup">
      <h3 className="CardHeader">熱門社團</h3>
      <div className="biggroup">
        <div className="group1">
          <div className="box1">
            <img src={Res[0].selfie} alt="" />
            <p className="texthide">{Res[0].society_name}</p>
          </div>
          <div className="box1">
            <img src={Res[1].selfie} alt="" />
            <p className="texthide">{Res[1].society_name}</p>
          </div>
        </div>
        <div className="box2">
          <img src={Res[2].selfie} alt="" />
          <p className="texthide">{Res[2].society_name}</p>
        </div>
        <div className="group2">
          <div className="group3">
            <div className="box3">
              <img src={Res[3].selfie} alt="" />
              <p className="texthide">{Res[3].society_name}</p>
            </div>
            <div className="box3">
              <img src={Res[4].selfie} alt="" />
              <p className="texthide">{Res[4].society_name}</p>
            </div>
            <div className="box3">
              <img src={Res[5].selfie} alt="" />
              <p className="texthide">{Res[5].society_name}</p>
            </div>
          </div>
          <div className="group4">
            <div className="box4">
              <img src={Res[6].selfie} alt="" />
              <p className="texthide">{Res[6].society_name}</p>
            </div>
            <div className="box4">
              <img src={Res[7].selfie} alt="" />
              <p className="texthide">{Res[7].society_name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community_Group;
