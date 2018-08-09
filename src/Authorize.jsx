import React from 'react';
import t from 'prop-types';
import invariant from 'invariant';
import getMissingRoles from './utils/getMissingRoles';
import { Consumer } from './AuthContext';

class Authorize extends React.Component {
  render() {
    const { neededRoles, children } = this.props;
    return (
      <Consumer>
        {({ roles }) => {
          invariant(roles, '<Authorize /> used without a corresponding context. Did you forget to wrap the app with <AuthProvider/>?');
          const missingRoles = getMissingRoles(neededRoles, roles);
          const isAuthorized = !missingRoles.length;
          const hasRole = role => roles.hasOwnProperty(role);
          const lacksRole = role => !hasRole(role);
          return children({
            isAuthorized, missingRoles, lacksRole, hasRole,
          });
        }}
      </Consumer>
    );
  }
}

Authorize.propTypes = {
  children: t.func.isRequired,
  neededRoles: t.arrayOf(t.string).isRequired,
};

export default Authorize;
