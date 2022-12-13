import express from 'express';
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
        rotate: 297
    },
    // Rồng trên mái nhà
    {
        statueName: "Rồng trên mái nhà 1",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/dragon.gltf?alt=media&token=40d7313d-a168-4daf-919a-2c3ddf00e8cd",
        point: {
            x: 106.70677109359,
            y: 10.768229806640536,
            z: 28.5
        },
        scale: 0.025,
        rotate: 294
    },
    {
        statueName: "Rồng trên mái nhà 2",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/dragon.gltf?alt=media&token=40d7313d-a168-4daf-919a-2c3ddf00e8cd",
        point: {
            x: 106.70690680034602,
            y: 10.768288478965882,
            z: 28.5
        },
        scale: 0.025,
        rotate: 114
    },
    {
        statueName: "tượng Bác Hồ ngồi",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/BacHo_ngoi.gltf?alt=media&token=d4db794e-bc21-4c8e-b230-a6fe0b9cb4f2",
        point: {
            x: 106.70689572342282,
            y: 10.768303179718915, 
            z: 7.1
        },
        scale: 1.5,
        rotate: 20
    },
    {
        statueName: "tượng kháng chiến",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/tuong_khang_chien_k.gltf?alt=media&token=62f49e96-3365-44f6-b577-c1f64e25b033",
        point: {
            x: 106.70688365980618,
            y: 10.768303171261888,
            z: 13.41,
        },
        scale: 0.2,
        rotate: -70
    },
    {
        statueName: "Bình hoa trái",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/binh_hoa.gltf?alt=media&token=5c8f83f4-e0a1-4504-8b67-3b0e46007c1a",
        point: {
            x: 106.70692604891157,
            y: 10.76831554694806, 
            z: 7.1
        },
        scale: 5,
        rotate: 20
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
        rotate: 20
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
        rotate: 203
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
        rotate: 248
    },
    {
        statueName: "Mẹ anh hùng và các con",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/me_anh_hung_k.gltf?alt=media&token=35f50f85-b7fd-473c-ab2c-c785ad4fcc8d",
        point: {
            x: 106.7068909623204,
            y: 10.768295170183208,
            z: 7.1,
        },
        scale: 0.2,
        rotate: 115
    },
    {
        statueName: "Tượng Bác phòng 3 tầng 2",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/555309.glb?alt=media&token=c6c5636d-8ba8-45bb-839e-4bdaeb89679e",
        point: {
            x: 106.70683488494919,
            y: 10.768338358215452,
            z: 13.41,
        },
        scale: 1,
        rotate: 90
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
        rotate: 290
    },
    {
        statueName: "Tranh phòng ba AB",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuBa_AB.glb?alt=media&token=5ce0a69b-9ebd-4a1d-94c0-e143eaa97a1c",
        point: {
            x: 106.70686752149157,
            y: 10.768301326735294,
            z: 16,
        },
        scale: 1,
        rotate: 294
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
        rotate: 204
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
        rotate: 114
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
        rotate: 24
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
        rotate: 294
    },
    {
        statueName: "Tranh phòng hai BC",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuHai_BC.glb?alt=media&token=aedee7f4-a1d4-4a93-ac41-b40eb3f20de3",
        point: {
            x: 106.70683425128041,
            y: 10.768282107218905,
            z: 16,
        },
        scale: 1,
        rotate: 204
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
        rotate: 114
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
        rotate: 24
    },
    {
        statueName: "Tranh phòng nhất AB",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuNhatAB.glb?alt=media&token=f142d600-4d19-4b63-8c6a-0d04b8604d18",
        point: {
            x: 106.70672806471654,
            y: 10.768273392156269,
            z: 16,
        },
        scale: 1,
        rotate: 294
    },
    {
        statueName: "Tranh phòng nhất BC",
        path: "https://firebasestorage.googleapis.com/v0/b/dragon-wharf.appspot.com/o/PhongThuNhatBC.glb?alt=media&token=01280220-407c-4109-a0c4-9e7858de0fa3",
        point: {
            x: 106.70677567645735,
            y: 10.768256782605917,
            z: 15.5,
        },
        scale: 1,
        rotate: 204
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
        rotate: 114
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
        rotate: 24
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
        rotate: 294
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
        rotate: 204
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
        rotate: 114
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
        rotate: 24
    },

]

app.get('/', (req,res) => {
    return res.status(200).json({
        success: true,
        message: "Get list of statue successfully.",
        data: statues
    });
});

app.listen(PORT, () => {
    console.log(`Products is Listening to Port ${PORT}`);
});
