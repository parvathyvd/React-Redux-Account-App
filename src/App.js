import "./App.css";
import { useSelector } from "react-redux";
import { deposit, withdraw } from "./redux/actions";
import { useDispatch } from "react-redux";

function App() {
  const state = useSelector((state) => state.account);
  const dispatch = useDispatch();
  console.log("state is", state);
  return (
    <div className="App">
      <h1 className="ui header"></h1>
      <h2>Deposit/ Withdraw</h2>
      <h1 className="ui header"></h1>
      <button
        className="ui positive basic button"
        onClick={() => dispatch(deposit(1000))}
      >
        Deposit
      </button>
      <button
        className="ui negative basic button"
        onClick={() => dispatch(withdraw(1000))}
      >
        withdraw
      </button>
      <h3>Account Balance is: {state}</h3>
    </div>
  );
}

export default App;
