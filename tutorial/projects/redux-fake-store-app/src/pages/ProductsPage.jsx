import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'


//components
import Card from "../components/Card";
import Loader from "../components/Loader";

//icons
import { ImSearch } from "react-icons/im";
import { FaListUl } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import {
  categoryFilter,
  createQueryObject,
  searchFilter,
  setInitialQuery,
} from "../helpers/helpers";

const categories = [
  { id: 1, title: "All" },
  { id: 2, title: "Electronics" },
  { id: 3, title: "jewelery" },
  { id: 4, title: "Men's Clothing" },
  { id: 5, title: "Women's Clothing" },
];

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const {product, loading} = useSelector(state => state.products)
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(product);
    setQuery(setInitialQuery(searchParams));
  }, [product]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let newProducts = searchFilter(product, query.search);
    newProducts = categoryFilter(newProducts, query.category);
    setDisplayed(newProducts);
  }, [query]);

  const clickHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  const categoryHandler = (e) => {
    const { tagName } = e.target;
    if (tagName !== "LI") return;

    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <>
      <div className="mb-12 mr-2.5">
        <input
          className="mr-2.5 w-64 rounded-lg border-2 border-dashed border-myRed p-2.5 text-sm text-myRed focus:outline-none"
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
        />
        <button
          className="cursor-pointer rounded-lg bg-myRed p-2.5 text-white"
          onClick={clickHandler}
        >
          <ImSearch />
        </button>
      </div>
      <div className="flex justify-between">
        <div className="flex w-full flex-wrap justify-between">
          {loading && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
          ))}
        </div>
        <div className="m-2.5 ml-8 h-fit w-52 rounded-2xl border-2 border-dashed border-zinc-300 bg-white p-5">
          <div className="mb-2.5 flex w-52 items-center font-medium text-myRed">
            <FaListUl />
            <p className="ml-2.5">Categories</p>
          </div>
          <ul onClick={categoryHandler}>
            {categories.map((i) => (
              <li
                key={i.id}
                className={`cursor-pointer p-[5px] hover:text-myRed ${(query.category === i.title.toLowerCase()) || (!query.category && i.title.toLowerCase() === "all") ? "rounded-lg bg-[#f7753d49] text-myRed" : "" }`}
              >
                {i.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
