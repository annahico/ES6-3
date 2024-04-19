//SIMULAR 
let usersDataSource = [];
class User {
    #id
    #name
    #email
    #password
    #isActive
    #roleId

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
        user.push(data);
        return data;
    }

    static find() {
        return users;
    }

    static findById(id) {
        return users.find((user) => user.id === id);
    }

    static update(id, data) {
        let index = users.findIndex((user) => user.id === id);
        return users[index] = { ...users[index], ...newData };
    }

    static delete(id) {
        let index = users.findIndex((user) => user.id === id);
        users.splice(index, 1);
    }
}

// EJEMPLO DE USO
const adminUser = User.create({
    id: 1,
    name: "Administrator",
    email: "admin@ecample",
    password: "admin123",
    isActive: true,
    roleId: 1,
});

const users = User.find();
console.log(users);


