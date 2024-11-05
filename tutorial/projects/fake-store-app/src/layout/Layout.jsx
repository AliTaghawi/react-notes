import { Link } from "react-router-dom";
import { useCard } from "../contexts/CardContext";
import { PiShoppingCartSimpleBold } from "react-icons/pi";

const Layout = ({ children }) => {
  const [state] = useCard();

  return (
    <>
      <header className="mb-[60px] flex items-center justify-between rounded-xl bg-myRed px-5 py-2.5 text-white">
        <Link to="/" className="pb-1 text-2xl font-semibold">
          Shope Store
        </Link>
        <Link to="/checkout" className="text-2xl font-semibold">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-white p-0.5 text-center text-[1.6rem] text-myRed">
            <PiShoppingCartSimpleBold />
            {!!state.itemsCounter && (
              <span className="absolute -right-2.5 -top-2.5 h-5 w-5 rounded-full bg-black text-sm leading-5 text-white">
                {state.itemsCounter}
              </span>
            )}
          </div>
        </Link>
      </header>
      {children}
      <footer className="mb-2.5 mt-20 rounded-lg bg-myRed p-5 text-center font-medium text-white">
        Develop by Ali Taghawi
      </footer>
    </>
  );
};

export default Layout;
