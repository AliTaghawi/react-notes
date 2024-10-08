import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import { coinsListURL } from "../../services/cryptoAPIs";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";
import Chart from "../modules/Chart";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd")
  const [chart, setChart] = useState(null)

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    const fetchCoins = async () => {
      try {
        const res = await fetch(coinsListURL(page, currency), {
          signal: controller.signal,
        });
        const json = await res.json();
        setIsLoading(false);
        if (Array.isArray(json)) {
          setCoins(json)
        } else {
          console.log(json)
        }
      } catch (error) {
        if (error.name !== "AbortError") console.log(error)
      }
    };
    fetchCoins();

    return () => controller.abort();
  }, [page, currency]);

  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoins coins={coins} isLoading={isLoading} setChart={setChart} currency={currency}/>
      <Pagination page={page} setPage={setPage} />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </div>
  );
};

export default HomePage;
