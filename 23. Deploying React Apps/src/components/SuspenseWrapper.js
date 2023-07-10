import { Suspense } from "react";

const SuspenseWrapper = ({ componentToSuspense, fallback }) => {
  const fallbackToRender = fallback || <p>Loading. . .</p>;
  const Child = componentToSuspense

  return (
    <Suspense fallback={fallbackToRender}>
      <Child />
    </Suspense>
  );
};

export default SuspenseWrapper;
