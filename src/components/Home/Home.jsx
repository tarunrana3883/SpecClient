import React from 'react'
import CreateCard from "./CreateCard";
import Slider from "../Home/Slider"
import Slider2 from "../Home/Slider2"
import ALlProduct from "../Home/ALlProduct"
import sunglass from "../../assets/images/sunglass.png"
import screenglass from "../../assets/images/screenglasses.png"
import powersunglass from "../../assets/images/powersunglass.png"
import glasses from "../../assets/images/zero power.png"


const Productdata = [
    { img: [sunglass], hoverImg: screenglass, rating: '4.1', price: '₹499.00', alt: "sunglass", des: "50-80%OFF" },
    { img: [screenglass], hoverImg: sunglass, rating: '4.1', price: '₹499.00', alt: "screenglass", des: "40-80%OFF" },
    { img: [powersunglass], hoverImg: glasses, rating: '4.1', price: '₹499.00', alt: "powerglasses", des: "30-40%OFF" },
    { img: [glasses], hoverImg: powersunglass, rating: '4.1', price: '₹499.00', alt: "glasses", des: "10-60%OFF" }
]


export default function Home() {
    return (
        <div className='gap-0'>
            <CreateCard />
            <Slider />

            <div className="relative bg-cover mt-1 bg-center bg-no-repeat h-[500px]" style={{ backgroundImage: `url('https://media.ray-ban.com/cms/resource/image/1322264/landscape_ratio144x65/2592/1170/3f4aff00931af411974b9cb79a1e1d29/30C46971D3A7872562D99CAA3FAD4A5D/rb-hp-cny-d.jpg')` }}>

                <div className='flex justify-between px-32 pt-[200px]'>
                    <div></div>

                    <div>
                        <h1 className='text-2xl font-bold text-white'>UNLEASH THE VISION OF THE SNAKE</h1>
                        <p className='font-bold text-xl'>Have a good VISION </p>
                        <p className='font-bold text-xl'>With Fashion</p>

                    </div>
                </div>
            </div>
            <Slider2 />

            {/* All Product by category */}

           
                <ALlProduct/>
        </div>
    )
} 
