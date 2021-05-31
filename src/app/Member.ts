export class Member {
    public id: number;
    public name: string;
    public dateNaissance:string;
    public password: string;
    public email: string;
    public departement : string;
    public Poste : string;

    constructor(id: number, name: string,dateNaissance:string, password: string, email: string, departement:string ,  Poste: string) {
        this.id = id;
        this.name = name;
        this.dateNaissance = dateNaissance;
        this.password = password;
        this.email = email;
        this.departement = departement;
        this.Poste= Poste;
    }
}