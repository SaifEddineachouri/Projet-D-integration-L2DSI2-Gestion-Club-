export class Users {
    public Id: number;
    public name: string;
    public pwd: string;
    public email: string;
    

    constructor(Id: number, name: string,  email:string ,pwd:string) {
        this.Id = Id;
        this.name = name;
        this.pwd = pwd;
        this.email = email;
        
    }
}