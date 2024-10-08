import chartUP from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import styles from "./TableRow.module.css";
import { marketChartURL } from "../../services/cryptoAPIs";

const TableRow = ({ coin, setChart, currency }) => {
  const {
    id,
    image,
    symbol,
    name,
    current_price,
    total_volume,
    market_cap_change_percentage_24h: change_percentage,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChartURL(id, currency));
      const json = await res.json();
      setChart({data: json, coin});
    } catch (error) {
      console.log(error);
      setChart(null);
    }
  };

  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={change_percentage > 0 ? styles.success : styles.error}>
        {change_percentage.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={change_percentage > 0 ? chartUP : chartDown} alt={name} />
      </td>
    </tr>
  );
};

export default TableRow;
