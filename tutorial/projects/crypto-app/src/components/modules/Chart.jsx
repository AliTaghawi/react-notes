import { useState } from "react";
import { convertData } from "../../helpers/convertData";

import styles from "./Chart.module.css";
import ChartGraph from "./ChartGraph";

const Chart = ({ chart: { data, coin }, setChart }) => {
  const [type, setType] = useState("prices");

  const clickHandler = (event) => {
    if (event.target.tagName === "BUTTON") {
      const value = event.target.innerText.toLowerCase().replace(" ", "_");
      setType(value);
    }
  };

  document.addEventListener(
    "keydown",
    (e) => e.key === "Escape" && setChart(null)
  );

  return (
    <div className={styles.container}>
      <span className={styles.cross} onClick={() => setChart(null)}>
        X
      </span>
      <div className={styles.chart}>
        <div className={styles.name}>
          <img src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
        </div>
        <div className={styles.graph}>
          <ChartGraph data={convertData(data, type)} type={type} />
        </div>
        <div className={styles.types} onClick={clickHandler}>
          <button className={type === "prices" ? styles.selected : null}>
            Prices
          </button>
          <button className={type === "market_caps" ? styles.selected : null}>
            Market Caps
          </button>
          <button className={type === "total_volumes" ? styles.selected : null}>
            Total Volumes
          </button>
        </div>
        <div className={styles.details}>
          <div>
            <p>Price:</p>
            <span>{coin.current_price}</span>
          </div>
          <div>
            <p>ATH:</p>
            <span>{coin.ath}</span>
          </div>
          <div>
            <p>Market Cap:</p>
            <span>{coin.market_cap}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
