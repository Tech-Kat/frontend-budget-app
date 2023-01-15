import React from "react";
import { Link } from "react-router-dom";

const Budget = ({ budget, index }) => {
  return (
    <tr className="Log">
      <td>{budget.date}</td>
      <td>
        <Link to={`/budget/${index}`} target="_blank" rel="noreferrer">
          {budget.to}
        </Link>
      </td>
      <td style={{ color: budget.amount < 0 ? "red" : "green" }}>
        {budget.amount}
      </td>
      <td>{budget.category}</td>
    </tr>
  );
};

export default Budget;
