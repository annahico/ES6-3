//SIMULAR 
let usersDataSource = [];
class User {
    #id
    #name
    #email
    #password
    #isActive
    #roleId
    static idCounter = 1;

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        this.#name = name;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#name = email;
    }

    get password() {
        return this.#password;
    }

    set password(password) {
        this.#password = password;
    }

    get isActive() {
        return this.isActive;
    }

    set isActive(isActive) {
        this.#isActive = isActive;
    }


    get roleId() {
        return this.roleId;
    }

    set roleId(roleId) {
        this.#roleId = roleId;
    }


    static create(data) {
        const user = { id: User.idCounter++, ...data };
        usersDataSource.push(data);
        return data;
    }

    static find() {
        return usersDataSource;
    }

    static findById(id) {
        return usersDataSource.find((user) => user.id === id);
    }

    static update(id, data) {
        let index = usersDataSource.findIndex((user) => user.id === id);
        if (index !== -1) {
            return users[index] = { ...usersDataSource[index], ...newData };
        } else {
            return null;
        }
    }

    static delete(id) {
        let index = usersDataSource.findIndex((user) => user.id === id);
        if (index !== -1) {
            users.splice(index, 1);
        } else {
            return null;
        }
    }
}

// EJEMPLO DE USO
const adminUser = User.create({
    name: "Administrator",
    email: "admin@ecample",
    password: "admin123",
    isActive: true,
    roleId: 1,
});

const numberOfNewUsers = 10
for (let i = 1; i < numberOfNewUsers; i++) {
    User.create({
        name: `User${i + 1}`,
        email: `user${i + 1}@example`,
        password: "password123",
        isActive: true,
        roleId: 2,
    })
};

// const users = User.find();
// console.log(users);    

// const user = User.findById(4);
// console.log(user);

const deleteResult = User.delete(400);
if (deleteResult == true) {
    console.log("Delete successful");
} else {
    console.log("Failed to delete");
}

// const users = User.find();
// console.log(users); 

const updatedUser = User.update(8, {
    name: "Anna",
    email: "anna@example.com",
});

if (updatedUser) {
    console.log("Updated successfully");
} else {
    console.log("Failed to update");
}

console.log(updatedUser);

// const user = User.findById(80);
// console.log(user);

// const users = User.find();
// console.log(users);




