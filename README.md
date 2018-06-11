# 💂‍♂️react-auth 💂‍♀️
Basic authorization library for React using the new Context API.

## WIP
This module is no finished yet, things to come:
 - Usage validation
 - Tests
 - Better documentation
 - More examples

## Usage
Wrap your React tree inside the AuthProvider Component and pass your users roles as an Array.
```index.jsx
<AuthProvider roles={[ 'user', 'admin' ]}>
  {/* your react tree*/}
</AuthProvider>
```
And then somewhere inside this tree:
```index.jsx
<Authorize neededRoles={[ 'user', 'admin' ]}>
  {
    ({ isAuthorized, missingRoles, lacksRole }) => {
      if (isAuthorized) {
        return 'Welcome buddy';
      } else if (lacksRole('admin')) {
        return 'Sorry you are not an admin';
      } else {
        return 'You are not authorized too see anything here'
      }
    }
  }
</Authorize>
```
Please reffer to the examples folder too see more :)
