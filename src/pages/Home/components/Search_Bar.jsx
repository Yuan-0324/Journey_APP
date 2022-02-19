import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, DatePicker, TreeSelect } from "antd";
import { RiSearchLine } from "react-icons/ri";
import locale from "antd/es/date-picker/locale/zh_TW";
const { TreeNode } = TreeSelect;

const Search_Bar = () => {
  const [value, setValue] = useState(undefined);
  const onChange = () => {
    setValue(value);
  };
  return (
    <section id="searchBar">
      <div className="searchBar">
        <h3>今天要去哪裡？</h3>
        <h1>現在就開始你的揪你旅程</h1>
        <div className="search-container">
          <TreeSelect
            showSearch
            style={{ width: "400px", border: "none" }}
            value={value}
            dropdownStyle={{ overflow: "auto" }}
            placeholder="探索目的地"
            allowClear
            treeDefaultExpandAll
            onChange={onChange}
          >
            <TreeNode
              value="北部"
              title={<b style={{ color: "gray" }}>北部</b>}
              disabled
            >
              <TreeNode
                value="台北"
                title={<span style={{ fontSize: 20 + "px" }}>台北</span>}
              />
              <TreeNode value="新北" title="新北" />
              <TreeNode value="基隆" title="基隆" />
              <TreeNode value="新竹" title="新竹" />
              <TreeNode value="桃園" title="桃園" />
              <TreeNode value="宜蘭" title="宜蘭" />
            </TreeNode>
            <TreeNode
              value="中部"
              title={<b style={{ color: "gray" }}>中部</b>}
              disabled
            >
              <TreeNode value="台中" title="台中" />
              <TreeNode value="苗栗" title="苗栗" />
              <TreeNode value="彰化" title="彰化" />
              <TreeNode value="南投" title="南投" />
              <TreeNode value="雲林" title="雲林" />
              <TreeNode
                value="leaf3"
                // title={<b style={{ color: "#08c" }}>leaf3</b>}
              />
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
          <DatePicker
            locale={locale}
            style={{ width: "200px", border: "none" }}
            placeholder="輸入日期"
          />
          <Button>
            <RiSearchLine />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Search_Bar;
