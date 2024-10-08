import axios from "axios";

const fetchProductsData = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHPRODUCTSDATAREQUEST" });
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch({
          type: "FETCHPRODUCTSDATASECCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCHPRODUCTSDATAERROR",
          payload: error.massege,
        });
      });
  };
};

export default fetchProductsData;
