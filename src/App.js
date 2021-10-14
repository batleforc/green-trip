import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Component/Home";
import Leaderboard from "./Component/Leaderboad";
import Param from "./Component/Param";
import Nav from "./Component/Nav";
import Logo from "./Component/main/Logo";
import Reward from "./Component/Reward";

function App() {
  return (
    <div className="App bg-gray-200 w-screen h-screen">
      <Route exact path="/" component={Home} />
      <Route exact path="/leaderboard" component={Leaderboard} />
      <Route exact path="/param" component={Param} />
      <Route exact path="/reward" component={Reward} />
      <Nav />
      <Logo />
    </div>
  );
}

export default App;
