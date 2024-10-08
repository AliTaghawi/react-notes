import React, { useEffect, useState } from "react";
import { searchURL } from "../../services/cryptoAPIs";
import { RotatingLines } from "react-loader-spinner";
import styles from './Search.module.css'

const Search = ({ currency, setCurrency }) => {
  const [text, setText] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    if (!text) {
      setIsLoading(false)
      setSearchList([])
      return
    };
    const controller = new AbortController();

    const search = async () => {
      try {
        const res = await fetch(searchURL(text), { signal: controller.signal });
        const json = await res.json();
        if (json.coins) {
          setSearchList(json.coins)
          setIsLoading(false)
        } else {
          console.log(json)
        }
      } catch (error) {
        if (error.name !== "AbortError") console.log(error)
      }
      // console.log(searchList);
    };
    setIsLoading(true)
    search();

    return () => controller.abort();
  }, [text]);

  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
      {!!searchList.length && <div className={styles.searchResult}>
        {isLoading ? <RotatingLines width="50px" strokeColor="#3874ff" strokeWidth="2" /> : <ul>
          {searchList.map(coin => <li key={coin.id}>
            <img src={coin.thumb} alt={coin.name} />
            <p>{coin.name}</p>
          </li>)}
        </ul>}
      </div>}
    </div>
  );
};

export default Search;
