import React from "react";
import { Navigate } from "react-router-dom";


class LoginForm extends React.Component {
    state = { user: null, error: null };
  
    async handleSubmit(event) {
      event.preventDefault();
      try {
        const user = await login(event.target);
        this.setState({ user });
      } catch (error) {
        this.setState({ error });
      }
    }
  
    render() {
      const { user, error } = this.state;
      return (
        <div>
          {error && <p>{error.message}</p>}
          {user && (
            <Navigate to="/" replace={true} />
          )}
          <form
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <input type="text" name="username" />
            <input type="password" name="password" />
          </form>
        </div>
      );
    }
  }

//   var email = document.getElementById('email').value;
// var username = document.getElementById('username').value;
// var pass = document.getElementById('password').value;

// var user = {
//     email: email,
//     username: username,
//     pass: pass,
// };

// var json = JSON.stringify(user);
// localStorage.setItem("user", json);

// // Codigo para iniciar sesión

// var username = document.getElementById('username').value;
// var pass = document.getElementById('password').value;
// var result =  document.getElementById('result');

// var user = localStorage.getItem("user");
// var data = JSON.parse(user);
// console.log(data);