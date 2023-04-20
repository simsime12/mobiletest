import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './page/Main';
import Product from './page/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>

        <Route path="/product" element={<Product />}></Route>
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
  </BrowserRouter>
  );
}

export default App;
