import "./Infocards.css";

const Infocards = ({ gif, name, clr, bg }) => {
  return (
    <div className="infocards md:my-0 my-4 w-full">
      <div
        className={`outline outline-white py-2 ${bg}  px-2 bg-center ff-tc md:text-5xl sm:text-2xl text-xl font-semibold uppercase flex justify-between items-center w-full`}
      >
        <img
          src={`${gif}`}
          className="md:h-[160px] sm:h-[100px] h-[60px] sm:max-w-sm max-w-1/2 "
        />
        <div
          className={`text-right text-${clr} md:text bg-transparent md:pr-2 sm:pr-1 pr-2`}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default Infocards;

{
  /* <div
        className={`cards ff-tc text-5xl font-semibold px-4 outline outline-red-500 my-2 py-12 uppercase bg-[url('${img}')] bg-center  bg-cover bg-no-repeat`}
      >
        <div className={` text-right text-${clr}  bg-transparent`}>{name}</div>
      </div> */
}

// <div
//         className={`cards ff-tc text-5xl font-semibold px-4 outline outline-red-500 my-2 py-12 uppercase  z-30`}
//       >
//         <video
//           src={`${img}`}
//           autoPlay="{true}"
//           loop
//           muted
//           className="relative -z-1 "
//         ></video>
//         <div className={` text-right text-${clr}  bg-transparent`}>{name}</div>
//       </div>
