import React from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;
const BudgetDetails = () => {
  const [details, setDetails] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/budget/${index}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/budget/${index}`)
      .then(() => {
        navigate(`/budget`);
      })
      .catch((e) => console.error(e));
  };
  return (
    <article>
      <div className="display-show">
        <h1> Item Name: {details.item_name}</h1>
        <h1> Amount: ${details.amount}</h1>
        <h1>Date: {details.date}</h1>
        <h1>To: {details.to}</h1>
        <h1>Category: {details.category}</h1>
      </div>

      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/budget`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/budget/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button id="delete" onClick={handleDelete}>
            Delete{" "}
          </button>
        </div>
      </div>
    </article>
  );
};

export default BudgetDetails;
