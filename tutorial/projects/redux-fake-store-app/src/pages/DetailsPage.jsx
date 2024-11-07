import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Loader from "../components/Loader";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

const DetailsPage = () => {
  const { id } = useParams();
  const details = useSelector(state => state.products.product.find(i => i.id === +id));

  if (!details) return <Loader />;

  const { image, title, description, category, price } = details;
  return (
    <div className="flex items-start min-h-[1000px] w-full">
      <img src={image} alt={title} className="w-[300px] py-4 px-6 bg-white border-2 border-dashed border-myRed rounded-[50px] m-2.5 mr-12" />
      <div className="w-full border-2 border-dashed border-gray-300 m-2.5 p-6 rounded-[50px]">
        <h3 className="text-myRed text-2xl mb-12 font-bold">{title}</h3>
        <p className="text-gray-600 w-[500px] text-lg mb-10">{description}</p>
        <p className="mb-2.5 flex items-center">
          <SiOpenproject  className="text-myRed mr-2.5"/>
          {category}
        </p>
        <div className="flex justify-between">
          <span className="flex items-center">
            <IoMdPricetag className="text-myRed mr-2.5"/>
            {price}
          </span>
          <Link to="/" className="flex items-center bg-myRed text-white py-1 px-2.5 rounded-xl">
            <FaArrowLeft className="text-white mr-2.5"/>
            <span>Back to shope</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
