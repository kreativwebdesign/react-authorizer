# 💂‍♂️ react-authorizer 💂‍♀️
Basic library for handling authorization in your React app.

## WIP
This module is not finished yet, so it's not using semantic versioning
Things to watch out for:
 - Better documentation
 - More examples

 ## Out of Scope
  - Authentication

## Usage
Wrap your React tree inside the AuthProvider Component and pass the roles of the active user as an Array.

```index.jsx
<AuthProvider roles={[ 'user', 'admin' ]}>
  {/* your react tree */}
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

## API

### AuthProvider
 - Props:
   - roles: Array<String>

### Authorize
 - Props:
   - neededRoles: Array<String>
   - children: ({ isAuthorized: Boolean, missingRoles: Array<String>, lacksRole: (role: String) => Boolean}) => any

## Examples

See some examples in action on codesandbox [here](https://codesandbox.io/s/ol88mvyy75).

## Development

You must use `yarn` to maintain the project.

### Install
run `yarn install`

### Test
run `yarn run test`

### Build
run `yarn run build`

### Publishing
> Attention! Use with care.

Make a `build` confirm using the `test` that everything is ok
and then

run `yarn publish`
