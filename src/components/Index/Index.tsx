import GridLayout from "../Layout/GridLayout";
import IndexIntro from "./IndexIntro";

const Index: React.FunctionComponent = () => {
  return (
    <main className="relative w-full top-[64px]">
      <GridLayout>
        <IndexIntro />
      </GridLayout>
    </main>
  );
};

export default Index;
