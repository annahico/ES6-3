let users = [
    {
        id: 1,
        name: "User1",  //esto es un objeto con dos campos
    },
    {
        id: 2,
        name: "User2",
    },
    {
        id: 3,
        name: "User3",
    },
    {
        id: 3,
        name: "User4",
    },
];

// Crear, leer, Modificar y Borrar (CRUD = Create, Read, Update, Delete)  OPERACIONES BÁSICAS

console.log("Usuarios");
console.log(users);

//Crear
let id = 4;
users.push({ id: ++id, name: "User5" });

console.log("Usuarios");
console.log(users);

