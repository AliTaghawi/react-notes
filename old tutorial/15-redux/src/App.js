import { Provider } from 'react-redux'
import store from "./redux/store";

//components
//one reducer components
// import CounterClassicRedux from "./components/simple counter/CounterClassicRedux";
// import CounterHookRedux from './components/simple counter/CounterHookRedux';

//multiple reducer components
import Counter from './components/multiple reducer/counter/Counter';
import Number from './components/multiple reducer/number/Number';


function App() {
  return (
    <Provider store={store}>
      {/* <CounterClassicRedux/>
      <CounterHookRedux /> */}
      <Counter />
      <Number />
    </Provider>
  );
}

export default App;
