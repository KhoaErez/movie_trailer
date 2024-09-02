import IconRating from "../assets/rating.png";
import IconRatingHalf from "../assets/rating-half.png";
import IconPlay from "../assets/play-button.png";
import ImgTemp from "../assets/temp-1.jpeg";
const Banner = () => {
  return (
    <div className="w-full h-[700px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 opacity-40 bg-black" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white bg-gradient-to-r from-red-600 to-red-300 text-md py-2 px-3 ">
            PV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-3xl font-bold">
              Nghe nói em thích tôi
            </h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRating} alt="rating" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="ratinghalf" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus distinctio quos expedita commodi eaque, dolores quia,
              hic debitis cumque, eligendi perferendis! Veniam asperiores sunt,
              inventore ullam omnis maiores nemo quos?,Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Deleniti ea sapiente
              praesentium magnam perspiciatis ratione dicta nostrum impedit cum,
              expedita reprehenderit error odio totam est voluptates cupiditate,
              ex blanditiis? Recusandae?
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-3 text-white bg-black font-bold text-sm ">
              Chi tiết
            </button>
            <button className="p-3 text-white bg-red-600 font-bold text-sm">
              Xem phim
            </button>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="relative w-[300px] h-[400px] group cursor-pointer">
            <img
              src={ImgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src={IconPlay}
                alt="Play"
                className="relative w-16 h-16 z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
