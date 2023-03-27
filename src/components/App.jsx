import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header, Loader } from '.';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
