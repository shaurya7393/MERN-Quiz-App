
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Root from "./components/Root";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import './index.css';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn";
import LeaderBoard from "./components/LeaderBoard";


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}/>
        <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          
          <Route path="/result" element={<Result />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
