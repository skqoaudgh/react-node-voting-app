import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../store/actions/auth';

const NavBar = ({ auth, logout }) => (
  <div className="navbar">
    <div className="container">
      <ul className="navbar-container">
        <li>
          <Link className="navbar-brand" to="/">
            Home
          </Link>
        </li>
        {!auth.isAuthenticated && (
          <Fragment>
            <li>
              <Link className="navbar-item" to="/register">
                회원가입
              </Link>
            </li>
            <li>
              <Link className="navbar-item" to="/login">
                로그인
              </Link>
            </li>
          </Fragment>
        )}
        {auth.isAuthenticated && (
          <Fragment>
            <li>
              <Link className="navbar-item" to="/poll/new">
                새로운 투표
              </Link>
            </li>
            <li>
              <button id="buttonLink" className="navbar-item" onClick={logout}>
                로그아웃
              </button>
            </li>
          </Fragment>
        )}
      </ul>
      {auth.isAuthenticated && (
        <p className="navbar-user">{auth.user.username}님, 안녕하세요!</p>
      )}
    </div>
  </div>
);

export default connect((store) => ({ auth: store.auth }), { logout })(NavBar);
