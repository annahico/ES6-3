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
        id: 4,
        name: "User4",
    },
];

// Crear, leer, Modificar y Borrar (CRUD = Create, Read, Update, Delete)  OPERACIONES BÁSICAS

console.log("Usuarios");
console.log(users);

//Crear

let id = 4;
users.push({ id: ++id, name: "User5" });

//Encontrar por ID (LEER)

const user = users.find((user) => user.id === 4); //ID que quiero encontrar
console.log("\nEncontrar por ID"); // |n es salto de linea
console.log(users);

//Modificar por ID

let index = users.findIndex((user) => user.id === 4);
let newData = {
    name: "Carlos",
};
users[index] = { ...users[index], ...newData };

//Borrar ID

index = users.findIndex((user) => user.id === 2);
users.splice(index, 1);


console.log("\nUsuarios");
console.log(users);

