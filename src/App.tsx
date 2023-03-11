import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

const App: React.FunctionComponent = () => {
  return (
    <div className="w-screen min-h-screen font-pretendard sm:text-[16px]">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
