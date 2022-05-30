import React from "react";

const Header = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
          <div id="pageTitle" className="logo">
            <span className="navbar-brand">Dungeon Diver</span>
          </div>
          <div id="loginWrap" className="level">
            <div id="loginDiv" className="login">
              <form name="loginForm" id="loginForm">
                <label htmlFor="userName" className="form-label">User ID</label>
                <input
                  type="text"
                  name="userId"
                  id="userId"
                  autoComplete="username"
                />
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                />
                <input type="submit" id="loginButton" className="login-btn btn-secondary" value="login" />
                <button id="createUser" className="btn-secondary">Create Account</button>
              </form>
            </div>
            <div id="loginMessage"></div>
          </div>
          <button id="logoutBtn">Logout</button>
        </div>
    );
}

export default Header;