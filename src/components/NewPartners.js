import useMousePosition from "@/utils/useMousePosition";
import { useWindowSize } from "@/utils/useWindowSize";
import { motion } from "framer-motion"
import PartnersCarousel from "./PartnersCarousel";
import { useState } from "react";
const NewPartners = () => {
  const { width } = useWindowSize()

  // const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  console.log(x, y);
  
  const size = 150;

  const slides = [
    { text: "devers." },
    { text: "devers." },
    { text: "devers." },
  ];

  return (
    <div className="mb-[90px] lg:mb-[120px] bg-black h-[100vh]">
      {/* place for svgs */}
      <div className="sm:w-[90%] max-w-[1400px] mx-auto px-4">
        {/* <h2 className="text-[34px] text-center font-bold mb-[40px] lg:mb-[60px] sm:text-[42px] md:text-[64px] xl:text-[80px]">
          {width >= 1024 ? "PARTNERS" : "Partners"}
        </h2> */}
        {/* <div className="flex flex-col gap-[40px] lg:gap-[60px] relative">
          <div className="mask">
            <PartnersCarousel direction="right" data={slides} special={false} />
          </div>
          <div className="actual">
            <PartnersCarousel direction="right" data={slides} special={true} />
          </div>
        </div> */}
        <div className="h-100vh w-full relative cursor-none">
          <motion.div
            style={{
              position: "absolute",
              maskImage: "url('/images/mask.svg')",
              WebkitMaskImage: "url('/images/mask.svg')",
              backgroundColor: "#000",
              maskSize: size,
              maskRepeat: "no-repeat",
              color: "#000",
              height: "100%",
            }}
            className="mask"
            animate={{
              WebkitMaskPosition: `${x - size}px ${y-size/2 }px`,
              transition: { type: 'tween', ease: 'backOut', duration: 0.1 }
            }}
          >
            <p 
              className="text-[64px] p-[120px] font-bold text-stroke-normal text-[#01ECF3]"
              // onMouseEnter={() => {setIsHovered(true)}}
              // onMouseLeave={() => {setIsHovered(false)}}
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt error dignissimos rem, voluptate placeat.</p>
          </motion.div>
          <div className="normal">
            <p className="p-[120px] font-bold text-stroke-mask text-transparent text-[64px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt error dignissimos rem, voluptate placeat.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPartners;
