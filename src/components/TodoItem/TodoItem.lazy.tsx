import React, { lazy, Suspense } from 'react';

const LazyTodoItem = lazy(() => import('./TodoItem'));

const TodoItem = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTodoItem {...props} />
  </Suspense>
);

export default TodoItem;
