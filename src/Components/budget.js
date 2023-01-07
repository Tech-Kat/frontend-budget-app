import React from 'react'
import { Link } from 'react-router-dom';

const Budget = ({ budget, index }) => {
    return (
      <tr className="Log">
        <td>
          {budget.amount ? (
            <span>🦾</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        </td>
  
        <td>
          <Link to={`/budget/${index}`} target="_blank" rel="noreferrer">
            {budget.item_name}
          </Link>
        </td>
        <td>
          <Link to={`/budget/${index}`}>{budget.category}</Link>
        </td>
      </tr>
    );
  }

export default Budget
