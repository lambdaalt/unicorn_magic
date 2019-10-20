import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loginHandler } from "../../../util/axiosWithAuth";
import axios from "axios";
import { Route, Switch } from "react-router-dom";
import "./forms.scss";
import Zip from './Zip'
const RegisterForm = props => {
  const [userRoles, setUserRoles] = useState();
  const [activeRole, setActiveRole] = useState();
  const [newUser, setNewUser] = useState({});
  console.log("newuser: ", newUser);
  console.log("ActiveRole: ", activeRole);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/roles/roles")
  //     .then(res => {
  //       setUserRoles(res.data);
  //     })
  //     .catch(err => alert(err));
  // }, []);

  const change = e => {
    e.preventDefault();
    const role = e.target.value;
    role &&
      // && setNewUser({...newUser,role:role})
      // && setActiveRole(role)
      props.history.push(`/register/${role}`);
  };

  return (
    <div className="register-form">
      <Zip/>
      <h1>Register as:</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        {activeRole && <p>{`${activeRole.toUpperCase()} Role Selected`}</p>}

        <Switch>
          <Route
            exact
            path="/register"
            render={() => (
              <RoleSelector change={change} userRoles={userRoles} />
            )}
          />
          <Route exact path="/register/provider" render={Provider} />
          <Route exact path="/register/sponsor" component={Sponsor} />
          <Route exact path="/register/company" component={Company} />
          <Route exact path="/register/consumer" component={Consumer} />
        </Switch>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginHandler }
)(RegisterForm);

export const RoleSelector = props => {
  const { userRoles, change } = props;
  return (
    <div className="role-container">
      {userRoles &&
        userRoles.map((role, i) => {
          return (
            <div className="role-selector-radio" key={i}>
              <button name="selected-roll" value={role} onClick={change}>
                {role}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export const Provider = () => {
  return (
    <>
      <p>Hello from Provider</p>

      <SharedFeilds />
      <input type="text" name="industry" />
    </>
  );
};

export const Consumer = () => {
  return (
    <>
      <SharedFeilds />
    </>
  );
};

export const Company = () => {

  return (
    <>
      <SharedFeilds />
      <input type="text" name="company" placeholder="Company" />
      <input type="text" placeholder="Industry" />
      <input type="text" placeholder="Primary Address" /> 
      <input type="number" placeholder="Employee Count" />
    </>
// First Name,	R/S, TEXT --
// Last Name	  R/S  TEXT --
// Company	    R    TEXT --
// Industry	    O    TEXT --
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG
  );
};

export const Sponsor = () => {
  return (
    <>
      <SharedFeilds />
    </>
  );
};

export const SharedFeilds = () => {
  return (
    <>
      <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="email" placeholder="Email" />
    </>
  );
};

//******************************************** */
// PROVIDER:

// First Name,	R/S, TEXT --
// Last Name	  R/S  TEXT --
// Company	    R    TEXT --
// Industry	    O    TEXT --
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG
//******************************************** */
// CONSUMER

// First Name,	R/S, TEXT
// Last Name	  R/S  TEXT
// Company	    R    TEXT
// Industry	    O    TEXT
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG

//******************************************** */

// COMPANIES:

// First Name,	R/S, TEXT --
// Last Name	  R/S  TEXT --
// Company	    R    TEXT --
// Industry	    O    TEXT --
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG

//******************************************** */
// SPONSOR:

// First Name,	R/S, TEXT
// Last Name	  R/S  TEXT
// Company	    R    TEXT
// Industry	    O    TEXT
// Email	      R/S
// Employees	  R    NUMB
// Direct phone	R    NUMB
// Mobile phone	O    NUMB

// Website	    O    URL-
// Address      R

// Descrip      O    LONG
