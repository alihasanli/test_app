const PartnersCarousel = ({ direction, data, special }) => {
  const animationClass =
    direction === "left" ? "animate-scroll-left" : "animate-scroll-right";

  return (
    <div className="group relative overflow-hidden whitespace-nowrap flex gap-[60px]">
      <div
        className={`${animationClass} group-hover:animation-pause w-max flex gap-[60px]`}
      >
        {data.map((item, index) => (
          <p className={`inline text-[120px] cursor-default ${special ? 'text-stroke text-transparent' : ''}`} key={index}>{item.text}</p>
        ))}
      </div>
      <div
        className={`${animationClass} group-hover:animation-pause flex gap-[60px] w-max`}
      >
        {data.map((item, index) => (
          <p className={`inline text-[120px] cursor-default ${special ? 'text-stroke text-transparent' : ''}`} key={index}>{item.text}</p>
        ))}
      </div>
    </div>
  );
};

export default PartnersCarousel;
