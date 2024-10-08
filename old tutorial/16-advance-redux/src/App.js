import Users from "./components/Users";
import { Provider } from 'react-redux';
import stor from "./redux/store";

function App() {
  return (
    <Provider store={stor}>
      <Users />
    </Provider>
  );
}

export default App;
