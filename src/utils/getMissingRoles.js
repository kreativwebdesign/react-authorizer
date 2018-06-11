const getMissingRoles = (shouldHave, has) =>
  has ? shouldHave.filter(should => has.indexOf(should) < 0) : shouldHave;
export default getMissingRoles;
