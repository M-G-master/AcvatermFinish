import Loadable from 'react-loadable';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './scss/app.scss';
import MainLayout from './components/layouts/MainLayout';

// 2-й способ
const Cart = Loadable({
  loader: () => import(/*webpackChunkName: "Cart" */ './Pages/Cart'),
  loading: () => <div>Іде завантаження кошика</div>,
});

// 1-й способ
const FullPizza = React.lazy(() => import(/*webpackChunkName: "FullPizza" */ './Pages/FullPizza'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Іде завантаження кошика</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Іде завантаження товару </div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
