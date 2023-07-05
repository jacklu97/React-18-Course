import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routeDefinitions)

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      // This path uses Absolute approach
      // { path: "/", element: <Home /> },
      // These paths use relate approach
      { path: "", element: <Home /> },
      { path: "products", element: <Products /> },
      { path: "products/:productId", element: <ProductDetail /> },
    ],
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
