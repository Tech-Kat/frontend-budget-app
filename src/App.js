import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./Components/Nav";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Index from "./Pages/Index";
import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/Four0Four";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const API = process.env.REACT_APP_API_URL
function App() {

//   const [budget, setBudget] = useState([]);


//   useEffect(() => {
//     axios
//     .get(`${API}/budget`)
//     .then((res) => setBudget(res.data))
//     .catch((e) => console.error("catch", e));
//   }, []);
  

// console.log(budget)

  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budget" element={<Index />} />
            <Route path="/budget/new" element={<New />} />
            <Route path="/budget/:index" element={<Show />} />
            <Route path="/budget/:index/edit" element={<Edit />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
