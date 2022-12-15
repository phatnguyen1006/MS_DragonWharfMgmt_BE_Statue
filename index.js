import express from "express";
const app = express();
import cors from "cors";
import dotenv from "dotenv"
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();
const PORT = process.env.PORT || 8003;

app.use(express.json());
app.use(cors());

const BASE_URL = `${process.env.BASE_PROTOCOL}://${process.env.BASE_IP}:${process.env.BASE_PORT}/${process.env.BASE_NODE}`

const statues = [
  {
    statueName: "Bác hồ với miền nam",
    path: `${BASE_URL}/model/bac_ho_voi_mien_nam.glb`,
    point: {
      x: 106.70693969495491,
      y: 10.768241107046558,
      z: 7.1,
    },
    scale: 0.35,
    rotate: 297,
  },
  // Rồng trên mái nhà
  {
    statueName: "Rồng trên mái nhà 1",
    path: `${BASE_URL}/model/dragon.gltf`,
    point: {
      x: 106.70677109359,
      y: 10.768229806640536,
      z: 28.5,
    },
    scale: 0.025,
    rotate: 294,
  },
  {
    statueName: "Rồng trên mái nhà 2",
    path: `${BASE_URL}/model/dragon.gltf`,
    point: {
      x: 106.70690680034602,
      y: 10.768288478965882,
      z: 28.5,
    },
    scale: 0.025,
    rotate: 114,
  },
  {
    statueName: "tượng Bác Hồ ngồi",
    path: `${BASE_URL}/model/BacHo_ngoi.gltf`,
    point: {
      x: 106.70689572342282,
      y: 10.768303179718915,
      z: 7.1,
    },
    scale: 1.5,
    rotate: 20,
  },
  {
    statueName: "tượng kháng chiến",
    path: `${BASE_URL}/model/tuong_khang_chien_k.gltf`,
    point: {
      x: 106.70688225658532,
      y: 10.768306284015857,
      z: 13.41,
    },
    scale: 0.2,
    rotate: -70,
  },
  {
    statueName: "Bình hoa trái",
    path: `${BASE_URL}/model/binh_hoa.gltf`,
    point: {
      x: 106.70692604891157,
      y: 10.76831554694806,
      z: 7.1,
    },
    scale: 5,
    rotate: 20,
  },
  {
    statueName: "Bình hoa phải",
    path: `${BASE_URL}/model/binh_hoa.gltf`,
    point: {
      x: 106.70685964728027,
      y: 10.768286838442819,
      z: 7.1,
    },
    scale: 5,
    rotate: 20,
  },
  {
    statueName: "Tủ phòng trưng bày 1",
    path: `${BASE_URL}/model/guong_nuoc.glb`,
    point: {
      x: 106.70674132571506,
      y: 10.76824029463685,
      z: 13.41,
    },
    scale: 0.03,
    rotate: 203,
  },
  {
    statueName: "Tượng bác hồ tầng 4",
    path: `${BASE_URL}/model/BacHo.glb`,
    point: {
      x: 106.70695841468554,
      y: 10.768240571373488,
      z: 13.41,
    },
    scale: 0.01,
    rotate: 248,
  },
  {
    statueName: "Mẹ anh hùng và các con",
    path: `${BASE_URL}/model/me_anh_hung_k.gltf`,
    point: {
      x: 106.70689348811796,
      y: 10.768289567226063,
      z: 7.1,
    },
    scale: 0.2,
    rotate: 115,
  },
  {
    statueName: "Tượng Bác phòng 3 tầng 2",
    path: `${BASE_URL}/model/555309.glb`,
    point: {
      x: 106.70683488494919,
      y: 10.768333358215452,
      z: 13.41,
    },
    scale: 1,
    rotate: 90,
  },
  {
    statueName: "Bàn thờ",
    path: `${BASE_URL}/model/bt.glb`,
    point: {
      x: 106.70678692151299,
      y: 10.76819737258987,
      z: 13.41,
    },
    scale: 1,
    rotate: 290,
  },
  {
    statueName: "Tranh phòng ba AB",
    path: `${BASE_URL}/model/PhongThuBa_AB.glb`,
    point: {
      x: 106.7068643655205, 
      y: 10.768299962262612,
      z: 16,
    },
    scale: 1,
    rotate: 294,
  },
  {
    statueName: "Tranh phòng ba BC",
    path: `${BASE_URL}/model/PhongThuBa_BC.glb`,
    point: {
      x: 106.70691911296996,
      y: 10.768311358000712,
      z: 16,
    },
    scale: 1,
    rotate: 204,
  },
  {
    statueName: "Tranh phòng ba CD",
    path: `${BASE_URL}/model/dragon-wharf.appspot.com/o/PhongThuBa_CD.glb`,
    point: {
      x: 106.70688604400692,
      y: 10.768260238382895,
      z: 16,
    },
    scale: 1,
    rotate: 114,
  },
  {
    statueName: "Tranh phòng ba DA",
    path: `${BASE_URL}/model/dragon-wharf.appspot.com/o/PhongThuBa_DA.glb`,
    point: {
      x: 106.70683673380753,
      y: 10.768284296359962,
      z: 16,
    },
    scale: 1,
    rotate: 24,
  },
  {
    statueName: "Tranh phòng hai AB",
    path: `${BASE_URL}/model/PhongThuHai_AB.glb`,
    point: {
      x: 106.7067901481021,
      y: 10.768287587616687,
      z: 16,
    },
    scale: 1,
    rotate: 294,
  },
  {
    statueName: "Tranh phòng hai BC",
    path: `${BASE_URL}/model/PhongThuHai_BC.glb`,
    point: {
      x: 106.70683284805955, 
      y: 10.768285219972874,
      z: 16,
    },
    scale: 1,
    rotate: 204,
  },
  {
    statueName: "Tranh phòng hai CD",
    path: `${BASE_URL}/model/PhongThuHai_CD.glb`,
    point: {
      x: 106.70681035295145,
      y: 10.768252805762463,
      z: 16,
    },
    scale: 1,
    rotate: 114,
  },
  {
    statueName: "Tranh phòng hai DA",
    path: `${BASE_URL}/model/PhongThuHai_DA.glb`,
    point: {
      x: 106.70677857995072,
      y: 10.768258037920784,
      z: 16,
    },
    scale: 1,
    rotate: 24,
  },
  {
    statueName: "Tranh phòng nhất AB",
    path: `${BASE_URL}/model/PhongThuNhatAB.glb`,
    point: {
      x: 106.70672806471654,
      y: 10.768273392156269,
      z: 16,
    },
    scale: 0.82,
    rotate: 294,
  },
  {
    statueName: "Tranh phòng nhất BC",
    path: `${BASE_URL}/model/PhongThuNhatBC.glb`,
    point: {
      x: 106.70677427323649, 
      y: 10.768259895359886,
      z: 15.5,
    },
    scale: 1,
    rotate: 204,
  },
  {
    statueName: "Tranh phòng nhất CD",
    path: `${BASE_URL}/model/PhongThuNhatCD.glb`,
    point: {
      x: 106.70675177914909,
      y: 10.768220786614185,
      z: 15,
    },
    scale: 1,
    rotate: 114,
  },
  {
    statueName: "Tranh phòng nhất DA",
    path: `${BASE_URL}/model/PhongThuNhatDA.glb`,
    point: {
      x: 106.70672316109874,
      y: 10.76823407778048,
      z: 16,
    },
    scale: 1,
    rotate: 24,
  },
  {
    statueName: "Tranh phòng tư AB",
    path: `${BASE_URL}/model/PhongThuTu_AB.glb`,
    point: {
      x: 106.70691140479983,
      y: 10.768219874876213,
      z: 16,
    },
    scale: 1,
    rotate: 294,
  },
  {
    statueName: "Tranh phòng tư BC",
    path: `${BASE_URL}/model/PhongThuTu_BC.glb`,
    point: {
      x: 106.70695351994546,
      y: 10.76823503327338,
      z: 16,
    },
    scale: 1,
    rotate: 204,
  },
  {
    statueName: "Tranh phòng tư CD",
    path: `${BASE_URL}/model/PhongThuTu_CD.glb`,
    point: {
      x: 106.70691867271952,
      y: 10.768162762345762,
      z: 16,
    },
    scale: 1,
    rotate: 114,
  },
  {
    statueName: "Tranh phòng tư DA",
    path: `${BASE_URL}/model/PhongThuTu_DA.glb`,
    point: {
      x: 106.70687146469764,
      y: 10.768199556983634,
      z: 16,
    },
    scale: 1,
    rotate: 24,
  },
  {
    statueName: "Tượng Bác Hồ",
    path: `${BASE_URL}/model/TuongBacHo.gltf`,
    point: {
      x: 106.70682226415428,
      y: 10.768194427639017,
      z: 14.61,
    },
    scale: 0.005,
    rotate: 150,
  },
  {
    statueName: "Flag VN 1",
    path: `${BASE_URL}/model/FlagVN.glb`,
    point: {
      x: 106.70677359076801,
      y: 10.76833308822116,
      z: 20.57,
    },
    scale: 0.5,
    rotate: 115,
  },
  {
    statueName: "Flag VN 2",
    path: `${BASE_URL}/model/FlagVN.glb`,
    point: {
      x: 106.70683903665159,
      y: 10.768358384016318,
      z: 20.57,
    },
    scale: 0.5,
    rotate: 115,
  },
  {
    statueName: "Xe kéo",
    path: `${BASE_URL}/model/Untitled2.glb`,
    point: {
      x: 106.7069466019431,
      y: 10.768297741712892,
      z: 7.1,
    },
    scale: 0.5,
    rotate: 115,
  },
  {
    statueName: "Xe hơi",
    path: `${BASE_URL}/model/xe.glb`,
    point: {
      x: 106.70693318220435,
      y: 10.768202788593655,
      z: 7.1,
    },
    scale: 1,
    rotate: 115,
  },
  {
    statueName: "Bác Hồ với miền Nam AB",
    path: `${BASE_URL}/model/Bac_Ho_voi_mien_Nam_AB.glb`,
    point: {
      x: 106.70688913109281,
      y: 10.768253390324162,
      z: 9,
    },
    scale: 1,
    rotate: 294,
  },
  {
    statueName: "Bác Hồ với miền Nam BC",
    path: `${BASE_URL}/model/Bac_Ho_voi_mien_Nam_BC.glb`,
    point: {
      x: 106.70694818872687,
      y: 10.768240167203173,
      z: 9,
    },
    scale: 1,
    rotate: 204,
  },
  {
    statueName: "Bác Hồ với miền Nam CD",
    path: `${BASE_URL}/model/Bac_Ho_voi_mien_Nam_CD.glb`,
    point: {
      x: 106.70692330079663,
      y: 10.76816922659589,
      z: 9,
    },
    scale: 1,
    rotate: 114,
  },
  {
    statueName: "Việt Nam những Tuyên ngôn độc lập Left",
    path: `${BASE_URL}/model/VN_TN_Left.glb`,
    point: {
      x: 106.70680616313788,
      y: 10.768269963412031,
      z: 9,
    },
    scale: 1,
    rotate: 114,
  },
  {
    statueName: "Việt Nam những Tuyên ngôn độc lập Right",
    path: `${BASE_URL}/model/VN_TN_Right.glb`,
    point: {
      x: 106.7068339356833,
      y: 10.768281970771637,
      z: 9,
    },
    scale: 1,
    rotate: 24,
  },
  {
    statueName: "Cuộc hành trình thời đại BC",
    path: `${BASE_URL}/model/HanhTrinhBC.glb`,
    point: {
      x: 106.7068042700656,
      y: 10.768265797460776,
      z: 9,
    },
    scale: 1,
    rotate: 204,
  },
  {
    statueName: "Cuộc hành trình thời đại BC Inside 1",
    path: `${BASE_URL}/model/HanhTrinhBC_Inside_1.glb`,
    point: {
      x: 106.70677912919723,
      y: 10.768243769602922,
      z: 9,
    },
    scale: 1,
    rotate: 24,
  },
  {
    statueName: "Cuộc hành trình thời đại Inside 2",
    path: `${BASE_URL}/model/HanhTrinhBC_Inside_2.glb`,
    point: {
      x: 106.70677776246035,
      y: 10.768237599552018,
      z: 9,
    },
    scale: 1,
    rotate: 24,
  },
  {
    statueName: "Cuộc hành trình thời đại Inside 3",
    path: `${BASE_URL}/model/HanhTrinhBC_Inside_3.glb`,
    point: {
      x: 106.70676163307564,
      y: 10.768223187207981,
      z: 9,
    },
    scale: 1,
    rotate: 24,
  },
  {
    statueName: "Cuộc hành trình thời đại DA",
    path: `${BASE_URL}/model/HanhTrinhDA.glb`,
    point: {
      x: 106.70672246204003,
      y: 10.768218897819237,
      z: 9,
    },
    scale: 1,
    rotate: 24,
  },
];

app.get("/model/:file_path/:file_name", (req, res) => {
    console.log("downloading")
    const { file_path, file_name } = req.params
    const file = `${__dirname}/public/Model/${file_path}/${file_name}`
    res.download(file)
})

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Get list of statue successfully.",
    data: statues,
  });
});


app.listen(PORT, () => {
  console.log(`Products is Listening to Port ${PORT}`);
});
