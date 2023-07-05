import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{productId}</p>
    </>
  );
};

export default ProductDetail;
