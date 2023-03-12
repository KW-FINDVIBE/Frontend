import GridLayout from "../Layout/GridLayout";
import IndexIntro from "./IndexIntro";
import IndexCompareImg from "./IndexCompareImg";
import Footer from "../Footer/Footer";
import IndexRecommend from "./IndexRecommend";

const Index: React.FunctionComponent = () => {
  return (
    <main className="relative w-full top-[64px] ">
      <GridLayout>
        <IndexIntro />
        <IndexCompareImg />
        <IndexRecommend />
      </GridLayout>
      <Footer></Footer>
    </main>
  );
};

export default Index;
