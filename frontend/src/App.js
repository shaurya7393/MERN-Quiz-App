
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Root from "./components/Root";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import './index.css';
import Sign from "./components/Sign";


function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}/>
        <Route path="/sign" element={<Sign />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
