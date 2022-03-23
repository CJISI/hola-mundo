export class Contact {
    name = '';
    lname = '';
    email = '';
    connected = false

    constructor(name, lname, email, connected){
        this.name = name;
        this.lname = lname;
        this.email = email;
        this.connected = connected;
    }
}