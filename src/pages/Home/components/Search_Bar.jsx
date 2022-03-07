import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import "moment/locale/zh-tw";
import "antd/dist/antd.css";
import { Button, DatePicker, TreeSelect, Radio } from "antd";
import locale from "antd/es/date-picker/locale/zh_TW";
import { BiSearchAlt } from "react-icons/bi";
import context from "../../../context";
const { TreeNode } = TreeSelect;

const Search_Bar = () => {
  // const { guideData } = useContext(context);
  // const { setGuideData } = useContext(context);
  // console.log(guideData);

  const history = useHistory();
  const [res, setRes] = useState([]);
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [radio, setRadio] = useState("");

  // const textContext = createContext();
  // const { Provider, Consumer }= textContext;

  let totalSearch = {
    areaResult: area,
    dateResult: date,
    radioResult: radio,
  };

  function AreaOnChange(value, label, extra) {
    setArea(value);
  }

  function DateOnChange(moment, date) {
    setDate(date);
  }

  function RadioOnChange(e) {
    setRadio(e.target.value);
  }

  const optionsWithDisabled = [
    { label: "活動", value: "event" },
    { label: "嚮導", value: "guide" },
  ];

  async function getResult() {
    await Axios.post("http://localhost:8000/home/search_result", totalSearch)
      .then((res) => {
        setRes(res);
        console.log(res);
        // setGuideData(res.data);
        // console.log(guideData);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(totalSearch);
  }

  return (
    <section id="searchBar">
      <div className="searchBar">
        <h3>今天要去哪裡？</h3>
        <h1>現在就開始你的揪你旅程</h1>
        <div className="search-container">
          <div className="selector">
            <TreeSelect
              showSearch
              style={{ width: "300px" }}
              dropdownStyle={{ overflow: "auto" }}
              // defaultValue={area}
              placeholder="探索目的地"
              allowClear
              treeDefaultExpandAll
              onChange={AreaOnChange}
            >
              <TreeNode
                value="北部"
                title={<b style={{ color: "gray" }}>北部</b>}
                disabled
              >
                <TreeNode
                  value="台北"
                  title={<span style={{ fontSize: 16 + "px" }}>台北</span>}
                />
                <TreeNode
                  value="新北"
                  title={<span style={{ fontSize: 16 + "px" }}>新北</span>}
                />
                <TreeNode
                  value="基隆"
                  title={<span style={{ fontSize: 16 + "px" }}>基隆</span>}
                />
                <TreeNode
                  value="新竹"
                  title={<span style={{ fontSize: 16 + "px" }}>新竹</span>}
                />
                <TreeNode
                  value="桃園"
                  title={<span style={{ fontSize: 16 + "px" }}>桃園</span>}
                />
                <TreeNode
                  value="宜蘭"
                  title={<span style={{ fontSize: 16 + "px" }}>宜蘭</span>}
                />
              </TreeNode>
              <TreeNode
                value="中部"
                title={<b style={{ color: "gray" }}>中部</b>}
                disabled
              >
                <TreeNode
                  value="台中"
                  title={<span style={{ fontSize: 16 + "px" }}>台中</span>}
                />
                <TreeNode value="苗栗" title="苗栗" />
                <TreeNode value="彰化" title="彰化" />
                <TreeNode value="南投" title="南投" />
                <TreeNode value="雲林" title="雲林" />
              </TreeNode>
              <TreeNode
                value="南部"
                title={<b style={{ color: "gray" }}>南部</b>}
                disabled
              >
                <TreeNode value="高雄" title="高雄" />
                <TreeNode value="台南" title="台南" />
                <TreeNode value="嘉義" title="嘉義" />
                <TreeNode value="屏東" title="屏東" />
              </TreeNode>
              <TreeNode
                value="東部"
                title={<b style={{ color: "gray" }}>東部</b>}
                disabled
              >
                <TreeNode value="花蓮" title="花蓮" />
                <TreeNode value="台東" title="台東" />
              </TreeNode>
              <TreeNode
                value="離島"
                title={<b style={{ color: "gray" }}>離島</b>}
                disabled
              >
                <TreeNode value="澎湖" title="澎湖" />
                <TreeNode value="金門" title="金門" />
                <TreeNode value="馬祖" title="馬祖" />
                <TreeNode value="綠島" title="綠島" />
                <TreeNode value="蘭嶼" title="蘭嶼" />
                <TreeNode value="小琉球" title="小琉球" />
              </TreeNode>
            </TreeSelect>
          </div>
          <div className="datepicker">
            <DatePicker
              locale={locale}
              style={{ width: "280px", border: "none" }}
              placeholder="輸入日期"
              onChange={DateOnChange}
            />
          </div>
          <div className="radioswitch">
            <Radio.Group
              options={optionsWithDisabled}
              defaultValue="event"
              onChange={RadioOnChange}
              optionType="button"
              buttonStyle="solid"
            />
          </div>
          <Button onClick={getResult}>
            <BiSearchAlt />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Search_Bar;
