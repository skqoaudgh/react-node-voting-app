import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions/auth';

const NavBar = ({ auth, logout }) => (
  <div>
    <ul>
      <li>
        <Link to="/">홈</Link>
      </li>
      <li>
        <Link to="/register">회원가입</Link>
      </li>
      <li>
        <Link to="/login">로그인</Link>
      </li>
      <li>
        <button onClick={logout}>Logout</button>
      </li>
    </ul>
    {auth.isAuthenticated && <p>Logged in as a {auth.user.username}</p>}
  </div>
);

export default connect((store) => ({ auth: store.auth }), { logout })(NavBar);
