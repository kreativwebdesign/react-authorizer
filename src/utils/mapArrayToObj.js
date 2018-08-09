/* eslint-disable no-param-reassign */
export default arr => arr.reduce((obj, entry) => {
  obj[entry] = true;
  return obj;
}, {});
