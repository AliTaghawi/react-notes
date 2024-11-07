import { checkout as isCheckout } from '../features/card/cardSlice';
import { TbChecklist } from 'react-icons/tb'
import { FaHashtag } from 'react-icons/fa6'
import { BsPatchCheck} from 'react-icons/bs'

const SaidBar = ({state, clickHandler}) => {
  const {total, itemsCounter, checkout} = state
  return (
    <div className='w-[300px] mr-8 border-2 border-myRed border-dashed p-5 rounded-3xl'>
      <div className='flex items-center mb-4 text-myRed'>
        <TbChecklist  className='text-xl mr-1'/>
        <p>Total:</p>
        <span className='ml-2.5 text-zinc-700'>{total}</span>
      </div>
      <div className='flex items-center mb-4 text-myRed'>
        <FaHashtag  className='text-xl mr-1'/>
        <p>Quantity:</p>
        <span className='ml-2.5 text-zinc-700'>{itemsCounter}</span>
      </div>
      <div className='flex items-center mb-4 text-myRed'>
        <BsPatchCheck  className='text-xl mr-1'/>
        <p>Quantity:</p>
        <span className='ml-2.5 text-zinc-700'>{!checkout && "Pending..."}</span>
      </div>
      <button className='w-full mt-10 bg-myRed text-white text-lg p-1 cursor-pointer rounded-lg' onClick={() => clickHandler(isCheckout, state)}>Checkout</button>
    </div>
  );
};

export default SaidBar;