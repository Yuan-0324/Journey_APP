import { useState, useContext } from 'react';
import { FiUpload } from 'react-icons/fi';
import context from '../../../../context';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../firebase';

const Set_Information = ({ guideForm, setGuideForm}) => {

	const currentUser = useContext(context).userInfo;

	//接待人數
	function add() {
		setGuideForm(function (prev) {
			if (prev.countNum == 6) {
				return prev;
			} else {
				return { ...guideForm, ['countNum']: prev.countNum + 1 };
			}
		})
	}
	function del() {
		setGuideForm(function (prev) {
			if (prev.countNum == 1) {
				return prev;
			} else {
				return { ...guideForm, ['countNum']: prev.countNum - 1 };
			}
		})
	}

	//圖片
	const [toggled1, setToggled1] = useState(false);
	const [toggled2, setToggled2] = useState(false);
	const [toggled3, setToggled3] = useState(false);
	const [toggled4, setToggled4] = useState(false);
	const showOrHide1 = toggled1 ? { visibility: "visible" } : { visibility: "hidden" };
	const showOrHide2 = toggled2 ? { visibility: "visible" } : { visibility: "hidden" };
	const showOrHide3 = toggled3 ? { visibility: "visible" } : { visibility: "hidden" };
	const showOrHide4 = toggled4 ? { visibility: "visible" } : { visibility: "hidden" };

	//暫存圖片預覽
	const [imgObject, setImgObject] = useState({
		Img1: '',
		Img2: '',
		Img3: '',
		Img4: ''
	});

	//準備上傳Firebase
	const [imgFirebase, setImgFirebase] = useState({
		uploadImg1: '',
		uploadImg2: '',
		uploadImg3: '',
		uploadImg4: ''
	})
	//上傳鍵按下
	const uploadBtnClick = () => {
		const urlArr = [];
		for (let i = 1; i <= 4; i++) {
			//用memberID創Firebase/guide/資料夾號碼
			console.log('STEP', i)
            const storageRef = ref(storage, `guide/${currentUser.id}/GuideImg${i}.png`);
            const metadata = {
                contentType: `imgFirebase.uploadImg${i}.type`
            };
            const update = uploadBytesResumable(storageRef, imgFirebase[`uploadImg${i}`], metadata);
            update.on('state_changed', snapshot => (err) => {
            }, (err) => { console.log(err); }, async () => {
                //得到照片url
                let url = await getDownloadURL(update.snapshot.ref);

                urlArr.push(url);
            });
        };
		if(urlArr.length == 4) {
			alert('已成功上傳照片！');
		}
		setGuideForm({ ...guideForm, ['guideImg']: urlArr });
	};
	let uploadImg1 = (evt) => {
		let img = URL.createObjectURL(evt.target.files[0]);
		setImgObject({ ...imgObject, ['Img1']: img })
		setImgFirebase({ ...imgFirebase, ['uploadImg1']: evt.target.files[0] })
		setToggled1(true);
	}
	let uploadImg2 = (evt) => {
		let img = URL.createObjectURL(evt.target.files[0]);
		setImgObject({ ...imgObject, ['Img2']: img })
		setImgFirebase({ ...imgFirebase, ['uploadImg2']: evt.target.files[0] })
		setToggled2(true);
	}
	let uploadImg3 = (evt) => {
		let img = URL.createObjectURL(evt.target.files[0]);
		setImgObject({ ...imgObject, ['Img3']: img })
		setImgFirebase({ ...imgFirebase, ['uploadImg3']: evt.target.files[0] })
		setToggled3(true);
	}
	let uploadImg4 = (evt) => {
		let img = URL.createObjectURL(evt.target.files[0]);
		setImgObject({ ...imgObject, ['Img4']: img })
		setImgFirebase({ ...imgFirebase, ['uploadImg4']: evt.target.files[0] })
		setToggled4(true);
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
					<textarea id="introduction" maxLength="60" placeholder="請簡短的用60字介紹自己"
						value={guideForm.introduction} onChange={e => setGuideForm({ ...guideForm, ['introduction']: e.target.value })} />
				</div>
				<div className="acceptNum">
					<p>接待人數</p>
					<div>
						<input type="button" defaultValue="-" className="numBtn" onClick={del} />
						<div className='quantity'>{guideForm.countNum}</div>
						<input type="button" defaultValue="+" className="numBtn" onClick={add} />
					</div>
				</div>
				<div className="acceptGender">
					<p>接待性別</p>
					<span className="selectArea">
						<label>
							<input type="radio" name="acceptGender" value='男'
								onChange={e => setGuideForm({ ...guideForm, ['acceptGender']: e.target.value })}
								checked={guideForm.acceptGender === "男"} /> 男
						</label>
						<label>
							<input type="radio" name="acceptGender" value="女"
								onChange={e => setGuideForm({ ...guideForm, ['acceptGender']: e.target.value })}
								checked={guideForm.acceptGender === "女"} /> 女
						</label>
						<label>
							<input type="radio" name="acceptGender" value="不限"
								onChange={e => setGuideForm({ ...guideForm, ['acceptGender']: e.target.value })}
								checked={guideForm.acceptGender === "不限"} /> 不限
						</label>
					</span>
				</div>
				<div className="transportation">
					<p>交通工具</p>
					<span>
						<label>
							<input type="radio" name="transportation" value="汽車"
								onChange={e => setGuideForm({ ...guideForm, ['transportation']: e.target.value })}
								checked={guideForm.transportation === "汽車"} /> 汽車
						</label>
						<label>
							<input type="radio" name="transportation" value="機車"
								onChange={e => setGuideForm({ ...guideForm, ['transportation']: e.target.value })}
								checked={guideForm.transportation === "機車"} /> 機車
						</label>
						<label>
							<input type="radio" name="transportation" value="大眾交通"
								onChange={e => setGuideForm({ ...guideForm, ['transportation']: e.target.value })}
								checked={guideForm.transportation === "大眾交通"} /> 大眾交通
						</label>
					</span>
				</div>
				<div className="uploadImg">
					<p>嚮導照片</p>
					<span>請選擇四張橫式照片 完畢請按 →</span>
					<button className='imgBtn' onClick={uploadBtnClick}>上傳</button>
					<div>
						<div id="append">
							<label className="uploadCover">
								<input className="uploadInput" type="file" onChange={uploadImg1} />
								<span className="uploadIcon"><FiUpload /></span>
								<img src={imgObject.Img1} style={showOrHide1} />
							</label>
							<label className="uploadCover">
								<input className="uploadInput" type="file" onChange={uploadImg2} />
								<span className="uploadIcon"><FiUpload /></span>
								<img src={imgObject.Img2} style={showOrHide2} />
							</label>
							<label className="uploadCover">
								<input className="uploadInput" type="file" onChange={uploadImg3} />
								<span className="uploadIcon"><FiUpload /></span>
								<img src={imgObject.Img3} style={showOrHide3} />
							</label>
							<label className="uploadCover">
								<input className="uploadInput" type="file" onChange={uploadImg4} />
								<span className="uploadIcon"><FiUpload /></span>
								<img src={imgObject.Img4} style={showOrHide4} />
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Set_Information;
