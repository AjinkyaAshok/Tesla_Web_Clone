import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { Scrollbars } from "react-custom-scrollbars";

function App() {
  return (
    <div className="App">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ width: 1536, height: 720 }}
      >
        <Header />
        <Home />
      </Scrollbars>
    </div>
  );
}

export default App;
