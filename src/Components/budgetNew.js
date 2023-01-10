import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

const BudgetNew = () => {
  const navigate = useNavigate();

  const [newbud, setNewBud] = useState({
    item_name: "",
    amount: "",
    date: "",
    category: "",
  });

  const handleTextChange = (event) => {
    setNewBud({ ...newbud, [event.target.id]: event.target.value });
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/budget`, newbud)
      .then((response) => {
        setNewBud(response.data);
        navigate(`/budget`);
      })
      .catch((c) => console.warn("catch", c));
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={newbud.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of item"
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={newbud.amount}
          onChange={handleTextChange}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="text"
          value={newbud.date}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          value={newbud.category}
          type="text"
          onChange={handleTextChange}
        />

    <br />
        <input type="submit" />
      </form>
      <Link to={`/budget`}>
        <button>Back</button>
      </Link>
    </div>
  );
};
export default BudgetNew;
