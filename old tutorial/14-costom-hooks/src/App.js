import Landing from "./components/Landing";
import Login from "./components/Login";
import { useLocalState } from './hooks/costomHooks';

function App() {
  // const [bol, setBol] = useState(false)
  const [bol, setBol] = useLocalState('isLogedIn', false)

  return (
    <div>
      <button onClick={() => setBol(!bol)}>change</button>
      {bol ? <Login /> : <Landing />}
    </div>
  );
}

export default App;
