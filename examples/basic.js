import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider, Authorize } from "../src/authorizator";

import "./styles.css";

class SomePage extends React.Component {
  render() {
    return (
      <Authorize neededRoles={SomePage.neededRoles}>
        {({ isAuthorized, missingRoles, lacksRole }) => {
          if (isAuthorized) return "Welcome my friend";
          else if (lacksRole("user")) return "man you're not even an user";
          else if (lacksRole("admin")) return "you should be an admin at least";
        }}
      </Authorize>
    );
  }
}
SomePage.neededRoles = ["user", "admin"];

function App() {
  return (
    <AuthProvider roles={["user", "admin"]}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <SomePage />
    </AuthProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
