import express from "express";
const app = express();
import cors from "cors";

require("dotenv").config();
const PORT = process.env.PORT || 8003;

app.use(express.json());
app.use(cors());

const statues = [
  {
    statueName: "Bác hồ với miền nam",
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/bac_ho_voi_mien_nam.glb?alt=media&token=218afb14-3f1a-4920-9a49-ebd327e3b242",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/dragon.gltf?alt=media&token=40d7313d-a168-4daf-919a-2c3ddf00e8cd",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/dragon.gltf?alt=media&token=40d7313d-a168-4daf-919a-2c3ddf00e8cd",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/BacHo_ngoi.gltf?alt=media&token=d4db794e-bc21-4c8e-b230-a6fe0b9cb4f2",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/tuong_khang_chien_k.gltf?alt=media&token=62f49e96-3365-44f6-b577-c1f64e25b033",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/binh_hoa.gltf?alt=media&token=5c8f83f4-e0a1-4504-8b67-3b0e46007c1a",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/binh_hoa.gltf?alt=media&token=5c8f83f4-e0a1-4504-8b67-3b0e46007c1a",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/guong_nuoc.glb?alt=media&token=500211b0-b879-4627-ad93-cc7c8b39f469",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/BacHo.glb?alt=media&token=1389877c-9b01-4fed-ba51-50e0f4db037e",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/me_anh_hung_k.gltf?alt=media&token=35f50f85-b7fd-473c-ab2c-c785ad4fcc8d",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/555309.glb?alt=media&token=c6c5636d-8ba8-45bb-839e-4bdaeb89679e",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/bt.glb?alt=media&token=cd008ae0-a484-431d-9f3e-e121dab0c1b4",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuBa_AB.glb?alt=media&token=5ce0a69b-9ebd-4a1d-94c0-e143eaa97a1c",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuBa_BC.glb?alt=media&token=6390b082-80dd-4609-a203-c6db4700c2b9",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuBa_CD.glb?alt=media&token=7d7f1485-d830-4834-b12e-35915d441bc8",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuBa_DA.glb?alt=media&token=d84a3540-8f23-4379-83f1-97d1573b0ff1",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuHai_AB.glb?alt=media&token=dfd87c50-6b0c-4896-86f1-55d9bfd47f20",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuHai_BC.glb?alt=media&token=aedee7f4-a1d4-4a93-ac41-b40eb3f20de3",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuHai_CD.glb?alt=media&token=8c7ad682-5d65-4bdb-849d-c85eb95595ea",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuHai_DA.glb?alt=media&token=e03801a9-6503-4bea-a9ba-8f6df6ae4d7d",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuNhatAB.glb?alt=media&token=f142d600-4d19-4b63-8c6a-0d04b8604d18",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuNhatBC.glb?alt=media&token=01280220-407c-4109-a0c4-9e7858de0fa3",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuNhatCD.glb?alt=media&token=f4a287b5-0437-4b16-b806-ac53f091b02b",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuNhatDA.glb?alt=media&token=b012d5b1-a7dc-4eb7-9c60-6c00ddb67662",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuTu_AB.glb?alt=media&token=7ae41b90-5016-4c82-ab89-ee0faf3e765c",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuTu_BC.glb?alt=media&token=73f39144-c900-48b3-a055-1d411f0f0c10",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuTu_CD.glb?alt=media&token=23001520-6840-4f96-880a-7ba42a19d5b4",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuTu_DA.glb?alt=media&token=94f79815-58f6-46a2-9188-d64121da7542",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/TuongBacHo.gltf?alt=media&token=7ab54f11-92e3-4536-919d-6235b22bc4f0",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/FlagVN.glb?alt=media&token=044cb1dd-559f-40eb-aa5c-bce13d3f0a70",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/FlagVN.glb?alt=media&token=044cb1dd-559f-40eb-aa5c-bce13d3f0a70",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/Untitled2.glb?alt=media&token=9580aa1d-d6c1-4795-b217-aac836425e23",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/xe.glb?alt=media&token=3747bd70-4c59-4127-a639-b7c345683182",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/Bac_Ho_voi_mien_Nam_AB.glb?alt=media&token=c62b3d00-63de-4c1e-a1de-906031a455f8",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/Bac_Ho_voi_mien_Nam_BC.glb?alt=media&token=cd0174a2-2b06-459b-92f1-53c8af99d31f",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/Bac_Ho_voi_mien_Nam_CD.glb?alt=media&token=46569702-a87d-4158-9ae7-ae1dbac2839d",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/VN_TN_Left.glb?alt=media&token=7c66dc43-d7fe-4e26-afab-743bd061a822",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/VN_TN_Right.glb?alt=media&token=69b7c89d-b0e4-4d64-bf86-61884dee3e64",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/HanhTrinhBC.glb?alt=media&token=5d4e0fd9-c6be-4fa5-a341-f4a34fc8e974",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/HanhTrinhBC_Inside_1.glb?alt=media&token=ad323bb1-7d4f-4541-aeb0-5f51f7e79e91",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/HanhTrinhBC_Inside_2.glb?alt=media&token=b49e71fc-5abc-4592-b7e2-6fa31f39c6cf",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/HanhTrinhBC_Inside_3.glb?alt=media&token=d2d6de9e-febc-4bdf-9211-678b3eb015bf",
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
    path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/HanhTrinhDA.glb?alt=media&token=a191d178-af46-4c1b-8b04-2a4c5c79ec9e",
    point: {
      x: 106.70672246204003,
      y: 10.768218897819237,
      z: 9,
    },
    scale: 1,
    rotate: 24,
  },
];

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
