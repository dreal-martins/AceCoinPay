import "./App.css";
import CardDetails from "./components/Card_Details/CardDetails";
import CardInput from "./components/Card_Input/CardInput";
import Button from "./components/CustomButton/Button";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app_container">
      <div className="container">
        <div className="card_input">
          <Header />
          <CardInput />
          <Button />
        </div>
        <div className="card_details">
          <CardDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
