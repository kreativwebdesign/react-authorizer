export default roleNames => roles => {
  if (!Array.isArray(roles)) {
    throw new Error(`${roleNames}: ${roles} is not an array`);
  }
};
