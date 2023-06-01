/* eslint-disable react-hooks/exhaustive-deps */
import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import MyPlacePage from "./pages/MyPlacePage";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import MyPagePage from "./pages/MyPagePage";
import { useIsRN } from "./State/isNative";
import RNNavigateBar from "./components/Header/RNNavigateBar";

const App: React.FunctionComponent = () => {
  const SignInPage = lazy(() => import("./pages/SignInPage"));
  const SignUpPage = lazy(() => import("./pages/SignUpPage"));
  const FindLocationPage = lazy(() => import("./pages/FindLocationPage"));
  const HotPlacePage = lazy(() => import("./pages/HotPlacePage"));
  const { isNative, setIsNative } = useIsRN();

  useEffect(() => {
    setIsNative(window.isRNView);
  }, []);

  return (
    <div
      className="w-full min-h-screen font-pretendard text-[16px] whitespace-pre-line scrollbar-hide"
      style={{
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <Suspense>
        <Routes>
          <Route
            path="/"
            element={
              isNative ? <Navigate to={"/signin"} replace /> : <IndexPage />
            }
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/mypage" element={<MyPagePage />} />
          <Route path="/myplace" element={<MyPlacePage />} />
          <Route path="/findvibe" element={<FindLocationPage />} />
          <Route path="/hotplace" element={<HotPlacePage />} />
          <Route element={<ProtectedRoute />}></Route>
        </Routes>
      </Suspense>
      <div className="h-[80px] w-full bg-white"></div>
      <RNNavigateBar />
    </div>
  );
};

export default App;
