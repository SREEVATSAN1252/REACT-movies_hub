import { Container } from "@mui/material";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Header from "./Components/Header";
import LabelBottomNavigation from "./Components/MainNav/MainNav";


import Movies from "./Components/pages/Movies";
import Search from "./Components/pages/Search";
import Series from "./Components/pages/Series";
import Trending from "./Components/Trending";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" exact component={Trending} />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <LabelBottomNavigation />
   
    </BrowserRouter>
  );
}

export default App;
