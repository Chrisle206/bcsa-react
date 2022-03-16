import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css"
//Pages
import Start from "./pages/Start";
import Tavern from "./pages/Tavern";
import Character from "./pages/Character";
import Creation from "./pages/Creation";
import Dead from "./pages/Dead";
import Loading from "./pages/Loading";
import Battle from "./pages/Battle";
import BattleB from "./pages/BattleB";
import BattleF from "./pages/BattleF";
import BattleJ from "./pages/BattleJ";
import BattleJ2 from "./pages/BattleJ2"
import Introduction from "./pages/Introduction";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Story1 from "./pages/Story1";
import Story2 from "./pages/Story2";
import Story3 from "./pages/Story3";
import Story4 from "./pages/Story4";
import Story5 from "./pages/Story5";

function App() {

  return (
    <>
      <Router>
        {/* <Link className="link" to="/">Start</Link>
        <Link className="link" to="/Signup">Signup</Link>
        <Link className="link" to="/Login">Login</Link>
        <Link className="link" to="/Tavern">Tavern page</Link>
        <Link className="link" to="/Character">Character page</Link>
        <Link className="link" to="/Creation">Creation page</Link>
        <Link className="link" to="/Dead">Dead page</Link>
        <Link className="link" to="/Introduction">Introduction page</Link>
        <Link className="link" to="/Loading">Loading page</Link>
        <Link className="link" to="/Battle">Battle page</Link> */}
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Tavern" element={<Tavern />} />
          <Route path="/Character" element={<Character />} />
          <Route path="/Creation" element={<Creation />} />
          <Route path="/Dead" element={<Dead />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Battle" element={<Battle />} />
          <Route path="/BattleB" element={<BattleB />} />
          <Route path="/BattleF" element={<BattleF />} />
          <Route path="/BattleJ" element={<BattleJ />} />
          <Route path="/BattleJ2" element={<BattleJ2 />} />
          <Route path="/Story1" element={<Story1 />} />
          <Route path="/Story2" element={<Story2 />} />
          <Route path="/Story3" element={<Story3 />} />
          <Route path="/Story4" element={<Story4 />} />
          <Route path="/Story5" element={<Story5 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
