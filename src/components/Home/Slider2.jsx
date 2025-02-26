import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const images = [
   " https://static5.lenskart.com/media/uploads/hechome11.png "      ,
   "https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/VC-Banner.jpg",
   "https://static1.lenskart.com/media/desktop/img/Oct22/kiara/Refresh-Banner-Web.gif"
  
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-[400px] mx-auto bg-gray-300 pb-5">
          <div className="overflow-hidden rounded-2xl shadow-lg ">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-[400px] object-cover"
            />
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
  );
}
