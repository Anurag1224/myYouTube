import "./App.css";
import {Provider} from "react-redux"
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element: <MainContainer/>
      },
      {
        path:"watch",
        element: <WatchPage/>
      }
    ]
  }
]);


const App = () => {
  return (
    
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router = {appRouter}/>
      </div>
    </Provider>
    
  );
}

export default App;
