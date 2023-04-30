import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';



function App() {

  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country/:name' element={<Details />} />
          <Route path={'*'} element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
