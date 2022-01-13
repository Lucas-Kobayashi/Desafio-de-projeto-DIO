function getAdmins(map) {
  let admins = [];
  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
}

const usuarios = new Map();

usuarios.set("Marcos", "Admin");
usuarios.set("Leticia", "Admin");
usuarios.set("Daphine", "User");
usuarios.set("Beatriz", "User");

console.log(getAdmins(usuarios));
