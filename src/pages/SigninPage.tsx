import Signin from "../components/Signin/Signin";
import GlobalNavigationBar from "./../components/Header/GlobalNavigationBar";
const SigninPage: React.FunctionComponent = () => {
  return (
    <>
      <GlobalNavigationBar />
      <Signin />
    </>
  );
};

export default SigninPage;
