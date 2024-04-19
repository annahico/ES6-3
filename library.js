//SIMULAR 

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

    static find(){
        return users;
    }
}

