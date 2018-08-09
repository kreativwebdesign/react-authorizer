import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider, Authorize } from '../src/index';

class SomePage extends React.Component {
  render() {
    return (
      <Authorize neededRoles={SomePage.neededRoles}>
        {({ isAuthorized, missingRoles, lacksRole }) => {
          if (isAuthorized) return 'Welcome my friend';
          if (lacksRole('user')) return "man you're not even an user";
          if (lacksRole('admin')) return 'you should be an admin at least';
          return `you lack multiple rules: ${missingRoles.join(', ')}`;
        }}
      </Authorize>
    );
  }
}
SomePage.neededRoles = ['user', 'admin'];

function App() {
  return (
    <AuthProvider roles={['user', 'admin']}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <SomePage />
    </AuthProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
