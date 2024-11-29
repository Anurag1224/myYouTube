import "./App.css";
import {Provider} from "react-redux"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./"


function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
