import React, { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import useInitialState from "@hooks/useInitialState";
import { Layout } from "@components/Layout";
import { Home } from "@containers/Home.jsx";
import { NotFound } from "@containers/NotFound.jsx";
import { AppContext } from "../context/AppContext";
import "@styles/global.scss";
import ErrorBoundary from "./ErrorBoundary";

const AsyncSearchContainer = React.lazy(() =>import("@containers/Search.jsx"));

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
                    <Route
                      exact
                      path="/search"
                      element={<ErrorBoundary><AsyncSearchContainer /></ErrorBoundary>}
                    />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Layout>
              </BrowserRouter>
            </AppContext.Provider>
          </Suspense>
        
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default App