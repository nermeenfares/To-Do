import React, { lazy, Suspense } from 'react';

const LazyTodoList = lazy(() => import('./TodoList'));

const TodoList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTodoList {...props} />
  </Suspense>
);

export default TodoList;
