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
import LevelUp from "./pages/LevelUp";
import Introduction from "./pages/Introduction";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  //Login/Signup stuff, must be at top level
  const [token, setToken] = useState("")
  const [userData, setUserData] = useState({
    username:"",
    id:0,
    characters: []
  });

  return (
    <>
      <Router>
        <Link className="link" to="/">Start</Link>
        <Link className="link" to="/Signup">Signup</Link>
        <Link className="link" to="/Login">Login</Link>
        <Link className="link" to="/Tavern">Tavern page</Link>
        <Link className="link" to="/Character">Character page</Link>
        <Link className="link" to="/Creation">Creation page</Link>
        <Link className="link" to="/Dead">Dead page</Link>
        <Link className="link" to="/Introduction">Introduction page</Link>
        <Link className="link" to="/LevelUp">LevelUp page</Link>
        <Link className="link" to="/Loading">Loading page</Link>
        <Link className="link" to="/Battle">Battle page</Link>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/Signup" element={<Signup token={token} setToken={setToken} userData={userData} setUserData={setUserData} />} />
          <Route path="/Login" element={<Login token={token} setToken={setToken} userData={userData} setUserData={setUserData} />} />
          <Route path="/Tavern" element={<Tavern />} />
          <Route path="/Character" element={<Character />} />
          <Route path="/Creation" element={<Creation />} />
          <Route path="/Dead" element={<Dead />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/LevelUp" element={<LevelUp />} />
          <Route path="/Loading" element={<Loading />} />
          <Route path="/Battle" element={<Battle />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
