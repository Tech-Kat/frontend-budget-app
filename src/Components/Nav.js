import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
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
          
      
    </nav>
  )
}

export default Nav
