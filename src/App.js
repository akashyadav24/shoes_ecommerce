import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route } from "react-router-dom";
import Productdescscreen from "./screens/Productdescscreen";
import Cartscreen from "./screens/Cartscreen";
import Checkoutscreen from "./screens/Checkoutscreen";
import Finalinvoivescreen from "./screens/Finalinvoivescreen";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route path="/" component={Homescreen} exact />
        <Route path="/product/:id" component={Productdescscreen} />
        <Route path="/cart" exact>
          <Cartscreen />
        </Route>
        <Route path="/cart/checkout" component={Checkoutscreen} exact />
        <Route path="/cart/checkout/summary" component={Finalinvoivescreen} />
      </BrowserRouter>
    </div>
  );
}

export default App;
