import React from 'react'
import CreateCard from "./CreateCard";
import Slider from "./Slider"
import Slider2 from "./Slider2"
import sunglass from "../assets/images/sunglass.png"
import screenglass from "../assets/images/screenglasses.png"
import powersunglass from "../assets/images/powersunglass.png"
import glasses from "../assets/images/zero power.png"


const Productdata=[
    {img:sunglass,alt:"sunglass",des:"bmgkvmnbkkn"},
    {img:screenglass,alt:"screenglass",des:"vmlmvkgbkgb" },
    {img:powersunglass,alt:"powerglasses",des:"bmgbmgbmgbmgb"},
    {img:glasses,alt:"glasses",des:"vnejvbfbvge"}
]

export default function Home() {
    return (
        <div className='gap-0'>
<CreateCard/>
<Slider/>
            
             <div className="relative bg-cover bg-center bg-no-repeat h-[500px]" style={{ backgroundImage: `url('https://media.ray-ban.com/cms/resource/image/1322264/landscape_ratio144x65/2592/1170/3f4aff00931af411974b9cb79a1e1d29/30C46971D3A7872562D99CAA3FAD4A5D/rb-hp-cny-d.jpg')` }}>

                <div className='flex justify-between px-32 pt-[200px]'>
                    <div></div>

                    <div>
                        {/* <h1 className='text-2xl font-bold text-white'>UNLEASH THE VISION OF THE SNAKE</h1>
                        <p className='font-bold text-xl'>Have a good VISION </p>
                        <p className='font-bold text-xl'>With Fashion</p> */}
                      
                    </div>
                </div>
            </div>
<Slider2/>
{
    Productdata.map((Value,key)=>(
      <div className='flex flex-wrap flex-row justify-center'>
          <div className='h-[250px] w-[250px] bg-gray-200 flex flex-col justify-evenly 'key={key}>
            {/* image */}
    <div className='h-[240px] w-[245px]  '>
        <img src={Value.img} alt={Value.alt} />
        <br />
        <h1 className='flex justify-center'>{Value.des}</h1>
    </div>
   
</div>

      </div>
    ))
}
         </div>
    )
} 
