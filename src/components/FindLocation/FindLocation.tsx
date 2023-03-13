import GridLayout from "../Layout/GridLayout";
import FindLocationGetImageBox from "./FindLocationGetImageBox";

const FindLocation: React.FunctionComponent = () => {
  return (
    <main className="relative w-full top-[64px] ">
      <GridLayout>
        <div className="mt-[4em] col-start-2 col-end-12 flex flex-col items-center">
          <p className="font-extrabold text-transparent text-[2em] bg-clip-text bg-gradient-to-r from-deeporange to-shalloworange">
            FINDVIBE와 함께
          </p>
          <p className="text-[#767676]">
            이미지를 업로드하여 촬영한 장소를 찾아보세요.
          </p>
        </div>
        <FindLocationGetImageBox />
      </GridLayout>
    </main>
  );
};

export default FindLocation;
