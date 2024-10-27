import { Link } from "react-router-dom";

//helpers
import { shortenTitle } from "../helpers/helpers";

// icons
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";

const Card = ({ data }) => {
  const { id, image, title, price } = data;
  return (
    <div className="m-3 flex w-[270px] flex-col items-start justify-end rounded-[20px] border-2 border-dashed border-gray-300 bg-white p-5 font-medium">
      <img
        src={image}
        alt={title}
        className="mb-5 h-[230px] w-[230px] bg-white p-5"
      />
      <h3 className="text-myRed text-lg font-bold">{shortenTitle(title)}</h3>
      <p className="mb-7 mt-2 text-sm font-semibold text-zinc-500">{price}</p>
      <div className="flex w-full items-center justify-between">
        <Link
          className="text-myRed h-6 cursor-pointer text-2xl"
          to={`/products/${id}`}
        >
          <TbListDetails />
        </Link>
        <button className="bg-myRed h-8 w-8 cursor-pointer rounded-lg p-0.5 text-[1.7rem] leading-8 text-white">
          <TbShoppingBagCheck />
        </button>
      </div>
    </div>
  );
};

export default Card;
