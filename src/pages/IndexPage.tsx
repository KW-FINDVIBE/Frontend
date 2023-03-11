import GridLayout from "../components/Layout/GridLayout";
import GlobalNavigationBar from "./../components/Header/GlobalNavigationBar";
import Index from "./../components/Index/Index";
const IndexPage: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <GlobalNavigationBar></GlobalNavigationBar>
      <Index></Index>
    </div>
  );
};

export default IndexPage;
