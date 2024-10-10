import { useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const params = useParams()
  const navigate = useNavigate();

  const clickHandler = () => {
    // navigate(1) // next page
    // navigate(-1) // prev page
    navigate("/", {replace: true}) // replace is optional
  }

  return (
    <div>
      <h1>This is product# {params.id}</h1>
      <button onClick={clickHandler}>Go Home</button>
    </div>
  );
};

export default Product;