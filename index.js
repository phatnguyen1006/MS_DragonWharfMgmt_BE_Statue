import express from 'express';
const app = express(); 
import cors from "cors";
import connectDB from "./configs/config.js";

require("dotenv").config();
const PORT = process.env.PORT || 8003;

connectDB()

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
    }

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
