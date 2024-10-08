import GetData from "./components/fetchingApi/GetData";
import IsShown from "./components/moutingsState/IsShown";

function App() {
  
  return (
    <div>
      <IsShown />
      <GetData />
    </div>
  );
}

export default App;
