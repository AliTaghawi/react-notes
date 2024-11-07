import { shortenTitle } from "../helpers/helpers";

import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/card/cardSlice";

import { MdDeleteOutline } from "react-icons/md";

const BasketCard = ({ data, clickHandler }) => {
  const { image, quantity, title } = data;
  return (
    <div className="mb-5 flex items-center justify-between rounded-[20px] border-2 border-dashed border-zinc-300 p-5">
      <img src={image} alt={title} className="h-14 w-14" />
      <p>{shortenTitle(title)}</p>
      <div className="flex items-center">
        {quantity === 1 && (
          <button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-myRed p-0.5 text-xl leading-7 text-white"
            onClick={() => clickHandler(removeItem, data)}
          >
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button
            className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-myRed p-0.5 text-xl leading-7 text-white"
            onClick={() => clickHandler(decreaseItem, data)}
          >
            -
          </button>
        )}
        <span className="w-5 text-center mx-0.5">{quantity}</span>
        <button
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg bg-myRed p-0.5 text-xl leading-7 text-white"
          onClick={() => clickHandler(increaseItem, data)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
