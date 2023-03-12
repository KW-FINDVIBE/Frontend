import LogoSvg from "../../assets/Svg/LogoSvg";
import GridLayout from "./../Layout/GridLayout";

const GlobalNavigationBar: React.FunctionComponent = () => {
  return (
    <nav className="fixed z-50 w-full bg-white h-[64px] drop-shadow-xl flex items-center justify-center text-[0.875em] whitespace-pre">
      <GridLayout>
        <button className="justify-self-start">
          <LogoSvg />
        </button>
        <div className="ml-[20px] col-start-4 w-[220px] flex items-center justify-between ">
          <button>후기</button>
          <button>인기장소</button>
          <button>장소찾기</button>
        </div>

        <div className="col-start-12 justify-self-end justify-between w-[150px] flex">
          <button className="">로그인</button>
          <button className="bg-gradient-to-r from-deeporange to-shalloworange px-4 py-2 rounded-full text-white flex items-center justify-center font-bold">
            회원가입
          </button>
        </div>
      </GridLayout>
    </nav>
  );
};

export default GlobalNavigationBar;
