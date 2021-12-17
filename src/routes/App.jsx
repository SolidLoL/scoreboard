import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import useInitialState from "@hooks/useInitialState";
import { Layout } from "@components/Layout";
import { Home } from "@containers/Home.jsx";
import { NotFound } from "@containers/NotFound.jsx";
import { AppContext } from "../context/AppContext";
import { Loading } from "@components/Loading";
import "@styles/global.scss";
// import ErrorBoundary from "./ErrorBoundary";

const AsyncAnimeContainer = React.lazy(() => import("@containers/Anime.jsx"));

const App = () => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState).length;
  return (
    <>
      {isEmpty > 0 ? (
        <Suspense fallback={<div>Loading</div>}>
          <AppContext.Provider value={initialState}>
            <BrowserRouter>
              <Layout>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="anime/:id" element={<AsyncAnimeContainer />}/>
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Outlet />
              </Layout>
            </BrowserRouter>
          </AppContext.Provider>
        </Suspense>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default App;
