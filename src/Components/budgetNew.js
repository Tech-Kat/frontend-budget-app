import React from 'react'

const BudgetNew = () => {

  const navigate = useNavigate();
  const [log, setlog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
    mistakesWereMadeToday: false,
  });

  const handleTextChange = (event) => {
    setlog({ ...log, [event.target.id]: event.target.value });
  };

//   const handleCheckboxChange = () => {
//     setlog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
//   };

  const addlog = () => {
    axios
      .post(`${API}/budget`, log)
      .then(() => {
        navigate(`/budget`);
      })
      .catch((e) => console.error("catch", e));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addlog();
  };

  return (
    <div>
      
    </div>
  )
}

export default BudgetNew
