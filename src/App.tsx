import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";

const App: React.FunctionComponent = () => {
  return (
    <div className="w-full min-h-screen font-pretendard tablet:text-[16px] whitespace-pre-line">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
