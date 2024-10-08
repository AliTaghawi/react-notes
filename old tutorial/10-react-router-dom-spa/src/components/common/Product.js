import React from "react";
import { useParams } from 'react-router-dom'

//styles
import styles from "../styles/common.module.css";

// class Product extends Component {
//   render() {
//     return (
//       <div className={styles.common}>
//         <h1>product #{this.props.match.params.id}</h1>
//       </div>
//     );
//   }
// }

const Product = () => {
  const params = useParams()
  return (
    <div className={styles.common}>
      <h1>product #{params.id}</h1>
    </div>
  );
};

export default Product;
