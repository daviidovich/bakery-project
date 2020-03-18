import React from "react";
import "../style/authorization.css";

function Authorization() {
  return (
    <div className="wrapper">
      <div className="autho" id="autho">
        <h1>SIGN IN</h1>
        <form className="autho-form" method="POST" action="/">
          <label>LOGIN</label>
          <br />
          <input type="text" name="login" />
          <br />
          <br />
          <label>PASSWORD</label>
          <br />
          <input type="password" name="password" />
          <br />
          <br />
          <input type="submit" value="Log in" />
        </form>
      </div>
    </div>
  );
}

export default Authorization;
