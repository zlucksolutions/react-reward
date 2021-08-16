import Result from './component/acordian';
import getData from "./action/action";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const data = getData();
  return (
    <div className="App">
      <header className="App-header">
        REWARD PROGRAM
      </header>
      <Result data={data} />
    </div>
  );
}

export default App;
