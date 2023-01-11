import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function BudgetEdit() {
  const navigate = useNavigate();
  let { index } = useParams();

  const [edit, setEdit] = useState({
    item_name: "",
    amount: "",
    date: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/budget/${index}`)
      .then((res) => {
        setEdit(res.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const updateBudget = () => {
    axios
      .put(`${API}/budget/${index}`, edit)
      .then((response) => {
        setEdit(response.data);
        navigate(`/budget/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setEdit({ ...edit, [event.target.id]: event.target.value });
  };

  //   const handleCheckboxChange = () => {
  //     setEdit({ ...edit, mistakesWereMadeToday: !edit.mistakesWereMadeToday });
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateBudget();
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          value={edit.item_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of item"
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          type="number"
          value={edit.amount}
          onChange={handleTextChange}
        />
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="text"
          value={edit.date}
          onChange={handleTextChange}
          placeholder="mm/dd/yyyy"
          required
        />
        <label htmlFor="to">To:</label>
        <input
          id="to"
          value={edit.to}
          type="text"
          onChange={handleTextChange}
          placeholder="Payment made to ?"
          required
        />
        <label htmlFor="category">Category</label>
        <input
          id="category"
          value={edit.category}
          type="text"
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
      <Link to={`/budget`}>
        <button>Back</button>
      </Link>
      {/* <button 
          onClick={handleDelete}>Delete </button> */}
    </div>
  );
}

export default BudgetEdit;
