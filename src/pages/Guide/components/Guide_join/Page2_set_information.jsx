import React, { useState } from 'react';

const Set_Information = () => {

	//可接待人數
	const [countNum, setNum] = useState(1);
	function add() {
		setNum(function (prev) {
			if (prev == 6) {
				return prev;
			} else {
				return prev + 1;
			}
		})
	}
	function del() {
		setNum(function (prev) {
			if (prev == 1) {
				return prev;
			} else {
				return prev - 1;
			}
		})
	}

	return (
		<div className="section01Area">
			<div className="leftTitle">
				<div className="pageTitle">
					<span>●</span> 基本資料
				</div>
			</div>
			<div className="section01Content">
				<div className="setIntroduction">
					<p>自我介紹</p>
					<textarea name="introduction" id="introduction" maxLength="60" placeholder="請簡短的用60字介紹自己" />
				</div>
				<div className="acceptNum">
					<p>接待人數</p>
					<span>
						<input type="button" defaultValue="-" className="numBtn" onClick={del} />
						<input id="quantity" type="text" value={countNum} name="acceptNum" disabled />
						<input type="button" defaultValue="+" className="numBtn" onClick={add} />
					</span>
				</div>
				<div className="acceptGender">
					<p>接待性別</p>
					<span className="selectArea">
						<label>
							<input type="radio" name="acceptGender" id="male" value="male" /> 男
						</label>
						<label>
							<input type="radio" name="acceptGender" id="female" value="female" /> 女
						</label>
						<label>
							<input type="radio" name="acceptGender" id="bothGender" value="both" /> 不限
						</label>
					</span>
				</div>
				<div className="transportation">
					<p>交通工具</p>
					<span>
						<label>
							<input type="radio" name="transportation" id="car" value="car" /> 汽車
						</label>
						<label>
							<input type="radio" name="transportation" id="motorcycle" value="motorcycle" /> 機車
						</label>
						<label>
							<input type="radio" name="transportation" id="publicTransport" value="publicTransport" />
							大眾交通
						</label>
					</span>
				</div>
				<div className="uploadImg">
					<p>嚮導照片</p>
					<div>
						<input type="button" id="select" value="選擇照片" />
						<p>(請選擇四張相片)</p>
						<input type="file" id="file_input" name="filePath" multiple="multiple" />
						<br />
						<div id="append" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Set_Information;
