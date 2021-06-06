import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Display from "./screens/Display";
import Footer from "./components/Footer";
import Classes from "./screens/Classes";
import Pricing from "./screens/Pricing";
import Contact from "./screens/Contact";
import JoinForm from "./screens/JoinForm";
import WellCome from "./screens/WellCome";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Display} />
        <Route exact path="/classes" component={Classes} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/offer/:id" component={JoinForm} />
        <Route exact path="/wellcome" component={WellCome} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
