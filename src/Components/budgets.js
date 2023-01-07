import Budget from "./Budget";
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

console.log(API);

function Budgets() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/budget`)
      .then((response) => setBudgets(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  console.log(budgets)

  return (
    <div className="budgets">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {budgets.map((budget, index) => {
            //   console.log(budget)
              return <Budget key={index} budget={budget} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Budgets;