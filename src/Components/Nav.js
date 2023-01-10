import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

const Nav = () => {
  const [total, setTotal] = useState([]);

  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/budget`)
      .then((response) => {setBudgets(response.data);

      setTotal(response.data
        .map(({amount}) => Number(amount))
      .reduce((a,b) => a+b))
      })
      .catch((e) => console.error("catch", e));
  }, [budgets]);

  return (
    <nav>
      <h1>
        <Link to="/">Budget App</Link>
      </h1>
      <h1>
        <Link to="/budget">Transactions</Link>
      </h1>
      <button>
        <Link to="/budget/new">Create New Budget</Link>
      </button>
      <br/>
      <span>
       <h2 className="total">A Total Of ${total.toLocaleString()} is Currently Available</h2> 
      </span>
    </nav>
  );
};

export default Nav;
