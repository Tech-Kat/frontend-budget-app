import Budget from "./Budget.js";
import axios from "axios";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

console.log(API);

function Budgets() {
  const [budgets, setBudgets] = useState([]);
  const [sorts, setSorts] = useState(false);

  useEffect(() => {
    axios
      .get(`${API}/budget`)
      .then((response) => setBudgets(response.data))
      .catch((e) => console.error("catch", e));
  }, []);

  console.log(budgets);

  return (
    <div className="budgets">
      <section>
        <table>
          <thead>
            <tr>
              <th style={{ textDecoration: "underline" }}>
                <strong>Date</strong>
              </th>
              <th style={{ textDecoration: "underline" }}>
                <strong>To</strong>
              </th>
              <th style={{ textDecoration: "underline" }}>
                <strong>Amount</strong>
              </th>
              <th
                style={{ textDecoration: "underline" }}
                onClick={() => setSorts(!sorts)}
              >
                <strong>Category</strong>
              </th>
            </tr>
          </thead>
          <tbody>
            {sorts
              ? budgets
                  .sort((a, b) => (a.category > b.category ? 1 : -1))
                  .map((budget, index) => {
                    return <Budget key={index} budget={budget} index={index} />;
                  })
              : budgets.map((budget, index) => {
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
