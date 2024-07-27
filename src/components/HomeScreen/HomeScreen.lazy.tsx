import React, { lazy, Suspense } from 'react';

const LazyHomeScreen = lazy(() => import('./HomeScreen'));

const HomeScreen = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyHomeScreen {...props} />
  </Suspense>
);

export default HomeScreen;
