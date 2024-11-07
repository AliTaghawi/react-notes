import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// redux-actions
import {
  addItem,
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/card/cardSlice";

//helpers
import { findQuantity, shortenTitle } from "../helpers/helpers";

// icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

const Card = ({ data }) => {
  const state = useSelector((state) => state.card);
  const dispatch = useDispatch();

  const { id, image, title, price } = data;

  const quantity = findQuantity(state, id);

  const clickHandler = (type) => {
    dispatch(type(data));
  };

  return (
    <div className="m-3 flex w-[270px] flex-col items-start justify-end rounded-[20px] border-2 border-dashed border-gray-300 bg-white p-5 font-medium">
      <img
        src={image}
        alt={title}
        className="mb-5 h-[230px] w-[230px] bg-white p-5"
      />
      <h3 className="text-lg font-bold text-myRed">{shortenTitle(title)}</h3>
      <p className="mb-7 mt-2 text-sm font-semibold text-zinc-500">{price}</p>
      <div className="flex w-full items-center justify-between">
        <Link
          className="h-6 cursor-pointer text-2xl text-myRed"
          to={`/products/${id}`}
        >
          <TbListDetails />
        </Link>
        <div className="flex items-center">
          {quantity === 1 && (
            <button
              onClick={() => clickHandler(removeItem)}
              className="h-8 w-8 cursor-pointer rounded-lg bg-myRed p-0.5 text-[1.7rem]/5 text-white"
            >
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button
              onClick={() => clickHandler(decreaseItem)}
              className="h-8 w-8 cursor-pointer rounded-lg bg-myRed p-0.5 text-[1.7rem]/5 text-white"
            >
              -
            </button>
          )}
          {!!quantity && (
            <span className="mx-2.5 w-5 text-center">{quantity}</span>
          )}
          {quantity === 0 ? (
            <button
              onClick={() => clickHandler(addItem)}
              className="h-8 w-8 cursor-pointer rounded-lg bg-myRed p-0.5 text-[1.7rem]/5 text-white"
            >
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button
              onClick={() => clickHandler(increaseItem)}
              className="h-8 w-8 cursor-pointer rounded-lg bg-myRed p-0.5 text-[1.7rem]/5 text-white"
            >
              +
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
