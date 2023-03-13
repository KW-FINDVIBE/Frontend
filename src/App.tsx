import React from "react";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import SigninPage from "./pages/SigninPage";
import FindLocationPage from "./pages/FindLocationPage";

const App: React.FunctionComponent = () => {
  return (
    <div className="w-full min-h-screen font-pretendard text-[16px] whitespace-pre-line scrollbar-hide">
      <Routes>
        <Route path="/" element={<IndexPage />}></Route>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/findvibe" element={<FindLocationPage />} />
      </Routes>
    </div>
  );
};

export default App;
