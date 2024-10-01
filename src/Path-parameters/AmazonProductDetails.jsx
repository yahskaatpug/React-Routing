import { useParams } from "react-router-dom";

const AmazonProductDetails = () => {
  const params = useParams();
  console.log("Params: ", params);
  return (
    <div>
      <h1>Welcome to Amazon Product Details</h1>
      <h2>Product ID: {params.productId}</h2>
      <h3>Product ID: {params.slug}</h3>
    </div>
  );
};

export default AmazonProductDetails;