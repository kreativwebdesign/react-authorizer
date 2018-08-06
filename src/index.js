import React from "react";
import getMissingRoles from "./utils/getMissingRoles";
import checkRoleProps from "./utils/checkRoleProps";

const { Consumer, Provider } = React.createContext("authorizator");

export class AuthProvider extends React.Component {
  checkRoleProps = checkRoleProps("Roles");
  render() {
    const roles = this.props.roles || [];
    this.checkRoleProps(roles);
    return (
      <Provider value={{ roles: this.props.roles }}>
        {this.props.children}
      </Provider>
    );
  }
}

export class Authorize extends React.Component {
  checkRoleProps = checkRoleProps("Needed roles");
  checkChildrenProps(children) {
    if (typeof children !== "function") {
      throw new Error(
        `The children passed to Authorize must be a function, got ${children}`
      );
    }
  }
  render() {
    const neededRoles = this.props.neededRoles || [];
    this.checkRoleProps(neededRoles);
    this.checkChildrenProps(this.props.children);
    return (
      <Consumer>
        {({ roles }) => {
          const missingRoles = getMissingRoles(neededRoles, roles);
          const isAuthorized = !missingRoles.length;
          const lacksRole = role => missingRoles.indexOf(role) >= 0;
          return this.props.children({ isAuthorized, missingRoles, lacksRole });
        }}
      </Consumer>
    );
  }
}
