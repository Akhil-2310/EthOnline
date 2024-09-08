import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">GroChi</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/create">Create Groups</Link>
            </li>
            <li>
              <Link to="/all-groups">All Groups</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar
