import React from 'react';
import t from 'prop-types';
import mapArrayToObj from './utils/mapArrayToObj';
import { Provider } from './AuthContext';

const AuthProvider = (props) => {
  const { children } = props;
  const roles = mapArrayToObj(props.roles);
  return (
    <Provider value={{ roles }}>
      {children}
    </Provider>
  );
};

AuthProvider.propTypes = {
  roles: t.arrayOf(t.string).isRequired,
  children: t.node.isRequired,
};

export default AuthProvider;
