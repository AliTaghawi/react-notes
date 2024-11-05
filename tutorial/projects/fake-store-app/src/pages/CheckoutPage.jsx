import BasketCard from "../components/BasketCard";
import SaidBar from "../components/Saidbar";
import { useCard } from "../contexts/CardContext";

const CheckoutPage = () => {
  const [state, dispatch] = useCard();

  const clickHandler = (type, payload) => dispatch({ type, payload });

  if (!state.itemsCounter)
    return (
      <h1 className="min-h-[450px] w-full text-center text-5xl font-extrabold text-zinc-700">
        Empty Card
      </h1>
    );

  return (
    <div className="flex justify-between items-start p-2.5 min-h-[1000px]" >
      <SaidBar state={state} clickHandler={clickHandler} />
      <div className="w-full"> 
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutPage;
