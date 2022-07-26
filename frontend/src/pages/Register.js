// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// function Register() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert("Form");
//   };
//   const handleChange = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <>
//       <form>
//         <form onSubmit={handleSubmit}>
//           <div className="brand">
//             <h1>Wooooo</h1>
//           </div>
//           <input
//             type="text"
//             placeholder="Username"
//             name="username"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             name="Email"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             onChange={(e) => handleChange(e)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             onChange={(e) => handleChange(e)}
//           />
//           <button type="submit">Create User</button>
//           <span>
//             Already Have An Account ?
//             <Link to="/login">
//               <span>Login</span>
//             </Link>
//           </span>
//         </form>
//       </form>
//     </>
//   );
// }

// export default Register;

import React, { Component } from "react";
export default function Register() {
  return (
      <form style={{ width: 300, margin:50}}>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
  );
}
