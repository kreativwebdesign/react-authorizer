const getMissingRoles = (shouldHave, has) =>
  has
    ? shouldHave
        .map(should => (has.indexOf(should) >= 0 ? undefined : should)) // if role is missing, add it to missing list
        .filter(Boolean) // remove undefined entries
    : shouldHave;
export default getMissingRoles;
