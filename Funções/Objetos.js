//Se você utilizar as {} elas filtram apenas um aspecto dos dados. Nesse caso a function userId mostra isso.

const user = {
  id: 42,
  displayName: "cvolks",
  fullName: {
    firstName: "Clara",
    lastName: "Volks"
  }
};

function userId({ id }) {
  return id;
}

function getFullName({ fullName: { firstName: first, lastName: last } }) {
  return `${first} ${last}`;
}

userId(user);
//42

getFullName(user);
//Clara Volks
