import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom';
// import NotFound from '../containers/NotFound';
import useInitialState from '@hooks/useInitialState';
import {Layout} from '@components/Layout';
import {Home} from '@containers/Home.jsx';
import {AppContext} from '../context/AppContext';
import '@styles/global.scss';

const App = () => {
    const initialState = useInitialState();
    const isEmpty = Object.keys(initialState).length;
    return (
      <>
        {isEmpty > 0 ? (
          <AppContext.Provider value={initialState}>
          <BrowserRouter>
            <Layout>
              <Routes >
                <Route exact path="/" element={<Home />} />
                {/* <Route component={NotFound} /> */}
              </Routes >
            </Layout>
          </BrowserRouter>
          </AppContext.Provider>
          )
          : <h1>Cargando...</h1>}
      </>
    );
  }
  
  export default App;
