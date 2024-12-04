import { ColorRing } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh-124px)] md:h-[calc(100vh-66px)] grid place-items-center bg-[#f3f6f4]">
      <div className="w-fit h-fit p-[1px] bg-white rounded-full shadow-xl">
        <ColorRing
          visible={true}
          height="40"
          width="40"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#2847f0", "#2847f0", "#2847f0", "#2847f0", "#2847f0"]}
        />
      </div>
    </div>
  );
};

export default Loading;
