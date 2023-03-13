import PlusIconSvg from "./../../assets/Svg/PlusIconSvg";
const FindLocationGetImageBox: React.FunctionComponent = () => {
  return (
    <div className="relative col-start-2 col-end-12 h-[30vh] drop-shadow-xl bg-white flex flex-col items-center justify-center">
      <div className="flex items-center">
        <PlusIconSvg />
        <p className="text-gray">
          이곳에 드래그 앤 드랍 혹은 클릭하여 이미지를 업로드하세요.
        </p>
      </div>
    </div>
  );
};

export default FindLocationGetImageBox;
